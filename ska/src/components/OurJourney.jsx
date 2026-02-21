import React from "react";

const MILESTONES = [
  {
    year: "1997",
    text: "Company Incorporation &\nEntry in WRD Department",
    ring: "ring-[#F2B705]",
    arrow: "text-[#F2B705]",
    img: "/src/assets/spillway.png",
  },
  {
    year: "2010",
    text: "Safety Structure work\nsuch as barrages/dam",
    ring: "ring-[#E91E63]",
    arrow: "text-[#E91E63]",
    img: "/src/assets/canal_img.png",
  },
  {
    year: "2018",
    text: "Entry into Coal Mining &\nRailway Infrastructure\nwork",
    ring: "ring-[#F57C00]",
    arrow: "text-[#F57C00]",
    img: "/src/assets/mining.png",
  },
  {
    year: "2025",
    text: "500cr+ Turnover with\ncapacity to handle project\nin multiple department.",
    ring: "ring-[#00A7B5]",
    arrow: "text-[#00A7B5]",
    img: "/src/assets/hero_img.png",
  },
];

function ChevronTriplet({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor" aria-hidden="true">
        <path d="M0 0 L10 8 L0 16 Z" />
      </svg>
      <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor" aria-hidden="true">
        <path d="M0 0 L10 8 L0 16 Z" />
      </svg>
      <svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor" aria-hidden="true">
        <path d="M0 0 L10 8 L0 16 Z" />
      </svg>
    </div>
  );
}

function RingedAvatar({ ring, img, alt }) {
  return (
    <div
      className={[
        "h-14 w-14 sm:h-16 sm:w-16 md:h-16 md:w-16",
        "rounded-full ring-4 ring-offset-2 ring-offset-white overflow-hidden bg-white shadow-sm",
        ring,
      ].join(" ")}
    >
      <img src={img} alt={alt} className="h-full w-full object-fit" />
    </div>
  );
}

function MilestoneItemExact({ year, text, ring, img }) {
  return (
    <div className="flex flex-col items-center text-center">
      <RingedAvatar ring={ring} img={img} alt={year} />
      <div className="mt-3 text-[22px] sm:text-[24px] md:text-[26px] font-extrabold leading-none text-black">
        {year}
      </div>
      <div className="mt-2 max-w-[220px] whitespace-pre-line text-[12px] sm:text-[13px] font-medium leading-snug text-[#3A3A3A]">
        {text}
      </div>
    </div>
  );
}

export default function MilestonesSection() {
  return (
    <section className="w-full bg-white">
      <div className="text-center mt-14 sm:mt-20">
        <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          MILESTONES
        </span>
      </div>

      <div className="mt-8 sm:mt-12 px-3 sm:px-6">
        <div
          className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, rgba(255,255,255,0.0) 6px, rgba(255,255,255,0.0) 12px), linear-gradient(#F3F3F3, #F3F3F3)",
          }}
        >
          <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-10">

            <div className="hidden lg:flex items-start justify-between gap-6">
              <MilestoneItemExact {...MILESTONES[0]} />
              <div className="mt-6 flex shrink-0 items-center">
                <ChevronTriplet className={MILESTONES[0].arrow} />
              </div>

              <MilestoneItemExact {...MILESTONES[1]} />
              <div className="mt-6 flex shrink-0 items-center">
                <ChevronTriplet className={MILESTONES[1].arrow} />
              </div>

              <MilestoneItemExact {...MILESTONES[2]} />
              <div className="mt-6 flex shrink-0 items-center">
                <ChevronTriplet className={MILESTONES[2].arrow} />
              </div>

              <MilestoneItemExact {...MILESTONES[3]} />
            </div>
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-8">
              {MILESTONES.map((m, idx) => (
                <div key={m.year} className="flex flex-col items-center">
                  <MilestoneItemExact {...m} />
                  {idx % 2 === 0 && idx !== MILESTONES.length - 1 ? (
                    <div className="mt-4 rotate-90 opacity-90">
                      <ChevronTriplet className={m.arrow} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-8 sm:hidden">
              {MILESTONES.map((m, idx) => (
                <div key={m.year} className="flex flex-col items-center">
                  <MilestoneItemExact {...m} />
                  {idx !== MILESTONES.length - 1 && (
                    <div className="mt-4 rotate-90">
                      <ChevronTriplet className={m.arrow} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 sm:h-24" />
    </section>
  );
}
