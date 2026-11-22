"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/catalog";
import { company } from "@/lib/company";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

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
}: {
  defaultSlug?: string;
  presetMessage?: string;
}) {
  const [prepared, setPrepared] = useState<Prepared | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [formKey, setFormKey] = useState(0);
  const [copied, setCopied] = useState(false);

  if (prepared) {
    const subject = `iOne inquiry: ${prepared.system || "general"}`;
    const body = [
      `Name: ${prepared.name}`,
      `Email: ${prepared.email}`,
      `Phone: ${prepared.phone || "Not given"}`,
      `System: ${prepared.system || "Not a specific system"}`,
      "",
      prepared.message,
    ].join("\n");
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
      <div className="rounded-lg border border-[#d5dee6] bg-white p-5" role="status">
        <h2 className="text-xl font-semibold text-[#192a3d]">Inquiry prepared</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#3A4F66]">
          Nothing was sent. This page did not contact a server. Email the summary to{" "}
          {company.email}, or copy it.
        </p>
        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="text-[#3A4F66]">Name</dt>
            <dd className="text-[#192a3d]">{prepared.name}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">Email</dt>
            <dd className="text-[#192a3d]">{prepared.email}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">Phone</dt>
            <dd className="text-[#192a3d]">{prepared.phone || "Not given"}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">System</dt>
            <dd className="text-[#192a3d]">{prepared.system || "Not a specific system"}</dd>
          </div>
          <div>
            <dt className="text-[#3A4F66]">Message</dt>
            <dd className="whitespace-pre-wrap text-[#192a3d]">{prepared.message}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button className="h-10 px-4" nativeButton={false} render={<a href={mailto} />}>
            Email {company.email}
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
            {copied ? "Copied" : "Copy details"}
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
            Start another
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
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter an email address.";
    }
    if (message.length < 8) next.message = "Add a short note about what you want.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const product = PRODUCTS.find((item) => item.slug === slug);
    setPrepared({
      name,
      email,
      phone,
      system: product ? `${product.brand} ${product.model}` : "",
      message,
    });
  }

  return (
    <form
      key={formKey}
      className="space-y-4"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        prepare(event.currentTarget);
      }}
    >
      <div>
        <Label htmlFor="inquiry-name">Name</Label>
        <Input id="inquiry-name" name="name" autoComplete="name" className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "inquiry-name-error" : undefined} />
        {errors.name ? (
          <p id="inquiry-name-error" className="mt-1 text-sm text-[#9f2d2d]">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="inquiry-email">Email</Label>
        <Input id="inquiry-email" name="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "inquiry-email-error" : undefined} />
        {errors.email ? (
          <p id="inquiry-email-error" className="mt-1 text-sm text-[#9f2d2d]">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <Label htmlFor="inquiry-phone">Phone, if you want a call</Label>
        <Input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </div>
      <div>
        <Label htmlFor="inquiry-system">System</Label>
        <select
          id="inquiry-system"
          name="system"
          defaultValue={defaultSlug}
          className="mt-1.5 h-10 w-full rounded-lg border border-input bg-white px-2.5 text-sm text-[#192a3d] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">Not a specific system</option>
          {PRODUCTS.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.brand} {product.model}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="inquiry-message">Message</Label>
        <Textarea
          id="inquiry-message"
          name="message"
          defaultValue={presetMessage}
          className="mt-1.5 min-h-32 bg-white"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "inquiry-message-error" : undefined}
        />
        {errors.message ? (
          <p id="inquiry-message-error" className="mt-1 text-sm text-[#9f2d2d]">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button
        type="button"
        className="h-10 px-4"
        onClick={(event) => {
          const form = event.currentTarget.closest("form");
          if (form) prepare(form);
        }}
      >
        Prepare inquiry
      </Button>
      <p className="text-xs leading-relaxed text-[#3A4F66]">
        Stays in this browser. iOne is not charged and no order is placed.
      </p>
    </form>
  );
}
