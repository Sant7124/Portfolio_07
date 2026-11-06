import React from "react";
import { skillsData } from "../data/skills";
import {
  Brain,
  Database,
  Cpu,
  MessageSquareCode,
  FileText,
  LineChart,
  Zap,
  Code2,
  Terminal,
  Layers,
  Coffee,
  FileCode,
  Atom,
  Flame,
  Palette,
  Layout,
  MonitorSmartphone,
  BarChart3,
  Server,
  HardDrive,
  Network,
  Columns3,
  Share2,
  GitBranch,
  Cloud,
  Radio,
  Send,
  Binary,
  Boxes
} from "lucide-react";

// Icon mapping dictionary
const iconMap = {
  Brain,
  Database,
  Cpu,
  MessageSquareCode,
  FileText,
  LineChart,
  Zap,
  Code2,
  Terminal,
  Layers,
  Coffee,
  FileCode,
  Atom,
  Flame,
  Palette,
  Layout,
  MonitorSmartphone,
  BarChart3,
  Server,
  HardDrive,
  Network,
  Columns3,
  Share2,
  GitBranch,
  Cloud,
  Radio,
  Send,
  Binary,
  Boxes
};

export function Skills() {
  return (
    <section className="section" id="skills" aria-label="Technical Skills and Architectural Expertise">
      <div className="container">
        {/* Section Header */}
        <div className="section-tag">02 // Technical Arsenal</div>
        <h2 className="section-title">SKILLS & ARCHITECTURAL EXPERTISE</h2>
        <p className="section-subtitle">
          A balanced foundation spanning intelligent AI systems, performant frontend architectures, robust backend
          microservices, and rigorous algorithmic problem solving.
        </p>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{cat.category}</h3>
                <span className="skill-cat-tag">{cat.tag}</span>
              </div>
              <p className="skill-cat-desc">{cat.description}</p>

              <div className="skill-items-list">
                {cat.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={sIdx} className="skill-badge-row">
                      <div className="skill-badge-left">
                        <IconComponent size={16} />
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-badge-level">{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

