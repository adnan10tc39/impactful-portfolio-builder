import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { Insights } from "@/sections/Insights";
import { Link } from "react-router-dom";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-mono text-xs font-medium uppercase text-primary">
              Selected Work
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Featured Case Studies</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all 38 projects <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.05}>
              <Link to={`/projects/${p.slug}`} className="glass-card group flex h-full flex-col overflow-hidden rounded-xl transition-all hover:-translate-y-1 hover:border-primary/40">
                {p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                ) : p.video ? (
                  <video src={p.video} muted playsInline preload="metadata" className="aspect-[16/9] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                    <Icon name="sparkles" size={36} />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-2 w-fit rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase text-primary">{p.category}</span>
                  <h3 className="mb-1 text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.shortDescription}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <>
    <Hero />
    <About />
    <Services />
    <FeaturedProjects />
    <Testimonials />
    <Insights />
  </>
);

export default Index;
