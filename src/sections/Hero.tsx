import { motion } from "framer-motion";
import { siteSettings, impactStats } from "@/data/siteSettings";
import { CountUp } from "@/components/CountUp";
import { Icon } from "@/components/Icon";

export const Hero = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden pt-20" id="hero">
    {/* Background glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
    </div>

    <div className="section-container relative z-10 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium tracking-wider text-primary uppercase">
            {siteSettings.role}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          <span className="gradient-text-primary">{siteSettings.tagline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {siteSettings.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <Icon name="calendar" size={18} /> Book a Call
          </a>
          <a
            href={siteSettings.cvDownloadUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 font-semibold text-foreground transition-all hover:border-primary/50"
          >
            <Icon name="download" size={18} /> Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 font-semibold text-foreground transition-all hover:border-primary/50"
          >
            View Projects <Icon name="arrow-right" size={18} />
          </a>
        </motion.div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {impactStats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5">
              <div className="font-mono text-2xl font-bold text-primary md:text-3xl">
                <CountUp end={stat.numericValue} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
