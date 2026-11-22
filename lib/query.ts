import {
  BUDGETS,
  CPU_FAMILIES,
  GPU_TIERS,
  PRODUCTS,
  RAM_OPTIONS,
  RESOLUTIONS,
  STORAGE_OPTIONS,
  catalogIndex,
  estimateMnt,
  primaryPrice,
  resolutionOf,
  type BudgetId,
  type GpuTier,
  type Product,
  type Resolution,
} from "@/lib/catalog";

export const SORTS = [
  { id: "recommended", label: "Recommended" },
  { id: "price-asc", label: "Price, low to high" },
  { id: "price-desc", label: "Price, high to low" },
  { id: "gpu", label: "GPU tier, high to low" },
] as const;

export type SortKey = (typeof SORTS)[number]["id"];

export type CatalogQuery = {
  q: string;
  gpu: GpuTier[];
  cpu: string[];
  ram: number[];
  storage: number[];
  resolution: Resolution[];
  budget: BudgetId[];
  brand: string[];
  available: boolean;
  sort: SortKey;
};

type SearchParam = string | string[] | undefined;

function many(value: SearchParam): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function first(value: SearchParam): string {
  const values = many(value);
  return values[0] ?? "";
}

const GPU_SET = new Set<string>(GPU_TIERS);
const CPU_SET = new Set<string>(CPU_FAMILIES);
const RESOLUTION_SET = new Set<string>(RESOLUTIONS);
const BUDGET_SET = new Set<string>(BUDGETS.map((band) => band.id));
const BRAND_SET = new Set(PRODUCTS.map((product) => product.brand));
const SORT_SET = new Set<string>(SORTS.map((sort) => sort.id));

export function parseCatalogQuery(searchParams: {
  [key: string]: SearchParam;
}): CatalogQuery {
  const sort = first(searchParams.sort);
  return {
    q: first(searchParams.q).trim(),
    gpu: many(searchParams.gpu).filter((value): value is GpuTier =>
      GPU_SET.has(value),
    ),
    cpu: many(searchParams.cpu).filter((value) => CPU_SET.has(value)),
    ram: many(searchParams.ram)
      .map((value) => Number(value))
      .filter((value): value is (typeof RAM_OPTIONS)[number] =>
        (RAM_OPTIONS as readonly number[]).includes(value),
      ),
    storage: many(searchParams.storage)
      .map((value) => Number(value))
      .filter((value): value is (typeof STORAGE_OPTIONS)[number] =>
        (STORAGE_OPTIONS as readonly number[]).includes(value),
      ),
    resolution: many(searchParams.resolution).filter(
      (value): value is Resolution => RESOLUTION_SET.has(value),
    ),
    budget: many(searchParams.budget).filter((value): value is BudgetId =>
      BUDGET_SET.has(value),
    ),
    brand: many(searchParams.brand).filter((value) => BRAND_SET.has(value)),
    available: many(searchParams.available).includes("1"),
    sort: SORT_SET.has(sort) ? (sort as SortKey) : "recommended",
  };
}

