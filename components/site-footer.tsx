import Link from "next/link";
import { Brand } from "./brand";
import { navigation, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid"><div><Brand /><p>Ortodoncia y alineadores dentales con atención personalizada en Costa Rica.</p></div><div><h2>Explorar</h2>{navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/blog">Blog</Link></div><div><h2>Contacto</h2><a href={siteConfig.phoneHref} data-event="phone_click">{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`} data-event="email_click">{siteConfig.email}</a><a href={siteConfig.instagram} target="_blank" rel="noreferrer" data-event="instagram_click">Instagram</a></div><div><h2>Tu próxima sonrisa</h2><a className="button" href={siteConfig.appointment} target="_blank" rel="noreferrer">Agendar cita</a></div></div><div className="shell footer-base"><p>El contenido es informativo y no sustituye una valoración profesional.</p><Link href="/privacidad">Privacidad</Link></div></footer>;
}
