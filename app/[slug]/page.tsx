import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentCTA } from "@/components/appointment-cta";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { faqItems, pages } from "@/content/pages";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };
const specialSlugs = ["preguntas-frecuentes", "contacto", "blog", "privacidad"];

export function generateStaticParams() { return [...pages.map(({ slug }) => ({ slug })), ...specialSlugs.map((slug) => ({ slug }))]; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((entry) => entry.slug === slug);
  const specials: Record<string, [string,string]> = {
    "preguntas-frecuentes": ["Preguntas frecuentes", "Respuestas generales sobre ortodoncia, brackets, alineadores y la valoración inicial."],
    contacto: ["Contacto y citas", "Contacte a Ovares Ortodoncia y agende una valoración con la Dra. Catalina Ovares."],
    blog: ["Blog de ortodoncia", "Recursos educativos sobre ortodoncia, alineadores dentales, brackets y cuidado de la sonrisa."],
    privacidad: ["Política de privacidad", "Información sobre privacidad y tratamiento de datos en el sitio de Ovares Ortodoncia."],
  };
  const meta = page ? [page.title, page.description] : specials[slug];
  if (!meta) return {};
  return { title: meta[0], description: meta[1], alternates: { canonical: `/${slug}` }, openGraph: { title: meta[0], description: meta[1], url: `/${slug}`, type: "website" }, twitter: { card: "summary", title: meta[0], description: meta[1] } };
}

export default async function ContentRoute({ params }: Props) {
  const { slug } = await params;
  if (slug === "preguntas-frecuentes") return <FAQPage />;
  if (slug === "contacto") return <ContactPage />;
  if (slug === "blog") return <BlogPage />;
  if (slug === "privacidad") return <PrivacyPage />;
  const page = pages.find((entry) => entry.slug === slug);
  if (!page) notFound();
  const breadcrumbSchema = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:siteConfig.url},{"@type":"ListItem",position:2,name:page.title,item:`${siteConfig.url}/${page.slug}`}] };
  return <main><JsonLd data={breadcrumbSchema} /><section className="page-hero"><div className="shell"><Breadcrumbs current={page.title} /><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p></div></section>
    {page.slug === "dra-catalina-ovares" && <section className="doctor-feature shell"><Image src={siteConfig.doctorImage} alt="Dra. Catalina Ovares, especialista en ortodoncia y alineadores dentales" width={1254} height={1254} sizes="(max-width: 760px) 100vw, 48vw" /><div><span className="eyebrow">OVARES ORTODONCIA</span><h2>Precisión profesional, trato cercano.</h2><p>Una sonrisa es personal. Por eso, cada conversación, valoración y plan comienza por comprender a la persona detrás de ella.</p></div></section>}
    <div className="article-sections shell">{page.sections.map((section,index) => <section key={section.title}><span className="section-index">0{index+1}</span><div><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</div></section>)}</div>
    {page.faqs && <section className="inline-faq shell"><span className="eyebrow">DUDAS COMUNES</span><h2>Preguntas sobre {page.title.toLowerCase()}</h2>{page.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>}
    <Related current={page.slug} /><AppointmentCTA title={`Da el primer paso hacia tu ${page.slug === "dra-catalina-ovares" ? "próxima sonrisa" : "tratamiento"}`} />
  </main>;
}

function Related({ current }: { current: string }) {
  const links = pages.filter((p) => p.slug !== current && ["ortodoncia","alineadores-dentales","brackets"].includes(p.slug)).slice(0,2);
  return <nav className="related shell" aria-label="Contenido relacionado"><span className="eyebrow">TAMBIÉN PUEDE INTERESARTE</span>{links.map((item) => <Link key={item.slug} href={`/${item.slug}`}><span>{item.title}</span><b aria-hidden="true">↗</b></Link>)}</nav>;
}

function FAQPage() {
  const schema = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity:faqItems.map((item) => ({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}})) };
  return <main><JsonLd data={schema} /><section className="page-hero"><div className="shell"><Breadcrumbs current="Preguntas frecuentes" /><span className="eyebrow">INFORMACIÓN PARA DECIDIR</span><h1>Preguntas frecuentes</h1><p>Respuestas generales para entender mejor la ortodoncia y prepararte para una valoración.</p></div></section><section className="faq-page shell">{faqItems.map((item,index) => <details key={item.question}><summary><span>0{index+1}</span>{item.question}</summary><p>{item.answer}</p></details>)}<p className="medical-note">Esta información es educativa y no sustituye una evaluación profesional ni constituye un diagnóstico.</p></section><AppointmentCTA /></main>;
}

function ContactPage() {
  return <main><section className="page-hero compact"><div className="shell"><Breadcrumbs current="Contacto" /><span className="eyebrow">ESTAMOS PARA ATENDERTE</span><h1>Agenda tu valoración.</h1><p>Elige el canal que prefieras. La ubicación y los horarios se confirmarán directamente al coordinar tu cita.</p></div></section><section className="contact-layout shell"><div><h2>Comencemos</h2><a className="button" href={siteConfig.appointment} target="_blank" rel="noreferrer" data-event="appointment_click">Agendar en HuliVida</a></div><address><div><span>Teléfono</span><a href={siteConfig.phoneHref} data-event="phone_click">{siteConfig.phone}</a></div><div><span>Correo</span><a href={`mailto:${siteConfig.email}`} data-event="email_click">{siteConfig.email}</a></div><div><span>Instagram</span><a href={siteConfig.instagram} target="_blank" rel="noreferrer" data-event="instagram_click">@ovares_ortodoncia</a></div></address></section></main>;
}

function BlogPage() {
  const topics = ["Alineadores dentales vs. brackets","Cómo funcionan los alineadores","Cuidados durante la ortodoncia","Qué ocurre en la primera valoración"];
  return <main><section className="page-hero"><div className="shell"><Breadcrumbs current="Blog" /><span className="eyebrow">GUÍAS PARA TU SONRISA</span><h1>Información que te acompaña.</h1><p>Este espacio crecerá con recursos educativos revisados profesionalmente y escritos para resolver dudas reales.</p></div></section><section className="blog-upcoming shell"><h2>Próximos temas</h2><ol>{topics.map((topic,index) => <li key={topic}><span>0{index+1}</span>{topic}</li>)}</ol><p>Los artículos se publicarán con autoría, fecha, revisión y referencias cuando corresponda.</p></section><AppointmentCTA /></main>;
}

function PrivacyPage() {
  return <main><section className="page-hero compact"><div className="shell"><Breadcrumbs current="Privacidad" /><span className="eyebrow">TRANSPARENCIA</span><h1>Política de privacidad</h1><p>Información general sobre el uso de este sitio y sus canales de contacto.</p></div></section><article className="legal shell"><h2>Datos y contacto</h2><p>Este sitio no solicita ni almacena expedientes clínicos. Al utilizar enlaces externos para agendar o contactar, aplican las políticas del proveedor correspondiente.</p><h2>Analítica</h2><p>El sitio está preparado para usar Google Analytics 4 únicamente cuando se configure un identificador válido. Esa herramienta puede recopilar datos técnicos y de navegación según su configuración.</p><h2>Información médica</h2><p>El contenido publicado tiene fines informativos y no sustituye una consulta, diagnóstico o tratamiento profesional.</p><h2>Consultas</h2><p>Para preguntas sobre privacidad, escriba a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></article></main>;
}
