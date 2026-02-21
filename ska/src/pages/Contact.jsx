import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  [
    "text-sm font-medium transition",
    isActive ? "text-orange-500" : "text-slate-700 hover:text-orange-500",
  ].join(" ");

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="inset-x-0 top-0 z-30 bg-white shadow-sm fixed">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 py-4 lg:px-4">
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
          <NavLink to="/" end className={navLinkClass}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Home
            </span>
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              About
            </span>
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Projects
            </span>
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Services
            </span>
          </NavLink>

          <NavLink to="/careers" className={navLinkClass}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Careers
            </span>
          </NavLink>

          <NavLink to="/whyus" className={navLinkClass}>
            <span className="hover:underline decoration-1 text-gray-600 hover:text-amber-400 text-lg underline-offset-8">
              Why us
            </span>
          </NavLink>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
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
          className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-800"
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
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50">
                  Home
                </div>
              </NavLink>

              <NavLink to="/about" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50">
                  About
                </div>
              </NavLink>

              <NavLink to="/projects" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50">
                  Projects
                </div>
              </NavLink>

              <NavLink to="/services" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50">
                  Services
                </div>
              </NavLink>

              <NavLink to="/careers" className={navLinkClass} onClick={close}>
                <div className="rounded-lg px-3 py-2 hover:bg-slate-50">
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

export default function ContactPage() {
  const bgImage = "/src/assets/hero_img.png";

  const heroTitle = "Contact Us";
  const heroSubTitle = "Let’s Connect for Infrastructure Opportunities";
  const heroDesc =
    "SKA Alliance functions as a group coordination and engagement platform representing the collective capabilities of its associate infrastructure companies. We welcome inquiries related to government & PSU projects, partnerships, vendor coordination, and career opportunities. Please use the details below to connect with the appropriate team.";

  const corporate = {
    title: "Corporate Office",
    name: "SKA Alliance",
    address: "Near Magneto Mall, Raipur, Chhattisgarh",
    email: "info@skaalliance.in",
    phones: ["+91-8420702895"],
  };

  const registered = {
    title: "Registered Office",
    address: "Raigarh, Chhattisgarh",
  };

  const whoShouldContact = [
    {
      title: "🏗 Government & PSU Officials",
      desc: "For project discussions, capability presentations, and coordination related to mining, railway, water resources, and civil infrastructure works.",
    },
    {
      title: "🤝 EPC / JV Partners & Consultants",
      desc: "For partnerships, joint ventures, technical collaboration, and large-scale infrastructure opportunities.",
    },
    {
      title: "🚛 Vendors & Subcontractors",
      desc: "For empanelment, supply coordination, equipment deployment, and site-level engagement.",
    },
    {
      title: "👷 Careers & HR Queries",
      desc: "For job opportunities across group and associate companies working on live infrastructure projects.",
    },
  ];

  const businessHours = [
    { day: "Monday - Saturday", time: "10:00 AM – 6:30 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const quickLinks = [
    { label: "WhatsApp Support Chat", href: "#" },
    { label: "Vendor Registration (Coming Soon)", href: "#" },
  ];

  const mapSrc =
    "https://www.google.com/maps?q=Magneto%20The%20Mall%20Raipur&output=embed";

  const [form, setForm] = useState({
    fullName: "",
    orgDept: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const setField = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    console.log("Contact form:", form);
    alert("Form submitted (demo). Connect this to your backend endpoint.");
  };

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="relative">
        <div
          className="relative h-[420px] sm:h-[520px] w-full bg-slate-900"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/45 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {heroTitle}
              </h1>

              <p className="mt-4 text-base sm:text-xl font-semibold text-white/90">
                {heroSubTitle}
              </p>

              <p className="mt-2 text-sm sm:text-base text-white/80">
                {heroDesc}
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${corporate.email}`}
                  className=" bg-gradient-to-r from-amber-400 to-amber-600 px-12 py-2.5 text-sm font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-700 rounded-[6px]"
                >
                  Email Us
                </a>

                <a
                  href="#reach-us"
                  className=" bg-white/10 px-12 py-2.5 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15 rounded-[6px]"
                >
                  Reach Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 space-y-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Who Should Contact Us?
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {whoShouldContact.map((i) => (
                <div
                  key={i.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-bold text-slate-900">{i.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6" id="reach-us">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {corporate.title}
                </h3>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <p className="font-semibold text-amber-700">
                    {corporate.name}
                  </p>

                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 text-slate-500" />
                    <p>{corporate.address}</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4 text-slate-500" />
                    <a
                      href={`mailto:${corporate.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {corporate.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 text-slate-500" />
                    <div className="space-y-1">
                      {corporate.phones.map((p) => (
                        <span key={p} className="block">
                          {p}
                        </span>
                      ))}
                      <p className="mt-2 text-xs text-slate-500">
                        {corporate.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h3 className="text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  {registered.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {registered.address}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg text-center font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Write to Us
              </h3>
              <p className="mt-1 text-sm text-slate-600 text-center">
                Please share your details below and our team will route your
                query to the relevant group or associate company.
              </p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      value={form.fullName}
                      onChange={(e) => setField("fullName", e.target.value)}
                      placeholder="Full Name"
                      required
                    />
                  </Field>

                  <Field label="Organization / Department">
                    <input
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      value={form.orgDept}
                      onChange={(e) => setField("orgDept", e.target.value)}
                      placeholder="Organization / Department"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email Address" required>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      placeholder="Email Address"
                      required
                    />
                  </Field>

                  <Field label="Phone Number">
                    <input
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      placeholder="Phone Number"
                    />
                  </Field>
                </div>

                <Field label="Purpose of Contact" required>
                  <select
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 bg-white"
                    value={form.purpose}
                    onChange={(e) => setField("purpose", e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select purpose
                    </option>
                    <option value="Project Discussion">Project Discussion</option>
                    <option value="Partnership / JV">Partnership / JV</option>
                    <option value="Vendor / Supplier">Vendor / Supplier</option>
                    <option value="Careers / HR">Careers / HR</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </Field>

                <Field label="Message / Details">
                  <textarea
                    className="h-32 w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    placeholder="Write your message..."
                  />
                </Field>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-amber-400 to-amber-600  px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-400"
                >
                  Submit Inquiry <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <p className="text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Location Map
              </p>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-amber-500/20">
                Raipur
              </span>
            </div>

            <iframe
              title="SKA Alliance Map"
              src={mapSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="mt-4 space-y-2">
                {quickLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block text-sm text-blue-600 hover:underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-slate-700" />
                <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Business Hours
                </h3>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                {businessHours.map((b) => (
                  <div
                    key={b.day}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold">{b.day}</span>
                    <span className="text-slate-600">{b.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
