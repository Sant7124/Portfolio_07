import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X, Sparkles, ArrowRight, Download } from "lucide-react";

export function Header({ isMotionActive, setIsMotionActive, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation & accessibility: Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`} role="banner">
      <div className="container">
        <div className="header-inner">
          {/* Brand Monogram & Wordmark */}
          <a href="#" className="brand-link" aria-label="Santosh Yadav - Scroll to top of portfolio">
            <div className="brand-monogram" aria-hidden="true">
              {siteConfig.identity.monogram}
            </div>
            <div className="brand-text">
              <span className="brand-name">{siteConfig.identity.displayName}</span>
              <span className="brand-role">AI & FULL-STACK ENGINEER</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            {siteConfig.navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Controls */}
          <div className="header-actions">
            {/* Top Motion Switcher */}
            <button
              onClick={() => setIsMotionActive((prev) => !prev)}
              className={`motion-toggle-btn ${isMotionActive ? "active" : ""}`}
              title={isMotionActive ? "Pause interactive particle swarm" : "Resume interactive particle swarm"}
              aria-label={`Toggle background swarm motion. Current status: ${isMotionActive ? "Active" : "Paused"}`}
              aria-pressed={isMotionActive}
            >
              <span className="motion-indicator" aria-hidden="true" />
              <span>Motion: {isMotionActive ? "On" : "Off"}</span>
            </button>

            {/* Quick Contact CTA */}
            <a href="#contact" className="header-cta-btn" aria-label="Navigate to contact section">
              <span>Contact</span>
              <ArrowRight size={14} aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer Menu */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-links" aria-label="Mobile Navigation">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-item ${activeSection === item.href.substring(1) ? "active" : ""}`}
            >
              <span>{item.label}</span>
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href={siteConfig.identity.resumeUrl}
            download="Santosh_Yadav_Resume.pdf"
            className="btn-outline"
            style={{ width: "100%", justifyContent: "center" }}
            aria-label="Download verified resume PDF"
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
