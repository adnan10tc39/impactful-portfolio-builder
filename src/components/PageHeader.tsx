import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, description, children }: PageHeaderProps) => (
  <section className="border-b border-border bg-gradient-to-b from-muted/30 to-transparent">
    <div className="section-container py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium tracking-wider text-primary uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </motion.div>
    </div>
  </section>
);
