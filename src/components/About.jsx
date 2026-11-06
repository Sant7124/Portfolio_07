import React from "react";
import { siteConfig } from "../config/site";
import { ArrowRight, MapPin, GraduationCap, Sparkles, Terminal } from "lucide-react";

export function About() {
  const { identity } = siteConfig;

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-tag">03 // The Engineer</div>
        <h2 className="section-title">ABOUT SANTOSH YADAV</h2>

        <div className="about-grid">
          {/* Left Column: Photo & Handwritten Stamp */}
          <div className="about-photo-wrapper">
            <div className="about-photo-card">
              <img
                src={identity.secondaryPortrait}
                alt="Santosh Yadav - Engineering in Focus"
                className="about-photo-img"
                loading="lazy"
                width="420"
                height="560"
              />
            </div>

            {/* Handwritten Stamp Sticker */}
            <div className="about-stamp">
              <span className="about-stamp-handwritten">"Curiosity + Code = Innovation"</span>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="about-content">
            {/* Quote */}
            <blockquote className="about-quote">
              "Great engineering isn’t just about writing code that works — it’s about crafting <span className="highlight">intelligent, resilient systems</span> that solve complex human friction."
            </blockquote>

            {/* Paragraphs */}
            <div className="about-paragraphs">
              <p>
                I am a third-year Computer Science Engineering undergraduate at{" "}
                <strong>Dronacharya Group of Institutions, Greater Noida</strong>. My passion lies at the intersection of
                practical artificial intelligence, high-performance web systems, and cybersecurity intelligence.
              </p>
              <p>
                From building <strong>ExplainO</strong> (a RAG-based document intelligence SaaS platform that parses and
                contextualizes complex documents in sub-seconds) to developing <strong>MetricMind</strong> (an agentic BI
                tool transforming conversational queries into governed SQL and charts), I focus on shipping software that
                delivers immediate, measurable value.
              </p>
              <p>
                When I’m not architecting full-stack systems or training custom prompts, you’ll find me solving algorithmic
                challenges on LeetCode and HackerRank, exploring cutting-edge AI research papers, or refining developer
                experiences.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="about-quick-facts">
              <div>
                <span className="fact-title">Current Academic Status</span>
                <p className="fact-desc">B.Tech CSE (3rd Year, 2023–27)</p>
              </div>

              <div>
                <span className="fact-title">Primary Focus</span>
                <p className="fact-desc">RAG Systems & Full-Stack AI</p>
              </div>

              <div>
                <span className="fact-title">Base Location</span>
                <p className="fact-desc">Greater Noida, India</p>
              </div>

              <div>
                <span className="fact-title">Availability</span>
                <p className="fact-desc" style={{ color: "#10b981" }}>Open for Internships & Collabs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

