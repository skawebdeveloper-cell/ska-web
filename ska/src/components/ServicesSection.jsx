import { NavLink } from "react-router-dom";
import { ArrowRight, Construction, Droplets, Train, Pickaxe } from "lucide-react";
import coal from "../assets/hero_img.png"
import rail from "../assets/railway2.jpg"
import canal from "../assets/canal_img.png"
import water from "../assets/water_treatment_img.png"
import building from "../assets/building.png"

const services = [
  {
    title: "Coal Mining",
    desc: "We specialize in OB removal, coal transportation, internal haul road construction, bunding, safety infrastructure, GPS-based monitoring, and mine planning—delivering end-to-end mining solutions trusted by SECL.",
    Icon: Construction,
    img: coal,
  },
  {
    title: "Railway Infrastructure",
    desc: "Our work with SECR covers major and minor bridges, excavation, blanketing, track bed & ballast supply, drainage & culverts, station & platform infrastructure, railway building & staff quarters. ",
    Icon:  Train,
    img: rail,
  },
  {
    title: "Water Structure (Water Resource Department)",
    desc: "We provide end-to-end Water infrastructure solutions including barrages, canals, anicuts, reservoirs, pumping stations, and other key structures. Our work supports sustainable water structure across Raigarh, Bilaspur, Durg and Raipur in Chhattisgarh.",
    Icon: Droplets,
    img: canal,
  },
  {
    title: "Drinking Water Supply (Jal Jeevan Mission)",
    desc: "Under the Jal Jeevan Mission, we execute high-capacity overhead tanks, water treatment plants, intake wells, pump stations, and DI & OPVC pipeline networks—ensuring clean tap water access in rural households across India.",
    Icon: Droplets,
    img: water,
  },
  {
    title: "Building & Civil Infrastructure",
    desc: "We specialize in conventional and non-conventional infrastructure, including multistorey buildings, administrative blocks, guest houses, drainage systems, stormwater, and sanitary installations for government and private sectors.",
    Icon: Pickaxe,
    img: building,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#eef0f6] py-30">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
             OUR SERVICES
            </span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, Icon, img }) => (
            <div
              key={title}
              className="overflow-hidden rounded-xl bg-white/70 shadow-2xl ring-1 ring-black/5 backdrop-blur "
            >

              <div className="relative h-60 w-full overflow-hidden shadow-xl">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 ">
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-amber-400/15 ">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-600">{title}</h3>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center mt-20">
          <NavLink
            to="/services"
            className="inline-flex items-center gap-2 rounded-[6px]
              bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
              px-6 py-2.5 text-sm font-bold text-white
              shadow-xl shadow-amber-500/30
              transition-all duration-300
              hover:from-amber-500 hover:via-amber-600 hover:to-amber-700
              hover:shadow-amber-600/50 hover:-translate-y-0.5">
            Know More <ArrowRight className="h-4 w-4 " />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
