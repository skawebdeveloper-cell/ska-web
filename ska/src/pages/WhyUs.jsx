import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X, Users, Workflow, FileText, CheckCircle2 } from "lucide-react";

import heroImg from "../assets/hero_img.png";
import networkImg from "../assets/networking.png";
import engineeringImg from "../assets/engineering.png";
import dashboardImg from "../assets/dashboard.png";
import proof1Img from "../assets/mining_img.jpg";
import proof2Img from "../assets/hero_img.png";

const ASSETS = {
  hero: heroImg,
  network: networkImg,
  engineering: engineeringImg,
  dashboard: dashboardImg,
  proof1: proof1Img,
  proof2: proof2Img,
};

const navLinkClass = () => "text-sm font-medium transition";

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
            <span className="hover:underline decoration-1 text-amber-400 text-lg underline-offset-8">
              Why us
            </span>
          </NavLink>
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <NavLink
            to="/contact"
            onClick={close}
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

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function Hero() {
  return (
    <section className="relative">
      <div className="h-[72px]" />

      <div
        className="relative w-full bg-slate-900"
        style={{
          backgroundImage: `url(${ASSETS.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[680px]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-slate-900/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[520px] sm:min-h-[640px] lg:min-h-[680px] max-w-7xl items-end px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Why SKA Alliance
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-white/90">
                SKA Alliance is a strategic group platform that brings together the collective
                experience, execution strength, and domain expertise of its group and associate
                companies operating in public infrastructure sectors.
              </p>

              <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
                Rather than functioning as a standalone execution entity, SKA Alliance enables
                structured coordination, planning support, and governance alignment across mining,
                railway, water resources, and civil infrastructure projects undertaken by group
                companies.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <NavLink
                  to="/projects"
                  className="w-full sm:w-auto text-center rounded-md bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow hover:from-amber-500 hover:to-amber-700"
                >
                  Explore Group Experience
                </NavLink>
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto text-center rounded-md bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 hover:bg-white/15"
                >
                  Connect With Our Team
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="text-center">
      {kicker && (
        <div className="text-sm font-semibold tracking-[0.18em] text-slate-700">{kicker}</div>
      )}
      <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">{title}</h2>
      {desc && (
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{desc}</p>
      )}
    </div>
  );
}

function StatCard({ label, value, sub, bullets = [] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
      <div className="text-3xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-2 text-sm font-semibold text-slate-700">{label}</div>
      {sub && <div className="mt-2 text-xs text-slate-600">{sub}</div>}

      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2 text-xs text-slate-700">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-amber-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function NumberCard({ title, desc, icon: Icon, bullets = [], imageSrc, imageAlt }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
      {imageSrc ? (
        <div className="relative h-44 sm:h-48 w-full">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
        </div>
      ) : null}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="text-base font-extrabold text-slate-900">{title}</div>
          <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
            <Icon className="h-5 w-5 text-slate-800" />
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>

        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b, index) => (
              <li key={`${title}-bullet-${index}`} className="flex gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function WhyUsPage() {
  const stats = [
    {
      label: "Collective Execution Experience",
      value: "1️⃣",
      bullets: [
        "Exposure to SECL, SECR, WRD, PHED & JJM frameworks",
        "Experience across mining, railway, hydraulic & civil works",
        "Understanding of PSU systems, approvals & compliance",
      ],
    },
    {
      label: "Strong On-Ground Network",
      value: "2️⃣",
      bullets: [
        "Site-ready engineering & supervision teams",
        "Proven subcontractor & supplier relationships",
        "Familiarity with local conditions & statutory processes",
      ],
    },
    {
      label: "Structured Governance & Oversight",
      value: "3️⃣",
      bullets: [
        "Pre-bid technical coordination",
        "Resource planning & mobilization strategy",
        "Safety & quality framework alignment",
        "Periodic review & performance tracking",
      ],
    },
    {
      label: "Systems-Driven & Data-Supported Approach",
      value: "4️⃣",
      bullets: ["Standardized reporting & MIS structures", "Cost, progress & compliance monitoring", "Digital documentation & review workflows"],
    },
    {
      label: "Future-Ready Group Platform",
      value: "5️⃣",
      bullets: ["Respond to larger & more complex tenders", "Maintain governance discipline", "Build sustainable systems beyond individual projects"],
    },
  ];

  const pillars = [
    {
      icon: Workflow,
      title: "Collective Execution Experience",
      imageSrc: ASSETS.network,
      imageAlt: "Group experience across PSU and government projects",
      desc:
        "SKA Alliance represents decades of combined experience developed by its group companies through sustained work on government and PSU projects.",
      bullets: [
        "Exposure to SECL, SECR, WRD, PHED & JJM frameworks",
        "Experience across mining, railway, hydraulic & civil works",
        "Understanding of PSU systems, approvals, and compliance",
      ],
    },
    {
      icon: Users,
      title: "Strong On-Ground Network",
      imageSrc: ASSETS.engineering,
      imageAlt: "On-ground teams and vendor network",
      desc:
        "The Alliance benefits from established field teams, vendor networks, and site-level leadership built over years of project execution by group entities.",
      bullets: [
        "Site-ready engineering & supervision teams",
        "Proven subcontractor & supplier relationships",
        "Familiarity with local conditions & statutory processes",
      ],
    },
    {
      icon: FileText,
      title: "Structured Governance & Oversight",
      imageSrc: ASSETS.dashboard,
      imageAlt: "Governance and monitoring support",
      desc:
        "SKA Alliance strengthens group performance through centralized planning, monitoring, and governance support, helping ensure consistency across projects.",
      bullets: [
        "Pre-bid technical coordination",
        "Resource planning & mobilization strategy",
        "Safety & quality framework alignment",
        "Periodic review & performance tracking",
      ],
    },
  ];

  const futureBullets = [
    "Respond to larger & more complex tenders",
    "Maintain governance discipline",
    "Build sustainable systems beyond individual projects",
  ];

  const clientReasons = ["Government departments", "Public Sector Undertakings (PSUs)", "Infrastructure consultants & EPC partners"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />
      <Hero />

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <SectionTitle
            title={
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                What Differentiates SKA Alliance
              </span>
            }
            desc="A PSU-safe positioning focused on coordination, governance support, and group capability alignment."
          />

          <div className="mt-8 sm:mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <SectionTitle
            title={
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Core Pillars
              </span>
            }
            desc="Key capability areas supported through the Alliance platform."
          />

          <div className="mt-8 sm:mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <NumberCard key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <SectionTitle
            title={
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Future-Ready Group Platform
              </span>
            }
            desc="Established with a long-term vision to evolve as a unified infrastructure group platform, supporting scalable growth, capability enhancement, and compliance-driven execution."
          />

          <div className="mt-8 sm:mt-10 grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <div className="text-sm font-bold text-slate-900">This approach allows the group to:</div>
              <ul className="mt-4 space-y-3">
                {futureBullets.map((r, index) => (
                  <li key={`future-${index}`} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-sm font-bold text-slate-900">Who We Work With</div>
              <ul className="mt-4 space-y-3">
                {clientReasons.map((r, index) => (
                  <li key={`reason-${index}`} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-600" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900 p-7 sm:p-8 text-white shadow-[0_10px_30px_rgba(15,23,42,0.15)]">
              <div className="text-sm font-semibold tracking-[0.18em] text-white/80">CONNECT</div>
              <h3 className="mt-3 text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Engage with our group platform for coordinated delivery and governance alignment.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                SKA Alliance supports structured coordination, planning, and monitoring across group and associate company projects.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <NavLink
                  to="/projects"
                  className="w-full sm:w-auto text-center rounded-md bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow hover:from-amber-500 hover:to-amber-700"
                >
                  Explore Group Experience
                </NavLink>
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto text-center rounded-md bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 hover:bg-white/15"
                >
                  Connect With Our Team
                </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
