export type Lang = "en" | "mn";

export const LANG_KEY = "ione-lang";

const en = {
  "nav.gaming": "Gaming PCs",
  "nav.compare": "Compare",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.compareCount": "Compare ({count})",
  "nav.skip": "Skip to content",
  "nav.home": "iOne home",
  "nav.primary": "Primary",
  "nav.footer": "Footer",
  "nav.mobile": "Mobile",
  "nav.menu": "Menu",
  "nav.open": "Open menu",
  "lang.group": "Language",
  "lang.en": "English",
  "lang.mn": "Mongolian",
  "hero.title": "Gaming desktops",
  "hero.lede":
    "iOne offers the widest range for gamers, from the most powerful gaming PCs to budget-friendly ones.",
  "hero.browse": "Browse gaming PCs",
  "hero.compare": "Compare",
  "home.gpu": "GPU",
  "home.budget": "Budget in MNT",
  "home.brand": "Brand",
  "home.across": "Across the catalog",
  "home.all": "All {count}",
  "home.shopNote":
    "Shop guide on the cards ({bands} and the rest of the range) is grouped from the GPU class. It is not a manufacturer rating.",
  "home.services": "Services",
  "home.smartCards": "Smart card solutions",
  "catalog.eyebrow": "Catalog",
  "catalog.title": "Gaming PCs",
  "catalog.lede":
    "Prebuilt towers from public listings. Filter by GPU, processor, memory, storage, a resolution band, a tugrik budget, or brand. Prices are estimates, and several sources disagreed or were out of stock on the day they were read.",
  "catalog.resolution": "Resolution band",
  "catalog.brand": "Brand",
  "catalog.oneSystem": "{count} system",
  "catalog.manySystems": "{count} systems",
  "catalog.search": "Search this list",
  "catalog.searchPlaceholder": "Brand, model, GPU, or part",
  "catalog.sort": "Sort",
  "catalog.apply": "Apply",
  "catalog.filters": "Filters",
  "catalog.gpu": "GPU",
  "catalog.cpu": "CPU family",
  "catalog.ram": "RAM",
  "catalog.storage": "Storage",
  "catalog.storageHint": "Primary SSD size. A hard drive, when one is listed, is extra.",
  "catalog.target": "Target resolution",
  "catalog.targetHint": "A shop guide from the GPU class, not a manufacturer rating.",
  "catalog.price": "Price in MNT",
  "catalog.priceHint": "Uses the first street price on the card.",
  "catalog.availability": "Availability",
  "catalog.available": "Listed as available",
  "catalog.availableHint":
    "Only where the source said in stock or gave a ship window. “Not stated” stays out.",
  "catalog.applyFilters": "Apply filters",
  "catalog.clear": "Clear",
  "catalog.count": "{shown} of {total} systems.",
  "catalog.countRecommended":
    "{shown} of {total} systems. Recommended follows the catalog sequence.",
  "catalog.remove": ", remove filter",
  "catalog.emptyTitle": "No systems match these filters",
  "catalog.emptyBody":
    "The catalog has {count} desktops. Clear a filter or search a GPU name such as 5080.",
  "catalog.clearFilters": "Clear filters",
  "sort.recommended": "Recommended",
  "sort.priceAsc": "Price, low to high",
  "sort.priceDesc": "Price, high to low",
  "sort.gpu": "GPU tier, high to low",
  "chip.search": "Search: {q}",
  "chip.ram": "{n} GB RAM",
  "chip.ssd": "{n} TB SSD",
  "card.shop": "Shop guide: {value}",
  "card.cpu": "CPU",
  "card.ram": "RAM",
  "card.storage": "Storage",
  "card.compare": "Compare",
  "card.compareFull": "Compare list is full ({count})",
  "card.compareFullAria": "Compare list is full at {count}",
  "price.estimate": "Estimate",
  "price.est": "Est. {amount}",
  "price.also": "Also {usd} at {seller} (est. {mnt})",
  "price.notQuote": "Not an iOne quote",
  "price.estInline": "est.",
  "price.at": "at",
  "photo.missing": "No product photo in the catalog",
  "product.shop": "Shop guide: {value}",
  "product.shopNote":
    "Resolution bands are grouped here from the GPU class. They are not a manufacturer rating.",
  "product.ask": "Order",
  "product.askBody":
    "There is no checkout and no reserve. Prepare an inquiry and send it to {email}. iOne has not published stock, freight, or a local selling price for this tower.",
  "product.specs": "Specifications",
  "product.specsCaption": "Specifications for {name}",
  "product.warrantyTitle": "Warranty and what is included",
  "product.warranty": "Warranty: {value}",
  "product.warrantyMissing": "Not stated on the source used.",
  "product.noBundle": "The source did not list a bundle beyond the desktop itself.",
  "product.sources": "Sources",
  "product.sourcesNote":
    "Read on 22 November 2026. Recheck the source before treating a price as current.",
  "product.similar": "Similar systems",
  "product.companyTail": "The address is {line1}, {line2}.",
  "compare.title": "Compare PCs",
  "compare.lede": "Choose up to three systems.",
  "compare.emptyTitle": "Nothing to compare yet",
  "compare.emptyBody":
    "Pick up to three systems from the catalog. The same rows stay in place: price, GPU, memory, storage, and the tugrik estimate.",
  "compare.one": "One system selected. Add up to two more.",
  "compare.two": "Two systems selected. You can add one more.",
  "compare.three": "Three systems. Remove one to swap it.",
  "compare.back": "Back to the catalog",
  "compare.clearAll": "Clear all",
  "compare.remove": "Remove",
  "compare.caption": "Comparison of selected gaming desktops",
  "compare.loading": "Loading the comparison…",
  "compare.barCount": "{count} of {limit} selected",
  "compare.barFull": "Remove one to add another.",
  "compare.barRoom": "Add up to three systems.",
  "compare.clear": "Clear",
  "rate.compact":
    "Estimate at ₮{rate} per USD on {date}. Not an iOne quote. The price and the rate both move.",
  "rate.full":
    "MNT figures use {rate} tugrik per 1 USD, the {name} for {date}. {detail} {formula} A shop price will differ. These are not quotes from iOne.",
  "footer.note":
    "Street prices on the gaming desktop pages are estimates from public listings on 22 November 2026. They are not quotes from iOne. This site does not take payment.",
  "footer.copy": "© 2026 iOne",
  "about.title": "About",
  "contact.title": "Contact",
  "contact.lede":
    "Write to iOne about IT services, smart cards, consulting, or a system in the catalog. The form prepares a message in this browser. It does not place an order.",
  "form.name": "Name",
  "form.email": "Email",
  "form.phone": "Phone, if you want a call",
  "form.phoneNumber": "Phone number",
  "form.system": "System",
  "form.systemNone": "Not a specific system",
  "form.message": "Message",
  "form.submit": "Contact us",
  "form.order": "Order",
  "form.errName": "Enter your name.",
  "form.errEmail": "Enter an email address.",
  "form.errMessage": "Add a short note about what you want.",
  "form.ready": "Inquiry prepared",
  "form.readyBody":
    "Nothing was sent. This page did not contact a server. Email the summary to {email}, or copy it.",
  "form.phoneMissing": "Not given",
  "form.systemMissing": "Not a specific system",
  "form.emailButton": "Email {email}",
  "form.copy": "Copy details",
  "form.copied": "Copied",
  "form.another": "Start another",
  "form.mailName": "Name",
  "form.mailEmail": "Email",
  "form.mailPhone": "Phone",
  "form.mailSystem": "System",
  "form.subject": "iOne inquiry: {system}",
  "form.subjectGeneral": "iOne inquiry: general",
  "form.preset":
    "I would like to ask about the {brand} {model}{part}. The catalog lists {usd} (est. {mnt}) as of 22 November 2026.",
  "services.open": "Open {title}",
  "services.itLede": "These are the IT services published on ione.mn.",
  "services.cardLede": "These are the smart-card lines published on ione.mn.",
  "services.consultLede": "These are the consulting lines published on ione.mn.",
  "services.contact": "Contact iOne",
  "services.aboutWork": "about this work, or return to",
  "services.aboutCards": "about card supply, or return to",
  "services.all": "all services",
  "notFound.title": "That page is not on this site",
  "notFound.body": "The catalog lists {count} gaming desktops. This address is not one of them.",
  "error.title": "This page did not load",
  "error.body": "Try again. If it keeps failing, write to {email}.",
  "error.retry": "Try again",
  "loading.catalog": "Loading the catalog…",
  "loading.product": "Loading this system…",
  "meta.home": "iOne",
  "meta.gaming": "Gaming PCs · iOne",
  "meta.compare": "Compare PCs · iOne",
  "meta.services": "Services · iOne",
  "meta.it": "IT Services · iOne",
  "meta.cards": "Smart Card Solutions · iOne",
  "meta.consulting": "Consulting · iOne",
  "meta.about": "About · iOne",
  "meta.contact": "Contact · iOne",
  "common.close": "Close",
} as const;

