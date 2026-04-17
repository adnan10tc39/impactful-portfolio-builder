import { Link } from "react-router-dom";
import { siteSettings } from "@/data/siteSettings";
import { Icon } from "./Icon";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="section-container">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-display text-xl font-bold text-foreground">{siteSettings.name}</h3>
          <p className="text-sm text-muted-foreground">{siteSettings.title}</p>
          <p className="mt-2 text-xs text-muted-foreground">{siteSettings.location}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground uppercase">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground uppercase">Connect</h4>
          <div className="flex gap-3">
            <a href={siteSettings.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Icon name="linkedin" size={18} />
            </a>
            <a href={siteSettings.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Icon name="github" size={18} />
            </a>
            <a href={`mailto:${siteSettings.email}`} aria-label="Send email" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Icon name="mail" size={18} />
            </a>
            <a href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`} aria-label="Call phone" className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Icon name="phone" size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground uppercase">Downloads</h4>
          <div className="flex flex-col gap-2">
            <a href={siteSettings.cvDownloadUrl} download="Adnan_Bajwa_CV.pdf" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Icon name="download" size={16} /> Download CV (PDF)
            </a>
            <a href={siteSettings.cvDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Icon name="file-text" size={16} /> Preview CV
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
