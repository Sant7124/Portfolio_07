// Project UI Mockups Engine
// Interactive SVG-driven simulated dark-mode software interfaces
import React from "react";

// ExplainO Visual Mockup: AI Document Intelligence Scanner
export function ExplainOMockup() {
  return (
    <div className="project-mockup-wrapper mockup-explaino">
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="mockup-title-text">ExplainO // RAG Ingestion Pipeline</span>
        <span className="mockup-status-tag">Groq 480 tok/s</span>
      </div>

      <div className="mockup-canvas-area">
        <div className="doc-preview-col">
          <div className="doc-page-graphic">
            <div className="doc-line w-80"></div>
            <div className="doc-line w-100 highlight-rag"></div>
            <div className="doc-line w-90 highlight-rag"></div>
            <div className="doc-line w-60"></div>
            <div className="doc-line w-75"></div>
            <div className="doc-chunk-badge">Vector Chunk #4 (p. 3)</div>
          </div>
        </div>

        <div className="ai-chat-col">
          <div className="chat-bubble user">
            <span className="bubble-label">Query</span>
            <p>Summarize Q3 SaaS churn risk factors</p>
          </div>
          <div className="chat-bubble ai">
            <span className="bubble-label">Groq RAG • 98.4% Confidence</span>
            <p>Identified 3 primary churn drivers: delayed enterprise onboarding, API quota exhaustion, and integration lag.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// MetricMind Visual Mockup: Agentic Semantic BI & Live Charts
export function MetricMindMockup() {
  return (
    <div className="project-mockup-wrapper mockup-metricmind">
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="mockup-title-text">MetricMind // NL-to-SQL Semantic Layer</span>
        <span className="mockup-status-tag">PostgreSQL Connected</span>
      </div>

      <div className="mockup-canvas-area">
        <div className="sql-prompt-bar">
          <span className="prompt-prefix">SQL&gt;</span>
          <span className="prompt-query">SELECT tier, SUM(mrr) FROM subscriptions GROUP BY tier;</span>
        </div>

        {/* Dynamic Mini SVG Chart */}
        <div className="chart-preview-graphic">
          <svg viewBox="0 0 300 90" className="mini-chart-svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Background Grid */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.06)" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.06)" />

            {/* Area & Line */}
            <path
              d="M 10 75 Q 60 55, 110 60 T 190 35 T 260 20 L 290 12 L 290 85 L 10 85 Z"
              fill="url(#chartGrad)"
            />
            <path
              d="M 10 75 Q 60 55, 110 60 T 190 35 T 260 20 L 290 12"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
            />
            {/* Target nodes */}
            <circle cx="110" cy="60" r="3" fill="#ffffff" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="190" cy="35" r="3" fill="#ffffff" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="290" cy="12" r="3" fill="#ffffff" stroke="var(--accent)" strokeWidth="2" />
          </svg>
        </div>

        <div className="metric-kpi-row">
          <div className="kpi-pill">
            <span className="kpi-lbl">Total Enterprise MRR</span>
            <span className="kpi-val">$84.2K</span>
          </div>
          <div className="kpi-pill">
            <span className="kpi-lbl">Query Latency</span>
            <span className="kpi-val">142ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// DigiFootprint Visual Mockup: OSINT Exposure Scanner Radar
export function DigiFootprintMockup() {
  return (
    <div className="project-mockup-wrapper mockup-digifootprint">
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="mockup-title-text">DigiFootprint // OSINT Threat Audit</span>
        <span className="mockup-status-tag" style={{ color: "#ef4444" }}>3 Breaches Detected</span>
      </div>

      <div className="mockup-canvas-area">
        <div className="radar-audit-box">
          <div className="exposure-meter">
            <div className="meter-circle">
              <span className="meter-number">74</span>
              <span className="meter-text">Risk Index</span>
            </div>
          </div>

          <div className="threat-feed-col">
            <div className="threat-item high">
              <span className="threat-status-tag">LEAK FOUND</span>
              <span className="threat-name">Collection #1 Combo List</span>
              <span className="threat-hash">SHA1: 4a82***...</span>
            </div>
            <div className="threat-item medium">
              <span className="threat-status-tag">PASS EXPOSURE</span>
              <span className="threat-name">Plaintext Password Match</span>
              <span className="threat-hash">k-Anonymity Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ShieldVision AI Visual Mockup: Threat Detection Engine
export function ShieldVisionMockup() {
  return (
    <div className="project-mockup-wrapper mockup-shieldvision">
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="mockup-title-text">ShieldVision AI // Multi-Modal Detector</span>
        <span className="mockup-status-tag" style={{ color: "#f59e0b" }}>Analyzing Payload</span>
      </div>

      <div className="mockup-canvas-area">
        <div className="scanner-banner-row">
          <div className="scanner-badge phish-alert">
            <span className="alert-dot"></span>
            <span>PHISHING ATTACK PROBABILITY: 96.8%</span>
          </div>
        </div>

        <div className="threat-indicators-grid">
          <div className="indicator-chip">
            <span className="ind-label">Typosquatting</span>
            <span className="ind-val danger">Detected (IDN Spoof)</span>
          </div>
          <div className="indicator-chip">
            <span className="ind-label">Visual Brand OCR</span>
            <span className="ind-val danger">Microsoft 365 Fake</span>
          </div>
          <div className="indicator-chip">
            <span className="ind-label">Domain Age</span>
            <span className="ind-val warning">&lt; 72 Hours Old</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Internship Recommender Mockup: ML Affinity & Career Matching
export function InternshipRecMockup() {
  return (
    <div className="project-mockup-wrapper mockup-internrec">
      <div className="mockup-window-header">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="mockup-title-text">AI Internship Recommender // Vector Match</span>
        <span className="mockup-status-tag">Cosine Affinity 94.2%</span>
      </div>

      <div className="mockup-canvas-area">
        <div className="match-card-top">
          <div className="match-role-title">AI & Full-Stack Engineer Intern</div>
          <span className="match-badge">Top Match</span>
        </div>

        <div className="affinity-meter-bar">
          <div className="meter-fill" style={{ width: "94%" }}></div>
        </div>

        <div className="skill-gap-pills">
          <span className="skill-fit matched">✓ Python</span>
          <span className="skill-fit matched">✓ FastAPI</span>
          <span className="skill-fit matched">✓ React</span>
          <span className="skill-fit matched">✓ RAG</span>
          <span className="skill-fit gap">+ Docker (Suggested)</span>
        </div>
      </div>
    </div>
  );
}

// Mockup Selector Helper
export function ProjectMockup({ projectId }) {
  switch (projectId) {
    case "explaino":
      return <ExplainOMockup />;
    case "metricmind":
      return <MetricMindMockup />;
    case "digifootprint":
      return <DigiFootprintMockup />;
    case "shieldvision":
      return <ShieldVisionMockup />;
    case "internship-rec":
      return <InternshipRecMockup />;
    default:
      return null;
  }
}