export type MessageKey = keyof typeof en;

const mn: Record<MessageKey, string> = {
  "nav.gaming": "Тоглоомын компьютер",
  "nav.compare": "Харьцуулах",
  "nav.services": "Үйлчилгээ",
  "nav.about": "Бидний тухай",
  "nav.contact": "Холбоо барих",
  "nav.compareCount": "Харьцуулах ({count})",
  "nav.skip": "Агуулга руу алгасах",
  "nav.home": "iOne нүүр",
  "nav.primary": "Үндсэн цэс",
  "nav.footer": "Хөл",
  "nav.mobile": "Гар утас",
  "nav.menu": "Цэс",
  "nav.open": "Цэс нээх",
  "lang.group": "Хэл",
  "lang.en": "Англи",
  "lang.mn": "Монгол",
  "hero.title": "Тоглоомын ширээний компьютер",
  "hero.lede":
    "iOne тоглоомчдод хамгийн өргөн сонголтыг санал болгодог. Хамгийн хүчирхэг тоглоомын компьютерээс төсөвт ээлтэй хүртэл.",
  "hero.browse": "Тоглоомын компьютер үзэх",
  "hero.compare": "Харьцуулах",
  "home.gpu": "GPU",
  "home.budget": "Төсөв, төгрөгөөр",
  "home.brand": "Брэнд",
  "home.across": "Каталогийн дагуу",
  "home.all": "Бүгд {count}",
  "home.shopNote":
    "Карт дээрх дэлгүүрийн зөвлөмж ({bands} болон бусад ангилал) нь GPU-ийн ангиллаас бүлэглэсэн. Үйлдвэрлэгчийн үнэлгээ биш.",
  "home.services": "Үйлчилгээ",
  "home.smartCards": "Ухаалаг картын шийдэл",
  "catalog.eyebrow": "Каталог",
  "catalog.title": "Тоглоомын компьютер",
  "catalog.lede":
    "Нийтийн заруудаас авсан бэлэн угсралттай компьютер. GPU, процессор, санах ой, хадгалалт, нягтралын бүс, төгрөгийн төсөв, брэндээр шүүнэ. Үнэ нь тооцоолол бөгөөд эх сурвалжууд уншсан өдрөө зөрүүтэй буюу дууссан байсан.",
  "catalog.resolution": "Нягтралын бүс",
  "catalog.brand": "Брэнд",
  "catalog.oneSystem": "{count} систем",
  "catalog.manySystems": "{count} систем",
  "catalog.search": "Энэ жагсаалтаас хайх",
  "catalog.searchPlaceholder": "Брэнд, загвар, GPU, эсвэл сэлбэг",
  "catalog.sort": "Эрэмбэлэх",
  "catalog.apply": "Хэрэглэх",
  "catalog.filters": "Шүүлтүүр",
  "catalog.gpu": "GPU",
  "catalog.cpu": "Процессорын бүл",
  "catalog.ram": "RAM",
  "catalog.storage": "Хадгалалт",
  "catalog.storageHint": "Үндсэн SSD-ийн хэмжээ. Хатуу диск байвал нэмэлт.",
  "catalog.target": "Зорилтот нягтрал",
  "catalog.targetHint": "GPU-ийн ангиллаас гаргасан дэлгүүрийн зөвлөмж. Үйлдвэрлэгчийн үнэлгээ биш.",
  "catalog.price": "Үнэ, төгрөгөөр",
  "catalog.priceHint": "Карт дээрх эхний зах зээлийн үнийг ашиглана.",
  "catalog.availability": "Бэлэн байдал",
  "catalog.available": "Бэлэн гэж тэмдэглэсэн",
  "catalog.availableHint":
    "Эх сурвалж нь нөөцтэй эсвэл хүргэх хугацаа гэсэн тохиолдолд л. «Тодорхойгүй» орхигдоно.",
  "catalog.applyFilters": "Шүүлтүүр хэрэглэх",
  "catalog.clear": "Цэвэрлэх",
  "catalog.count": "{shown} / {total} систем.",
  "catalog.countRecommended": "{shown} / {total} систем. Санал болгосон дараалал нь каталогийн дараалал.",
  "catalog.remove": ", шүүлтүүр хасах",
  "catalog.emptyTitle": "Эдгээр шүүлтүүрт тохирох систем алга",
  "catalog.emptyBody":
    "Каталогт {count} ширээний компьютер бий. Шүүлтүүрээ цэвэрлэх эсвэл 5080 гэх мэт GPU-ийн нэрээр хайна уу.",
  "catalog.clearFilters": "Шүүлтүүр цэвэрлэх",
  "sort.recommended": "Санал болгосон",
  "sort.priceAsc": "Үнэ, өсөхөөр",
  "sort.priceDesc": "Үнэ, буурахаар",
  "sort.gpu": "GPU-ийн анги, өндрөөс нам руу",
  "chip.search": "Хайлт: {q}",
  "chip.ram": "{n} ГБ RAM",
  "chip.ssd": "{n} ТБ SSD",
  "card.shop": "Дэлгүүрийн зөвлөмж: {value}",
  "card.cpu": "CPU",
  "card.ram": "RAM",
  "card.storage": "Хадгалалт",
  "card.compare": "Харьцуулах",
  "card.compareFull": "Харьцуулах жагсаалт дүүрсэн ({count})",
  "card.compareFullAria": "Харьцуулах жагсаалт {count}-д дүүрсэн",
  "price.estimate": "Тооцоолол",
  "price.est": "Тооц. {amount}",
  "price.also": "Мөн {usd}, {seller} (тооц. {mnt})",
  "price.notQuote": "iOne-ийн үнийн санал биш",
  "price.estInline": "тооц.",
  "price.at": "/",
  "photo.missing": "Каталогт бүтээгдэхүүний зураг алга",
  "product.shop": "Дэлгүүрийн зөвлөмж: {value}",
  "product.shopNote":
    "Нягтралын бүсийг энд GPU-ийн ангиллаас бүлэглэсэн. Үйлдвэрлэгчийн үнэлгээ биш.",
  "product.ask": "Захиалах",
  "product.askBody":
    "Төлбөр тооцоо, захиалга байхгүй. Лавлагаа бэлтгээд {email} руу илгээнэ үү. iOne энэ компьютерын нөөц, тээвэр, орон нутгийн борлуулалтын үнийг нийтлээгүй.",
  "product.specs": "Үзүүлэлт",
  "product.specsCaption": "{name}-ийн үзүүлэлт",
  "product.warrantyTitle": "Баталгаа болон багтаасан зүйл",
  "product.warranty": "Баталгаа: {value}",
  "product.warrantyMissing": "Ашигласан эх сурвалжид дурдаагүй.",
  "product.noBundle": "Эх сурвалж ширээний компьютерээс өөр багц дурдаагүй.",
  "product.sources": "Эх сурвалж",
  "product.sourcesNote":
    "2026 оны 11-р сарын 22-нд уншсан. Үнийг одоогийнх гэж үзэхээсээ өмнө эх сурвалжаа дахин шалгана уу.",
  "product.similar": "Төстэй системүүд",
  "product.companyTail": "Хаяг: {line1}, {line2}.",
  "compare.title": "Компьютер харьцуулах",
  "compare.lede": "Гурван хүртэлх систем сонгоно.",
  "compare.emptyTitle": "Харьцуулах зүйл алга",
  "compare.emptyBody":
    "Каталогоос гурван хүртэлх систем сонгоно. Үнэ, GPU, санах ой, хадгалалт, төгрөгийн тооцоолол нэг мөрөнд үлдэнэ.",
  "compare.one": "Нэг систем сонгосон. Дахиад хоёр хүртэл нэмнэ үү.",
  "compare.two": "Хоёр систем сонгосон. Дахиад нэгийг нэмж болно.",
  "compare.three": "Гурван систем. Солихын тулд нэгийг хасна уу.",
  "compare.back": "Каталог руу буцах",
  "compare.clearAll": "Бүгдийг цэвэрлэх",
  "compare.remove": "Хасах",
  "compare.caption": "Сонгосон тоглоомын ширээний компьютеруудын харьцуулалт",
  "compare.loading": "Харьцуулалтыг ачаалж байна…",
  "compare.barCount": "{count} / {limit} сонгосон",
  "compare.barFull": "Нэгийг хасвал өөрийг нэмнэ.",
  "compare.barRoom": "Гурван хүртэлх систем нэмнэ үү.",
  "compare.clear": "Цэвэрлэх",
  "rate.compact":
    "₮{rate} / 1 ам.доллар, {date}. iOne-ийн үнийн санал биш. Үнэ ч, ханш ч өөрчлөгдөнө.",
  "rate.full":
    "Төгрөгийн дүн нь 1 ам.доллар = {rate} төгрөг, {date}-ны {name}. {detail} {formula} Дэлгүүрийн үнэ өөр байна. Эдгээр нь iOne-ийн үнийн санал биш.",
  "footer.note":
    "Тоглоомын ширээний компьютерын хуудсан дээрх зах зээлийн үнэ нь 2026 оны 11-р сарын 22-ны нийтийн заруудаас авсан тооцоолол. iOne-ийн үнийн санал биш. Энэ сайт төлбөр хүлээж авдаггүй.",
  "footer.copy": "© 2026 iOne",
  "about.title": "Бидний тухай",
  "contact.title": "Холбоо барих",
  "contact.lede":
    "Мэдээллийн технологийн үйлчилгээ, ухаалаг карт, зөвлөх үйлчилгээ, эсвэл каталогийн системийн талаар iOne-д бичнэ үү. Маягт мессежийг энэ хөтөч дээр бэлтгэнэ. Захиалга хийхгүй.",
  "form.name": "Нэр",
  "form.email": "Имэйл",
  "form.phone": "Утас, залгахыг хүсвэл",
  "form.phoneNumber": "Утасны дугаар",
  "form.system": "Систем",
  "form.systemNone": "Тодорхой систем биш",
  "form.message": "Зурвас",
  "form.submit": "Бидэнтэй холбогдох",
  "form.order": "Захиалах",
  "form.errName": "Нэрээ оруулна уу.",
  "form.errEmail": "Имэйл хаяг оруулна уу.",
  "form.errMessage": "Юу хүсэж байгаагаа товч бичнэ үү.",
  "form.ready": "Лавлагаа бэлтгэгдлээ",
  "form.readyBody":
    "Юу ч илгээгдээгүй. Энэ хуудас сервертэй холбогдоогүй. Товчоог {email} руу илгээх эсвэл хуулна уу.",
  "form.phoneMissing": "Өгөөгүй",
  "form.systemMissing": "Тодорхой систем биш",
  "form.emailButton": "{email} руу илгээх",
  "form.copy": "Дэлгэрэнгүйг хуулах",
  "form.copied": "Хуулсан",
  "form.another": "Дахиад эхлэх",
  "form.mailName": "Нэр",
  "form.mailEmail": "Имэйл",
  "form.mailPhone": "Утас",
  "form.mailSystem": "Систем",
  "form.subject": "iOne лавлагаа: {system}",
  "form.subjectGeneral": "iOne лавлагаа: ерөнхий",
  "form.preset":
    "{brand} {model}{part}-ийн талаар асуумаар байна. Каталогт 2026 оны 11-р сарын 22-ны байдлаар {usd} (тооц. {mnt}) гэж байна.",
  "services.open": "{title} нээх",
  "services.itLede": "Эдгээр нь ione.mn дээр нийтэлсэн мэдээллийн технологийн үйлчилгээ.",
  "services.cardLede": "Эдгээр нь ione.mn дээр нийтэлсэн ухаалаг картын чиглэл.",
  "services.consultLede": "Эдгээр нь ione.mn дээр нийтэлсэн зөвлөхийн чиглэл.",
  "services.contact": "iOne-той холбогдох",
  "services.aboutWork": "энэ ажлын талаар, эсвэл",
  "services.aboutCards": "картын нийлүүлэлтийн талаар, эсвэл",
  "services.all": "бүх үйлчилгээ",
  "notFound.title": "Энэ хуудас сайт дээр алга",
  "notFound.body": "Каталогт {count} тоглоомын ширээний компьютер бий. Энэ хаяг тэдний нэг биш.",
  "error.title": "Энэ хуудас ачаалагдсангүй",
  "error.body": "Дахин оролдоно уу. Үргэлжилбэл {email} руу бичнэ үү.",
  "error.retry": "Дахин оролдох",
  "loading.catalog": "Каталогийг ачаалж байна…",
  "loading.product": "Энэ системийг ачаалж байна…",
  "meta.home": "iOne",
  "meta.gaming": "Тоглоомын компьютер · iOne",
  "meta.compare": "Компьютер харьцуулах · iOne",
  "meta.services": "Үйлчилгээ · iOne",
  "meta.it": "Мэдээллийн технологийн үйлчилгээ · iOne",
  "meta.cards": "Ухаалаг картын шийдэл · iOne",
  "meta.consulting": "Зөвлөх үйлчилгээ · iOne",
  "meta.about": "Бидний тухай · iOne",
  "meta.contact": "Холбоо барих · iOne",
  "common.close": "Хаах",
};

