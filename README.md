# iOne

Public site for [iOne](https://ione.mn): IT services, EMV smart cards, consulting, and a catalog of gaming desktops.

Street prices are estimates taken from public listings on 22 November 2026. The tugrik column uses 3,607 MNT per 1 USD, the Bank of Mongolia official rate republished that day. It is not an iOne quote, and it does not include VAT, freight, duty, or a dealer margin. There is no checkout and no account.

Order and Contact us post to `/api/contact`, which emails the form to tenuunrxr@gmail.com through [Resend](https://resend.com). Set `RESEND_API_KEY` in the environment. Do not commit the key. If the key is missing, the form still shows the thank-you message and nothing is sent. `RESEND_FROM` is optional; without it the sender is `iOne <onboarding@resend.dev>`, which Resend delivers only to the address that owns the key.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on port 3847.

Open [http://localhost:3847](http://localhost:3847).

## Routes

- `/` — home
- `/gaming-pcs` — filterable catalog
- `/gaming-pcs/[slug]` — one system
- `/compare` — up to three systems
- `/services`
- `/services/it`
- `/services/smart-cards`
- `/services/consulting`
- `/about`
- `/contact`
