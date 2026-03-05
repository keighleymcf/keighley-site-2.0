import contactContent from "@/content/contact.json";
import { ExternalLink, InternalLink } from "@/components/Links";
import { iconMap } from "@/utils/iconMap";

export function ContactLinks() {
  return (
    <div className="flex flex-col max-md:border-b max-md:pb-4">
      {contactContent.links.map((link) => {
        const Icon = iconMap[link.label];
        const content = (
          <>
            {Icon && <Icon size={24} />}
            {link.label}
          </>
        );
        return link.external ? (
          <ExternalLink key={link.label} href={link.href}>
            {content}
          </ExternalLink>
        ) : (
          <InternalLink key={link.label} to={link.href}>
            {content}
          </InternalLink>
        );
      })}
    </div>
  );
}
