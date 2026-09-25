import Link from "next/link";
import { Brand } from "./brand";
import { navigation, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner"><Brand /><nav className="desktop-nav" aria-label="Navegación principal">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><a className="button button-small" href={siteConfig.appointment} target="_blank" rel="noreferrer" data-event="appointment_click">Agendar cita</a><details className="mobile-menu"><summary aria-label="Abrir menú"><span /><span /><span /></summary><nav aria-label="Navegación móvil">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contacto">Contacto</Link></nav></details></div></header>;
}
