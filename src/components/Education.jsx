import React from "react";
import { educationData, certificationsData } from "../data/education";
import { codingProfiles } from "../data/codingProfiles";
import { Award, GraduationCap, Layout, Database, ExternalLink, ArrowRight } from "lucide-react";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-tag">04 // Chronology & Credentials</div>
        <h2 className="section-title">EDUCATION & COMPETITIVE CODE</h2>
        <p className="section-subtitle">
          Academic milestones, specialized industry certifications, and verified competitive programming platforms.
        </p>

        <div className="chronology-layout">
          {/* Left Column: Academic Timeline */}
          <div>
            <h3 className="modal-section-title" style={{ marginBottom: "1.75rem" }}>
              <GraduationCap size={20} />
              Academic Background
            </h3>

            <div className="timeline-block">
              {educationData.map((item, idx) => (
                <div key={idx} className="timeline-node">
                  <div className="node-bullet" />
                  <div className="node-year-badge">{item.period}</div>
                  <h4 className="node-title">{item.degree}</h4>
                  <p className="node-org">{item.institution}</p>
                  <span className="node-metric-tag">{item.metric}</span>
                  <p className="node-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Coding Profiles */}
          <div>
            {/* Certifications */}
            <h3 className="modal-section-title" style={{ marginBottom: "1.25rem" }}>
              <Award size={20} />
              Verified Certifications
            </h3>

            <div className="certs-grid">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-icon-wrap">
                    {idx === 0 ? <Award size={22} /> : idx === 1 ? <Layout size={22} /> : <Database size={22} />}
                  </div>
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">Issued by {cert.issuer} • {cert.badge}</p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.2rem" }}>
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coding Profiles */}
            <h3 className="modal-section-title" style={{ marginBottom: "1.25rem", marginTop: "2rem" }}>
              <ExternalLink size={20} />
              Competitive Coding Profiles
            </h3>

            <div className="profiles-grid">
              {codingProfiles.map((p, idx) => (
                <a
                  key={idx}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-card"
                  style={{ "--platform-color": p.color }}
                  title={`View ${p.platform} profile`}
                >
                  <div>
                    <div className="profile-card-top">
                      <span className="platform-name" style={{ color: p.color }}>
                        {p.platform}
                      </span>
                      <span className="profile-arrow">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                    <span className="platform-handle">{p.handle}</span>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginTop: "0.5rem" }}>
                      {p.tagline}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

