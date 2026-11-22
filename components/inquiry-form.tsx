"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PRODUCTS, estimateMnt, primaryPrice } from "@/lib/catalog";
import { formatMnt, formatUsd } from "@/lib/format";
import type { MessageKey } from "@/lib/i18n";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, MessageKey>>;

const fieldClass = "mt-1.5 h-10 bg-white";

export function InquiryForm({
  defaultSlug = "",
  presetMessage = "",
  order = false,
}: {
  defaultSlug?: string;
  presetMessage?: string;
  order?: boolean;
}) {
  const { t, lang } = useI18n();
  const pathname = usePathname();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const product = PRODUCTS.find((item) => item.slug === defaultSlug);
  const price = product ? primaryPrice(product) : null;
  const preset = order
    ? ""
    : product
      ? t("form.preset", {
          brand: product.brand,
          model: product.model,
          part: product.part ? ` (${product.part})` : "",
          usd: formatUsd(price?.usd ?? 0),
          mnt: formatMnt(estimateMnt(price?.usd ?? 0)),
        })
      : presetMessage;

  if (sent) {
    return (
      <p className="rounded-lg border border-[#d5dee6] bg-white p-5 text-base leading-relaxed text-[#192a3d]" role="status">
        {t("form.thanks")}
      </p>
    );
  }

  async function submit(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const slug = String(data.get("system") ?? "");
    const message = order ? "" : String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "form.errName";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "form.errEmail";
    if (!order && message.length < 8) next.message = "form.errMessage";
    setErrors(next);
    setSendError(false);
    if (Object.keys(next).length > 0) return;

    const chosen = PRODUCTS.find((item) => item.slug === slug);
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          system: chosen ? `${chosen.brand} ${chosen.model}` : "",
          message,
          page: pathname,
        }),
      });
      if (!response.ok) {
        setSendError(true);
        return;
      }
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      key={lang}
      className="space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void submit(event.currentTarget);
      }}
    >
      <div>
        <Label htmlFor="inquiry-name">{t("form.name")}</Label>
        <Input
          id="inquiry-name"
          name="name"
          autoComplete="name"
          className={fieldClass}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "inquiry-name-error" : undefined}
        />
        {errors.name ? (
          <p id="inquiry-name-error" className="mt-1 text-sm text-[#9f2d2d]">
            {t(errors.name)}
          </p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="inquiry-email">{t("form.email")}</Label>
        <Input
          id="inquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClass}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "inquiry-email-error" : undefined}
        />
        {errors.email ? (
          <p id="inquiry-email-error" className="mt-1 text-sm text-[#9f2d2d]">
            {t(errors.email)}
          </p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="inquiry-phone">{order ? t("form.phoneNumber") : t("form.phone")}</Label>
        <Input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </div>
      <div>
        <Label htmlFor="inquiry-system">{t("form.system")}</Label>
        <select
          id="inquiry-system"
          name="system"
          defaultValue={defaultSlug}
          className="mt-1.5 h-10 w-full rounded-lg border border-input bg-white px-2.5 text-sm text-[#192a3d] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">{t("form.systemNone")}</option>
          {PRODUCTS.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.brand} {item.model}
            </option>
          ))}
        </select>
      </div>
      {order ? null : (
        <div>
          <Label htmlFor="inquiry-message">{t("form.message")}</Label>
          <Textarea
            id="inquiry-message"
            name="message"
            defaultValue={preset}
            className="mt-1.5 min-h-32 bg-white"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "inquiry-message-error" : undefined}
          />
          {errors.message ? (
            <p id="inquiry-message-error" className="mt-1 text-sm text-[#9f2d2d]">
              {t(errors.message)}
            </p>
          ) : null}
        </div>
      )}
      <Button type="submit" className="h-10 px-4" disabled={sending}>
        {order ? t("form.order") : t("form.submit")}
      </Button>
      {sendError ? <p className="text-sm text-[#9f2d2d]">{t("form.sendError")}</p> : null}
    </form>
  );
}
