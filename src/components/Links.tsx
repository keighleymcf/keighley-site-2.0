import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type InternalLinkProps = {
  to: string;
  children?: React.ReactNode;
  className?: string;
};

const linkBase =
  "flex items-center gap-4 py-5 text-md font-medium text-black hover:text-coral transition-colors duration-200";

export function ExternalLink({ href, children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkBase, className)}
      {...props}
    >
      {children}
    </a>
  );
}

export function InternalLink({ to, children, className }: InternalLinkProps) {
  return (
    <Link to={to} className={cn(linkBase, className)}>
      {children}
    </Link>
  );
}
