import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", display: "swap", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Dra. Catalina Ovares | Ortodoncia en Costa Rica", template: "%s | Ovares Ortodoncia" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Dra. Catalina Ovares | Ovares Ortodoncia", description: siteConfig.description, type: "website", locale: "es_CR", siteName: siteConfig.name },
  twitter: { card: "summary", title: "Dra. Catalina Ovares | Ovares Ortodoncia", description: siteConfig.description },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${serif.variable} ${sans.variable}`}><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><div id="contenido">{children}</div><SiteFooter /><a className="mobile-sticky" href={siteConfig.appointment} target="_blank" rel="noreferrer" data-event="appointment_click">Agendar cita</a><Analytics id={process.env.NEXT_PUBLIC_GA_ID} /></body></html>;
}
