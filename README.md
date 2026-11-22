# iOne

Public site for [iOne](https://ione.mn): IT services, EMV smart cards, consulting, and a catalog of gaming desktops.

Street prices are estimates taken from public listings on 22 November 2026. The tugrik column uses 3,607 MNT per 1 USD, the Bank of Mongolia official rate republished that day. It is not an iOne quote, and it does not include VAT, freight, duty, or a dealer margin. The inquiry form stays in the browser. There is no checkout and no account.

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
