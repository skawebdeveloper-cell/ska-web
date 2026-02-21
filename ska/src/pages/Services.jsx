import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import bgImg from "../assets/hero_img.png";

const navLinkClass = () => "text-sm font-medium transition";

const services = [
  {
    id: "mining",
    title: "Mining Infrastructure Services (SECL & PSU Mining)",
    subtitle:
      "Group companies associated with SKA Alliance provide comprehensive mining infrastructure services for large-scale open-cast mining operations under PSU frameworks.",
    image: "/src/assets/mining.png",
    bullets: [
      "OB removal (high-volume operations)",
      "Mine development & excavation",
      "Haul road construction & maintenance",
      "Coal evacuation logistics support",
      "Deployment & management of HEMM fleets",
      "Production planning & operational coordination",
      "Sector Exposure: SECL and allied mining operations",
    ],
  },
  {
    id: "railway",
    title: "Railway Infrastructure Services (SECR & Indian Railways)",
    subtitle:
      "The group brings execution experience in railway civil infrastructure works carried out under live traffic and strict railway safety protocols.",
    image: "/src/assets/railway2.jpg",
    bullets: [
      "Track doubling & third-line works",
      "Major & minor railway bridges",
      "Earthwork, blanketing & drainage",
      "Platform infrastructure & FOBs",
      "Railway staff quarters & service buildings",
      "Allied civil & utility works",
      "Sector Exposure: South East Central Railway (SECR)",
    ],
  },
  {
    id: "wrd",
    title: "Water Resource Engineering (WRD Projects)",
    subtitle:
      "Group companies have executed water resource and hydraulic infrastructure projects for state WRD departments, supporting irrigation and flood management systems.",
    image: "/src/assets/canal.jpeg",
    bullets: [
      "Canals & distributary networks",
      "Barrages, spillways & regulators",
      "Embankments & flood protection works",
      "Hydraulic & energy dissipation structures",
      "Desilting, lining & rehabilitation works",
    ],
  },
  {
    id: "jjm",
    title: "Drinking Water Supply Projects (Jal Jeevan Mission)",
    subtitle:
      "The group’s experience includes execution of multi-village and rural drinking water supply schemes under Jal Jeevan Mission and PHED frameworks.",
    image: "/src/assets/drinking_water.JPG",
    bullets: [
      "Intake wells & jack wells",
      "Pump houses & treatment units",
      "Raw & clear water pipelines",
      "Overhead tanks (OHTs)",
      "Village distribution networks & household connections",
    ],
  },
  {
    id: "civil",
    title: "Building & Civil EPC Services",
    subtitle:
      "Group companies associated with SKA Alliance have delivered civil EPC works for institutional, residential, and public utility infrastructure.",
    image: "/src/assets/building.png",
    bullets: [
      "RCC framed structures",
      "Institutional & residential buildings",
      "Staff quarters & housing projects",
      "Boundary walls & site development",
      "Stormwater drainage & urban utilities",
    ],
  },
  {
    id: "strategic-support",
    title: "Pre-Construction & Strategic Support Services",
    subtitle:
      "SKA Alliance provides non-execution strategic support across group projects, ensuring planning strength and governance discipline.",
    image: "/src/assets/building_const3.png",
    bullets: [
      "Pre-bid planning & technical inputs",
      "Tender evaluation & BOQ review",
      "Resource planning & mobilization strategy",
      "Safety & quality framework alignment",
      "Digital monitoring & MIS structuring",
    ],
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="inset-x-0 top-0 z-20 fixed bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-2 py-4 lg:px-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={close}>
          <div className="h-10">
            <img
              src="https://www.skaalliance.in/logo.png"
              alt="Skaalliance"
              className="h-full w-full object-contain brightness-125 contrast-110"
            />
          </div>
        </NavLink>

        <nav className="hidden flex-1 items-center justify-center gap-14 lg:flex">
          <NavLink to="/" end className={navLinkClass} onClick={close}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Home
            </span>
          </NavLink>

          <NavLink to="/about" className={navLinkClass} onClick={close}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              About
            </span>
          </NavLink>

          <NavLink to="/projects" className={navLinkClass} onClick={close}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Project
            </span>
          </NavLink>

          <NavLink to="/services" className={navLinkClass} onClick={close}>
            <span className="hover:underline decoration-1 text-amber-400 text-lg underline-offset-8">
              Services
            </span>
          </NavLink>

          <NavLink to="/careers" className={navLinkClass} onClick={close}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Careers
            </span>
          </NavLink>

          <NavLink to="/whyus" className={navLinkClass} onClick={close}>
            <span className="text-lg text-gray-600 hover:underline hover:text-amber-400 decoration-1 underline-offset-8">
              Why us
            </span>
          </NavLink>
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <NavLink
            to="/contact"
            className="rounded-[5px] bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-2 font-bold text-sm text-white/90 shadow-lg transition flex gap-2 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 hover:shadow-amber-600/60"
            onClick={close}
          >
            Contact US <Phone />
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((s) => !s)}
          className="ml-auto lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-800"
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex flex-col gap-2">
              <NavLink to="/" end className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                  Home
                </div>
              </NavLink>

              <NavLink to="/about" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                  About
                </div>
              </NavLink>

              <NavLink to="/projects" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                  Project
                </div>
              </NavLink>

              <NavLink to="/services" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                  Services
                </div>
              </NavLink>

              <NavLink to="/careers" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                  Careers
                </div>
              </NavLink>

              <NavLink to="/whyus" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                  Why Us
                </div>
              </NavLink>

              <NavLink
                to="/contact"
                onClick={close}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-2 font-bold text-white shadow-sm"
              >
                Contact Us <Phone className="h-4 w-4" />
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function useAnchorScrollOffset() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href")?.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function ServicesPage() {
  useAnchorScrollOffset();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />

      <div className="h-[72px]" />
      <section className="relative">
        <div
          className="relative w-full bg-slate-900"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />

            <div className="relative mx-auto flex min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] max-w-6xl items-end px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Services
                </h1>

                <p className="mt-4 text-base sm:text-lg font-semibold text-white/90 leading-relaxed">
                  SKA Alliance represents the collective service capabilities of
                  its group and associate companies across key infrastructure
                  sectors supporting government and PSU projects.
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
                  The Alliance functions as a strategic coordination, planning,
                  and capability platform, enabling structured delivery,
                  technical oversight, and execution support through experienced
                  group entities.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#services"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-700 rounded-[6px]"
                  >
                    Explore Services
                  </a>
                  <a
                    href="#cta"
                    className="w-full sm:w-auto text-center bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15 rounded-[6px]"
                  >
                    Contact Strategic Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent md:text-3xl">
                OUR SERVICE DOMAINS
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Service capabilities represented by SKA Alliance through its
                group and associate companies.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:py-16">
          <div className="grid gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,420px)_1fr]">
                  <div className="relative">
                    <div className="aspect-[16/10] md:aspect-auto md:h-full">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <Pill>{s.title}</Pill>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                      {s.subtitle}
                    </p>

                    <div className="mt-6 grid gap-2 grid-cols-1 md:grid-cols-2">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                          <span className="text-sm leading-relaxed text-slate-700">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href="#cta"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm ring-1 ring-amber-300 transition hover:from-amber-500 hover:to-amber-700"
                      >
                        Contact Strategic Team <span aria-hidden>›</span>
                      </a>

                      <a
                        href="#services"
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-[6px] bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
                      >
                        Back to Services{" "}
                        <span aria-hidden className="ml-2">
                          ›
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            id="cta"
            className="scroll-mt-24 mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
          >
            <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-2 md:p-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  How SKA Alliance Adds Value
                </h3>

                <p className="mt-3 text-sm text-slate-700 md:text-base">
                  SKA Alliance strengthens group performance through:
                </p>

                <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2">
                  {[
                    "Centralized strategic oversight",
                    "Cross-project coordination",
                    "Standardized safety & quality systems",
                    "Process-driven execution planning",
                    "Long-term capability development",
                  ].map((v) => (
                    <div key={v} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-amber-400" />
                      <span className="text-sm leading-relaxed text-slate-700">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <NavLink
                    to="/projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[6px] bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    View Group Capabilities <span aria-hidden>›</span>
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm ring-1 ring-amber-300 transition hover:from-amber-500 hover:to-amber-700"
                  >
                    Contact Strategic Team <Phone className="h-4 w-4" />
                  </NavLink>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <img
                  src="/src/assets/map_raipur.png"
                  alt="Map"
                  className="h-56 sm:h-64 w-full object-cover md:h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between gap-2">
                  <Pill>Corporate Office</Pill>
                  <Pill>Pan-India Execution</Pill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
