import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import bgImg from "../assets/about_img.png";

const values = [
  "Integrity & Transparency",
  "Technical Excellence",
  "Safety & Compliance",
  "Collaborative Execution",
  "Long-term Partnerships",
];

const presencePoints = [
  "3 states including Chhattisgarh, Jharkhand and Odisha.",
  "Regional coordination offices for streamlined project oversight.",
  "Collaborations with local agencies and contractors for agile execution.",
];

const projectsPoints = [
  "Civil, mining, and public infrastructure projects spanning WRD, PHED, Mining, and Railways.",
  "Sustainable and technology-driven execution under SKA Infratech Pvt. Ltd.",
  "Prestigious recognition for high-quality government construction execution.",
  "Project management with a blend of tradition, precision, and future-forward thinking.",
];

const leaders = [
  {
    name: "Sunil Kumar Agrawal",
    role: "Chairman | Group Leadership",
    bio: "A senior industry leader with decades of experience in mining, civil infrastructure, and government contracting. He provides strategic direction and governance oversight to group companies, with a strong focus on execution discipline, compliance, and long-term capacity building.",
    img: "https://www.skaalliance.in/chairman.jpg",
  },
  {
    name: "Vaibhav Agrawal",
    role: "Director | Strategy & Operations",
    bio: "Responsible for strategic planning, project structuring, and operational systems across group entities. Actively involved in mining operations, railway infrastructure, WRD projects, and Jal Jeevan Mission works, with a focus on process standardization, digital monitoring, safety engineering, and scalable execution models.",
    img: "https://www.skaalliance.in/managing-director.png",
  },
  {
    name: "Abhishek Nangalia",
    role: "Strategic Lead – WRD & Hydraulic Infrastructure",
    bio: "Leads planning and execution support for water resource and hydraulic infrastructure projects, including canals, barrages, embankments, and flood control works. Brings domain expertise in WRD specifications, tendering, and project coordination.",
    img: "https://www.skaalliance.in/board-member-1.png",
  },

];

const navLinkClass = () => "text-sm font-medium transition";

function CheckIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 011.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

/*anchor scroll */
function useAnchorScroll() {
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

function Navbar() {
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
            <span className="hover:underline decoration-1 text-amber-400 text-lg underline-offset-8">
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

function Hero() {
  return (
    <section className="relative">
      <div
        className="relative w-full bg-slate-900"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/45 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] max-w-7xl items-end px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                About SKA Alliance
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-white/90">
                SKA Alliance is a group brand and strategic platform representing
                the collective experience, technical capabilities, and execution
                strength of its associated and group companies operating in the
                infrastructure, mining, and civil construction sectors.
              </p>

              <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                The Alliance brings together decades of on-ground execution
                experience across large-scale government and PSU projects,
                including mining infrastructure, railway civil works, water
                resource engineering, drinking water supply schemes, and civil
                EPC projects.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#overview"
                  className="w-full sm:w-auto rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-700 text-center"
                >
                  Explore Overview
                </a>
                <a
                  href="#leadership"
                  className="w-full sm:w-auto rounded-[6px] bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15 text-center"
                >
                  Meet Leadership
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionCard({ title, children }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function AboutSkaAlliance() {
  useAnchorScroll();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div className="h-[72px]" />

      <Hero />

      <main id="overview" className="py-10 scroll-mt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 min-w-0">
              <SectionCard title="Our Role & Approach">
                <p className="mt-3 text-slate-700 font-semibold">
                  SKA Alliance has been formed to:
                </p>

                <ul className="mt-4 space-y-2">
                  {[
                    "Present a unified professional identity for group capabilities",
                    "Enable strategic coordination across projects, teams, and stakeholders",
                    "Support pre-bid planning, technical management, and execution oversight",
                    "Facilitate collaboration for large and complex government tenders",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <CheckIcon className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-slate-700 leading-relaxed">
                  While SKA Alliance is a newly incorporated entity, it leverages
                  the proven credentials and execution track record
                  of its group and associate companies.
                </p>

                <div className="mt-8 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900 pb-5">
                    Group Experience
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">
                    The group companies associated with SKA Alliance have successfully executed and are executing projects for:

                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {[
                      "Indian Railways / SECR",
                      "Coal & Mining PSUs",
                      "Water Resources Departments",
                      "Public Health Engineering & Jal Jeevan Mission",
                      "Urban & Institutional Infrastructure",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                   Projects range from earthwork, bridges, track infrastructure, and staff quarters to pipelines, intake wells, barrages, and RCC civil structures, executed in compliance with applicable specifications, safety standards, and contractual obligations.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Compliance &amp; Transparency
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {[
                      "Project details displayed on this website relate to works executed by group companies or associates",
                      "SKA Alliance does not independently claim execution unless explicitly stated",
                      "Final eligibility, scope, and credentials remain subject to tender conditions and statutory requirements",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionCard>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    To deliver reliable, resource-efficient, and high-quality
                    infrastructure for public development while upholding trust,
                    discipline, and long-term impact.
                  </p>
                </section>

                <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    To evolve as a trusted group platform delivering coordinated,
                    high-quality infrastructure solutions for government and PSU
                    clients, while upholding integrity, compliance, and execution
                    excellence.
                  </p>
                </section>
              </div>

              <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Our Values
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {values.map((v) => (
                    <div
                      key={v}
                      className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200"
                    >
                      <CheckIcon className="h-5 w-5 text-amber-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Presence
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    SKA Alliance has built a pan-India presence by successfully
                    executing critical infrastructure works in:
                  </p>

                  <ul className="mt-5 space-y-3 text-sm text-slate-700">
                    {presencePoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Projects
                  </h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    Redefining excellence, SKA Alliance has contributed to India’s
                    growth through:
                  </p>

                  <ul className="mt-5 space-y-3 text-sm text-slate-700">
                    {projectsPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            <aside id="leadership" className="lg:col-span-5 scroll-mt-24">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:sticky lg:top-24">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Leadership
                  </h3>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                    Team
                  </span>
                </div>

                <div className="mt-6 space-y-5">
                  {leaders.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
                          <img
                            src={p.img}
                            alt={p.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-base font-semibold text-slate-900">
                            {p.name}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-amber-700">
                            {p.role}
                          </p>
                          {p.bio ? (
                            <p className="mt-2 text-sm leading-relaxed text-slate-700">
                              {p.bio}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </main>
    </div>
  );
}
