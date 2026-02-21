import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X, Download } from "lucide-react";

const navLinkClass = () => "text-sm font-medium transition";

const ASSETS = {
  hero: "/src/assets/hero_img.png",
  indiaMap:
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/India_Map_800px.png",
  mining: "/src/assets/mining2.png",
  rail: "/src/assets/railway_bridge.png",
  wrd: "/src/assets/chiplima_img.png",
  jjm: "/src/assets/water_treatment_img.png",
  civil: "/src/assets/building_img.png",
  feature: "/src/assets/project_img.jpeg",
};

const projects = [
  {
    id: "mining",
    title: "Mining Projects (SECL)",
    desc: "The mining project portfolio reflects group company execution experience in large-scale open-cast mining operations for South Eastern Coalfields Limited (SECL), including OB removal, mine logistics, and haul road development under challenging geological and operational conditions.",
    scopeTitle: "Scope of Works",
    scope: [
      "OB removal & coal exposure",
      "Mine development & planning support",
      "Haul road construction & maintenance",
      "Deployment of HEMM & logistics coordination",
    ],
    listTitle: "Selected Project Highlights",
    listNote: "(Executed by group / associate companies)",
    list: [
      "Jampali OB Removal – ₹165.73 Cr",
      "Barod OB Removal & Transportation – ₹123.31 Cr",
      "Chhal OB Removal – ₹99.10 Cr",
      "Gare Palma – Tamnar OB Removal – ₹65.56 Cr",
    ],
    img: ASSETS.mining,
    flip: false,
  },
  {
    id: "rail",
    title: "Railway Projects (SECR)",
    desc: "The railway infrastructure projects presented below represent group execution experience in civil works for South East Central Railway (SECR), involving track expansion, bridge works, earthwork, and associated infrastructure under active railway operations.",
    scopeTitle: "Scope of Works",
    scope: [
      "Track doubling & third line works",
      "Major & minor bridges",
      "Earthwork, blanketing & drainage",
      "Railway staff quarters & facilities",
    ],
    listTitle: "Key Projects",
    listNote: "(Executed by group / associate companies)",
    list: [
      "3rd Line Construction (Darekasa – Salekasa Section) – ₹114.67 Cr",
      "Track Doubling & Housing Infrastructure Package – ₹129.97 Cr",
    ],
    img: ASSETS.rail,
    flip: true,
  },
  {
    id: "wrd",
    title: "Water Resource & Hydraulic Projects (WRD)",
    desc: "The group companies associated with SKA Alliance have executed water resource and hydraulic infrastructure works for state WRD departments, covering irrigation, flood control, and water management systems.",
    scopeTitle: "Scope of Works",
    scope: [
      "Canals & distributaries",
      "Barrages & spillways",
      "Embankments & flood protection",
      "Hydraulic structures",
    ],
    listTitle: "Project Highlights",
    listNote: "(Executed by group / associate companies)",
    list: [
      "Arpa Bhaisajhar Barrage – ₹159.96 Cr",
      "Julko Barrage, Odisha – ₹63.64 Cr",
      "Chipilima Spillway & Forebay Works (Odisha) – Ongoing",
    ],
    img: ASSETS.wrd,
    flip: false,
  },
  {
    id: "jjm",
    title: "Drinking Water Projects (Jal Jeevan Mission)",
    desc: "Project experience includes multi-village drinking water supply schemes executed by group companies under Jal Jeevan Mission and PHED frameworks.",
    scopeTitle: "Scope of Works",
    scope: [
      "Intake wells & pump houses",
      "Raw & clear water pipelines",
      "Overhead tanks (OHTs)",
      "Village distribution networks",
    ],
    listTitle: "Project Highlights",
    listNote: "(Executed by group / associate companies)",
    list: [
      "Multi-Village Water Supply Scheme – Janjgir Champa – ₹41.8 Cr",
      "Bhelwatikara Scheme – ₹35.80 Cr",
    ],
    img: ASSETS.jjm,
    flip: true,
  },
  {
    id: "civil",
    title: "Building & Civil Infrastructure",
    desc: "Group project experience includes durable building and civil infrastructure works executed under public sector and institutional frameworks.",
    scopeTitle: "Scope of Works",
    scope: [
      "Residential quarters & staff housing",
      "Institutional buildings & allied facilities",
      "Internal roads, services & utilities",
      "Site development & finishing works",
    ],
    listTitle: "Selected Project Highlights",
    listNote: "(Executed by group / associate companies)",
    list: [
      "Multistoried Residential Quarters, Gharghoda – ₹137.23 Cr",
      "Residential Infrastructure, Dipka (SECL) – ₹92.80 Cr",
    ],
    img: ASSETS.civil,
    flip: false,
  },
];

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

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
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              About
            </span>
          </NavLink>

          <NavLink to="/projects" className={navLinkClass} onClick={close}>
            <span className="hover:underline decoration-1 text-amber-400 text-lg underline-offset-8">
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
          backgroundImage: `url(${ASSETS.hero})`,
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
                Our Projects
              </h1>

              <p className="mt-4 text-base sm:text-lg font-medium text-white/90">
                SKA Alliance presents the project experience of its group and
                associate companies across mining, railway, water resources, and
                civil infrastructure sectors.
              </p>

              <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                The projects showcased reflect collective execution capability,
                technical depth, and operational discipline developed through
                long-term engagements with government departments and PSU
                clients. SKA Alliance functions as a group coordination and
                representation platform and does not independently claim
                execution unless specifically stated.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#overview"
                  className="w-full sm:w-auto rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600 px-4 sm:px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-700 text-center"
                >
                  Group Project Overview
                </a>
                <a
                  href="#mining"
                  className="w-full sm:w-auto rounded-[6px] bg-white/10 px-4 sm:px-6 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15 text-center"
                >
                  View Group Project Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="overview" className="bg-white py-12 scroll-mt-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              The project portfolio presented reflects the collective work executed by SKA Alliance’s group and associate companies across public infrastructure domains. These projects demonstrate adherence to technical standards, safety protocols, and contractual obligations under government and PSU frameworks.
            </p>

            <div className="mt-6 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-100">
              <p className="text-sm text-slate-800">
                <span className="font-semibold">Note:</span> Project information
                displayed represents works executed by group and associate
                companies of SKA Alliance. Project scope, values, and status are
                indicative and subject to respective contract terms.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
              <img
                src="https://www.skaalliance.in/projects-hero.png"
                alt="India project footprint"
                className="mx-auto max-h-[260px] sm:max-h-[340px] w-full object-contain"
              />
              <div className="pointer-events-none absolute left-[58%] top-[48%] h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
              <div className="pointer-events-none absolute left-[62%] top-[55%] h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
              <div className="pointer-events-none absolute left-[64%] top-[60%] h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
              <div className="pointer-events-none absolute left-[68%] top-[52%] h-3 w-3 rounded-full bg-slate-900 ring-4 ring-white" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 shrink-0" />
          <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({
  id,
  title,
  desc,
  scopeTitle,
  scope,
  listTitle,
  listNote,
  list,
  img,
  flip,
}) {
  return (
    <article
      id={id}
      className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 scroll-mt-24 overflow-hidden"
    >
      <div
        className={[
          "grid gap-6 p-4 sm:p-6 md:p-8 md:grid-cols-2",
          flip ? "md:[&>*:first-child]:order-2" : "",
        ].join(" ")}
      >
        <div className="flex flex-col justify-center min-w-0">
          <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>

          {scope?.length ? (
            <div className="mt-6">
              <div className="text-sm font-semibold text-slate-900">
                {scopeTitle || "Scope of Works"}
              </div>
              <BulletList items={scope} />
            </div>
          ) : null}

          <div className="mt-6">
            <div className="flex flex-wrap items-baseline gap-2">
              <div className="text-sm font-semibold text-slate-900">
                {listTitle}
              </div>
              {listNote ? (
                <span className="text-xs text-slate-500">{listNote}</span>
              ) : null}
            </div>
            <BulletList items={list} />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-slate-100">
          <div className="aspect-[16/10] md:aspect-auto md:h-full">
            <img
              src={img}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function ExecutionPhilosophy() {
  const points = [
    "Compliance with technical specifications",
    "Safety & quality control",
    "Planned resource deployment",
    "Schedule adherence under public sector frameworks",
  ];

  return (
    <section
      id="execution-philosophy"
      className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 scroll-mt-24 overflow-hidden"
    >
      <div className="p-6 md:p-10">
        <div className="text-center">
          <h3 className="text-sm font-semibold tracking-[0.18em] text-slate-700">
            PROJECT EXECUTION PHILOSOPHY
          </h3>
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mt-3 text-xl sm:text-2xl font-extrabold md:text-3xl inline-block">
            Consistency, compliance, and operational discipline across group
            project experience
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-sm leading-relaxed text-slate-600">
              Across all sectors, group companies associated with SKA Alliance
              operate with a strong emphasis on:
            </p>

            <div className="mt-4">
              <BulletList items={points} />
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-sm text-slate-700">
                SKA Alliance enables structured coordination, strategic
                oversight, and capability consolidation across these projects.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full">
                <img
                  src={ASSETS.feature}
                  alt="Execution philosophy"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-2xl bg-slate-900 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Explore group project experience and capabilities
              </h3>
              <p className="mt-2 text-sm text-white/80">
                For detailed sector-wise capability and credentials, refer to
                the group capability statement.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3 md:items-end ">
              <a
                href="#mining"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 lg:px-11  px-6 py-3 text-sm font-bold text-white shadow hover:from-amber-500 hover:to-amber-700 text-center"
              >
                View Group Project Experience
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-white/10 lg:px-2 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 hover:bg-white/15 text-center"
              >
                <Download className="h-4 w-4" />
                Download Group Capability Statement
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ProjectsPageStyledLikeAbout() {
  useAnchorScroll();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div className="h-[72px]" />

      <Hero />
      <Overview />

      <section className="bg-slate-50 py-12">
        <Container>
          <div className="space-y-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}

            <ExecutionPhilosophy />
            <CTASection />
          </div>
        </Container>
      </section>
    </div>
  );
}
