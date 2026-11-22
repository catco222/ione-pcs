"use client";

import Form from "next/form";
import Link from "next/link";
import { useI18n } from "@/components/language-provider";
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
  const { t, phrase } = useI18n();
  const brands = [...new Set(PRODUCTS.map((product) => product.brand))];
  const chips = filterChips(query);
  const filtersApplied = activeFilterCount(query);
  const queryKey = JSON.stringify(query);

  function chipText(label: string): string {
    if (label.startsWith("Search: ")) return t("chip.search", { q: label.slice("Search: ".length) });
    if (label.endsWith(" GB RAM")) return t("chip.ram", { n: label.replace(" GB RAM", "") });
    if (label.endsWith(" TB SSD")) return t("chip.ssd", { n: label.replace(" TB SSD", "") });
    return phrase(label);
  }

  return (
    <div key={queryKey}>
      <Form action="/gaming-pcs" scroll={false}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <Label htmlFor="catalog-q">{t("catalog.search")}</Label>
            <Input
              id="catalog-q"
              name="q"
              defaultValue={query.q}
              placeholder={t("catalog.searchPlaceholder")}
              className={`mt-1.5 ${fieldClass}`}
            />
          </div>
          <div className="sm:w-56">
            <Label htmlFor="catalog-sort">{t("catalog.sort")}</Label>
            <select
              id="catalog-sort"
              name="sort"
              defaultValue={query.sort}
              className="mt-1.5 h-10 w-full rounded-lg border border-input bg-white px-2.5 text-sm text-[#192a3d] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {SORTS.map((sort) => (
                <option key={sort.id} value={sort.id}>
                  {t(
                    sort.id === "price-asc"
                      ? "sort.priceAsc"
                      : sort.id === "price-desc"
                        ? "sort.priceDesc"
                        : sort.id === "gpu"
                          ? "sort.gpu"
                          : "sort.recommended",
                  )}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className="h-10 px-4">
            {t("catalog.apply")}
          </Button>
        </div>

        <div className="mt-6 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-8">
          <div className="rounded-lg border border-[#d5dee6] bg-white p-4 lg:border-0 lg:bg-transparent lg:p-0">
            <p className="text-sm font-semibold text-[#192a3d] lg:sr-only">
              {t("catalog.filters")}
              {filtersApplied > 0 ? ` (${filtersApplied})` : ""}
            </p>
            <div className="mt-4 space-y-6 lg:mt-0">
              <CheckList
                legend={t("catalog.gpu")}
                name="gpu"
                selected={query.gpu}
                options={GPU_TIERS.map((gpu) => ({ value: gpu, label: gpu }))}
              />
              <CheckList
                legend={t("catalog.cpu")}
                name="cpu"
                selected={query.cpu}
                options={CPU_FAMILIES.map((cpu) => ({ value: cpu, label: cpu }))}
              />
              <CheckList
                legend={t("catalog.ram")}
                name="ram"
                selected={query.ram.map(String)}
                options={RAM_OPTIONS.map((ram) => ({ value: String(ram), label: `${ram} GB` }))}
              />
              <CheckList
                legend={t("catalog.storage")}
                name="storage"
                selected={query.storage.map(String)}
                hint={t("catalog.storageHint")}
                options={STORAGE_OPTIONS.map((tb) => ({ value: String(tb), label: `${tb} TB` }))}
              />
              <CheckList
                legend={t("catalog.target")}
                name="resolution"
                selected={query.resolution}
                hint={t("catalog.targetHint")}
                options={RESOLUTIONS.map((resolution) => ({
                  value: resolution,
                  label: resolution,
                }))}
              />
              <CheckList
                legend={t("catalog.price")}
                name="budget"
                selected={query.budget}
                hint={t("catalog.priceHint")}
                options={BUDGETS.map((band) => ({ value: band.id, label: phrase(band.label) }))}
              />
              <CheckList
                legend={t("catalog.brand")}
                name="brand"
                selected={query.brand}
                options={brands.map((brand) => ({ value: brand, label: brand }))}
              />
              <fieldset>
                <legend className="text-sm font-semibold text-[#192a3d]">{t("catalog.availability")}</legend>
                <label className="mt-2 flex items-start gap-2 text-sm text-[#3A4F66]">
                  <input
                    type="checkbox"
                    name="available"
                    value="1"
                    defaultChecked={query.available}
                    className="mt-0.5 size-4 accent-[#2872fa]"
                  />
                  <span>
                    {t("catalog.available")}
                    <span className="mt-1 block text-xs leading-relaxed">
                      {t("catalog.availableHint")}
                    </span>
                  </span>
                </label>
              </fieldset>
              <div className="flex flex-wrap gap-2">
                <Button type="submit" className="h-10 px-4">
                  {t("catalog.applyFilters")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 bg-white px-4"
                  nativeButton={false}
                  render={<Link href="/gaming-pcs" />}
                >
                  {t("catalog.clear")}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-[#3A4F66]" aria-live="polite">
              {query.sort === "recommended"
                ? t("catalog.countRecommended", { shown: products.length, total: PRODUCTS.length })
                : t("catalog.count", { shown: products.length, total: PRODUCTS.length })}
            </p>
            {chips.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li key={chip.label}>
                    <Link
                      href={chip.href}
                      className="inline-flex items-center rounded-full border border-[#d5dee6] bg-white px-3 py-1 text-xs text-[#192a3d] hover:border-[#2872fa]"
                    >
                      {chipText(chip.label)}
                      <span className="sr-only">{t("catalog.remove")}</span>
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
                <h2 className="text-lg font-semibold text-[#192a3d]">{t("catalog.emptyTitle")}</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#3A4F66]">
                  {t("catalog.emptyBody", { count: PRODUCTS.length })}
                </p>
                <Button
                  className="mt-5 h-10 px-4"
                  nativeButton={false}
                  render={<Link href="/gaming-pcs" />}
                >
                  {t("catalog.clearFilters")}
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
