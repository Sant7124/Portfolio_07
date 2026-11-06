import React from "react";
import { siteConfig } from "../config/site";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LeetCodeIcon, HackerRankIcon, GeeksforGeeksIcon } from "./Icons";

export function Footer() {
  const { identity, contact } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Portfolio Footer and Social Links">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            {/* Left: Brand Monogram & Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="brand-monogram">{identity.monogram}</div>
              <div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", textTransform: "uppercase" }}>
                  {identity.fullName}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {identity.profession} • {identity.location}
                </p>
              </div>
            </div>

            {/* Right: Social Profiles */}
            <div className="footer-socials">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="GitHub Profile"
                aria-label="Santosh Yadav GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="LeetCode Profile"
                aria-label="Santosh Yadav LeetCode"
              >
                <LeetCodeIcon size={18} />
              </a>

              <a
                href={contact.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="HackerRank Profile"
                aria-label="Santosh Yadav HackerRank"
              >
                <HackerRankIcon size={18} />
              </a>

              <a
                href={contact.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title="GeeksforGeeks Profile"
                aria-label="Santosh Yadav GeeksforGeeks"
              >
                <GeeksforGeeksIcon size={18} />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Santosh Yadav. Engineered with precision & modern web standards.</p>

            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top of page">
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
