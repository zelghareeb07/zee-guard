// app/fonts.tsx
import {
  Oswald,
  Inter,
  Lato,
  Playfair_Display,
  Dancing_Script,
  Noto_Naskh_Arabic,
} from "next/font/google";
import localFont from "next/font/local";

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: '--font-oswald',
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-inter',
});

export const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-noto-arabic',
});

export const lato = Lato({
  subsets: ["latin"],
  weight: "700",
  variable: '--font-lato',
});

export const copperplate = localFont({
  src: "./fonts/Copperplate Gothic bold.otf",
  weight: "400",
  variable: "--font-copperplate",
  display: "swap",
});

export const copperplateRegular = localFont({
  src: "./fonts/Copperplate Gothic Regular.otf",
  weight: "400",
  variable: "--font-copperplate-regular",
  display: "swap",
});

export const broadacre = localFont({
  src: "./fonts/College Block.otf",
  weight: "400",
  variable: "--font-broadacre",
  display: "swap",
});

export const bebasNeue = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const freakdrip = localFont({
  src: "./fonts/Freakdrip.otf",
  weight: "400",
  variable: "--font-freakdrip",
  display: "swap",
});

export const akarRumput = localFont({
  src: "./fonts/AkarRumput-JRZzx.ttf",
  weight: "400",
  variable: "--font-akar-rumput",
  display: "swap",
});

export const arslanWessamArabic = localFont({
  src: "./fonts/(A) Arslan Wessam Arabic.ttf",
  weight: "400",
  variable: "--font-arslan-wessam-arabic",
  display: "swap",
});

export const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-playfair',
});

export const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-dancing',
});

const getPrimaryFontFamily = (fontFamily: string) =>
  fontFamily.split(",")[0].replace(/["']/g, "").trim();

export const FONT_FAMILIES = [
  {
    name: "Oswald Bold",
    value: "var(--font-oswald), Oswald, sans-serif",
    family: getPrimaryFontFamily(oswald.style.fontFamily),
    weight: "700",
  },
  {
    name: "Broadacre Regular",
    value: "var(--font-broadacre), sans-serif",
    family: getPrimaryFontFamily(broadacre.style.fontFamily),
    weight: "400",
  },
  {
    name: "Bebas Neue",
    value: "var(--font-bebas-neue), sans-serif",
    family: getPrimaryFontFamily(bebasNeue.style.fontFamily),
    weight: "400",
  },
  {
    name: "Freakdrip",
    value: "var(--font-freakdrip), sans-serif",
    family: getPrimaryFontFamily(freakdrip.style.fontFamily),
    weight: "400",
  },
  {
    name: "Akar Rumput",
    value: "var(--font-akar-rumput), sans-serif",
    family: getPrimaryFontFamily(akarRumput.style.fontFamily),
    weight: "400",
  },
  {
    name: "Corporate Gothic",
    value: "var(--font-playfair), 'Playfair Display', serif",
    family: getPrimaryFontFamily(playfair.style.fontFamily),
    weight: "900",
  },
  {
    name: "Playlist Script",
    value: "var(--font-dancing), 'Dancing Script', cursive",
    family: getPrimaryFontFamily(dancingScript.style.fontFamily),
    weight: "700",
  },
  {
    name: "Arabic Modern",
    value: "var(--font-noto-arabic), 'Noto Naskh Arabic', serif",
    family: getPrimaryFontFamily(notoArabic.style.fontFamily),
    weight: "700",
    supportsArabic: true,
  },
  {
    name: "Arslan Wessam Arabic",
    value: "var(--font-arslan-wessam-arabic), sans-serif",
    family: getPrimaryFontFamily(arslanWessamArabic.style.fontFamily),
    weight: "400",
    supportsArabic: true,
  },
  {
    name: "Copperplate Gothic Regular",
    value: "var(--font-copperplate-regular), sans-serif",
    family: getPrimaryFontFamily(copperplateRegular.style.fontFamily),
    weight: "400",
  },
  {
    name: "Copperplate Gothic Bold",
    value: "var(--font-copperplate), sans-serif",
    family: getPrimaryFontFamily(copperplate.style.fontFamily),
    weight: "400",
  },
];

export const DEFAULT_FONT_FAMILY = FONT_FAMILIES[0].value;

export function getFontFamilyOption(fontFamily?: string, isArabic = false) {
  const selectedFont = FONT_FAMILIES.find(
    (font) =>
      font.value === fontFamily ||
      font.name === fontFamily ||
      font.family === fontFamily,
  );
  const font = selectedFont ?? FONT_FAMILIES[0];

  if (isArabic && !font.supportsArabic) {
    return FONT_FAMILIES.find((candidate) => candidate.name === "Arabic Modern")!;
  }

  return font;
}

export const fontVariables = [
  oswald.variable,
  inter.variable,
  notoArabic.variable,
  lato.variable,
  copperplate.variable,
  copperplateRegular.variable,
  broadacre.variable,
  bebasNeue.variable,
  freakdrip.variable,
  akarRumput.variable,
  arslanWessamArabic.variable,
  playfair.variable,
  dancingScript.variable,
].join(' ');