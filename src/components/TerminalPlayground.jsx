import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "../config/site";
import { projectsData } from "../data/projects";
import { Terminal, CornerDownLeft, Sparkles, X, Minimize2, Maximize2 } from "lucide-react";
import { themeAccents } from "./ThemeCustomizer";

export function TerminalPlayground({ setActiveAccentId, onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Santosh Yadav Interactive CLI v2.4.0 — Type 'help' for commands." }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [history, isOpen]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${inputVal}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • about      - Learn about Santosh Yadav's engineering background
  • skills     - View categorized technical proficiencies
  • projects   - List 5 flagship deployed software & AI projects
  • contact    - Display verified direct contact details
  • socials    - View LeetCode, GitHub, HackerRank, and GFG profiles
  • theme <c>  - Change accent (crimson, cyan, violet, emerald, amber)
  • clear      - Clear terminal console screen
  • close      - Minimize the CLI drawer`
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: `${siteConfig.identity.fullName} — ${siteConfig.identity.profession}
Student at ${siteConfig.identity.institution} (${siteConfig.identity.graduationYear}).
${siteConfig.identity.subheadline}`
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `TECHNICAL ARSENAL:
  [AI / ML]     LLM Integration, RAG Pipelines, Groq & Gemini APIs, PyMuPDF, Scikit-learn
  [Languages]   C++, Python, JavaScript (ES6+), Java, C
  [Frontend]    React.js, Vite, Tailwind CSS, HTML5, CSS3, Recharts
  [Backend]     FastAPI, Node.js, Express.js, PostgreSQL, MongoDB, SQLAlchemy, REST APIs
  [DevOps]      Git, GitHub, Vercel, Render, Railway, Postman`
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: projectsData
            .map(
              (p, i) =>
                `#${i + 1} ${p.title} (${p.category})
   ${p.tagline}
   Live: ${p.liveUrl || "Internal Repo"} | Repo: ${p.githubUrl}`
            )
            .join("\n\n")
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `Email:    ${siteConfig.contact.email}
Phone:    ${siteConfig.contact.phone}
Location: ${siteConfig.contact.location} (UTC+5:30 IST)
Status:   ${siteConfig.identity.availability}`
        });
        break;

      case "socials":
        newHistory.push({
          type: "output",
          text: `GitHub:       ${siteConfig.contact.github}
LeetCode:     ${siteConfig.contact.leetcode}
HackerRank:   ${siteConfig.contact.hackerrank}
GeeksforGeeks:${siteConfig.contact.geeksforgeeks}`
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "close":
        setIsOpen(false);
        setInputVal("");
        return;

      default:
        if (cmd.startsWith("theme ")) {
          const tName = cmd.replace("theme ", "").trim();
          const target = themeAccents.find((a) => a.id === tName);
          if (target) {
            setActiveAccentId(target.id);
            document.documentElement.style.setProperty("--accent", target.color);
            document.documentElement.style.setProperty("--accent-hover", target.hover);
            document.documentElement.style.setProperty("--accent-glow", target.glow);
            document.documentElement.style.setProperty("--accent-subtle", target.subtle);
            localStorage.setItem("santosh_accent_theme", target.id);
            if (onShowToast) onShowToast(`Theme switched to ${target.name}`);
            newHistory.push({ type: "output", text: `Theme updated to ${target.name} (${target.color}).` });
          } else {
            newHistory.push({
              type: "error",
              text: `Invalid theme '${tName}'. Choose from: crimson, cyan, violet, emerald, amber.`
            });
          }
        } else {
          newHistory.push({
            type: "error",
            text: `Command not recognized: '${cmd}'. Type 'help' to inspect available commands.`
          });
        }
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <>
      {/* Floating CLI Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-terminal-trigger"
        title="Open Interactive Developer CLI"
        aria-label="Open Interactive Terminal"
      >
        <Terminal size={18} />
        <span className="cli-trigger-text">Terminal</span>
      </button>

      {/* Slide-out Terminal Window */}
      {isOpen && (
        <aside className="terminal-drawer-card" role="region" aria-label="Developer Interactive Terminal">
          <div className="terminal-header-bar">
            <div className="mockup-dots">
              <span className="dot red" onClick={() => setIsOpen(false)} title="Close"></span>
              <span className="dot yellow" onClick={() => setHistory([])} title="Clear"></span>
              <span className="dot green" onClick={() => setHistory([{ type: "system", text: "Refreshed." }])} title="Restart"></span>
            </div>
            <span className="terminal-prompt-title">santosh@terminal: ~ (bash)</span>
            <button className="terminal-close-x" onClick={() => setIsOpen(false)} aria-label="Close terminal">
              <X size={14} />
            </button>
          </div>

          <div className="terminal-output-body">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line ${item.type}`}>
                <pre>{item.text}</pre>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleCommand} className="terminal-input-bar">
            <span className="terminal-caret">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'skills', 'projects'..."
              className="terminal-text-input"
              aria-label="Terminal command input"
            />
            <button type="submit" className="terminal-submit-btn" aria-label="Execute command">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </aside>
      )}
    </>
  );
}
