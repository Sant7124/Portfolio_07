import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

export function Header({ isMotionActive, setIsMotionActive, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          {/* Brand Wordmark */}
          <a href="#" className="brand-link" aria-label="Santosh Yadav - Return to top">
            <div className="brand-monogram">{siteConfig.identity.monogram}</div>
            <div className="brand-text">
              <span className="brand-name">{siteConfig.identity.displayName}</span>
              <span className="brand-role">{siteConfig.identity.profession.split(" ")[0]} & ENGINEER</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Motion Toggle + CTA + Mobile Hamburger */}
          <div className="header-actions">
            {/* Motion Switcher */}
            <button
              onClick={() => setIsMotionActive((prev) => !prev)}
              className={`motion-toggle-btn ${isMotionActive ? "active" : ""}`}
              title={isMotionActive ? "Disable dynamic particle swarm" : "Enable interactive particle swarm"}
              aria-label="Toggle Swarm Motion"
            >
              <span className="motion-indicator" />
              <span>Motion: {isMotionActive ? "On" : "Off"}</span>
            </button>

            {/* Quick Contact CTA */}
            <a href="#contact" className="header-cta-btn">
              <span>Contact</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <nav className="mobile-nav-links">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-item ${activeSection === item.href.substring(1) ? "active" : ""}`}
            >
              <span>{item.label}</span>
              <ArrowRight size={20} />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={siteConfig.identity.resumeUrl}
            download="Santosh_Yadav_Resume.pdf"
            className="btn-outline"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Download Resume (PDF)
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}

