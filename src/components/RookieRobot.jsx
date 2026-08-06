export default function RookieRobot() {
  return (
    <div
      aria-hidden
      className="relative flex w-[120px] shrink-0 flex-col items-center justify-center py-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-1"    >
      {/* ground shadow (breathes with the float) */}
      <span className="robot-shadow absolute bottom-1.5 h-2.5 w-20 rounded-full bg-pine/25 blur-[3px]" />

      <div className="robot-bob relative flex flex-col items-center">
        {/* antenna */}
        <span className="robot-glow relative mb-0.5 h-3 w-3 rounded-full bg-lime-300" />
        <span className="h-2 w-[3px] rounded-t bg-gradient-to-b from-[#D21708] to-[#7C0B02]" />

        {/* head */}
        <div className="relative z-10 w-[84px] rounded-[1.3rem] border-[3px] border-pine bg-gradient-to-b from-[#D21708] via-[#B81104] to-[#7C0B02] p-[5px] shadow-lg shadow-pine/40">
          {/* ear bolts */}
          <span className="absolute -left-[7px] top-1/2 h-3.5 w-[6px] -translate-y-1/2 rounded-l-md bg-[#7C0B02]" />
          <span className="absolute -right-[7px] top-1/2 h-3.5 w-[6px] -translate-y-1/2 rounded-r-md bg-[#7C0B02]" />

          {/* face screen */}
          <div className="relative overflow-hidden rounded-[0.9rem] bg-zinc-950 px-2 py-2.5">
            {/* glass reflection */}
            <span className="pointer-events-none absolute -top-3 left-1 h-8 w-10 -rotate-[20deg] rounded-full bg-white/10 blur-[2px]" />
            {/* eyes: blink + look around */}
            <div className="robot-look flex items-center justify-center gap-3">
              <span className="robot-eye h-2.5 w-2.5 rounded-[3px] bg-lime-300 shadow-[0_0_8px_rgb(163_230_53/0.9)]" />
              <span className="robot-eye h-2.5 w-2.5 rounded-[3px] bg-lime-300 shadow-[0_0_8px_rgb(163_230_53/0.9)]" />
            </div>
            {/* talking equalizer mouth */}
            <div className="mt-1.5 flex items-end justify-center gap-[3px]">
              <span className="eq-bar h-[5px] w-[2px] rounded bg-cream/80" />
              <span className="eq-bar h-[7px] w-[2px] rounded bg-cream/80 [animation-delay:0.15s]" />
              <span className="eq-bar h-[4px] w-[2px] rounded bg-cream/80 [animation-delay:0.3s]" />
              <span className="eq-bar h-[6px] w-[2px] rounded bg-cream/80 [animation-delay:0.45s]" />
            </div>
          </div>
        </div>

        {/* neck */}
        <span className="h-1.5 w-4 bg-[#7C0B02]" />

        {/* body */}
        <div className="relative">
          {/* left arm + hand */}
          <span className="absolute -left-3 top-1.5 h-9 w-[7px] rotate-[8deg] rounded-full bg-gradient-to-b from-[#D21708] to-[#7C0B02]" />
          <span className="absolute -left-[13px] top-10 h-2.5 w-2.5 rounded-full bg-[#7C0B02]" />

          {/* right arm + hand — typing on the terminal */}
          <span className="robot-arm absolute -right-4 top-2 origin-left">
            <span className="block h-[7px] w-6 rounded-full bg-gradient-to-r from-[#D21708] to-[#7C0B02]" />
            <span className="absolute -right-1.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#7C0B02]" />
          </span>

          {/* shoulder joints */}
          <span className="absolute -left-1.5 top-1 z-10 h-3 w-3 rounded-full bg-[#7C0B02]" />
          <span className="absolute -right-1.5 top-1 z-10 h-3 w-3 rounded-full bg-[#7C0B02]" />

          {/* torso */}
          <div className="relative w-[96px] rounded-2xl border-[3px] border-pine bg-gradient-to-b from-[#D21708] via-[#B81104] to-[#7C0B02] px-2.5 py-2 shadow-lg shadow-pine/40">
            {/* top metal highlight */}
            <span className="pointer-events-none absolute inset-x-2 top-[3px] h-[4px] rounded-full bg-white/20 blur-[1px]" />
            {/* chest screen with live waveform */}
            <div className="relative overflow-hidden rounded-lg bg-zinc-950 px-1.5 py-1">
              <svg viewBox="0 0 60 12" className="h-3 w-full" fill="none">
                <path
                  d="M0 6h10l3-4 4 8 3-6 3 2h10l3-4 4 8 3-6 3 2h14"
                  stroke="#a3e635"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="robot-wave"
                />
              </svg>
            </div>
            {/* vents */}
            <div className="mt-1.5 space-y-[3px]">
              <span className="block h-[2px] rounded bg-cream/25" />
              <span className="block h-[2px] rounded bg-cream/25" />
              <span className="mx-auto block h-[2px] w-2/3 rounded bg-cream/25" />
            </div>
          </div>
        </div>

        {/* feet */}
        <div className="mt-1 flex gap-4">
          <span className="h-[7px] w-6 rounded-b-lg rounded-t-sm bg-gradient-to-b from-[#B81104] to-[#5A0801]" />
          <span className="h-[7px] w-6 rounded-b-lg rounded-t-sm bg-gradient-to-b from-[#B81104] to-[#5A0801]" />
        </div>
      </div>

      <span className="mt-1.5 text-[7px] font-bold uppercase tracking-widest text-pine/50">
        Rookie v0.1
      </span>
    </div>
  );
}