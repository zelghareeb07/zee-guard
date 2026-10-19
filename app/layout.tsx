import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { fontVariables } from "./fonts";
import "./globals.css";
import ScrollToTopButton from "@/components/ui/up-button";
import SocilaMediaIcons from "@/components/ui/socialMediaIcons";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zee-guard.com"),
  title: {
    default: "ZeeGuard",
    template: "%s | ZeeGuard",
  },
  alternates: {
    canonical: "/",
  },
  description:
    "Dentist-made custom-fit mouthguards trusted by national-level athletes in Karate, MMA, Boxing and Kickboxing.",
  openGraph: {
    title: "ZeeGuard | Custom Protection for Elite Fighters",
    description:
      "Dentist-made custom-fit mouthguards trusted by national-level athletes in Karate, MMA, Boxing and Kickboxing.",
    siteName: "ZeeGuard",
    type: "website",
    url: "https://www.zee-guard.com/",
    images: [
      {
        url: "https://www.zee-guard.com/images/Logo.webp",
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ZeeGuard | Custom Protection for Elite Fighters",
    description:
      "Dentist-made custom-fit mouthguards trusted by International-level athletes in Karate, MMA, Boxing and Kickboxing.",
    images: ["/images/Logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
          <Analytics />
        </main>
        <ScrollToTopButton />
        <SocilaMediaIcons />
        <Footer />
      </body>
    </html>
  );
}
