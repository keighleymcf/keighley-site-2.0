import type React from "react";
import { LinkedInIcon, GitHubIcon, SubstackIcon } from "@/components/Icons";

export type IconProps = { size?: number };

export const iconMap: Record<
  string,
  ({ size }: IconProps) => React.ReactElement
> = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Substack: SubstackIcon,
};
