const RECIPIENT = "tenuunrxr@gmail.com";
const DEFAULT_FROM = "iOne <onboarding@resend.dev>";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  system: string;
  message: string;
  page: string;
};

function text(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;
  const body = value as Record<string, unknown>;
  const name = text(body.name, 120);
  const email = text(body.email, 200);
  const page = text(body.page, 200);
  if (name.length < 2) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!page.startsWith("/") || page.startsWith("//")) return null;
  return {
    name,
    email,
    phone: text(body.phone, 40),
    system: text(body.system, 160),
    message: text(body.message, 4000),
    page,
  };
}

function letter(fields: ContactPayload): string {
  const lines = [
    `Page: ${fields.page}`,
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "—"}`,
  ];
  if (fields.system) lines.push(`System: ${fields.system}`);
  if (fields.message) lines.push("", fields.message);
  return lines.join("\n");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  const fields = parsePayload(payload);
  if (!fields) return Response.json({ ok: false }, { status: 400 });

  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return Response.json({ ok: true, sent: false });

  const from = process.env.RESEND_FROM?.trim() || DEFAULT_FROM;
  const subject = fields.system ? `iOne: ${fields.system}` : `iOne contact from ${fields.page}`;
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: fields.email,
        subject,
        text: letter(fields),
      }),
    });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
  if (!response.ok) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true, sent: true });
}
