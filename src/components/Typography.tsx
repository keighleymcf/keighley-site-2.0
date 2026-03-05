import { cn } from "@/lib/utils";

type HeadingProps = {
  level: 1 | 2 | 3 | "display";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type BodyProps = {
  children?: React.ReactNode;
  className?: string;
};

// Unified heading component
export function Heading({
  level,
  children,
  className,
  ...props
}: HeadingProps) {
  const baseClasses = {
    display:
      "font-hero font-normal uppercase leading-[0.88] tracking-[-0.02em] text-black text-[clamp(5rem,40vw,16rem)]",
    1: "font-hero uppercase leading-[0.95] text-[clamp(2.5rem,5vw,4rem)] m-0",
    2: "font-body font-bold leading-[0.9] text-[clamp(2.25rem,4.5vw,3.75rem)] m-0",
    3: "text-xl leading-normal font-semibold m-0",
  };

  const Tag = level === "display" ? "h1" : (`h${level}` as "h1" | "h2" | "h3");

  return (
    <Tag className={cn(baseClasses[level], className)} {...props}>
      {children}
    </Tag>
  );
}

// Body text - regular paragraphs
export function Body({ children, className, ...props }: BodyProps) {
  return (
    <p
      className={cn("text-lg leading-[1.75] text-black", className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Body large - subtitle/lead text
export function BodyLarge({ children, className, ...props }: BodyProps) {
  return (
    <p
      className={cn("text-xl text-black leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Caption - small supporting text
export function Caption({ children, className, ...props }: BodyProps) {
  return (
    <p
      className={cn("text-sm font-medium text-black/55", className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Small text - footer, labels, etc
export function Small({ children, className, ...props }: BodyProps) {
  return (
    <p className={cn("text-xs text-gray", className)} {...props}>
      {children}
    </p>
  );
}
