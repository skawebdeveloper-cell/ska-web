import React from "react";
import { NavLink } from "react-router-dom";
const PROJECTS = [
  {
    title: "JULKO BARRAGE (Completed)",
    img: "/src/assets/canal_img.png",
  },
  {
    title: "Chhal OB Removal - SECL (Rs. 99.10 Cr, Completed)",
    img: "/src/assets/mining_img.jpg",
  },
  {
    title: "Construction of 3rd line between Darekasa – Salekasa station of Nagpur Division – SECR (Rs. 113.47 Cr, Ongoing)",
    img: "/src/assets/railway2.jpg",
  },
  {
    title: "Jharsuguda–Bilaspur Infrastructure Works, Earthwork & Bridge Construction, Railway Civil Balance Works, Track Doubling Balance Package, Staff Quarters – SECR (Rs. 129.07 Cr, Ongoing)",
    img: "/src/assets/railway_bridge.png",
  },
  {
    title: "Champa–Akaltara Civil Works, 4th Line Infrastructure Works, Bilaspur–Jharsuguda Civil Package, Earthwork & Bridge Construction – SCER (Rs. 75.63 Cr, Ongoing)",
    img: "/src/assets/rail2.png",
  },
  {
    title: "Construction of Arpa Bhaisajhar Barrage project (Rs. 159.96 Cr, Completed)",
    img: "/src/assets/arpa_bhaisa_img.png",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
       <div className="text-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
             PROJECTS
            </span>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} title={p.title} img={p.img} />
          ))}
        </div>
        <div className="mt-10 flex justify-center mt-20">
          <NavLink
            to="/projects"
            className="inline-flex items-center gap-2 rounded-[6px]
              bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
              px-6 py-2.5 text-sm font-bold text-white
              shadow-xl shadow-amber-500/30
              transition-all duration-300
              hover:from-amber-500 hover:via-amber-600 hover:to-amber-700
              hover:shadow-amber-600/50 hover:-translate-y-0.5">
            Know More 
          </NavLink>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      <img
        src={img}
        alt={title}
        className="h-[240px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/75" />

      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="text-[18px] font-extrabold leading-snug text-white drop-shadow">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
