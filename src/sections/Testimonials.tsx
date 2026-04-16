import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => (
  <section id="testimonials" className="section-padding border-t border-border">
    <div className="section-container">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
        description="Feedback from enterprise clients and freelance collaborations."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.id} delay={i * 0.1}>
            <div className="glass-card flex h-full flex-col rounded-xl p-6">
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
        ))}
      </div>
    </div>
  </section>
);
