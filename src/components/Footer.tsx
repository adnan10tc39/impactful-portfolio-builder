import { siteSettings } from "@/data/siteSettings";
import { Icon } from "./Icon";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="section-container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-display text-xl font-bold text-foreground">{siteSettings.name}</h3>
          <p className="text-sm text-muted-foreground">{siteSettings.title}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground uppercase">Connect</h4>
          <div className="flex gap-4">
            <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted-foreground transition-colors hover:text-primary">
              <Icon name="linkedin" size={20} />
            </a>
            <a href={siteSettings.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted-foreground transition-colors hover:text-primary">
              <Icon name="github" size={20} />
            </a>
            <a href={`mailto:${siteSettings.email}`} aria-label="Send email" className="text-muted-foreground transition-colors hover:text-primary">
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground uppercase">Downloads</h4>
          <div className="flex flex-col gap-2">
            <a href={siteSettings.cvDownloadUrl} className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Icon name="download" size={16} /> Download CV
            </a>
            <a href={siteSettings.portfolioDownloadUrl} className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Icon name="download" size={16} /> Download Portfolio
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteSettings.name}. All rights reserved.
      </div>
    </div>
  </footer>
);
