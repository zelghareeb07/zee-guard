import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/container";
import { DesignerStudio } from "@/components/sections/designer-studio";
import { WHATSAPP_LINK } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Custom Mouthguard Designer",
  alternates: { canonical: "/designer" },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Create a custom mouthguard design with ZeeGuard. Choose a model, personalize colors and text, upload artwork, preview your design, and download it as a PNG.",
};

export default function DesignerPage() {
  return (
    <>
      <Section className="pt-10">
        <Container>
          <div className="mx-auto mb-6 max-w-3xl rounded-2xl border border-blaze-500/20 bg-blaze-500/5 px-4 py-4 text-center sm:px-8 sm:py-5 mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Your design, your way
            </p>
            <p className="mt-2 text-base font-semibold leading-relaxed text-foreground sm:text-lg">
              Customize your mouthguard, download your PNG, then send it to us
              on{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-green-500 underline decoration-green-500/40 underline-offset-4 transition-colors hover:text-green-600"
              >
                WhatsApp
              </a>
              .
            </p>
            <p className="mt-1 text-xs md:text-sm leading-6 font-extralight text-muted-foreground">
              Choose your colors and add text or artwork to make it yours.
            </p>
          </div>
          <DesignerStudio />
        </Container>
      </Section>
    </>
  );
}
