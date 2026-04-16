import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { skillCategories } from "@/data/skills";

export const Skills = () => (
  <section id="skills" className="section-padding border-t border-border">
    <div className="section-container">
      <SectionHeading
        label="Skills"
        title="Technical Expertise"
        description="Evidence-backed capabilities across the full AI/ML stack."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <ScrollReveal key={category.name} delay={i * 0.08}>
            <div className="glass-card h-full rounded-xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                  <Icon name={category.icon} size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
