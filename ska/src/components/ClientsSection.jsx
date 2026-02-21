import React, { useEffect, useMemo, useRef } from "react";

const CLIENTS = [
  { name: "CGWRD", url: "https://www.cgwrd.in/", logo: "/src/assets/cg_logo.jpg" },
  { name: "Water Resources", url:"https://dowr.odisha.gov.in/", logo: "/src/assets/logo-2.jpg" },
  { name: "SECL (Raigarh Area)", url:"https://secl-cil.in/index", logo: "/src/assets/logo-3.jpg" },
  { name: "South East Central Railway", url:"https://secr.indianrailways.gov.in/?lang=1", logo: "/src/assets/logo-4.webp" },
  { name: "Water & Power Infrastructure", url:"https://www.wapcos.co.in/hindi/", logo: "/src/assets/logo-5.png" },
  { name: "Govt. (State Emblem)", url:"https://pwd.cg.nic.in/", logo: "/src/assets/logo-6.png" },
  { name: "Phed", url:"https://phed.cg.nic.in/", logo: "/src/assets/logo-7.png" },
];
export default function OurClients() {
  const trackRef = useRef(null);

  const looped = useMemo(() => [...CLIENTS, ...CLIENTS], []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId = 0;
    let last = performance.now();
    let paused = false;

    const SPEED_PX_PER_SEC = 45;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!paused) {
        el.scrollLeft += SPEED_PX_PER_SEC * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const onEnter = () => (paused = true);
    const onLeave = () => {
      paused = false;
      last = performance.now();
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("pointerdown", onEnter);
    el.addEventListener("pointerup", onLeave);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("pointerdown", onEnter);
      el.removeEventListener("pointerup", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            OUR CLIENTS
          </span>
        </div>
        <div className="mt-20 rounded-3xl border border-slate-200 bg-white/70 px-6 py-6 shadow-sm backdrop-blur">
          <div
            ref={trackRef}
            className="
              flex items-center gap-6 py-20
              overflow-x-auto whitespace-nowrap
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              cursor-grab active:cursor-grabbing
            "
          >
            {looped.map((c, idx) => (
              <a
                key={`${c.name}-${idx}`}
                href={c.url || "#"}
                target={c.url ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={(e) => !c.url && e.preventDefault()}
                className="
                  shrink-0 w-48
                  rounded-2xl border border-slate-200 bg-white
                  shadow-[0_8px_22px_rgba(15,23,42,0.06)]
                  transition hover:-translate-y-0.5
                "
              >
                <div className="flex h-28 items-center justify-center p-4">
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-14 object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                <div className="border-t border-slate-100 py-2 text-center text-xs font-medium text-slate-500">
                  {c.name}
                </div>
              </a>
            ))}
          </div>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 rounded-l-3xl bg-gradient-to-r from-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 rounded-r-3xl bg-gradient-to-l from-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
