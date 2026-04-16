import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { experiences } from "@/data/experience";
import { education, achievements } from "@/data/achievements";

export const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>("nstp");

  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="section-container">
        <SectionHeading
          label="Experience"
          title="Career Timeline"
          description="8+ years building production-grade AI/ML systems."
        />

        <div className="mx-auto max-w-3xl">
          {/* Timeline */}
          <div className="relative space-y-6">
            <div className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-6" />

            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute top-2 left-2.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-4.5" />
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full text-left"
                    aria-expanded={expandedId === exp.id}
                  >
                    <div className="glass-card rounded-xl p-5 transition-all hover:border-primary/30">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                        {exp.type === "freelance" && (
                          <span className="rounded bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary">Freelance</span>
                        )}
                      </div>
                      <div className="mb-1 text-sm text-primary">{exp.company}</div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Icon name="calendar" size={12} /> {exp.startDate} – {exp.endDate}</span>
                        <span className="flex items-center gap-1"><Icon name="map-pin" size={12} /> {exp.location}</span>
                      </div>

                      <AnimatePresence>
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2 border-t border-border pt-4">
                              {exp.achievements.map((ach, j) => (
                                <li key={j} className="text-sm text-muted-foreground">
                                  <span className="mr-2 text-primary">▸</span>{ach}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-1">
                              {exp.tools.map((tool) => (
                                <span key={tool} className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Education */}
          <ScrollReveal>
            <div className="mt-16">
              <h3 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <Icon name="graduation-cap" size={24} className="text-primary" /> Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="glass-card rounded-xl p-5">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-primary">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.startDate} – {edu.endDate} · {edu.location}</p>
                    {edu.registration && <p className="mt-1 text-xs text-muted-foreground">{edu.registration}</p>}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal>
            <div className="mt-16">
              <h3 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <Icon name="award" size={24} className="text-primary" /> Certifications
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {achievements.slice(0, 8).map((cert) => (
                  <div key={cert.id} className="glass-card rounded-lg p-4">
                    <h4 className="text-sm font-medium text-foreground">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
              {achievements.length > 8 && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  +{achievements.length - 8} more certifications
                </p>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
