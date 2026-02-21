import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

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
            <span className="hover:underline decoration-1 text-amber-400 text-lg underline-offset-8">
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

export default function CareersPage() {
  const bgImage = "/src/assets/hero_img.png";

  const openings = useMemo(
    () => [
      { role: "Inventory Manager", location: "Ghargoda Site" },
      { role: "Senior Mine Surveyor", location: "Chhal Site" },
    ],
    []
  );

  const whatExpect = useMemo(
    () => [
      "Work on SECL, SECR, WRD, PHED & JJM projects",
      "Field-level and leadership growth opportunities",
      "Direct involvement in site execution, planning & coordination",
      "Structured systems, safety focus & compliance-driven operations",
      "Long-term career pathways within group companies",
    ],
    []
  );

  const rolesLookingFor = useMemo(
    () => [
      {
        title: "Site & Execution Roles",
        items: [
          "Site Engineers (Civil / Mining / Mechanical)",
          "Supervisors & Foremen",
          "Quantity Surveyors",
          "Safety Officers",
          "Surveyors",
        ],
      },
      {
        title: "Technical & Planning Roles",
        items: [
          "Planning Engineers",
          "Billing & RA Bill Engineers",
          "Tender & Estimation Engineers",
          "QA/QC Engineers",
        ],
      },
      {
        title: "Support & Office Roles",
        items: [
          "HR & Admin Professionals",
          "Accounts & Billing Executives",
          "Store & Inventory Officers",
          "MIS & Project Coordination Staff",
        ],
      },
    ],
    []
  );

  const culturePoints = useMemo(
    () => [
      "Accountability at site level",
      "Discipline in execution",
      "Safety-first mindset",
      "Respect for timelines & contracts",
      "Continuous learning on live projects",
    ],
    []
  );

  const hiringSteps = useMemo(
    () => [
      "Apply via website or email",
      "Shortlisting based on project needs",
      "Interview (technical + site fit)",
      "Deployment at project / office location",
    ],
    []
  );

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "",
    resumeFile: null,
  });

  const [dragOver, setDragOver] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleApply = (role) => {
    setForm((p) => ({ ...p, role }));
    scrollToId("apply");
  };

  const setField = (key, value) => setForm((p) => ({ ...p, [key]: value }));
  const onPickFile = (file) => setField("resumeFile", file || null);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) onPickFile(file);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Submit payload:", form);
    alert("Form submitted (demo). Connect this to your backend endpoint.");
  };

  return (
    <div className="bg-white text-slate-900">
      <SiteNavbar />

      <div className="h-[72px]" />

      <section className="relative">
        <div
          className="relative w-full bg-slate-900"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[680px]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/45 to-slate-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />

            <div className="relative mx-auto flex min-h-[520px] sm:min-h-[620px] lg:min-h-[680px] max-w-6xl items-end px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
              <div className="grid w-full gap-6 lg:gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7 text-white">
                  <p className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    Careers at SKA Alliance
                  </p>

                  <p className="mt-4 text-base sm:text-lg font-semibold text-white/90 leading-relaxed">
                    SKA Alliance serves as a group coordination and talent platform connecting
                    professionals with opportunities across its group and associate infrastructure
                    companies.
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                    We work across mining, railway, water resources, drinking water, and civil
                    infrastructure projects, supporting government and PSU engagements. Our teams
                    operate at project sites, regional offices, and support functions across India.
                  </p>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                    <button
                      onClick={() => scrollToId("openings")}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40 rounded-[6px]"
                    >
                      View Current Openings
                    </button>

                    <button
                      onClick={() => scrollToId("apply")}
                      className="w-full sm:w-auto inline-flex items-center justify-center border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white shadow-sm backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 rounded-[6px]"
                    >
                      Submit Your Resume
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6 shadow-sm backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">Apply Now</p>
                        <p className="mt-1 text-sm text-white/80">
                          Please share your resume with role preference and location availability.
                          Shortlisted candidates will be contacted by the respective group company.
                        </p>
                      </div>
                      <span className="rounded-xl bg-white/15 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        SKA Alliance
                      </span>
                    </div>

                    <button
                      onClick={() => scrollToId("apply")}
                      className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-3 text-sm font-bold text-white transition hover:from-amber-500 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-slate-500/30"
                    >
                      Submit Your Resume
                    </button>

                    <button
                      onClick={() => scrollToId("openings")}
                      className="mt-3 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-bold text-white shadow-sm backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                    >
                      View Current Openings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Why Build Your Career with SKA Alliance?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                We offer professionals exposure to large-scale public infrastructure projects and
                real on-ground responsibility.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">What You Can Expect</h3>

            <ul className="mt-4 grid gap-3 grid-cols-1 md:grid-cols-2">
              {whatExpect.map((t, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-500" />
                  <span className="text-sm text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h2 className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Who We Are Looking For
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            We regularly engage professionals across the following roles:
          </p>

          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rolesLookingFor.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-amber-500/20">
                    Roles
                  </span>
                </div>
                <ul className="mt-4 grid gap-2">
                  {group.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h2 className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Our Work Culture
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            At SKA Alliance–associated entities, we believe in:
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <ul className="grid gap-3 grid-cols-1 md:grid-cols-2">
              {culturePoints.map((t, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              This is a hands-on infrastructure environment, not a desk-only organization.
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h2 className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            How Hiring Works
          </h2>

          <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2">
            {hiringSteps.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {idx + 1}️⃣ {s}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            Roles may be offered under group companies or project-specific entities.
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white" id="openings">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Current Openings
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                Apply directly or submit your resume for future roles.
              </p>
            </div>
            <button
              onClick={() => scrollToId("apply")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              Submit Your Resume
            </button>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
            {openings.map((o) => (
              <div
                key={o.role}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-bold">{o.role}</h3>
                  <p className="mt-1 text-sm text-slate-600">{o.location}</p>
                </div>
                <button
                  onClick={() => handleApply(o.role)}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50" id="apply">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Apply Now
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  Please share your resume with role preference and location availability.
                  Shortlisted candidates will be contacted by the respective group company.
                </p>
              </div>

              {form.resumeFile ? (
                <div className="w-full sm:w-auto rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                  Selected: <span className="font-semibold">{form.resumeFile.name}</span>
                </div>
              ) : null}
            </div>

            <form onSubmit={submit} className="mt-8 space-y-6">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    required
                  />
                </Field>

                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    placeholder="10 digit phone number"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    required
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    required
                  />
                </Field>

                <Field label="Role" required>
                  <select
                    value={form.role}
                    onChange={(e) => setField("role", e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    required
                  >
                    <option value="">Select Role</option>
                    {openings.map((o) => (
                      <option key={o.role} value={o.role}>
                        {o.role}
                      </option>
                    ))}
                    <option value="Other / Future Opportunities">
                      Other / Future Opportunities
                    </option>
                  </select>
                </Field>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">
                  Upload Resume <span className="text-rose-600">*</span>
                </label>

                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  className={[
                    "rounded-2xl border-2 border-dashed p-6 sm:p-8",
                    dragOver ? "border-amber-500 bg-amber-50" : "border-slate-200 bg-white",
                  ].join(" ")}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-slate-700">
                      Drag & drop your resume here, or{" "}
                      <label className="cursor-pointer font-semibold text-amber-600 hover:text-amber-500">
                        browse
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => onPickFile(e.target.files?.[0])}
                          required={!form.resumeFile}
                        />
                      </label>{" "}
                      to upload
                    </p>
                    <p className="mt-2 text-xs text-slate-500">Accepted: PDF, DOC, DOCX</p>

                    {form.resumeFile ? (
                      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {form.resumeFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => onPickFile(null)}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Remove
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree that SKA Alliance may contact you regarding your
                  application.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-3 text-sm text-white font-bold shadow-sm transition hover:from-amber-500 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  Submit Application
                </button>
              </div>
            </form>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <span className="font-semibold">Disclaimer:</span> SKA Alliance functions as a group
              coordination platform. Employment terms, roles, and benefits are governed by the
              appointing group or associate company.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900">
        {label} {required ? <span className="text-rose-600">*</span> : null}
      </label>
      {children}
    </div>
  );
}
