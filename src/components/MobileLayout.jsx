import { useRef } from "react";
import { Analytics } from '@vercel/analytics/react';
const SKILLS = {
  frontend: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT"],
  database: ["MongoDB", "PostgreSQL"],
  mobile: ["React Native"],
  ai_ml: ["Python", "Pandas", "Scikit-learn"],
};

const PROJECTS = [
  { title: "FitLip - AI Health Assistant", image: "/fitlip.png" },
  { title: "Wallpaper App", image: "/wallpaper.png" },
  { title: "Blackjack Game", image: "/betjack.png" },
];

export default function MobileLayout() {
  const videoRef = useRef(null);

  return (
    <div className="min-h-screen w-full bg-[#f0ebe2] animate-fadeIn">

      <div className="w-full min-h-screen flex flex-col">

        {/* GRID */}
        <div className="grid grid-cols-2 gap-2 px-2 pt-3 pb-6 flex-1 content-start">

          {/* INTRO */}
          <div className="bg-[#FCF0D6] rounded-xl border border-black/10 p-3 text-center">
            <p className="text-[20px] font-bold uppercase text-[#B40023] mb-2">
              Introduction
            </p>

            <div className="w-[100px] h-[100px] mx-auto rounded-full border border-[#B40023]/30 p-[3px]">
              <video
                ref={videoRef}
                src="/aman_video1.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <p className="text-[12px] font-bold mt-2">Aman Samani</p>

            <p className="text-[10px] text-black/60 mt-2 leading-relaxed">
              Full Stack Developer specializing in <span className="text-accent">MERN&#8209;Stack</span> and AI-driven applications, building scalable products from idea to deployment.
            </p>

            <button className="mt-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 shadow-sm hover:shadow-md transition-all active:scale-95 group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-black/70 group-hover:text-black">
                Available for work
              </span>
            </button>
          </div>

          {/* SKILLS */}
          <div className="bg-[#FCF0D6] rounded-xl border border-black/10 p-3 flex flex-col">
            <p className="text-[20px] font-bold uppercase text-[#b40023] mb-2">
              Skills
            </p>

            <div className="flex flex-col gap-2 overflow-y-auto max-h-[240px] no-scrollbar">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[8px] uppercase text-black/50 mb-1">
                    {category.replace("_", " ")}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-[8px] px-2 py-[2px] rounded-full bg-white border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="col-span-2 bg-[#FCF0D6] rounded-xl border border-black/10 p-3 flex flex-col">
            <p className="text-[20px] font-bold uppercase text-[#b40023] mb-2">
              Projects
            </p>

            <div className="flex overflow-x-auto gap-3 snap-x snap-mandatory no-scrollbar">
              {PROJECTS.map((p, i) => (
                <div
                  key={i}
                  className="min-w-full aspect-[16/9] snap-center relative rounded-xl overflow-hidden"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/60" />

                  <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                    <p className="text-[12px] font-semibold">
                      {p.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div className="col-span-2 bg-gradient-to-br from-[#FCF0D6] to-[#F7E9CC] rounded-xl border border-black/10 p-4 flex flex-col items-center">

            <p className="text-[20px] font-bold text-[#B40023] tracking-widest mb-3">
              CONNECT
            </p>

            <div className="flex gap-10 mb-2">

              <a href="https://github.com/amansamani" target="_blank" className="w-7 h-7 rounded-full overflow-hidden">
                <img src="/github.svg" className="w-full h-full object-cover" />
              </a>

              <a href="https://linkedin.com/in/aman-samani" target="_blank" className="w-7 h-7 rounded-full overflow-hidden">
                <img src="/linkedin.svg" className="w-full h-full object-cover" />
              </a>

              <a href="https://www.instagram.com/aman.script" target="_blank" className="w-7 h-7 rounded-full overflow-hidden">
                <img src="/instagram.svg" className="w-full h-full object-cover" />
              </a>

              <a href="mailto:amanworkinfo@gmail.com" className="w-7 h-7 rounded-full overflow-hidden">
                <img src="/gmail.svg" className="w-full h-full object-cover" />
              </a>

            </div>

            <a
              href="/aman_CV.pdf"
              download
              className="bg-[#B40023] font-bold text-white text-[10px] px-5 py-2 rounded-lg"
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="col-span-2 h-4" />

        </div>
      </div>
    </div>
    
  );
}