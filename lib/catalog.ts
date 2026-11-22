import { formatMnt, formatUsd } from "@/lib/format";

export const EXCHANGE = {
  mntPerUsd: 3607,
  asOf: "22 November 2026",
  name: "Bank of Mongolia official USD rate",
  detail:
    "Republished that day by Altan Hurungu. The same 3,607 figure is also shown by DTA.",
  formula:
    "USD price × 3,607, rounded to the nearest tugrik. No VAT, freight, duty, or dealer margin is added.",
} as const;

export function estimateMnt(usd: number): number {
  return Math.round(usd * EXCHANGE.mntPerUsd);
}

export const GPU_TIERS = [
  "RTX 5060",
  "RTX 5060 Ti",
  "RTX 5070",
  "RTX 5070 Ti",
  "RTX 5080",
  "RTX 5090",
] as const;

export type GpuTier = (typeof GPU_TIERS)[number];

export const RESOLUTIONS = ["1080p", "1440p", "4K"] as const;
export type Resolution = (typeof RESOLUTIONS)[number];

/** Shop grouping from the GPU class. Not a manufacturer rating. */
export const RESOLUTION_FOR_GPU: Record<GpuTier, Resolution> = {
  "RTX 5060": "1080p",
  "RTX 5060 Ti": "1440p",
  "RTX 5070": "1440p",
  "RTX 5070 Ti": "1440p",
  "RTX 5080": "4K",
  "RTX 5090": "4K",
};

export const CPU_FAMILIES = [
  "Intel Core Ultra 5",
  "Intel Core Ultra 7",
  "Intel Core Ultra 9",
  "AMD Ryzen 7",
  "AMD Ryzen 9",
] as const;

export const RAM_OPTIONS = [16, 32, 64] as const;
export const STORAGE_OPTIONS = [1, 2, 4] as const;

export const BUDGETS = [
  { id: "under-8m", label: "Under ₮8 million", min: 0, max: 8_000_000 },
  { id: "8-15m", label: "₮8–15 million", min: 8_000_000, max: 15_000_000 },
  {
    id: "15-25m",
    label: "₮15–25 million",
    min: 15_000_000,
    max: 25_000_000,
  },
  {
    id: "over-25m",
    label: "Over ₮25 million",
    min: 25_000_000,
    max: Number.POSITIVE_INFINITY,
  },
] as const;

export type BudgetId = (typeof BUDGETS)[number]["id"];

export type ObservedPrice = {
  usd: number;
  seller: string;
};

