import { ContactLinks } from "@/components/ContactLinks";
import { ContactForm } from "@/components/ContactForm";
import contactContent from "@/content/contact.json";
import { Heading, Body } from "@/components/Typography";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
      <Heading level={2} className="mb-6 text-center">
        {contactContent.heading}
      </Heading>
      <Body className="text-center mx-auto mb-12">
        {contactContent.description}
      </Body>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
}
