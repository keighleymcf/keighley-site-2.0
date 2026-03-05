import siteContent from "@/content/site.json";
import { Caption } from "@/components/Typography";

export function Banner() {
  return (
    <div className="bg-yellow py-3 px-4">
      <Caption className="text-sm text-black text-center font-medium">
        {siteContent.banner}
      </Caption>
    </div>
  );
}
