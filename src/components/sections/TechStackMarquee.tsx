import { cn } from "@/lib/utils";
import techContent from "@/content/tech.json";

export function TechStackMarquee() {
  return (
    <div className="border-t border-b border-gray-light py-6 overflow-hidden">
      <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-md leading-relaxed">
        {[...techContent.items, ...techContent.items].map((item, i) => (
          <span key={i} className="inline-flex items-baseline gap-2 mr-4">
            <span className="text-black lowercase tracking-wide">
              {item.name}
            </span>
            {item.separator && item.separatorColor && (
              <span
                className={cn(
                  "font-semibold select-none",
                  item.separatorColor === "coral" && "text-coral",
                  item.separatorColor === "blue" && "text-blue",
                  item.separatorColor === "green" && "text-green",
                  item.separatorColor === "yellow" && "text-yellow",
                  item.separatorColor === "lavender" && "text-lavender",
                )}
                aria-hidden
              >
                {item.separator}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
