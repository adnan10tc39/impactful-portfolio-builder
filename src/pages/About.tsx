import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/Icon";
import { siteSettings, impactStats } from "@/data/siteSettings";
import { education, achievements } from "@/data/achievements";
import profileImg from "@/assets/profile.jpeg";

const techStack = [
  { name: "Python", icon: "code" },
  { name: "PyTorch", icon: "cpu" },
  { name: "TensorFlow", icon: "cpu" },
  { name: "LangChain", icon: "workflow" },
  { name: "LangGraph", icon: "workflow" },
  { name: "Hugging Face", icon: "sparkles" },
  { name: "Neo4j", icon: "database" },
  { name: "Pinecone", icon: "database" },
  { name: "ChromaDB", icon: "database" },
  { name: "Qdrant", icon: "database" },
  { name: "FastAPI", icon: "zap" },
  { name: "Ollama", icon: "bot" },
  { name: "vLLM", icon: "bot" },
  { name: "OpenCV", icon: "eye" },
  { name: "YOLOv8", icon: "eye" },
  { name: "Whisper", icon: "message-circle" },
  { name: "LLaVA", icon: "layers" },
  { name: "Stable Diffusion", icon: "sparkles" },
  { name: "Elasticsearch", icon: "search" },
  { name: "Docker", icon: "layers" },
];

const About = () => (
  <>
    <PageHeader eyebrow="About" title="Engineering AI That Delivers" description="Senior ML & Generative AI Engineer with 8+ years of shipping production systems." />
    <section className="section-padding">
      <div className="section-container">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl opacity-60" />
              <img
                src={profileImg}
                alt={`${siteSettings.name} portrait`}
                className="relative aspect-[4/5] w-full rounded-3xl border border-border object-cover"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                {impactStats.slice(0, 4).map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-3 text-center">
                    <div className="font-mono text-lg font-bold text-primary">{s.value}</div>
                    <div className="text-[10px] uppercase text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="mb-2 font-display text-3xl font-bold text-foreground">{siteSettings.name}</h2>
              <p className="mb-6 text-sm font-medium text-primary">{siteSettings.title}</p>

              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a Machine Learning Engineer based in {siteSettings.location}, focused on building intelligent
                  systems that solve real business problems. Over the past 8+ years I've delivered 38+ AI/ML
                  applications across LLMs, RAG, agentic AI, multimodal systems, healthcare, security and computer
                  vision.
                </p>
                <p>
                  My professional journey started in telecommunications engineering and gradually shifted into data
                  science and applied ML. Today I architect production-grade GenAI platforms — from on-premises RAG
                  pipelines to multi-agent LangGraph workflows — for enterprise, healthcare and SaaS clients on
                  Upwork, Fiverr and direct engagements.
                </p>
                <p>
                  I care a lot about engineering quality: clean architectures, measurable outcomes, observability
                  (LangSmith / metrics), and deployments that survive contact with real users. I also enjoy
                  mentoring teams adopting GenAI for the first time.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={siteSettings.cvDownloadUrl} download="Adnan_Bajwa_CV.pdf" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  <Icon name="download" size={16} /> Download CV
                </a>
                <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary">
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
                <a href={`mailto:${siteSettings.email}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary">
                  <Icon name="mail" size={16} /> Email me
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Tech Stack icon grid */}
        <div className="mt-20">
          <h3 className="mb-6 text-center font-display text-2xl font-bold text-foreground">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
            {techStack.map((t) => (
              <div key={t.name} className="glass-card flex flex-col items-center gap-2 rounded-xl p-4 text-center">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <Icon name={t.icon} size={20} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
              <Icon name="graduation-cap" size={22} className="text-primary" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="glass-card rounded-xl p-5">
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-primary">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.startDate} – {edu.endDate} · {edu.location}</p>
                  {edu.registration && <p className="mt-1 text-xs text-muted-foreground">{edu.registration}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
              <Icon name="award" size={22} className="text-primary" /> Certifications
            </h3>
            <div className="space-y-2 max-h-[420px] overflow-auto pr-2">
              {achievements.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.verifyUrl || "#"}
                  target={cert.verifyUrl ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => { if (!cert.verifyUrl) e.preventDefault(); }}
                  className={`block glass-card rounded-lg p-3 transition-colors ${cert.verifyUrl ? "hover:border-primary cursor-pointer" : "cursor-default opacity-90"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-foreground">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                    {cert.verifyUrl && <Icon name="external-link" size={14} className="mt-0.5 shrink-0 text-primary" />}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
