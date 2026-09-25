"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global { interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void } }

export function Analytics({ id }: { id?: string }) {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-event]");
      if (target?.dataset.event && window.gtag) window.gtag("event", target.dataset.event);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  if (!id) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" /><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}');`}</Script></>;
}
