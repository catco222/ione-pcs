"use client";

import { useState } from "react";
import { useI18n } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PRODUCTS, estimateMnt, primaryPrice } from "@/lib/catalog";
import { company } from "@/lib/company";
import { formatMnt, formatUsd } from "@/lib/format";
import type { MessageKey } from "@/lib/i18n";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, MessageKey>>;

type Prepared = {
  name: string;
  email: string;
  phone: string;
  system: string;
  message: string;
};

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
  const [prepared, setPrepared] = useState<Prepared | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [formKey, setFormKey] = useState(0);
  const [copied, setCopied] = useState(false);
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

  if (prepared) {
    const subject = prepared.system
      ? t("form.subject", { system: prepared.system })
      : t("form.subjectGeneral");
    const body = [
      `${t("form.mailName")}: ${prepared.name}`,
      `${t("form.mailEmail")}: ${prepared.email}`,
      `${t("form.mailPhone")}: ${prepared.phone || t("form.phoneMissing")}`,
      `${t("form.mailSystem")}: ${prepared.system || t("form.systemMissing")}`,
      ...(prepared.message ? ["", prepared.message] : []),
    ].join("\n");
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
      <div className="rounded-lg border border-[#d5dee6] bg-white p-5" role="status">
        <h2 className="text-xl font-semibold text-[#192a3d]">{t("form.ready")}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">
          {t("form.readyBody", { email: company.email })}
        </p>
        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="text-[#3A4F66]">{t("form.name")}</dt>
            <dd className="text-[#192a3d]">{prepared.name}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">{t("form.email")}</dt>
            <dd className="text-[#192a3d]">{prepared.email}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">{t("form.mailPhone")}</dt>
            <dd className="text-[#192a3d]">{prepared.phone || t("form.phoneMissing")}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">{t("form.system")}</dt>
            <dd className="text-[#192a3d]">{prepared.system || t("form.systemMissing")}</dd>
          </div>
          {order ? null : (
            <div>
              <dt className="text-[#3A4F66]">{t("form.message")}</dt>
              <dd className="whitespace-pre-wrap text-[#192a3d]">{prepared.message}</dd>
            </div>
          )}
        </dl>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button className="h-10 px-4" nativeButton={false} render={<a href={mailto} />}>
            {t("form.emailButton", { email: company.email })}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-10 bg-white px-4"
            onClick={() => {
              void navigator.clipboard?.writeText(body).then(
                () => setCopied(true),
                () => setCopied(false),
              );
            }}
          >
            {copied ? t("form.copied") : t("form.copy")}
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-10"
            onClick={() => {
              setPrepared(null);
              setCopied(false);
              setFormKey((key) => key + 1);
            }}
          >
            {t("form.another")}
          </Button>
        </div>
      </div>
    );
  }

  function prepare(form: HTMLFormElement) {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const slug = String(data.get("system") ?? "");
    const message = order ? "" : String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "form.errName";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "form.errEmail";
    }
    if (!order && message.length < 8) next.message = "form.errMessage";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const chosen = PRODUCTS.find((item) => item.slug === slug);
    setPrepared({
      name,
      email,
      phone,
      system: chosen ? `${chosen.brand} ${chosen.model}` : "",
      message,
    });
  }

  return (
    <form
      key={`${formKey}-${lang}`}
      className="space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        prepare(event.currentTarget);
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
      <Button
        type="button"
        className="h-10 px-4"
        onClick={(event) => {
          const form = event.currentTarget.closest("form");
          if (form) prepare(form);
        }}
      >
        {order ? t("form.order") : t("form.submit")}
      </Button>
      {order ? null : <p className="text-xs leading-relaxed text-[#3A4F66]">{t("form.note")}</p>}
    </form>
  );
}
