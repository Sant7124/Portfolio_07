import React, { useState, useEffect } from "react";
import { SwarmCanvas } from "./components/SwarmCanvas";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TerminalPlayground } from "./components/TerminalPlayground";
import { CheckCircle2 } from "lucide-react";

export function App() {
  // Motion toggle with localStorage persistence
  const [isMotionActive, setIsMotionActive] = useState(() => {
    const saved = localStorage.getItem("santosh_motion_preference");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [activeAccentId, setActiveAccentId] = useState("crimson");
  const [activeSection, setActiveSection] = useState("home");
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem("santosh_motion_preference", JSON.stringify(isMotionActive));
  }, [isMotionActive]);

  // ScrollSpy for active nav items
  useEffect(() => {
    const sections = ["work", "skills", "about", "education", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <>
      {/* Interactive Swarm Particle Canvas */}
      <SwarmCanvas isMotionActive={isMotionActive} activeAccentId={activeAccentId} />

      {/* Subtle Ambient Radial Glow Mesh */}
      <div className="ambient-bg" aria-hidden="true" />

      {/* Main Page Layout Wrapper */}
      <div className="page-wrapper">
        <Header
          isMotionActive={isMotionActive}
          setIsMotionActive={setIsMotionActive}
          activeSection={activeSection}
          activeAccentId={activeAccentId}
          setActiveAccentId={setActiveAccentId}
          onShowToast={showToast}
        />

        <main>
          <Hero />
          <ProjectGrid />
          <Skills />
          <About />
          <Education />
          <Contact onShowToast={showToast} />
        </main>

        <Footer />

        {/* Interactive Developer CLI Terminal */}
        <TerminalPlayground
          setActiveAccentId={setActiveAccentId}
          onShowToast={showToast}
        />
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          <CheckCircle2 size={16} style={{ color: "#10b981" }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

export default App;
