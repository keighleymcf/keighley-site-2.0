import heroContent from "@/content/hero.json";
import { BodyLarge } from "@/components/Typography";

export function Hero() {
  return (
    <section
      id="hero"
      className="px-6 md:px-10 overflow-hidden min-h-[calc(100svh-var(--header-height))] flex flex-col justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-18">
        {/* Name */}
        <div className="-rotate-12 md:origin-center md:mt-6">
          <h1 className="font-body font-bold leading-[0.88] tracking-[-0.02em] text-black text-[clamp(2.75rem,10vw,4rem)]">
            Keighley
            <br />
            <span className="block pl-[2em]">McFarland</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="flex flex-col items-center justify-center w-full md:mt-8">
          <h2 className="font-hero text-center font-normal uppercase leading-[0.88] tracking-[-0.02em] text-black text-[clamp(5rem,25vw,12rem)] md:text-[clamp(3.5rem,20vw,10rem)]">
            {heroContent.titleLine1}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[0.15em]">
            <h2 className="font-hero uppercase leading-[0.88] tracking-[-0.02em] text-black text-center text-[clamp(5rem,25vw,12rem)] md:text-[clamp(3.5rem,20vw,10rem)]">
              {heroContent.titleLine2}
            </h2>
            <span className="flex md:inline-flex items-center overflow-hidden rounded-2xl md:rounded-lg flex-shrink-0 h-[clamp(5rem,30vw,12rem)] md:h-[clamp(2.975rem,17vw,8.5rem)] md:ml-3">
              <img
                src={heroContent.vibesGif}
                alt="vibes"
                className="h-full w-auto block"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center pt-20 pb-8 px-4">
        <BodyLarge className="max-w-lg mx-auto">
          {heroContent.subtitle}
        </BodyLarge>
      </div>
    </section>
  );
}
