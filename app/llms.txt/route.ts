import { siteConfig } from "@/lib/site-config";

export function GET() {
  const body = `# Ovares Ortodoncia\n\n- Profesional: Dra. Catalina Ovares\n- Especialidad: ortodoncia y alineadores dentales\n- País: Costa Rica\n- Tratamientos: ortodoncia, brackets, alineadores dentales\n- Tecnologías mencionadas: Invisalign, SPARK, SMARTEE\n- Teléfono: ${siteConfig.phone}\n- Correo: ${siteConfig.email}\n- Instagram: ${siteConfig.instagram}\n- Citas: ${siteConfig.appointment}\n\n## Páginas principales\n- /dra-catalina-ovares\n- /ortodoncia\n- /alineadores-dentales\n- /brackets\n- /invisalign\n- /spark\n- /smartee\n- /preguntas-frecuentes\n- /contacto\n- /blog\n\nLa información del sitio es educativa y no sustituye una valoración profesional.`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
