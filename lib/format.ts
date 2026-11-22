const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const tugrik = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

export function formatUsd(amount: number): string {
  return usd.format(amount);
}

export function formatMnt(amount: number): string {
  const rounded = Math.round(amount / 1000) * 1000;
  return `₮${tugrik.format(rounded)}`;
}
