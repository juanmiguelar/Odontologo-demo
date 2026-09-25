import { siteConfig } from "@/lib/site-config";

export function AppointmentCTA({ title = "Conversemos sobre tu sonrisa" }: { title?: string }) {
  return <section className="cta-band"><div className="shell cta-inner"><div><span className="eyebrow light">VALORACIÓN PERSONALIZADA</span><h2>{title}</h2><p>Una valoración permite conocer tus necesidades y definir las alternativas apropiadas para tu caso.</p></div><a className="button button-cream" href={siteConfig.appointment} target="_blank" rel="noreferrer">Agendar mi valoración</a></div></section>;
}
