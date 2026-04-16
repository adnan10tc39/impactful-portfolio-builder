import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteSettings, impactStats } from "@/data/siteSettings";
import { Icon } from "@/components/Icon";

const narratives = [
  {
    title: "What I Do",
    description: "I architect and build production-grade AI/ML systems — from LLMs and RAG pipelines to multi-agent workflows and computer vision solutions — that solve real business problems at scale.",
    icon: "sparkles",
  },
  {
    title: "How I Do It",
    description: "End-to-end ownership: problem analysis → architecture design → model development → production deployment → monitoring. I work with cross-functional teams and deliver systems that are reliable, scalable, and maintainable.",
    icon: "workflow",
  },
  {
    title: "The Outcomes",
    description: "Measurable impact across 15+ enterprise applications and 38+ client projects — from building language models trained on 40M documents to deploying real-time multimodal AI assistants.",
    icon: "award",
  },
];

export const About = () => (
  <section id="about" className="section-padding border-t border-border">
    <div className="section-container">
      <SectionHeading
        label="About"
        title="Engineering AI That Delivers"
        description={`${siteSettings.name} — ${siteSettings.title}`}
      />

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        {narratives.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="glass-card h-full rounded-xl p-6">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Icon name={item.icon} size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Proof grid */}
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-5 text-center">
              <div className="font-mono text-2xl font-bold text-secondary">{stat.value}</div>
              <div className="mt-1 text-xs font-medium text-muted-foreground uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);
