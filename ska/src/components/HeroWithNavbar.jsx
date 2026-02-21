import { NavLink } from "react-router-dom";
import {
  Phone,
  ArrowDownToLine,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import hero1 from "../assets/hero_img.png";
import hero2 from "../assets/canal_img.png";
import hero3 from "../assets/building.png"
const navLinkClass = ({ isActive }) =>
  [
    "text-sm font-medium transition",
    isActive ? "text-white" : "text-white/85 hover:text-white",
  ].join(" ");

export default function HeroWithNavbar() {
  const slides = useMemo(() => [hero1, hero2, hero3], []);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className={[
                "absolute inset-0 h-full w-full object-cover object-top",
                "transition-opacity duration-700 ease-in-out",
                i === active ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

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
                <span className="hover:underline decoration-1 text-amber-400 text-lg underline-offset-8">
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
                <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
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

                  <NavLink
                    to="/projects"
                    className={navLinkClass}
                    onClick={close}
                  >
                    <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                      Project
                    </div>
                  </NavLink>

                  <NavLink
                    to="/services"
                    className={navLinkClass}
                    onClick={close}
                  >
                    <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                      Services
                    </div>
                  </NavLink>

                  <NavLink
                    to="/careers"
                    className={navLinkClass}
                    onClick={close}
                  >
                    <div className="rounded-lg px-3 py-2 hover:bg-slate-50 text-gray-700">
                      Careers
                    </div>
                  </NavLink>

                  <NavLink
                    to="/whyus"
                    className={navLinkClass}
                    onClick={close}
                  >
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

        <div className="relative z-10 mx-auto flex w-full max-w-7xl px-2 pb-14 pt-28 lg:px-4 lg:pt-32">
          <div className="max-w-2xl mt-10">
            <h1 className="text-3xl font-semibold drop-shadow md:text-5xl text-white leading-tight">
              Building India Through Precision, Scale &{" "}
              <br className="hidden sm:block" /> Engineering
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="mt-5 max-w-[62ch] text-base leading-7 text-white/85 md:text-[17px] font-semibold">
              SKA Alliance represents a consortium of experienced infrastructure companies with a proven track record in government and PSU projects. As a newly incorporated entity, the Alliance functions as a strategic coordination and capability platform, drawing upon group credentials and domain expertise.
            </p>

            <div className="mt-7 flex flex-row gap-5 mt-20">
              <NavLink
                to="/projects"
                className=" items-center gap-2 rounded-[6px]
              bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hidden md:inline-flex
              px-12 py-2.5 text-sm font-bold text-white
              shadow-xl shadow-amber-500/40 transition-all duration-300
              hover:from-amber-500 hover:via-amber-600 hover:to-amber-700
              hover:shadow-amber-600/60 hover:-translate-y-0.5 active:translate-y-0" 
              >
                Know More <span aria-hidden="true">›</span>
              </NavLink>

              <NavLink
                className="items-center gap-2 rounded-[6px] hidden md:inline-flex
              px-6 py-2.5 text-sm font-bold text-white border border-white/30
              shadow-lg shadow-black/40 transition-all duration-300
              hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                Download Profile <ArrowDownToLine className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
          <button
            onClick={prev}
            className="grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  i === active ? "bg-amber-500" : "bg-white/50 hover:bg-white/80",
                ].join(" ")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <main className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <section className="mx-auto my-7 rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-50 to-white p-6 shadow-[0_6px_18px_rgba(16,24,40,0.06)]">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <h2 className="m-0 text-[22px] font-extrabold leading-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Why SKA Alliance
                </h2>
              </div>

              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] text-slate-600">
                Reliable • Scalable • Execution-Driven
              </span>
            </div>

            <ul className="m-0 grid gap-3 pl-5 text-[15.5px] leading-7 font-bold text-slate-900">
              <li>
                35+ years of government project execution
              </li>
              <li>
                  Multi-state presence
              </li>
              <li>
                  Strong in-house engineering QC capability
              </li>
              <li>
                  Technology-enabled operations: GPS, MIS dashboards, digital monitoring
              </li>
              <li>Proven performance with SECL, SECR, WRD, PHED 
              </li>
            </ul>
            <div className="mt-6 flex justify-center">
  <NavLink
    to="/whyus"
    className="inline-flex items-center rounded-md bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:from-amber-500 hover:to-amber-700"
  >
    Learn More
  </NavLink>
</div>
          </section>
        </div>
      </main>
    </>
  );
}
