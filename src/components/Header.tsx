import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteSettings } from "@/data/siteSettings";
import { Icon } from "./Icon";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          {siteSettings.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 md:inline-flex"
          >
            Book a Call
          </a>
          <button
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Icon name={isOpen ? "x" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book a Call
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
