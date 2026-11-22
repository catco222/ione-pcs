import Form from "next/form";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { RateNote } from "@/components/rate-note";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BUDGETS,
  CPU_FAMILIES,
  GPU_TIERS,
  PRODUCTS,
  RAM_OPTIONS,
  RESOLUTIONS,
  STORAGE_OPTIONS,
} from "@/lib/catalog";
import {
  SORTS,
  activeFilterCount,
  filterChips,
  type CatalogQuery,
} from "@/lib/query";
import type { Product } from "@/lib/catalog";

const fieldClass = "h-10 bg-white";

function CheckList({
  legend,
  name,
  options,
  selected,
  hint,
}: {
  legend: string;
  name: string;
  options: { value: string; label: string }[];
  selected: string[];
  hint?: string;
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-semibold text-[#192a3d]">{legend}</legend>
      {hint ? <p className="text-xs leading-relaxed text-[#3A4F66]">{hint}</p> : null}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-start gap-2 text-sm text-[#3A4F66]">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              defaultChecked={selected.includes(option.value)}
              className="mt-0.5 size-4 accent-[#2872fa]"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function CatalogBrowser({
  query,
  products,
}: {
  query: CatalogQuery;
  products: Product[];
}) {
  const brands = [...new Set(PRODUCTS.map((product) => product.brand))];
  const chips = filterChips(query);
  const filtersApplied = activeFilterCount(query);
  const queryKey = JSON.stringify(query);

  return (
    <div key={queryKey}>
      <Form action="/gaming-pcs" scroll={false}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <Label htmlFor="catalog-q">Search this list</Label>
            <Input
              id="catalog-q"
              name="q"
              defaultValue={query.q}
              placeholder="Brand, model, GPU, or part"
              className={`mt-1.5 ${fieldClass}`}
            />
          </div>
          <div className="sm:w-56">
            <Label htmlFor="catalog-sort">Sort</Label>
            <select
              id="catalog-sort"
              name="sort"
              defaultValue={query.sort}
              className="mt-1.5 h-10 w-full rounded-lg border border-input bg-white px-2.5 text-sm text-[#192a3d] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {SORTS.map((sort) => (
                <option key={sort.id} value={sort.id}>
                  {sort.label}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className="h-10 px-4">
            Apply
          </Button>
        </div>

        <div className="mt-6 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-8">
          <div className="rounded-lg border border-[#d5dee6] bg-white p-4 lg:border-0 lg:bg-transparent lg:p-0">
            <p className="text-sm font-semibold text-[#192a3d] lg:sr-only">
              Filters{filtersApplied > 0 ? ` (${filtersApplied})` : ""}
            </p>
            <div className="mt-4 space-y-6 lg:mt-0">
              <CheckList
                legend="GPU"
                name="gpu"
                selected={query.gpu}
                options={GPU_TIERS.map((gpu) => ({ value: gpu, label: gpu }))}
              />
              <CheckList
                legend="CPU family"
                name="cpu"
                selected={query.cpu}
                options={CPU_FAMILIES.map((cpu) => ({ value: cpu, label: cpu }))}
              />
              <CheckList
                legend="RAM"
                name="ram"
                selected={query.ram.map(String)}
                options={RAM_OPTIONS.map((ram) => ({ value: String(ram), label: `${ram} GB` }))}
              />
              <CheckList
                legend="Storage"
                name="storage"
                selected={query.storage.map(String)}
                hint="Primary SSD size. A hard drive, when one is listed, is extra."
                options={STORAGE_OPTIONS.map((tb) => ({ value: String(tb), label: `${tb} TB` }))}
              />
              <CheckList
                legend="Target resolution"
                name="resolution"
                selected={query.resolution}
                hint="A shop guide from the GPU class, not a manufacturer rating."
                options={RESOLUTIONS.map((resolution) => ({
                  value: resolution,
                  label: resolution,
                }))}
              />
              <CheckList
                legend="Price in MNT"
                name="budget"
                selected={query.budget}
                hint="Uses the first street price on the card."
                options={BUDGETS.map((band) => ({ value: band.id, label: band.label }))}
              />
              <CheckList
                legend="Brand"
                name="brand"
                selected={query.brand}
                options={brands.map((brand) => ({ value: brand, label: brand }))}
              />
              <fieldset>
                <legend className="text-sm font-semibold text-[#192a3d]">Availability</legend>
                <label className="mt-2 flex items-start gap-2 text-sm text-[#3A4F66]">
                  <input
                    type="checkbox"
                    name="available"
                    value="1"
                    defaultChecked={query.available}
                    className="mt-0.5 size-4 accent-[#2872fa]"
                  />
                  <span>
                    Listed as available
                    <span className="mt-1 block text-xs leading-relaxed">
                      Only where the source said in stock or gave a ship window. “Not stated” stays out.
                    </span>
                  </span>
                </label>
              </fieldset>
              <div className="flex flex-wrap gap-2">
                <Button type="submit" className="h-10 px-4">
                  Apply filters
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 bg-white px-4"
                  nativeButton={false}
                  render={<Link href="/gaming-pcs" />}
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#3A4F66]" aria-live="polite">
              {products.length} of {PRODUCTS.length} systems
              {query.sort === "recommended" ? ". Recommended follows the catalog sequence." : "."}
            </p>
            {chips.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li key={chip.label}>
                    <Link
                      href={chip.href}
                      className="inline-flex items-center rounded-full border border-[#d5dee6] bg-white px-3 py-1 text-xs text-[#192a3d] hover:border-[#2872fa]"
                    >
                      {chip.label}
                      <span className="sr-only">, remove filter</span>
                      <span aria-hidden="true" className="ml-2">
                        ×
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            {products.length === 0 ? (
              <div className="mt-6 rounded-lg border border-dashed border-[#d5dee6] bg-white px-6 py-12 text-center">
                <h2 className="text-lg font-semibold text-[#192a3d]">No systems match these filters</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#3A4F66]">
                  The catalog has {PRODUCTS.length} desktops. Clear a filter or search a GPU name such as 5080.
                </p>
                <Button
                  className="mt-5 h-10 px-4"
                  nativeButton={false}
                  render={<Link href="/gaming-pcs" />}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}
            <div className="mt-6">
              <RateNote />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
