import { useState, FormEvent } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { siteSettings } from "@/data/siteSettings";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement)?.value;
    if (honeypot) return; // bot detected

    setLoading(true);
    // [PLACEHOLDER: Replace with Formspree or EmailJS endpoint]
    // For now, simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          description="Ready to build intelligent systems that solve real problems? Let's talk."
        />

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Book a call */}
          <ScrollReveal>
            <div className="glass-card flex h-full flex-col rounded-xl p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Icon name="calendar" size={28} />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Book a Call</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Schedule a 30-minute discovery call to discuss your AI/ML needs.
              </p>
              <a
                href={siteSettings.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <Icon name="calendar" size={18} /> Schedule Now
              </a>

              <div className="mt-8 space-y-3 border-t border-border pt-6">
                <a href={`mailto:${siteSettings.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="mail" size={16} /> {siteSettings.email}
                </a>
                <a href={`tel:${siteSettings.phone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="phone" size={16} /> {siteSettings.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name="map-pin" size={16} /> {siteSettings.location}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Quote form */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="mb-6 font-display text-2xl font-bold text-foreground">Request a Quote</h3>

              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-success/10 p-4 text-success">
                    <Icon name="send" size={32} />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-xs font-medium text-muted-foreground">Name *</label>
                      <input id="name" name="name" required className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1 block text-xs font-medium text-muted-foreground">Company</label>
                      <input id="company" name="company" className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-xs font-medium text-muted-foreground">Email *</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="budget" className="mb-1 block text-xs font-medium text-muted-foreground">Budget Range</label>
                      <select id="budget" name="budget" className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
                        <option value="">Select</option>
                        <option>$500 – $2,000</option>
                        <option>$2,000 – $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="mb-1 block text-xs font-medium text-muted-foreground">Timeline</label>
                      <select id="timeline" name="timeline" className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
                        <option value="">Select</option>
                        <option>1–2 weeks</option>
                        <option>1 month</option>
                        <option>2–3 months</option>
                        <option>3+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="mb-1 block text-xs font-medium text-muted-foreground">Area of Interest</label>
                    <select id="interest" name="interest" className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
                      <option value="">Select</option>
                      <option>RAG & Knowledge Systems</option>
                      <option>Agentic AI & Multi-Agent</option>
                      <option>LLM Fine-Tuning</option>
                      <option>Multimodal AI</option>
                      <option>Computer Vision</option>
                      <option>Enterprise Chatbots</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="mb-1 block text-xs font-medium text-muted-foreground">Project Description *</label>
                    <textarea id="description" name="description" rows={4} required className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-all hover:opacity-90 disabled:opacity-60"
                  >
                    <Icon name="send" size={18} />
                    {loading ? "Sending..." : "Send Quote Request"}
                  </button>

                  <p className="text-center text-[10px] text-muted-foreground">
                    Your data is handled with care. I'll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
