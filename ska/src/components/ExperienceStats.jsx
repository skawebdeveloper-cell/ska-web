import React, { useEffect, useState } from "react";
function useCountUp(end, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}
const STATS = [
  {
    value: 35,
    suffix: "+",
    label: "Years of Experience",
    desc: "Trusted infrastructure delivery",
  },
  {
    value: 100,
    suffix: "+",
    label: "Projects Completed",
    desc: "Across mining, WRD & railways",
  },
  {
    value: 3,
    suffix: "+",
    label: "States Presence",
    desc: "Growing regional footprint",
  },
];
export default function ExperienceStats() {
  return (
    <section className="w-full bg-[#F2C94C]">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label, desc }) {
  const count = useCountUp(value, 1600);

  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-black">
        {count}
        <span className="text-black">{suffix}</span>
      </div>

      <div className="mt-3 text-sm md:text-base font-bold text-black">
        {label}
      </div>
      <div className="mt-1 text-xs md:text-sm text-black/70">
        {desc}
      </div>
    </div>
  );
}
