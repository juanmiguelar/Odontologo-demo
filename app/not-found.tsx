import Link from "next/link";

export default function NotFound() {
  return <main className="page-hero"><div className="shell"><span className="eyebrow">ERROR 404</span><h1>Esta página no está aquí.</h1><p>Podés volver al inicio o explorar nuestros tratamientos.</p><div className="button-row"><Link className="button" href="/">Volver al inicio</Link><Link className="text-link" href="/ortodoncia">Ver ortodoncia →</Link></div></div></main>;
}
