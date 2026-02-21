import React from "react";
export default function AboutHeroSection() {
  const image = "/src/assets/collage_img2.jpeg";

  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(16,24,40,0.06)]">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <h2 className="text-[22px] font-extrabold leading-tight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Our Core Competencies
                </h2>
              </div>

              <ul className="grid gap-3 pl-5 text-[15.5px] leading-7 text-slate-700">
                <li>
                  <span className="font-bold text-slate-900">
                    Mining Infrastructure:
                  </span>{" "}
                  OB removal, mine planning, haul road development, coal
                  evacuation &amp; logistics.
                </li>

                <li>
                  <span className="font-bold text-slate-900">
                    Water Resource Engineering:
                  </span>{" "}
                  Barrages, spillways, canals, embankments, flood control &amp;
                  hydraulic structures.
                </li>

                <li>
                  <span className="font-bold text-slate-900">
                    Drinking Water Projects:
                  </span>{" "}
                  Jal Jeevan Mission execution—intake wells, pipelines, overhead
                  tanks, pump houses.
                </li>

                <li>
                  <span className="font-bold text-slate-900">
                    Railway Infrastructure:
                  </span>{" "}
                  Bridges, earthwork, platforms, drainage systems &amp; railway
                  facility buildings.
                </li>

                <li>
                  <span className="font-bold text-slate-900">
                    Building &amp; Civil EPC:
                  </span>{" "}
                  Monolithic RCC structures, institutional buildings,
                  stormwater systems &amp; urban utilities.
                </li>
              </ul>
            </section>
          </div>
          <div className="relative">
            <img
              src={image}
              alt="About SKA Alliance"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
