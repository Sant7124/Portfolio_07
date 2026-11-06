import React, { useState, useMemo } from "react";
import { projectsData, projectCategories } from "../data/projects";
import { ProjectDialog } from "./ProjectDialog";
import { ProjectMockup } from "./ProjectMockups";
import { GithubIcon } from "./Icons";
import { Search, ExternalLink, ArrowUpRight } from "lucide-react";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.categoryFilter === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="section" id="work" aria-label="Engineered Portfolio Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-tag">01 // Selected Work</div>
        <h2 className="section-title">ENGINEERED PROJECTS</h2>
        <p className="section-subtitle">
          Real-world applications spanning Retrieval-Augmented Generation (RAG), agentic business intelligence,
          cybersecurity OSINT scanning, and responsive modern web engineering.
        </p>

        {/* Filter Bar & Search */}
        <div className="projects-header-bar">
          {/* Category Tabs */}
          <div className="filter-tabs-group" role="tablist" aria-label="Filter projects by domain">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-tab ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="project-search-box">
            <Search size={16} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Filter projects by title, description or technology"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <article key={project.id} className="project-card" aria-label={project.title}>
                {/* Visual UI Mockup Header */}
                <ProjectMockup projectId={project.id} />

                {/* Top: Category & Action Links */}
                <div>
                  <div className="card-top">
                    <span className="card-category-badge">{project.category}</span>
                    <div className="card-links-group">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-icon-link"
                          title="View GitHub Repository"
                          aria-label={`View GitHub repo for ${project.title}`}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-icon-link"
                          title="Open Live App"
                          aria-label={`Open live application for ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-tagline">{project.tagline}</p>
                  <p className="card-summary">{project.summary}</p>
                </div>

                {/* Bottom: Tech Pills & Details Button */}
                <div>
                  <div className="card-tech-pills">
                    {project.tech.slice(0, 5).map((t, idx) => (
                      <span key={idx} className="tech-pill">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="tech-pill" style={{ opacity: 0.6 }}>
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="card-footer-action">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="view-details-trigger"
                      aria-label={`Explore architectural deep dive for ${project.title}`}
                    >
                      <span>Deep Dive & Architecture</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 700 }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state">
              <p>No projects match your current filter query.</p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="btn-outline"
                style={{ marginTop: "1rem" }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
