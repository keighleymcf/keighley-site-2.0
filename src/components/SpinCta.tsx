import heroContent from "@/content/hero.json";

export function SpinCta() {
  return (
    <div className="flex justify-center">
      <a
        href="#contact"
        className="group relative w-28 h-28 md:w-32 md:h-32 bg-yellow rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 hover:bg-coral"
        aria-label="Contact me"
      >
        {/* Spinning text ring */}
        <div className="animate-spin-text absolute inset-0 group-hover:[animation-play-state:paused]">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <defs>
              <path
                id="circle-path"
                d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            {(["16.67%", "50%", "83.33%"] as const).map((offset) => (
              <text
                key={offset}
                fontFamily="var(--font-body)"
                fontSize="12"
                fontWeight="600"
                fill="#0a0a0a"
              >
                <textPath
                  href="#circle-path"
                  startOffset={offset}
                  textAnchor="middle"
                >
                  {heroContent.cta.label}
                </textPath>
              </text>
            ))}
          </svg>
        </div>
        {/* Center arrow */}
        <span className="text-2xl z-10 text-black" aria-hidden>
          ↗
        </span>
      </a>
    </div>
  );
}
