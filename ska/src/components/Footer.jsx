import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FOOTER_BG = "/assets/footer-bg.jpg";
const LOGO = "/assets/ska-logo.png"; 
import bg from "../assets/hero_img.png";

export default function FooterSkaSummit() {
  return (
    <footer className="relative mt-10">
      <div className="absolute inset-0 -z-20">
        <img
          src={bg}
          alt="Footer background"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-slate-950/70" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.skaalliance.in/logo.png"
                alt="SKA Alliance"
                className="h-10 w-auto"
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-white/75">
             SKA Alliance is a group brand representing the collective experience and capabilities of its associate companies engaged in infrastructure, mining, railway, and civil engineering works across India.

The Alliance has been established to provide a unified platform for strategic coordination, technical oversight, and future-focused growth for government and PSU infrastructure projects.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold tracking-[0.22em] text-white">
              Explore
            </h4>
            <div className="mt-5 space-y-3 text-sm text-white/75 flex flex-col gap-2 font-bold ml-5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold tracking-[0.22em] text-white">
              Reach Us
            </h4>

            <div className="mt-5 space-y-6 text-sm text-white/75">

              <div>
                <div className="font-semibold text-white">
                  Corporate Office:
                </div>
                <div className="mt-1">
                  SKA Alliance 
                  <br />
                  Near Magneto Mall, Raipur, Chhattisgarh
                </div>
              </div>

              <div>
                <div className="font-semibold text-white">
                  Registered Office:
                </div>
                <div className="mt-1">Raigarh, Chhattisgarh</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.22em] text-white">
              Social
            </h4>

            <div className="mt-5 flex items-center gap-4">

              <a
                href="https://www.linkedin.com/company/ska-alliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <a
                href="https://www.instagram.com/skaalliance?igsh=YzJ1czc5cWUwYXky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>Copyright © {new Date().getFullYear()} by SKA Alliance</div>

          {/* <div className="text-white/70">
            Developed with expertise by{" "}
            <a
              href="#"
              className="font-semibold text-amber-300 hover:text-amber-200"
            >
              Jain Software® Foundation
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
function FooterLink({ href, children }) {
  return (
    <a href={href} className="inline-block transition hover:text-amber-300">
      {children}
    </a>
  );
}
function SocialIcon({ href, label, variant }) {
  const base =
    "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20";
  const text = variant === "linkedin" ? "in" : "ig";
  return (
    <a
      href={href}
      aria-label={label}
      className={base}
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-sm font-bold">{text}</span>
    </a>
  );
}


