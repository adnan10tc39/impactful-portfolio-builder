import { useState, useMemo } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { projects } from "@/data/projects";

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === "All" || p.category === filter;
      const matchSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Portfolio & Case Studies"
          description="15+ AI/ML applications delivered across enterprise, healthcare, security, and more."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Icon name="search" size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-border bg-card py-2 pr-4 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <div className="glass-card group flex h-full flex-col rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary uppercase">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="rounded-md bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-base font-semibold text-foreground leading-tight">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.shortDescription}</p>

                {/* Metrics */}
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-md bg-muted p-2 text-center">
                      <div className="font-mono text-xs font-bold text-primary">{m.value}</div>
                      <div className="text-[10px] text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            No projects match your search.
          </div>
        )}
      </div>
    </section>
  );
};