export type Product = {
  slug: string;
  brand: string;
  model: string;
  part: string | null;
  cpu: string;
  cpuFamily: (typeof CPU_FAMILIES)[number];
  gpu: string;
  gpuTier: GpuTier;
  vram: string | null;
  ram: string;
  ramGb: (typeof RAM_OPTIONS)[number];
  ramSpeed: string | null;
  storage: string;
  storageTb: (typeof STORAGE_OPTIONS)[number];
  storageType: string;
  extraStorage: string | null;
  os: string | null;
  warranty: string | null;
  caseName: string | null;
  prices: ObservedPrice[];
  compareAt: { usd: number; label: string } | null;
  priceCaution: string | null;
  image: { url: string; credit: string } | null;
  availability: {
    label: string;
    detail: string;
    bucket: "available" | "unavailable" | "unknown";
  };
  included: string[];
  notes: string[];
  sources: { label: string; url: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "cyberpowerpc-gamer-xtreme-gxi2000cstv3",
    brand: "CyberPowerPC",
    model: "Gamer Xtreme GXi2000CSTV3",
    part: "GXi2000CSTV3",
    cpu: "Intel Core Ultra 5 225F, 3.3 GHz, up to 4.9 GHz",
    cpuFamily: "Intel Core Ultra 5",
    gpu: "NVIDIA GeForce RTX 5060",
    gpuTier: "RTX 5060",
    vram: "8 GB",
    ram: "32 GB DDR5-6400",
    ramGb: 32,
    ramSpeed: "DDR5-6400",
    storage: "2 TB PCIe 4.0 NVMe SSD",
    storageTb: 2,
    storageType: "PCIe 4.0 NVMe SSD",
    extraStorage: null,
    os: "Windows 11 Home",
    warranty: null,
    caseName: null,
    prices: [
      {
        usd: 1099.99,
        seller: "Warehouse snapshot, 20 November 2026",
      },
    ],
    compareAt: null,
    priceCaution:
      "The Costco page showed the system as unavailable and did not print a live price. $1,099.99 is a warehouse price snapshot dated 20 November 2026.",
    image: null,
    availability: {
      label: "Unavailable",
      detail: "The Costco page showed this system as unavailable.",
      bucket: "unavailable",
    },
    included: ["Windows 11 Home, as named in the Costco title"],
    notes: [
      "The warehouse snapshot and a Tom’s Hardware test of a Gamer Xtreme at this price name an MSI RTX 5060 Shadow 2X OC.",
      "No product photo was retrieved. Costco returned HTTP 429 to a direct fetch.",
    ],
    sources: [
      {
        label: "Costco item 4000375234",
        url: "https://www.costco.com/p/-/cyberpowerpc-gamer-xtreme-gaming-desktop-intel-core-ultra-5-225f-nvidia-geforce-rtx-5060-windows-11-home-32gb-ram-2tb-ssd/4000375234",
      },
      {
        label: "Warehouse Runner snapshot",
        url: "https://app.warehouserunner.com/costco/1932657-cyberpower-pc-xtreme-gaming-desktop-cu5-32-2-rtx5060",
      },
    ],
  },
  {
    slug: "alienware-aurora-act1250",
    brand: "Alienware",
    model: "Aurora ACT1250",
    part: "ACT1250, offer act1250_so_6",
    cpu: "Intel Core Ultra 7 265F, 20 cores, 1.8 GHz to 5.3 GHz",
    cpuFamily: "Intel Core Ultra 7",
    gpu: "NVIDIA GeForce RTX 5060 Ti",
    gpuTier: "RTX 5060 Ti",
    vram: "16 GB GDDR7",
    ram: "16 GB DDR5, 2×8 GB, up to 5600 MT/s",
    ramGb: 16,
    ramSpeed: "Up to 5600 MT/s",
    storage: "1 TB SSD, Gen4, QLC",
    storageTb: 1,
    storageType: "SSD, Gen4, QLC",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 2129.99, seller: "Dell" }],
    compareAt: null,
    priceCaution:
      "This URL is a configurator. Other Dell presets are separate configurations and are not this price.",
    image: null,
    availability: {
      label: "Sold out",
      detail: "Dell listed this configuration as sold out.",
      bucket: "unavailable",
    },
    included: [],
    notes: [
      "No chassis photo was retrieved. The page metadata image was the Dell logo.",
    ],
    sources: [
      {
        label: "Dell, Alienware Aurora ACT1250",
        url: "https://www.dell.com/en-us/shop/game/new-aurora/spd/alienware-aurora-act1250-gaming-desktop",
      },
    ],
  },
  {
    slug: "asus-rog-g700",
    brand: "ASUS ROG",
    model: "ROG G700",
    part: "Best Buy SKU 12556204",
    cpu: "Intel Core Ultra 7 265KF",
    cpuFamily: "Intel Core Ultra 7",
    gpu: "NVIDIA GeForce RTX 5070",
    gpuTier: "RTX 5070",
    vram: "12 GB",
    ram: "32 GB",
    ramGb: 32,
    ramSpeed: null,
    storage: "2 TB",
    storageTb: 2,
    storageType: "Not stated",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: "Full tower (ASUS ROG G700 family)",
    prices: [
      { usd: 2309, seller: "Best Buy review URL" },
      { usd: 2349.99, seller: "Best Buy review URL, same day" },
    ],
    compareAt: null,
    priceCaution:
      "Two Best Buy review URLs for this title disagreed the same day. The ASUS store price starting at $1,499.99 is a different, lower configuration.",
    image: {
      url: "https://dlcdnwebimgs.asus.com/gain/E62DFAB7-8B91-40EC-9F71-FFBE470AF779",
      credit:
        "Series photo from the ASUS US page, not proven to be the Best Buy SKU.",
    },
    availability: {
      label: "Not stated",
      detail: "The Best Buy pages used for the price did not state stock.",
      bucket: "unknown",
    },
    included: [],
    notes: ["RAM speed was not stated on the Best Buy snippets."],
    sources: [
      {
        label: "Best Buy JJGGLH35S7",
        url: "https://www.bestbuy.com/product/asus-rog-g700-gaming-desktop-intel-core-ultra-7-265kf-2024-32gb-memory-nvidia-geforce-rtx-5070-12gb-2tb-storage-black/JJGGLH35S7/sku/12556204/reviews",
      },
      {
        label: "ASUS ROG G700 spec page",
        url: "https://rog.asus.com/us/desktops/full-tower/rog-g700-2025-g700/spec/",
      },
    ],
  },
  {
    slug: "corsair-vengeance-a7500",
    brand: "Corsair",
    model: "Vengeance a7500",
    part: "CS-9050159-NA",
    cpu: "AMD Ryzen 7 9800X3D",
    cpuFamily: "AMD Ryzen 7",
    gpu: "NVIDIA GeForce RTX 5070 Ti",
    gpuTier: "RTX 5070 Ti",
    vram: null,
    ram: "32 GB (2×16 GB) DDR5",
    ramGb: 32,
    ramSpeed: null,
    storage: "1 TB M.2 SSD",
    storageTb: 1,
    storageType: "M.2 SSD",
    extraStorage: null,
    os: "Windows 11 Home",
    warranty: "2 years, on the Corsair product record",
    caseName: null,
    prices: [{ usd: 2999.99, seller: "Corsair" }],
    compareAt: {
      usd: 3299.99,
      label: "Regular price on the Corsair product record",
    },
    priceCaution: null,
    image: {
      url: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Systems/a7500/CS-9050158-NA/CORSAIR_VENGEANCE_a7500_NON_RGB_MEMORY_RENDER_01.webp",
      credit:
        "Render Corsair serves for this family. The file path is the sibling SKU CS-9050158.",
    },
    availability: {
      label: "In stock",
      detail: "Marked in stock on the Corsair listing.",
      bucket: "available",
    },
    included: ["Windows 11 Home, named on the product"],
    notes: [
      "The Corsair card does not name the board partner or the drive.",
      "RAM speed is not in the Corsair attributes read for this SKU. A review of the series described DDR5-6400 on the unit that was tested. That speed is not listed here as this SKU’s spec.",
    ],
    sources: [
      {
        label: "Corsair product page",
        url: "https://www.corsair.com/us/en/p/gaming-computers/cs-9050159-na/vengeance-a7500-gaming-pc-amd-ryzen-7-9800x3d-geforce-rtx-5070-ti-32gb-ddr5-1tb-m2-ssd-win11-home-cs-9050159-na",
      },
    ],
  },
  {
    slug: "skytech-chronos-3",
    brand: "Skytech Gaming",
    model: "Chronos 3",
    part: "ST-CHRONOS3-1780-W-AL",
    cpu: "Intel Core Ultra 7 265K",
    cpuFamily: "Intel Core Ultra 7",
    gpu: "NVIDIA GeForce RTX 5080",
    gpuTier: "RTX 5080",
    vram: "16 GB",
    ram: "32 GB DDR5-6000 RGB",
    ramGb: 32,
    ramSpeed: "DDR5-6000",
    storage: "2 TB NVMe Gen4",
    storageTb: 2,
    storageType: "NVMe Gen4",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [
      { usd: 2999.99, seller: "Skytech" },
      { usd: 2269.99, seller: "Best Buy" },
    ],
    compareAt: null,
    priceCaution:
      "Skytech’s own offer is $2,999.99. Best Buy listed the same model number at $2,269.99.",
    image: {
      url: "https://skytechai.s3.us-west-002.backblazeb2.com/hv3rogqkyutzisew86kccizjqoc5_Chronos3White360mmAIOPicture1webpwebp.webp",
      credit:
        "Skytech photo. The page says its photos are illustrative and that component brands can vary within the written spec.",
    },
    availability: {
      label: "Out of stock",
      detail:
        "Skytech schema availability is OutOfStock. Best Buy stock was not stated.",
      bucket: "unavailable",
    },
    included: [],
    notes: [],
    sources: [
      {
        label: "Skytech #1780-W",
        url: "https://skytechgaming.com/prebuilt-gaming-pc/st-chronos3-1780-w-al/chronos3/1780-ultra-7-265k-rtx-5080-16gb-32gb-2tb",
      },
      {
        label: "Best Buy J3GW8HK7PC",
        url: "https://www.bestbuy.com/product/skytech-gaming-skytech-chronos3-intel-intel-core-ultra-7-u7-265k-nvidia-geforce-rtx-5080-32gb-6000-mhz-ddr5-ram-850w-gold-a3-psu-white/J3GW8HK7PC",
      },
    ],
  },
  {
    slug: "lenovo-legion-tower-7i-gen-10",
    brand: "Lenovo Legion",
    model: "Legion Tower 7i Gen 10",
    part: "90Y6001JUS",
    cpu: "Intel Core Ultra 7 265K, 20 cores (8P+12E), max turbo up to 5.5 GHz",
    cpuFamily: "Intel Core Ultra 7",
    gpu: "NVIDIA GeForce RTX 5080",
    gpuTier: "RTX 5080",
    vram: "16 GB GDDR7",
    ram: "32 GB, 2×16 GB DDR5-5600",
    ramGb: 32,
    ramSpeed: "DDR5-5600",
    storage: "2×1 TB SSD",
    storageTb: 2,
    storageType: "M.2 2280, PCIe 4.0",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 3599.99, seller: "Lenovo Legion listing" }],
    compareAt: null,
    priceCaution: null,
    image: {
      url: "https://p4-ofp.static.pub//fes/cms/2024/11/27/cun231sexstoo80vhkuzmsoqb9szjt645728.png?width=584&height=584",
      credit: "Image served on the Lenovo product page.",
    },
    availability: {
      label: "Not stated",
      detail: "The Lenovo listing used here did not state stock.",
      bucket: "unknown",
    },
    included: [],
    notes: [
      "Also called Legion T7 34IAS10.",
      "The Lenovo listing showed an estimated value of $4,821.99. That figure is not listed here as a second street price.",
    ],
    sources: [
      {
        label: "Lenovo 90Y6001JUS",
        url: "https://www.lenovo.com/us/en/p/desktops/legion-desktops/legion-t-series-towers/legion-tower-7i-gen-10/90y6001jus",
      },
      {
        label: "Lenovo PSREF single-model export",
        url: "https://psref.lenovo.com/api/model/pdfexport/singleModel?country_code=US&model_code=90Y6001JUS",
      },
    ],
  },
  {
    slug: "msi-aegis-rs2-ai",
    brand: "MSI",
    model: "Aegis RS2 AI",
    part: "A2NVV7-2208US",
    cpu: "Intel Core Ultra 7 270K Plus, 3.7–5.4 GHz",
    cpuFamily: "Intel Core Ultra 7",
    gpu: "NVIDIA GeForce RTX 5080",
    gpuTier: "RTX 5080",
    vram: "16 GB GDDR7",
    ram: "32 GB DDR5",
    ramGb: 32,
    ramSpeed: null,
    storage: "2 TB M.2 NVMe Gen4",
    storageTb: 2,
    storageType: "M.2 NVMe Gen4",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 3599, seller: "MSI US store" }],
    compareAt: {
      usd: 3699,
      label: "Shown as a limited-time cut from this price",
    },
    priceCaution: null,
    image: null,
    availability: {
      label: "In stock",
      detail: "Shown in stock on the MSI US store.",
      bucket: "available",
    },
    included: [],
    notes: [
      "Manufacturer number AeRS2A2NVV72208.",
      "RAM speed was not stated.",
      "No chassis photo was retrieved. The page metadata image was a store promotion banner.",
    ],
    sources: [
      {
        label: "MSI US store",
        url: "https://us-store.msi.com/Aegis-RS2-AI-A2NVV7-2208US",
      },
    ],
  },
  {
    slug: "ibuypower-y40-pro",
    brand: "iBUYPOWER",
    model: "Y40 PRO",
    part: "Y40BA9N5801",
    cpu: "AMD Ryzen 9 9900X",
    cpuFamily: "AMD Ryzen 9",
    gpu: "NVIDIA GeForce RTX 5080",
    gpuTier: "RTX 5080",
    vram: "16 GB",
    ram: "32 GB DDR5 RGB",
    ramGb: 32,
    ramSpeed: null,
    storage: "2 TB NVMe SSD",
    storageTb: 2,
    storageType: "NVMe SSD",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [
      { usd: 3499.99, seller: "Newegg search" },
      { usd: 3399.99, seller: "Newegg search, same day" },
    ],
    compareAt: null,
    priceCaution:
      "A dedicated product URL was not retrieved. These are search-result prices, not a cart price.",
    image: null,
    availability: {
      label: "Not stated",
      detail: "The Newegg search results did not state stock.",
      bucket: "unknown",
    },
    included: [],
    notes: ["RAM speed was not stated on the Newegg titles used. No product photo was retrieved."],
    sources: [
      {
        label: "Newegg, iBUYPOWER and RTX 5080",
        url: "https://www.newegg.com/p/pl?N=100897483+50011210+601468633",
      },
      {
        label: "Newegg search “ibuypower y40”",
        url: "https://www.newegg.com/p/pl?d=ibuypower+y40",
      },
    ],
  },
  {
    slug: "cyberpowerpc-gamer-supreme",
    brand: "CyberPowerPC",
    model: "Gamer Supreme Liquid Cool",
    part: null,
    cpu: "AMD Ryzen 9 9900X3D, 4.4 GHz, 12 cores",
    cpuFamily: "AMD Ryzen 9",
    gpu: "NVIDIA GeForce RTX 5080",
    gpuTier: "RTX 5080",
    vram: "16 GB GDDR7",
    ram: "32 GB DDR5, 6000 MHz",
    ramGb: 32,
    ramSpeed: "6000 MHz",
    storage: "2 TB M.2 NVMe PCIe 4.0 SSD",
    storageTb: 2,
    storageType: "M.2 NVMe PCIe 4.0 SSD",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 3479.99, seller: "B&H category tile" }],
    compareAt: null,
    priceCaution:
      "This is a category tile, not a product-detail page. A model number was not on the listing. The finish on the tile is white.",
    image: null,
    availability: {
      label: "Not stated",
      detail:
        "The B&H category tile did not state stock. Delivery text on that page said Wednesday, 25 November.",
      bucket: "unknown",
    },
    included: [],
    notes: ["No product photo was retrieved."],
    sources: [
      {
        label: "B&H RTX 5080 desktops",
        url: "https://www.bhphotovideo.com/c/buy/rtx-5080-desktops/ci/60292",
      },
    ],
  },
  {
    slug: "hp-omen-45l-gt22-3090",
    brand: "HP OMEN",
    model: "OMEN 45L GT22-3090",
    part: "GT22-3090",
    cpu: "Intel Core Ultra 9 285K",
    cpuFamily: "Intel Core Ultra 9",
    gpu: "NVIDIA GeForce RTX 5090",
    gpuTier: "RTX 5090",
    vram: "32 GB GDDR7",
    ram: "64 GB DDR5",
    ramGb: 64,
    ramSpeed: null,
    storage: "2 TB SSD",
    storageTb: 2,
    storageType: "SSD",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [
      { usd: 4279.99, seller: "Best Buy filtered results" },
      { usd: 4499.99, seller: "Best Buy reviews URL, SKU 10732463" },
      { usd: 4319.99, seller: "Best Buy open-box" },
    ],
    compareAt: null,
    priceCaution:
      "No single live new price. Best Buy said this desktop is no longer available new. The three figures were observed the same day.",
    image: null,
    availability: {
      label: "Not sold new",
      detail: "Best Buy said it is no longer available new.",
      bucket: "unavailable",
    },
    included: [],
    notes: ["RAM speed was not stated. No product photo was retrieved."],
    sources: [
      {
        label: "Best Buy product JJGQJQVXTT",
        url: "https://www.bestbuy.com/product/omen-by-hp-45l-gaming-desktop-gt22-3090-intel-ultra-9-285k-64gb-ddr5-2tb-ssd-geforce-rtx-5090-32gb-gddr7-black/JJGQJQVXTT",
      },
      {
        label: "Best Buy open-box",
        url: "https://www.bestbuy.com/product/omen-by-hp-45l-gaming-desktop-gt22-3090-intel-ultra-9-285k-64gb-ddr5-2tb-ssd-geforce-rtx-5090-32gb-gddr7-black/6630619/openbox",
      },
    ],
  },
  {
    slug: "hp-omen-max",
    brand: "HP OMEN",
    model: "OMEN MAX",
    part: "Best Buy SKU 12532507",
    cpu: "AMD Ryzen 9 9900X3D",
    cpuFamily: "AMD Ryzen 9",
    gpu: "NVIDIA GeForce RTX 5090",
    gpuTier: "RTX 5090",
    vram: null,
    ram: "32 GB",
    ramGb: 32,
    ramSpeed: null,
    storage: "1 TB SSD",
    storageTb: 1,
    storageType: "SSD",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 5299, seller: "Best Buy" }],
    compareAt: null,
    priceCaution: null,
    image: null,
    availability: {
      label: "Not stated",
      detail: "The Best Buy listing did not state stock in the fetch.",
      bucket: "unknown",
    },
    included: ["Wi-Fi 7", "Hver Stealth gaming keyboard, named on the listing"],
    notes: [
      "A manufacturer model code was not in the fetch.",
      "VRAM size was not stated. RAM type and speed were not stated.",
      "UPC on that page: 0810215807925.",
      "No product photo was retrieved. The fetch timed out before a photo URL could be read.",
    ],
    sources: [
      {
        label: "Best Buy SKU 12532507",
        url: "https://www.bestbuy.com/product/hp-omen-max-desktop-amd-ryzen-9-9900x3d-32gb-ram-1tb-ssd-nvidia-geforce-rtx-5090-wi-fi-7-hver-stealth-gaming-keyboard-black/J3GWHCSTT7/sku/12532507",
      },
    ],
  },
  {
    slug: "clx-set",
    brand: "CLX",
    model: "SET Gaming Desktop",
    part: null,
    cpu: "Intel Core Ultra 9 285K",
    cpuFamily: "Intel Core Ultra 9",
    gpu: "NVIDIA GeForce RTX 5090",
    gpuTier: "RTX 5090",
    vram: null,
    ram: "64 GB DDR5-5600",
    ramGb: 64,
    ramSpeed: "DDR5-5600",
    storage: "2 TB NVMe M.2 SSD",
    storageTb: 2,
    storageType: "NVMe M.2 SSD",
    extraStorage: "4 TB hard drive",
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 5799.99, seller: "Best Buy search tile" }],
    compareAt: null,
    priceCaution:
      "This is a search result, not a product-detail page. A model number was not on the tile. The tile said it was not yet reviewed.",
    image: null,
    availability: {
      label: "Not stated",
      detail: "The Best Buy search tile did not state stock.",
      bucket: "unknown",
    },
    included: [],
    notes: ["VRAM size was not stated on the tile. No product photo was retrieved."],
    sources: [
      {
        label: "Best Buy gaming-desktop search",
        url: "https://www.bestbuy.com/site/searchpage.jsp?browsedCategory=pcmcat287600050002&id=pcat17071&qp=systemmemoryram_facet%3DRAM%7E64+gigabytes%5Etotalstoragecapacityrange_facet%3DTotal+Storage+Capacity%7E2+TB+and+up&st=categoryid%24pcmcat287600050002",
      },
    ],
  },
  {
    slug: "maingear-mg-1-90-class",
    brand: "MAINGEAR",
    model: "MG-1 90-Class",
    part: null,
    cpu: "AMD Ryzen 7 9850X3D",
    cpuFamily: "AMD Ryzen 7",
    gpu: "NVIDIA GeForce RTX 5090 Founders Edition",
    gpuTier: "RTX 5090",
    vram: "32 GB GDDR7",
    ram: "32 GB RGB DDR5-6000 (2×16 GB)",
    ramGb: 32,
    ramSpeed: "DDR5-6000",
    storage: "2 TB Kingston KC3000 PCIe 4.0 NVMe",
    storageTb: 2,
    storageType: "PCIe 4.0 NVMe",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: "MG-1 MK.I",
    prices: [{ usd: 7999, seller: "MAINGEAR" }],
    compareAt: null,
    priceCaution: null,
    image: {
      url: "https://maingear.com/cdn/shop/files/Mg-1_mk1_BlackFriday_90_Hero_1000.webp?v=1795017213",
      credit: "Photo on the MAINGEAR product page.",
    },
    availability: {
      label: "Ships in 2 business days",
      detail:
        "MAINGEAR’s page said it ships in 2 business days, one per customer, components while supplies last.",
      bucket: "available",
    },
    included: [],
    notes: ["Limited run."],
    sources: [
      {
        label: "MAINGEAR MG-1 90-Class",
        url: "https://maingear.com/products/90-class",
      },
    ],
  },
  {
    slug: "maingear-mg-1-ultimate",
    brand: "MAINGEAR",
    model: "MG-1 Ultimate",
    part: null,
    cpu: "AMD Ryzen 9 9950X3D2",
    cpuFamily: "AMD Ryzen 9",
    gpu: "NVIDIA GeForce RTX 5090",
    gpuTier: "RTX 5090",
    vram: "32 GB GDDR7",
    ram: "64 GB RGB DDR5-6000 (2×32 GB)",
    ramGb: 64,
    ramSpeed: "DDR5-6000",
    storage: "4 TB Gen4 NVMe",
    storageTb: 4,
    storageType: "Gen4 NVMe",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: "MG-1 MK.II",
    prices: [{ usd: 9999, seller: "MAINGEAR" }],
    compareAt: null,
    priceCaution: null,
    image: {
      url: "https://maingear.com/cdn/shop/files/MG-1_MKII_AMD-Ultimate_Hero_1000.webp?v=1792521521",
      credit: "Photo on the MAINGEAR product page.",
    },
    availability: {
      label: "Not stated",
      detail: "The MAINGEAR page used here did not state stock.",
      bucket: "unknown",
    },
    included: [],
    notes: [
      "The RTX 5090 collection page says 32 GB GDDR7 for MAINGEAR’s RTX 5090 builds. The product page heading says RTX 5090 and does not repeat the VRAM figure in the short spec list.",
    ],
    sources: [
      {
        label: "MAINGEAR MG-1 Ultimate",
        url: "https://maingear.com/products/new-mg-1-ultimate",
      },
      {
        label: "MAINGEAR RTX 5090 collection",
        url: "https://maingear.com/collections/maingear-rtx-5090-pcs",
      },
    ],
  },
  {
    slug: "alienware-aurora-rtx-5090",
    brand: "Alienware",
    model: "Aurora RTX 5090 preset",
    part: null,
    cpu: "Intel Core Ultra 9 285K, 24 cores",
    cpuFamily: "Intel Core Ultra 9",
    gpu: "NVIDIA GeForce RTX 5090",
    gpuTier: "RTX 5090",
    vram: null,
    ram: "32 GB DDR5",
    ramGb: 32,
    ramSpeed: null,
    storage: "2 TB SSD, TLC",
    storageTb: 2,
    storageType: "SSD, TLC",
    extraStorage: null,
    os: null,
    warranty: null,
    caseName: null,
    prices: [{ usd: 10499.99, seller: "Dell category tile" }],
    compareAt: null,
    priceCaution:
      "An order code was not in the category snippet. This is not the ACT1250 configuration. Category prices on Dell change with the configurator. The tile also showed an estimated value of $11,499.99, which is not listed here as a second street price.",
    image: null,
    availability: {
      label: "Not stated",
      detail: "The Dell category tile did not state stock.",
      bucket: "unknown",
    },
    included: [],
    notes: [
      "A second Aurora preset on the same page, with a Ryzen 9 9950X3D2, had no price in the text that was captured, so it is not listed.",
      "No product photo was retrieved.",
    ],
    sources: [
      {
        label: "Dell RTX 5090 gaming desktops",
        url: "https://www.dell.com/en-us/shop/desktop-computers/scr/desktop/gaming/appref=geforce-rtx-5090-graphics-card",
      },
    ],
  },
];

