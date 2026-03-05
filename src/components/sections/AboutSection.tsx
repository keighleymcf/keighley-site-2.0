import aboutContent from "@/content/about.json";
import { Body } from "@/components/Typography";
import { SpinCta } from "@/components/SpinCta";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-20 px-6 md:px-10 max-w-4xl mx-auto flex flex-col gap-12"
    >
      <SpinCta />
      <div>
        {aboutContent.paragraphs.map((segments, i) => (
          <Body key={i} className="mb-4 last:mb-0">
            {segments.map((segment, j) =>
              segment.bold ? (
                <strong key={j}>{segment.text}</strong>
              ) : (
                <span key={j}>{segment.text}</span>
              ),
            )}
          </Body>
        ))}
      </div>
    </section>
  );
}
