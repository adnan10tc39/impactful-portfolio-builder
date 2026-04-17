import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { siteSettings } from "@/data/siteSettings";
import { Icon } from "./Icon";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "user-circle" },
  { label: "Services", href: "/services", icon: "sparkles" },
  { label: "Projects", href: "/projects", icon: "folder" },
  { label: "Skills", href: "/skills", icon: "zap" },
  { label: "Experience", href: "/experience", icon: "briefcase" },
  { label: "Contact", href: "/contact", icon: "mail" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="font-display text-xl font-bold text-foreground">
          {siteSettings.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <Icon name={link.icon} size={16} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <Link
            to="/contact"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
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
            className="overflow-hidden border-t border-border/50 bg-background lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Icon name={link.icon} size={18} /> {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
