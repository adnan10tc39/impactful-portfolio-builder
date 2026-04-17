import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { testimonials } from "@/data/testimonials";

const platformLabel: Record<string, { name: string; cls: string; icon: string }> = {
  upwork: { name: "Upwork", cls: "bg-[#14a800]/10 text-[#14a800] border-[#14a800]/30", icon: "briefcase" },
  fiverr: { name: "Fiverr", cls: "bg-[#1dbf73]/10 text-[#1dbf73] border-[#1dbf73]/30", icon: "zap" },
  linkedin: { name: "LinkedIn", cls: "bg-[#0a66c2]/10 text-[#0a66c2] border-[#0a66c2]/30", icon: "linkedin" },
  direct: { name: "Direct Client", cls: "bg-primary/10 text-primary border-primary/30", icon: "user" },
};

export const Testimonials = () => (
  <section id="testimonials" className="section-padding border-t border-border">
    <div className="section-container">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
        description="Curated 5-star feedback from Upwork and Fiverr engagements across enterprise and startup clients."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => {
          const p = platformLabel[t.platform || "direct"];
          return (
            <ScrollReveal key={t.id} delay={i * 0.05}>
              <div className="glass-card flex h-full flex-col rounded-xl p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${p.cls}`}>
                    <Icon name={p.icon} size={12} /> {p.name}
                  </span>
                  {t.rating && (
                    <div className="flex items-center gap-0.5 text-secondary" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Icon key={idx} name="star" size={14} className="fill-current" />
                      ))}
                    </div>
                  )}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
                {t.metric && (
                  <div className="mb-4 rounded-md bg-success/10 px-3 py-2 text-center font-mono text-xs font-medium text-success">
                    {t.metric}
                  </div>
                )}
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);
