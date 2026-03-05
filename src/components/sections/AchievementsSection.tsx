import { useRef, useCallback } from "react";
import { AchievementCard } from "@/components/AchievementCard";
import { Heading } from "@/components/Typography";
import highlightsContent from "@/content/highlights.json";

export function AchievementsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.offsetLeft;
    scrollLeft.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    track.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  return (
    <section id="work" className="py-16 md:py-20">
      <Heading level={2} className="px-10 md:px-16 mb-8 text-center">Recent Work</Heading>
      <div
        ref={trackRef}
        className="flex items-end gap-12 md:gap-16 px-10 md:px-16 py-10 overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] cursor-grab"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {highlightsContent.cards.map((card, i) => (
          <AchievementCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            color={card.color}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
