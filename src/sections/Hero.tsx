import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteSettings, impactStats } from "@/data/siteSettings";
import { CountUp } from "@/components/CountUp";
import { Icon } from "@/components/Icon";
import profileImg from "@/assets/profile.jpeg";

export const Hero = () => (
  <section className="relative overflow-hidden" id="hero">
    {/* Background glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
    </div>

    <div className="section-container relative z-10 py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium tracking-wider text-primary uppercase">
              {siteSettings.role}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Hi, I'm {siteSettings.name}.{" "}
            <span className="gradient-text-primary">{siteSettings.tagline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            {siteSettings.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <Icon name="calendar" size={18} /> Book a Call
            </Link>
            <a
              href={siteSettings.cvDownloadUrl}
              download="Adnan_Bajwa_CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-all hover:border-primary/50"
            >
              <Icon name="download" size={18} /> Download CV
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-all hover:border-primary/50"
            >
              View Projects <Icon name="arrow-right" size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 opacity-60 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={profileImg}
              alt={`${siteSettings.name} — ${siteSettings.title}`}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Impact stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
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
  </section>
);
