import siteContent from "@/content/site.json";
import { ROUTES } from "@/routes/routes";
import { Small } from "@/components/Typography";
import { InternalLink } from "@/components/Links";

export function Footer() {
  return (
    <footer className="border-t border-gray-light px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <Small>
        © {new Date().getFullYear()} · {siteContent.footer.copyright}
        {" · "}
        <InternalLink to={ROUTES.PRIVACY} className="inline py-0 gap-0">
          {siteContent.footer.privacyLinkLabel}
        </InternalLink>
      </Small>
    </footer>
  );
}
