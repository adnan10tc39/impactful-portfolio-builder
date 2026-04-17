import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/Icon";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === "All" || p.category === filter;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [filter, searchQuery]);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="38 Case Studies"
        description="A complete archive of AI/ML applications I've designed, built and shipped — from on-prem RAG systems to real-time computer vision."
      />
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
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
                placeholder="Search projects or tech…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-card py-2 pr-4 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:w-72"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.03}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} — banner`}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  ) : project.video ? (
                    <div className="relative aspect-[16/9] w-full bg-muted">
                      <video src={project.video} muted playsInline preload="metadata" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 transition-opacity group-hover:opacity-100">
                        <Icon name="play" size={32} className="text-primary" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                      <Icon name="sparkles" size={36} />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary uppercase">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="rounded-md bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary">Featured</span>
                      )}
                    </div>
                    <h3 className="mb-2 text-base font-semibold leading-tight text-foreground">{project.title}</h3>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.shortDescription}</p>

                    <div className="mb-4 grid grid-cols-3 gap-2">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="rounded-md bg-muted p-2 text-center">
                          <div className="font-mono text-[11px] font-bold text-primary">{m.value}</div>
                          <div className="text-[9px] uppercase text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>

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
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">No projects match your search.</div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
