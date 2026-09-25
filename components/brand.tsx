import Link from "next/link";

export function Brand() {
  return <Link className="brand" href="/" aria-label="Ovares Ortodoncia, inicio"><svg aria-hidden="true" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 9 24 39 36 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" /></svg><span><b>OVARES</b><small>ORTODONCIA</small></span></Link>;
}
