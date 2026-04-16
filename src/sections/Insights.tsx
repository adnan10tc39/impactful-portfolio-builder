import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { articles } from "@/data/articles";

export const Insights = () => (
  <section id="insights" className="section-padding border-t border-border">
    <div className="section-container">
      <SectionHeading
        label="Insights"
        title="Articles & Resources"
        description="Thoughts on AI/ML engineering, LLMs, and building production systems."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, i) => (
          <ScrollReveal key={article.id} delay={i * 0.1}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex flex-col rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>·</span>
                <div className="flex gap-1">
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded bg-muted px-2 py-0.5 font-mono text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="flex-1 text-sm text-muted-foreground">{article.description}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read more <Icon name="external-link" size={14} />
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
