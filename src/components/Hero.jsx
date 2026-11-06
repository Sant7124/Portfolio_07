import React from "react";
import { siteConfig } from "../config/site";
import { ArrowDownRight, Mail, Download, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const { identity, metrics } = siteConfig;

  return (
    <section className="hero-section" id="home" aria-label="Introduction and Overview">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            {/* Availability Pill */}
            <div className="hero-status-pill" role="status" aria-label={`Current availability: ${identity.availability}`}>
              <span className="status-dot" aria-hidden="true" />
              <span>{identity.availability}</span>
            </div>

            {/* Handwritten Greeting */}
            <span className="hero-greeting" aria-hidden="true">Hi, I am</span>

            {/* Hero Main Name Display */}
            <h1 className="hero-title">
              SANTOSH <span className="accent-text">YADAV</span>
            </h1>

            {/* Role & Subtitle */}
            <div className="hero-role-headline">
              <span>{identity.profession}</span>
              <span className="badge-tag">B.Tech CSE</span>
              <span className="badge-tag">AI / RAG Specialist</span>
            </div>

            {/* Bio Description */}
            <p className="hero-description">{identity.bio}</p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#work" className="btn-primary" aria-label="Explore engineered projects">
                <span>Explore Work</span>
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>

              <a href="#contact" className="btn-secondary" aria-label="Navigate to contact form">
                <span>Get in Touch</span>
                <Mail size={16} aria-hidden="true" />
              </a>

              <a
                href={identity.resumeUrl}
                download="Santosh_Yadav_Resume.pdf"
                className="btn-outline"
                title="Download verified resume PDF"
                aria-label="Download Santosh Yadav verified resume in PDF format"
              >
                <Download size={16} aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Verified Metrics Strip */}
            <div className="hero-metrics" role="region" aria-label="Key Highlights and Academic Metrics">
              {metrics.map((item, idx) => (
                <div key={idx} className="metric-item">
                  <span className="metric-value">
                    {item.value.slice(0, -1)}
                    <span className="accent">{item.value.slice(-1)}</span>
                  </span>
                  <span className="metric-label">{item.label}</span>
                  <span className="metric-detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right: Cinematic Studio Portrait */}
          <div className="hero-portrait-col">
            <div className="portrait-frame-wrapper">
              {/* Backlit Red Ambient Rim Light Glow */}
              <div className="portrait-glow-layer" aria-hidden="true" />

              {/* Floating Badge: Top Left */}
              <div className="floating-badge badge-top-left" aria-hidden="true">
                <div className="badge-icon-box">
                  <Terminal size={18} />
                </div>
                <div className="badge-text-group">
                  <span className="badge-sub">Academic Track</span>
                  <span className="badge-main">B.Tech CSE (2023-27)</span>
                </div>
              </div>

              {/* Card Container for Portrait */}
              <div className="portrait-inner-card">
                <img
                  src={identity.portrait}
                  alt="Santosh Yadav - AI & Full-Stack Engineer, B.Tech CSE at Dronacharya Group of Institutions"
                  className="portrait-img"
                  loading="eager"
                  width="440"
                  height="586"
                />
              </div>

              {/* Floating Badge: Bottom Right */}
              <div className="floating-badge badge-bottom-right" aria-hidden="true">
                <div className="badge-icon-box">
                  <Sparkles size={18} />
                </div>
                <div className="badge-text-group">
                  <span className="badge-sub">Specialty</span>
                  <span className="badge-main">RAG & Agentic AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
