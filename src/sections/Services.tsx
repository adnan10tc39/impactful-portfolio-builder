import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { services, engagementModels } from "@/data/services";

export const Services = () => (
  <section id="services" className="section-padding border-t border-border">
    <div className="section-container">
      <SectionHeading
        label="Services"
        title="Enterprise AI Solutions"
        description="End-to-end AI/ML engineering — from strategy and architecture to production deployment and ongoing optimization."
      />

      <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ScrollReveal key={service.id} delay={i * 0.08}>
            <div className="glass-card group h-full rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>

              <div className="mb-3">
                <h4 className="mb-1 text-xs font-semibold text-foreground uppercase">Deliverables</h4>
                <ul className="space-y-1">
                  {service.deliverables.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground">• {d}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="calendar" size={14} /> {service.timeline}
              </div>

              <div className="flex flex-wrap gap-1">
                {service.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Engagement models */}
      <ScrollReveal>
        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="mb-6 text-center font-display text-2xl font-bold text-foreground">Engagement Models</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div key={model.title} className="text-center">
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-secondary/10 p-3 text-secondary">
                  <Icon name={model.icon} size={24} />
                </div>
                <h4 className="mb-1 font-semibold text-foreground">{model.title}</h4>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
