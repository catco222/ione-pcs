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
  return `₮${tugrik.format(amount)}`;
}
