import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import siteContent from "@/content/site.json";
import contactContent from "@/content/contact.json";
import { ROUTES } from "@/routes/routes";
import { iconMap } from "@/utils/iconMap";
import { ExternalLink } from "@/components/Links";

export function Nav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="px-6 md:px-10 py-5 flex justify-between items-center">
      <Link
        to={ROUTES.HOME}
        className="text-gray uppercase tracking-wider hover:text-black transition-colors"
      >
        {siteContent.nav.logo}
      </Link>

      {/* Desktop nav */}
      <NavigationMenu viewport={false} className="hidden md:flex">
        <NavigationMenuList className="gap-8">
          {siteContent.nav.links.map((link) => (
            <NavigationMenuItem key={link.path}>
              <NavigationMenuLink asChild>
                <Link
                  to={link.path}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium tracking-widest uppercase bg-transparent hover:bg-transparent focus:bg-transparent px-0 h-auto",
                    isActive(link.path)
                      ? "text-coral"
                      : "text-black hover:text-coral",
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-64 bg-white flex flex-col"
          onCloseAutoFocus={(e) => e.preventDefault()}
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col gap-6 mt-16 w-full items-end px-4">
            {siteContent.nav.links.map((link) => (
              <SheetClose asChild key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-base font-medium tracking-widest uppercase transition-colors",
                    isActive(link.path)
                      ? "text-coral"
                      : "text-black hover:text-coral",
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <SheetFooter className="mt-auto flex-row justify-end gap-5">
            {contactContent.links.map((link) => {
              const Icon = iconMap[link.label];
              return (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                >
                  {Icon && <Icon />}
                </ExternalLink>
              );
            })}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
