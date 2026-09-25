export const siteConfig = {
  name: "Ovares Ortodoncia",
  professional: "Dra. Catalina Ovares",
  description: "Ortodoncia y alineadores dentales en Costa Rica con un enfoque personalizado.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ovares-ortodoncia.sharp-panda-5705.chatgpt.site",
  phone: "8856 7056",
  phoneHref: "tel:+50688567056",
  email: "ovaresortodoncia@gmail.com",
  instagram: "https://www.instagram.com/ovares_ortodoncia/",
  appointment: "https://app.hulivida.com/citas/ana-catalina-ovares-ulate",
  doctorImage: "/img/foto/image.png",
} as const;

export const navigation = [
  { href: "/dra-catalina-ovares", label: "Dra. Catalina" },
  { href: "/ortodoncia", label: "Ortodoncia" },
  { href: "/alineadores-dentales", label: "Alineadores" },
  { href: "/brackets", label: "Brackets" },
  { href: "/preguntas-frecuentes", label: "Preguntas" },
] as const;
