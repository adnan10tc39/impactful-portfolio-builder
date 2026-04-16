import { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <div className="mb-16 text-center">
    <span className="mb-3 inline-block font-mono text-sm font-medium tracking-wider text-primary uppercase">
      {label}
    </span>
    <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
    )}
  </div>
);
