import React, { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";

export const themeAccents = [
  {
    id: "crimson",
    name: "Crimson Studio",
    color: "#e32b3c",
    hover: "#ff384b",
    glow: "rgba(227, 43, 60, 0.35)",
    subtle: "rgba(227, 43, 60, 0.12)",
    rgb: "227, 43, 60"
  },
  {
    id: "cyan",
    name: "Cyber Cyan",
    color: "#00e5ff",
    hover: "#33edff",
    glow: "rgba(0, 229, 255, 0.35)",
    subtle: "rgba(0, 229, 255, 0.12)",
    rgb: "0, 229, 255"
  },
  {
    id: "violet",
    name: "Neural Violet",
    color: "#a855f7",
    hover: "#c084fc",
    glow: "rgba(168, 85, 247, 0.35)",
    subtle: "rgba(168, 85, 247, 0.12)",
    rgb: "168, 85, 247"
  },
  {
    id: "emerald",
    name: "Matrix Emerald",
    color: "#10b981",
    hover: "#34d399",
    glow: "rgba(16, 185, 129, 0.35)",
    subtle: "rgba(16, 185, 129, 0.12)",
    rgb: "16, 185, 129"
  },
  {
    id: "amber",
    name: "Solar Amber",
    color: "#f59e0b",
    hover: "#fbbf24",
    glow: "rgba(245, 158, 11, 0.35)",
    subtle: "rgba(245, 158, 11, 0.12)",
    rgb: "245, 158, 11"
  }
];

export function ThemeCustomizer({ activeAccentId, setActiveAccentId, onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);

  const applyAccent = (accent) => {
    setActiveAccentId(accent.id);
    document.documentElement.style.setProperty("--accent", accent.color);
    document.documentElement.style.setProperty("--accent-hover", accent.hover);
    document.documentElement.style.setProperty("--accent-glow", accent.glow);
    document.documentElement.style.setProperty("--accent-subtle", accent.subtle);
    localStorage.setItem("santosh_accent_theme", accent.id);
    if (onShowToast) onShowToast(`Theme switched to ${accent.name}`);
  };

  useEffect(() => {
    const saved = localStorage.getItem("santosh_accent_theme");
    const found = themeAccents.find((a) => a.id === saved) || themeAccents[0];
    applyAccent(found);
  }, []);

  return (
    <div className="theme-customizer-dock" aria-label="Color Palette Switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`theme-dock-trigger ${isOpen ? "active" : ""}`}
        title="Customize Accent Palette"
        aria-label="Open Theme Customizer"
        aria-expanded={isOpen}
      >
        <Palette size={16} />
        <span className="dock-trigger-label">Theme</span>
      </button>

      {isOpen && (
        <div className="theme-palette-popover" role="dialog" aria-label="Theme Color Options">
          <div className="popover-header">
            <span className="popover-title">Editorial Accents</span>
          </div>
          <div className="swatches-row">
            {themeAccents.map((accent) => (
              <button
                key={accent.id}
                onClick={() => applyAccent(accent)}
                className={`color-swatch-btn ${activeAccentId === accent.id ? "selected" : ""}`}
                style={{ "--swatch-color": accent.color }}
                title={accent.name}
                aria-label={`Select ${accent.name} theme`}
              >
                <span className="swatch-circle" style={{ backgroundColor: accent.color }}>
                  {activeAccentId === accent.id && <Check size={12} color="#ffffff" />}
                </span>
                <span className="swatch-label">{accent.name.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
