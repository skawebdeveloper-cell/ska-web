import React from "react";
import { NavLink } from "react-router-dom";
const HERO_BG = "/assets/contact-hero.jpg"; 
const MAP_IFRAME_SRC =
  "https://www.google.com/maps?q=Near%20Magneto%20Mall%20Raipur%20Chhattisgarh&output=embed";

export default function ContactPageMockup() {
  return (
    <div className="min-h-screen bg-white">
         <div className="text-center mt-20">
          <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            CONTACT
            </span>
        </div>
      <section className="relative mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="-mt-10 overflow-hidden rounded-xl border border-white/30 bg-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.25)] backdrop-blur">
            <div className="h-[260px] w-full sm:h-[300px]">
              <iframe
                title="SKA Alliance Map"
                src={MAP_IFRAME_SRC}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-amber-500">
                Inquiries
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                For any inquiries, questions or recommendations, please call:
                <br />
                <span className="font-semibold text-slate-900">
                  +91-8420702895, 9644559536
                </span>
                <br />
                <span className="text-slate-600">or fill the following form.</span>
              </p>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white/80 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input label="Full Name *" placeholder="Full Name *" />
                    <Input label="Phone Number *" placeholder="Phone Number *" />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input label="Email *" placeholder="Email *" type="email" />
                    <Input label="Subject" placeholder="Subject" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-amber-500"
                      placeholder="Message"
                    />
                  </div>

                  <div className="mt-10 flex justify-center mt-20">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-[6px]
              bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
              px-6 py-2.5 text-sm font-bold text-white
              shadow-xl shadow-amber-500/30
              transition-all duration-300
              hover:from-amber-500 hover:via-amber-600 hover:to-amber-700
              hover:shadow-amber-600/50 hover:-translate-y-0.5">
            Submit Form
          </NavLink>
        </div>
                </form>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-amber-500">ADDRESS</h3>

              <div className="mt-4 space-y-6 text-sm text-slate-700">
                <div>
                  <div className="text-base font-bold text-slate-900">
                    SKA ALLIANCE
                  </div>
                </div>

                <div>
                  <div className="text-base font-semibold text-amber-500">
                    SKA Alliance Head Office
                  </div>
                  <div className="mt-1">Near Magneto Mall, Raipur, Chhattisgarh</div>
                </div>

                <div>
                  <div className="text-base font-semibold text-amber-500">
                    Registered Office
                  </div>
                  <div className="mt-1">Raigarh, Chhattisgarh</div>
                </div>

                <div>
                  <div className="text-base font-semibold text-amber-500">
                    CALL | WRITE TO US
                  </div>
                  <div className="mt-2 space-y-2">
                    <InfoRow
                      label="E-mail:"
                      value="info@skaalliance.in"
                      href="mailto:info@skaalliance.in"
                    />
                    <InfoRow
                      label="Tel:"
                      value="+91-8420702895, 9644559536"
                    />
                  </div>
                </div>
                <div className="mt-2 rounded-xl border border-slate-200 bg-white/75 p-5 shadow-sm backdrop-blur">
                  <div className="text-base font-semibold text-slate-900">
                    Contact Office
                  </div>
                  <div className="mt-3 space-y-2">
                    <IconLine text="+91-8420702895" />
                    <IconLine text="+91-9644559536" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-amber-500"
      />
    </div>
  );
}
function InfoRow({ label, value, href }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className="font-semibold text-slate-900">{label}</span>
      {href ? (
        <a className="text-slate-800 hover:text-amber-600" href={href}>
          {value}
        </a>
      ) : (
        <span className="text-slate-800">{value}</span>
      )}
    </div>
  );
}
function IconLine({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-800">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.72-1.06a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <span className="font-semibold">{text}</span>
    </div>
  );
}


