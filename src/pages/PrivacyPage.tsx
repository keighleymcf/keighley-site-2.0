import { Link } from "react-router-dom";
import { Banner } from "@/components/Banner";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Heading, Body } from "@/components/Typography";
import { ROUTES } from "@/routes/routes";
import privacyContent from "@/content/privacy.json";

export function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <Nav />
      <main className="flex-1 py-20 px-6 md:px-10 max-w-2xl mx-auto w-full">
        <Heading level={1} className="mb-8">
          {privacyContent.heading}
        </Heading>
        <div className="space-y-6">
          <Body>
            <strong className="text-black">Last updated:</strong>{" "}
            {privacyContent.lastUpdated}
          </Body>
          {privacyContent.sections.map((section) => (
            <div key={section.heading}>
              <Heading level={2} className="mt-8 mb-2">
                {section.heading}
              </Heading>
              <Body>{section.body}</Body>
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
