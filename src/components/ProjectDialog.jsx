import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ProjectMockup } from "./ProjectMockups";

export function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div className="modal-dialog">
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="card-category-badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
              {project.category} // {project.year}
            </span>
            <h2 id="modal-title" className="card-title" style={{ fontSize: "2.2rem" }}>
              {project.title}
            </h2>
            <p className="card-tagline" style={{ fontSize: "1rem", margin: 0 }}>
              {project.tagline}
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Visual Simulation Mockup */}
          <ProjectMockup projectId={project.id} />

          {/* Overview */}
          <div>
            <h3 className="modal-section-title">
              <Layers size={18} />
              Project Overview
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: "1.7" }}>
              {project.fullDescription}
            </p>
          </div>

          {/* Architectural Design & Engineering Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <Cpu size={18} />
                System Architecture & Engineering
              </h3>
              <ul className="modal-feature-list">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Capabilities */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <CheckCircle2 size={18} />
                Key Capabilities
              </h3>
              <ul className="modal-feature-list">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <CheckCircle2 size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="modal-section-title">Technologies & Frameworks</h3>
            <div className="card-tech-pills" style={{ margin: 0 }}>
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-pill" style={{ fontSize: "0.82rem", padding: "0.3rem 0.75rem" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span>Visit Live Application</span>
              <ExternalLink size={16} />
            </a>
          )}

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubIcon size={16} />
              <span>Source Repository</span>
            </a>
          )}

          <button onClick={onClose} className="btn-outline" style={{ marginLeft: "auto" }}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