const ORDER = new Map(PRODUCTS.map((product, index) => [product.slug, index]));

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function resolutionOf(product: Product): Resolution {
  return RESOLUTION_FOR_GPU[product.gpuTier];
}

export function primaryPrice(product: Product): ObservedPrice {
  return product.prices[0];
}

export function gpuLine(product: Product): string {
  if (!product.vram) return product.gpu;
  return `${product.gpu}, ${product.vram}`;
}

export function similarProducts(product: Product, count = 3): Product[] {
  const rest = PRODUCTS.filter((item) => item.slug !== product.slug);
  const sameGpu = rest.filter((item) => item.gpuTier === product.gpuTier);
  const sameResolution = rest.filter(
    (item) =>
      item.gpuTier !== product.gpuTier &&
      resolutionOf(item) === resolutionOf(product),
  );
  const nearest = [...rest].sort(
    (a, b) =>
      Math.abs(primaryPrice(a).usd - primaryPrice(product).usd) -
      Math.abs(primaryPrice(b).usd - primaryPrice(product).usd),
  );
  const picked: Product[] = [];
  for (const group of [sameGpu, sameResolution, nearest]) {
    for (const item of group) {
      if (picked.length >= count) return picked;
      if (!picked.some((chosen) => chosen.slug === item.slug)) picked.push(item);
    }
  }
  return picked;
}

