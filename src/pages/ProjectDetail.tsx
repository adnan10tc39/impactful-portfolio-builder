import { useParams, Link, Navigate } from "react-router-dom";
import { Icon } from "@/components/Icon";
import { projects } from "@/data/projects";
import { siteSettings } from "@/data/siteSettings";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <article className="pb-20">
      {/* Banner */}
      <div className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/40 to-transparent">
        <div className="section-container py-12 md:py-16">
          <Link to="/projects" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Icon name="arrow-left" size={16} /> Back to projects
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase text-primary">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-md bg-secondary/10 px-2.5 py-0.5 text-[10px] font-medium text-secondary">Featured</span>
            )}
            <span className="text-xs text-muted-foreground">{project.duration}</span>
            {project.priceRange && <span className="text-xs text-muted-foreground">· {project.priceRange}</span>}
          </div>

          <h1 className="mb-4 max-w-3xl font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{project.shortDescription}</p>
        </div>
      </div>

      <div className="section-container mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-8">
          {/* Media */}
          {project.video ? (
            <div className="overflow-hidden rounded-xl border border-border bg-black">
              <video src={project.video} controls preload="metadata" poster={project.image} className="aspect-video w-full" />
            </div>
          ) : project.image ? (
            <img src={project.image} alt={project.title} className="w-full rounded-xl border border-border object-cover" />
          ) : null}

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{project.fullDescription}</p>
          </section>

          {project.problem && (
            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Problem</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Solution</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{project.solution}</p>
            </section>
          )}

          {project.results && project.results.length > 0 && (
            <section>
              <h2 className="mb-3 font-display text-2xl font-bold text-foreground">Outcomes</h2>
              <ul className="space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-base text-muted-foreground">
                    <Icon name="check" size={18} className="mt-1 shrink-0 text-success" /> {r}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">Key Metrics</h3>
            <div className="space-y-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between border-b border-border pb-2 last:border-0">
                  <span className="text-xs uppercase text-muted-foreground">{m.label}</span>
                  <span className="font-mono text-sm font-bold text-primary">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <span key={t} className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase text-foreground">Industries</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.industries.map((i) => (
                <span key={i} className="rounded-md border border-border px-2 py-1 text-[11px] text-muted-foreground">
                  {i}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90"
          >
            <Icon name="calendar" size={18} /> Discuss a similar project
          </Link>
          <a
            href={`mailto:${siteSettings.email}?subject=${encodeURIComponent("Re: " + project.title)}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary"
          >
            <Icon name="mail" size={16} /> Email about this case study
          </a>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetail;
