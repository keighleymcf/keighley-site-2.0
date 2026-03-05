import { Link } from "react-router-dom";
import { Banner } from "@/components/Banner";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ROUTES } from "@/routes/routes";
import privacyContent from "@/content/privacy.json";

export function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <Nav />
      <main className="flex-1 py-20 px-6 md:px-10 max-w-2xl mx-auto w-full">
        <h1 className="font-hero text-4xl md:text-5xl uppercase mb-8">
          {privacyContent.heading}
        </h1>
        <div className="text-[#555] leading-relaxed space-y-6">
          <p>
            <strong className="text-black">Last updated:</strong>{" "}
            {privacyContent.lastUpdated}
          </p>
          {privacyContent.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-semibold text-black text-lg mt-8 mb-2">
                {section.heading}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <Link to={ROUTES.HOME} className="inline-block mt-12 text-sm text-gray">
          {privacyContent.backLabel}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