export type SpecRow = { label: string; value: string };

export function specRows(product: Product): SpecRow[] {
  const priceLines = product.prices
    .map(
      (price) =>
        `${formatUsd(price.usd)} · est. ${formatMnt(estimateMnt(price.usd))} · ${price.seller}`,
    )
    .join("\n");
  const mntLines = product.prices
    .map(
      (price) =>
        `${formatMnt(estimateMnt(price.usd))} at ${formatUsd(price.usd)}`,
    )
    .join("\n");

  return [
    { label: "Shop guide", value: resolutionOf(product) },
    { label: "Availability", value: product.availability.detail },
    { label: "Case", value: product.caseName ?? "Not stated" },
    { label: "Processor", value: product.cpu },
    { label: "Graphics", value: product.gpu },
    { label: "VRAM", value: product.vram ?? "Not stated" },
    { label: "Installed RAM", value: product.ram },
    { label: "RAM speed", value: product.ramSpeed ?? "Not stated" },
    { label: "Storage", value: product.storage },
    { label: "Storage type", value: product.storageType },
    { label: "Additional storage", value: product.extraStorage ?? "Not stated" },
    { label: "Operating system", value: product.os ?? "Not stated" },
    { label: "Warranty", value: product.warranty ?? "Not stated" },
    { label: "Street price (USD)", value: priceLines },
    { label: "Estimated MNT", value: mntLines },
  ];
}

export function catalogIndex(product: Product): number {
  return ORDER.get(product.slug) ?? 0;
}
