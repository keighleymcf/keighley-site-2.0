import awardsContent from "@/content/awards.json";
import { Heading, Caption, Body } from "@/components/Typography";

function AwardItem({
  title,
  organization,
  description,
}: {
  title: string;
  organization: string;
  description: string;
}) {
  return (
    <div className="py-10 border-gray-light not-last:border-b">
      <Heading level={3} className="mb-3">
        {title}
      </Heading>
      <Caption className="text-gray mb-5">{organization}</Caption>
      <Body>{description}</Body>
    </div>
  );
}

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-16 md:py-20 px-6 md:px-10 max-w-4xl mx-auto"
    >
      <Heading level={2} className="mb-12 text-center">
        {awardsContent.heading}
      </Heading>
      {awardsContent.items.map((award) => (
        <AwardItem
          key={award.title}
          title={award.title}
          organization={award.organization}
          description={award.description}
        />
      ))}
    </section>
  );
}