const messages: Record<Lang, Record<MessageKey, string>> = { en, mn };

export function isLang(value: string | undefined | null): value is Lang {
  return value === "en" || value === "mn";
}

export function fill(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] === undefined ? "" : String(vars[key]),
  );
}

export function translate(
  lang: Lang,
  key: MessageKey,
  vars?: Record<string, string | number>,
): string {
  return fill(messages[lang][key], vars);
}

/** Exact English sentences from the company profile, services, and catalog notes. Specs are not listed, so they stay unchanged. */
const phrases: Record<string, string> = {
  Catalog: "Каталог",
  "Gaming PCs": "Тоглоомын компьютер",
  Compare: "Харьцуулах",
  "Compare PCs": "Компьютер харьцуулах",
  Services: "Үйлчилгээ",
  About: "Бидний тухай",
  Contact: "Холбоо барих",
  "Prebuilt towers from public listings. Filter by GPU, processor, memory, storage, a resolution band, a tugrik budget, or brand. Prices are estimates, and several sources disagreed or were out of stock on the day they were read.":
    "Нийтийн заруудаас авсан бэлэн угсралттай компьютер. GPU, процессор, санах ой, хадгалалт, нягтралын бүс, төгрөгийн төсөв, брэндээр шүүнэ. Үнэ нь тооцоолол бөгөөд эх сурвалжууд уншсан өдрөө зөрүүтэй буюу дууссан байсан.",
  "Choose up to three systems.": "Гурван хүртэлх систем сонгоно.",
  "Write to iOne about IT services, smart cards, consulting, or a system in the catalog. The form prepares a message in this browser. It does not place an order.":
    "Мэдээллийн технологийн үйлчилгээ, ухаалаг карт, зөвлөх үйлчилгээ, эсвэл каталогийн системийн талаар iOne-д бичнэ үү. Маягт мессежийг энэ хөтөч дээр бэлтгэнэ. Захиалга хийхгүй.",
  "These are the IT services published on ione.mn.":
    "Эдгээр нь ione.mn дээр нийтэлсэн мэдээллийн технологийн үйлчилгээ.",
  "These are the smart-card lines published on ione.mn.":
    "Эдгээр нь ione.mn дээр нийтэлсэн ухаалаг картын чиглэл.",
  "These are the consulting lines published on ione.mn.":
    "Эдгээр нь ione.mn дээр нийтэлсэн зөвлөхийн чиглэл.",
  "15th khoroo, Jargalan 2, 1": "15-р хороо, Жаргалан 2, 1",
  "Khan-Uul District, Ulaanbaatar, Mongolia": "Хан-Уул дүүрэг, Улаанбаатар, Монгол",
  "IT Services / Smart Card Solutions": "Мэдээллийн технологийн үйлчилгээ / Ухаалаг картын шийдэл",
  "Innovative IT services, card technologies, and secure digital solutions":
    "Шинэлэг мэдээллийн технологийн үйлчилгээ, картын технологи, найдвартай дижитал шийдэл",
  "iOne is a technology company with a 10+ year history serving the Mongolian market. We specialize in cloud services, AI integration, blockchain consulting, and professional EMV smart card supply as the official distributor of Kona-M, Korea's leading card manufacturer.":
    "iOne нь Монголын зах зээлд 10-аас дээш жил үйлчилсэн түүхтэй технологийн компани. Бид үүлэн үйлчилгээ, хиймэл оюуны интеграц, блокчейний зөвлөх үйлчилгээ, мөн Солонгосын тэргүүлэгч карт үйлдвэрлэгч Kona-M-ийн албан ёсны дистрибьютерээр мэргэжлийн EMV ухаалаг карт нийлүүлэх чиглэлээр мэргэшдэг.",
  "iOne is a technology company providing IT solutions, cloud services, AI integration, blockchain consulting, and professional EMV smart card supply as the official distributor of Kona-M, Korea’s leading card manufacturer.":
    "iOne нь мэдээллийн технологийн шийдэл, үүлэн үйлчилгээ, хиймэл оюуны интеграц, блокчейний зөвлөх үйлчилгээ үзүүлдэг технологийн компани бөгөөд Солонгосын тэргүүлэгч карт үйлдвэрлэгч Kona-M-ийн албан ёсны дистрибьютерээр мэргэжлийн EMV ухаалаг карт нийлүүлдэг.",
  "Official Distributor of Kona-M Smart Cards": "Kona-M ухаалаг картын албан ёсны дистрибьютер",
  "We supply certified EMV card chips and provide support for card personalization through Mongolian processing partners.":
    "Бид баталгаажсан EMV картын чип нийлүүлж, Монголын боловсруулалтын түншүүдээр дамжуулан картын хувийн тохиргоонд дэмжлэг үзүүлнэ.",
  "IT Services": "Мэдээллийн технологийн үйлчилгээ",
  "IT infrastructure setup & support": "Мэдээллийн технологийн дэд бүтцийг суурилуулах, дэмжих",
  "Cloud solutions": "Үүлэн шийдэл",
  "AI & automation": "Хиймэл оюун ба автоматжуулалт",
  "Blockchain services": "Блокчейн үйлчилгээ",
  "Smart Card Solutions": "Ухаалаг картын шийдэл",
  "Contact & contactless EMV card supply": "Холбоо барих ба холбоогүй EMV карт нийлүүлэлт",
  "Technical consulting": "Техникийн зөвлөх үйлчилгээ",
  "Card issuance support": "Карт гаргалтын дэмжлэг",
  "Card personalization integration": "Картын хувийн тохиргооны интеграц",
  Consulting: "Зөвлөх үйлчилгээ",
  "IT security consulting": "Мэдээллийн технологийн аюулгүй байдлын зөвлөгөө",
  "System design & architecture": "Системийн загвар ба архитектур",
  "API integration guidance": "API интеграцын зөвлөгөө",
  "Project planning & support": "Төслийн төлөвлөлт ба дэмжлэг",
  "Under ₮8 million": "₮8 саяас доош",
  "₮8–15 million": "₮8–15 сая",
  "₮15–25 million": "₮15–25 сая",
  "Over ₮25 million": "₮25 саяас дээш",
  Recommended: "Санал болгосон",
  "Price, low to high": "Үнэ, өсөхөөр",
  "Price, high to low": "Үнэ, буурахаар",
  "GPU tier, high to low": "GPU-ийн анги, өндрөөс нам руу",
  "Listed as available": "Бэлэн гэж тэмдэглэсэн",
  "Not stated": "Тодорхойгүй",
  Unavailable: "Боломжгүй",
  "Sold out": "Дууссан",
  "In stock": "Нөөцтэй",
  "Out of stock": "Нөөц дууссан",
  "Not sold new": "Шинээр зарагддаггүй",
  "Ships in 2 business days": "2 ажлын өдөрт хүргэнэ",
  "Shop guide": "Дэлгүүрийн зөвлөмж",
  Availability: "Бэлэн байдал",
  Case: "Корпус",
  Processor: "Процессор",
  Graphics: "График",
  VRAM: "VRAM",
  "Installed RAM": "Суурилуулсан RAM",
  "RAM speed": "RAM-ийн хурд",
  Storage: "Хадгалалт",
  "Storage type": "Хадгалалтын төрөл",
  "Additional storage": "Нэмэлт хадгалалт",
  "Operating system": "Үйлдлийн систем",
  Warranty: "Баталгаа",
  "Street price (USD)": "Зах зээлийн үнэ (USD)",
  "Estimated MNT": "Тооцоолсон төгрөг",
  "22 November 2026": "2026 оны 11-р сарын 22",
  "Bank of Mongolia official USD rate": "Монголбанкны албан ёсны ам.долларын ханш",
  "Republished that day by Altan Hurungu. The same 3,607 figure is also shown by DTA.":
    "Тухайн өдөр Алтан Хүрэнгэ дахин нийтэлсэн. Мөн 3,607 гэсэн тоог DTA харуулсан.",
  "USD price × 3,607, rounded to the nearest tugrik. No VAT, freight, duty, or dealer margin is added.":
    "Ам.долларын үнэ × 3,607, хамгийн ойрын төгрөгт дугуйрсан. НӨАТ, тээвэр, гааль, дилерийн ашиг нэмээгүй.",
  "Warehouse snapshot, 20 November 2026": "Агуулахын тэмдэглэл, 2026 оны 11-р сарын 20",
  "The Costco page showed the system as unavailable and did not print a live price. $1,099.99 is a warehouse price snapshot dated 20 November 2026.":
    "Costco-ийн хуудас системийг боломжгүй гэж харуулсан бөгөөд шууд үнэ хэвлээгүй. $1,099.99 нь 2026 оны 11-р сарын 20-ны агуулахын үнийн тэмдэглэл.",
  "The Costco page showed this system as unavailable.":
    "Costco-ийн хуудас энэ системийг боломжгүй гэж харуулсан.",
  "Windows 11 Home, as named in the Costco title":
    "Windows 11 Home, Costco-ийн гарчигт дурдсанаар",
  "The warehouse snapshot and a Tom’s Hardware test of a Gamer Xtreme at this price name an MSI RTX 5060 Shadow 2X OC.":
    "Энэ үнээрх агуулахын тэмдэглэл болон Tom’s Hardware-ийн Gamer Xtreme туршилт MSI RTX 5060 Shadow 2X OC гэж нэрлэсэн.",
  "No product photo was retrieved. Costco returned HTTP 429 to a direct fetch.":
    "Бүтээгдэхүүний зураг авч чадаагүй. Costco шууд таталтад HTTP 429 буцаасан.",
  "Costco item 4000375234": "Costco-ийн бараа 4000375234",
  "Warehouse Runner snapshot": "Warehouse Runner тэмдэглэл",
  "This URL is a configurator. Other Dell presets are separate configurations and are not this price.":
    "Энэ холбоос тохируулагч. Dell-ийн бусад урьдчилсан тохиргоо нь өөр бөгөөд энэ үнэ биш.",
  "Dell listed this configuration as sold out.": "Dell энэ тохиргоог дууссан гэж жагсаасан.",
  "No chassis photo was retrieved. The page metadata image was the Dell logo.":
    "Корпусын зураг авч чадаагүй. Хуудасны мета өгөгдлийн зураг Dell-ийн лого байсан.",
  "Dell, Alienware Aurora ACT1250": "Dell, Alienware Aurora ACT1250",
  "Full tower (ASUS ROG G700 family)": "Бүтэн корпус (ASUS ROG G700 бүл)",
  "Best Buy review URL": "Best Buy-ийн сэтгэгдлийн холбоос",
  "Best Buy review URL, same day": "Best Buy-ийн сэтгэгдлийн холбоос, тэр өдөр",
  "Two Best Buy review URLs for this title disagreed the same day. The ASUS store price starting at $1,499.99 is a different, lower configuration.":
    "Энэ нэрийн хоёр Best Buy сэтгэгдлийн холбоос тэр өдөр зөрүүтэй байсан. ASUS дэлгүүрийн $1,499.99-өөс эхлэх үнэ нь өөр, доогуур тохиргоо.",
  "Series photo from the ASUS US page, not proven to be the Best Buy SKU.":
    "ASUS-ийн АНУ-ын хуудасны цувралын зураг. Best Buy-ийн SKU мөн болох нь батлагдаагүй.",
  "The Best Buy pages used for the price did not state stock.":
    "Үнэд ашигласан Best Buy-ийн хуудсууд нөөц дурдаагүй.",
  "RAM speed was not stated on the Best Buy snippets.":
    "Best Buy-ийн хэсгүүдэд RAM-ийн хурд дурдаагүй.",
  "Best Buy JJGGLH35S7": "Best Buy JJGGLH35S7",
  "ASUS ROG G700 spec page": "ASUS ROG G700 үзүүлэлтийн хуудас",
  "2 years, on the Corsair product record": "2 жил, Corsair-ийн бүтээгдэхүүний бүртгэлд",
  "Regular price on the Corsair product record": "Corsair-ийн бүтээгдэхүүний бүртгэл дэх энгийн үнэ",
  "Render Corsair serves for this family. The file path is the sibling SKU CS-9050158.":
    "Corsair энэ бүлд зориулж харуулдаг рендер. Файлын зам нь ах дүү SKU CS-9050158.",
  "Marked in stock on the Corsair listing.": "Corsair-ийн жагсаалтад нөөцтэй гэж тэмдэглэсэн.",
  "Windows 11 Home, named on the product": "Windows 11 Home, бүтээгдэхүүн дээр нэрлэгдсэн",
  "The Corsair card does not name the board partner or the drive.":
    "Corsair-ийн карт самбарын түнш болон дискийг нэрлээгүй.",
  "RAM speed is not in the Corsair attributes read for this SKU. A review of the series described DDR5-6400 on the unit that was tested. That speed is not listed here as this SKU’s spec.":
    "Энэ SKU-д уншсан Corsair-ийн шинжүүдэд RAM-ийн хурд байхгүй. Цувралын тойм туршсан төхөөрөмж дээр DDR5-6400 гэж бичсэн. Тэр хурдыг энэ SKU-ийн үзүүлэлт гэж энд оруулаагүй.",
  "Corsair product page": "Corsair-ийн бүтээгдэхүүний хуудас",
  "Skytech’s own offer is $2,999.99. Best Buy listed the same model number at $2,269.99.":
    "Skytech-ийн өөрийн санал $2,999.99. Best Buy ижил загварын дугаарыг $2,269.99-өөр жагсаасан.",
  "Skytech photo. The page says its photos are illustrative and that component brands can vary within the written spec.":
    "Skytech-ийн зураг. Хуудас нь зургууд тайлбарласан бөгөөд эд ангийн брэнд бичсэн үзүүлэлтийн хүрээнд өөр байж болно гэжээ.",
  "Skytech schema availability is OutOfStock. Best Buy stock was not stated.":
    "Skytech-ийн схемийн бэлэн байдал OutOfStock. Best Buy-ийн нөөц дурдаагүй.",
  "Skytech #1780-W": "Skytech #1780-W",
  "Best Buy J3GW8HK7PC": "Best Buy J3GW8HK7PC",
  "Lenovo Legion listing": "Lenovo Legion-ийн жагсаалт",
  "Image served on the Lenovo product page.": "Lenovo-ийн бүтээгдэхүүний хуудсан дээрх зураг.",
  "The Lenovo listing used here did not state stock.":
    "Энд ашигласан Lenovo-ийн жагсаалт нөөц дурдаагүй.",
  "Also called Legion T7 34IAS10.": "Мөн Legion T7 34IAS10 гэж нэрлэдэг.",
  "The Lenovo listing showed an estimated value of $4,821.99. That figure is not listed here as a second street price.":
    "Lenovo-ийн жагсаалт $4,821.99 тооцоолсон үнэ харуулсан. Тэр тоог энд хоёр дахь зах зээлийн үнэ гэж оруулаагүй.",
  "Lenovo 90Y6001JUS": "Lenovo 90Y6001JUS",
  "Lenovo PSREF single-model export": "Lenovo PSREF нэг загварын экспорт",
  "MSI US store": "MSI-ийн АНУ-ын дэлгүүр",
  "Shown as a limited-time cut from this price": "Энэ үнээс хязгаарлагдмал хугацааны хямдрал гэж харуулсан",
  "Shown in stock on the MSI US store.": "MSI-ийн АНУ-ын дэлгүүрт нөөцтэй гэж харуулсан.",
  "Manufacturer number AeRS2A2NVV72208.": "Үйлдвэрлэгчийн дугаар AeRS2A2NVV72208.",
  "RAM speed was not stated.": "RAM-ийн хурд дурдаагүй.",
  "No chassis photo was retrieved. The page metadata image was a store promotion banner.":
    "Корпусын зураг авч чадаагүй. Хуудасны мета өгөгдлийн зураг дэлгүүрийн сурталчилгааны баннер байсан.",
  "Newegg search": "Newegg хайлт",
  "Newegg search, same day": "Newegg хайлт, тэр өдөр",
  "A dedicated product URL was not retrieved. These are search-result prices, not a cart price.":
    "Тусдаа бүтээгдэхүүний холбоос авч чадаагүй. Эдгээр нь хайлтын үр дүнгийн үнэ, сагсны үнэ биш.",
  "The Newegg search results did not state stock.": "Newegg-ийн хайлтын үр дүн нөөц дурдаагүй.",
  "RAM speed was not stated on the Newegg titles used. No product photo was retrieved.":
    "Ашигласан Newegg-ийн гарчгуудад RAM-ийн хурд дурдаагүй. Бүтээгдэхүүний зураг авч чадаагүй.",
  "Newegg, iBUYPOWER and RTX 5080": "Newegg, iBUYPOWER ба RTX 5080",
  "Newegg search “ibuypower y40”": "Newegg хайлт “ibuypower y40”",
  "B&H category tile": "B&H ангиллын хавтан",
  "This is a category tile, not a product-detail page. A model number was not on the listing. The finish on the tile is white.":
    "Энэ нь ангиллын хавтан, бүтээгдэхүүний дэлгэрэнгүй хуудас биш. Жагсаалтад загварын дугаар байгаагүй. Хавтан дээрх өнгө цагаан.",
  "The B&H category tile did not state stock. Delivery text on that page said Wednesday, 25 November.":
    "B&H-ийн ангиллын хавтан нөөц дурдаагүй. Тэр хуудасны хүргэлтийн текст Лхагва, 11-р сарын 25 гэж байсан.",
  "No product photo was retrieved.": "Бүтээгдэхүүний зураг авч чадаагүй.",
  "B&H RTX 5080 desktops": "B&H RTX 5080 ширээний компьютер",
  "Best Buy filtered results": "Best Buy-ийн шүүсэн үр дүн",
  "Best Buy reviews URL, SKU 10732463": "Best Buy-ийн сэтгэгдлийн холбоос, SKU 10732463",
  "Best Buy open-box": "Best Buy задгай хайрцаг",
  "No single live new price. Best Buy said this desktop is no longer available new. The three figures were observed the same day.":
    "Нэг шууд шинэ үнэ алга. Best Buy энэ ширээний компьютер шинээр байхгүй гэжээ. Гурван тоог тэр өдөр харсан.",
  "Best Buy said it is no longer available new.": "Best Buy үүнийг шинээр авах боломжгүй гэжээ.",
  "RAM speed was not stated. No product photo was retrieved.":
    "RAM-ийн хурд дурдаагүй. Бүтээгдэхүүний зураг авч чадаагүй.",
  "Best Buy product JJGQJQVXTT": "Best Buy бүтээгдэхүүн JJGQJQVXTT",
  "Best Buy SKU 12532507": "Best Buy SKU 12532507",
  "The Best Buy listing did not state stock in the fetch.":
    "Best Buy-ийн жагсаалт таталтад нөөц дурдаагүй.",
  "Hver Stealth gaming keyboard, named on the listing":
    "Hver Stealth тоглоомын гар, жагсаалтад нэрлэгдсэн",
  "A manufacturer model code was not in the fetch.": "Үйлдвэрлэгчийн загварын код таталтад байгаагүй.",
  "VRAM size was not stated. RAM type and speed were not stated.":
    "VRAM-ийн хэмжээ дурдаагүй. RAM-ийн төрөл, хурд дурдаагүй.",
  "UPC on that page: 0810215807925.": "Тэр хуудасны UPC: 0810215807925.",
  "No product photo was retrieved. The fetch timed out before a photo URL could be read.":
    "Бүтээгдэхүүний зураг авч чадаагүй. Зургийн холбоос уншихаас өмнө таталт хугацаа дууссан.",
  "Best Buy search tile": "Best Buy-ийн хайлтын хавтан",
  "This is a search result, not a product-detail page. A model number was not on the tile. The tile said it was not yet reviewed.":
    "Энэ нь хайлтын үр дүн, бүтээгдэхүүний дэлгэрэнгүй хуудас биш. Хавтан дээр загварын дугаар байгаагүй. Хавтан хараахан сэтгэгдэлгүй гэжээ.",
  "The Best Buy search tile did not state stock.": "Best Buy-ийн хайлтын хавтан нөөц дурдаагүй.",
  "VRAM size was not stated on the tile. No product photo was retrieved.":
    "Хавтан дээр VRAM-ийн хэмжээ дурдаагүй. Бүтээгдэхүүний зураг авч чадаагүй.",
  "Best Buy gaming-desktop search": "Best Buy тоглоомын ширээний компьютерын хайлт",
  "Photo on the MAINGEAR product page.": "MAINGEAR-ийн бүтээгдэхүүний хуудсан дээрх зураг.",
  "MAINGEAR’s page said it ships in 2 business days, one per customer, components while supplies last.":
    "MAINGEAR-ийн хуудас 2 ажлын өдөрт хүргэнэ, нэг харилцагчид нэг, эд анги нөөц дуустал гэжээ.",
  "Limited run.": "Хязгаарлагдмал цуврал.",
  "MAINGEAR MG-1 90-Class": "MAINGEAR MG-1 90-Class",
  "The MAINGEAR page used here did not state stock.":
    "Энд ашигласан MAINGEAR-ийн хуудас нөөц дурдаагүй.",
  "The RTX 5090 collection page says 32 GB GDDR7 for MAINGEAR’s RTX 5090 builds. The product page heading says RTX 5090 and does not repeat the VRAM figure in the short spec list.":
    "RTX 5090 цуглуулгын хуудас MAINGEAR-ийн RTX 5090 угсралтад 32 GB GDDR7 гэжээ. Бүтээгдэхүүний хуудасны гарчиг RTX 5090 гэсэн бөгөөд богино үзүүлэлтэд VRAM-ийн тоог давтаагүй.",
  "MAINGEAR MG-1 Ultimate": "MAINGEAR MG-1 Ultimate",
  "MAINGEAR RTX 5090 collection": "MAINGEAR RTX 5090 цуглуулга",
  "Dell category tile": "Dell-ийн ангиллын хавтан",
  "An order code was not in the category snippet. This is not the ACT1250 configuration. Category prices on Dell change with the configurator. The tile also showed an estimated value of $11,499.99, which is not listed here as a second street price.":
    "Ангиллын хэсэгт захиалгын код байгаагүй. Энэ нь ACT1250 тохиргоо биш. Dell дээрх ангиллын үнэ тохируулагчаар өөрчлөгдөнө. Хавтан мөн $11,499.99 тооцоолсон үнэ харуулсан бөгөөд түүнийг энд хоёр дахь зах зээлийн үнэ гэж оруулаагүй.",
  "The Dell category tile did not state stock.": "Dell-ийн ангиллын хавтан нөөц дурдаагүй.",
  "A second Aurora preset on the same page, with a Ryzen 9 9950X3D2, had no price in the text that was captured, so it is not listed.":
    "Нэг хуудсан дээрх хоёр дахь Aurora тохиргоо, Ryzen 9 9950X3D2-той, авсан текстэд үнэгүй байсан тул жагсаагаагүй.",
  "Dell RTX 5090 gaming desktops": "Dell RTX 5090 тоглоомын ширээний компьютер",
};

export function phrase(lang: Lang, text: string): string {
  if (lang === "en") return text;
  return phrases[text] ?? text;
}

export function titleForPath(pathname: string, lang: Lang): string | null {
  if (pathname === "/") return translate(lang, "meta.home");
  if (pathname === "/gaming-pcs") return translate(lang, "meta.gaming");
  if (pathname === "/compare") return translate(lang, "meta.compare");
  if (pathname === "/services") return translate(lang, "meta.services");
  if (pathname === "/services/it") return translate(lang, "meta.it");
  if (pathname === "/services/smart-cards") return translate(lang, "meta.cards");
  if (pathname === "/services/consulting") return translate(lang, "meta.consulting");
  if (pathname === "/about") return translate(lang, "meta.about");
  if (pathname === "/contact") return translate(lang, "meta.contact");
  return null;
}
