import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julieta Vitale | Abogada Penalista",
  description: "Defensa penal estratégica, atención de urgencias y acompañamiento profesional en Buenos Aires.",
  openGraph: {
    title: "Julieta Vitale | Abogada Penalista",
    description: "Defensa penal estratégica, atención de urgencias y acompañamiento profesional en Buenos Aires.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Julieta Vitale — Abogada Penalista" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julieta Vitale | Abogada Penalista",
    description: "Defensa penal estratégica y acompañamiento profesional.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