export function filterProducts(
  products: Product[],
  query: CatalogQuery,
): Product[] {
  const needle = query.q.toLowerCase();
  const matched = products.filter((product) => {
    if (needle) {
      const haystack = [product.brand, product.model, product.part ?? "", product.cpu, product.gpu]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    if (query.gpu.length > 0 && !query.gpu.includes(product.gpuTier)) return false;
    if (query.cpu.length > 0 && !query.cpu.includes(product.cpuFamily)) return false;
    if (query.ram.length > 0 && !query.ram.includes(product.ramGb)) return false;
    if (query.storage.length > 0 && !query.storage.includes(product.storageTb)) {
      return false;
    }
    if (
      query.resolution.length > 0 &&
      !query.resolution.includes(resolutionOf(product))
    ) {
      return false;
    }
    if (query.brand.length > 0 && !query.brand.includes(product.brand)) return false;
    if (query.available && product.availability.bucket !== "available") return false;
    if (query.budget.length > 0) {
      const mnt = estimateMnt(primaryPrice(product).usd);
      const inBand = query.budget.some((id) => {
        const band = BUDGETS.find((item) => item.id === id);
        return band ? mnt >= band.min && mnt < band.max : false;
      });
      if (!inBand) return false;
    }
    return true;
  });

  return matched.sort((a, b) => {
    if (query.sort === "price-asc") {
      return primaryPrice(a).usd - primaryPrice(b).usd || catalogIndex(a) - catalogIndex(b);
    }
    if (query.sort === "price-desc") {
      return primaryPrice(b).usd - primaryPrice(a).usd || catalogIndex(a) - catalogIndex(b);
    }
    if (query.sort === "gpu") {
      return (
        GPU_TIERS.indexOf(b.gpuTier) - GPU_TIERS.indexOf(a.gpuTier) ||
        primaryPrice(a).usd - primaryPrice(b).usd
      );
    }
    return catalogIndex(a) - catalogIndex(b);
  });
}

export function catalogHref(query: CatalogQuery): string {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  for (const value of query.gpu) params.append("gpu", value);
  for (const value of query.cpu) params.append("cpu", value);
  for (const value of query.ram) params.append("ram", String(value));
  for (const value of query.storage) params.append("storage", String(value));
  for (const value of query.resolution) params.append("resolution", value);
  for (const value of query.budget) params.append("budget", value);
  for (const value of query.brand) params.append("brand", value);
  if (query.available) params.set("available", "1");
  if (query.sort !== "recommended") params.set("sort", query.sort);
  const search = params.toString();
  return search ? `/?${search}` : "/";
}

export function emptyQuery(): CatalogQuery {
  return {
    q: "",
    gpu: [],
    cpu: [],
    ram: [],
    storage: [],
    resolution: [],
    budget: [],
    brand: [],
    available: false,
    sort: "recommended",
  };
}

export function activeFilterCount(query: CatalogQuery): number {
  return (
    (query.q ? 1 : 0) +
    query.gpu.length +
    query.cpu.length +
    query.ram.length +
    query.storage.length +
    query.resolution.length +
    query.budget.length +
    query.brand.length +
    (query.available ? 1 : 0)
  );
}

export type FilterChip = { label: string; href: string };

export function filterChips(query: CatalogQuery): FilterChip[] {
  const chips: FilterChip[] = [];
  if (query.q) {
    chips.push({
      label: `Search: ${query.q}`,
      href: catalogHref({ ...query, q: "" }),
    });
  }
  for (const gpu of query.gpu) {
    chips.push({
      label: gpu,
      href: catalogHref({ ...query, gpu: query.gpu.filter((item) => item !== gpu) }),
    });
  }
  for (const cpu of query.cpu) {
    chips.push({
      label: cpu,
      href: catalogHref({ ...query, cpu: query.cpu.filter((item) => item !== cpu) }),
    });
  }
  for (const ram of query.ram) {
    chips.push({
      label: `${ram} GB RAM`,
      href: catalogHref({ ...query, ram: query.ram.filter((item) => item !== ram) }),
    });
  }
  for (const storage of query.storage) {
    chips.push({
      label: `${storage} TB SSD`,
      href: catalogHref({
        ...query,
        storage: query.storage.filter((item) => item !== storage),
      }),
    });
  }
  for (const resolution of query.resolution) {
    chips.push({
      label: resolution,
      href: catalogHref({
        ...query,
        resolution: query.resolution.filter((item) => item !== resolution),
      }),
    });
  }
  for (const budget of query.budget) {
    const band = BUDGETS.find((item) => item.id === budget);
    chips.push({
      label: band?.label ?? budget,
      href: catalogHref({
        ...query,
        budget: query.budget.filter((item) => item !== budget),
      }),
    });
  }
  for (const brand of query.brand) {
    chips.push({
      label: brand,
      href: catalogHref({
        ...query,
        brand: query.brand.filter((item) => item !== brand),
      }),
    });
  }
  if (query.available) {
    chips.push({
      label: "Listed as available",
      href: catalogHref({ ...query, available: false }),
    });
  }
  return chips;
}
