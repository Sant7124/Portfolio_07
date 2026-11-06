// Interactive Canvas Swarm Engine
// Features: Flocking algorithms, mouse vortex gravity, synaptic connections, shockwave ripples
import React, { useEffect, useRef } from "react";

export function SwarmCanvas({ isMotionActive, activeAccentId = "crimson" }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 140, isHovering: false });
  const shockwavesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Particle Swarm Class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.baseRadius = Math.random() * 2 + 1;
        this.radius = this.baseRadius;
        this.isAccent = Math.random() > 0.65;
        const rgbMap = {
          crimson: "227, 43, 60",
          cyan: "0, 229, 255",
          violet: "168, 85, 247",
          emerald: "16, 185, 129",
          amber: "245, 158, 11"
        };
        const currentAccentRgb = rgbMap[activeAccentId] || "227, 43, 60";
        this.color = this.isAccent ? currentAccentRgb : "242, 239, 235";
        this.alpha = Math.random() * 0.5 + 0.2;
        this.friction = 0.98;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive mouse interaction (Flocking / Swarm gravity)
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRef.current.radius && mouseRef.current.isHovering) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle + Math.PI / 2) * force * 0.4;
          this.vy += Math.sin(angle + Math.PI / 2) * force * 0.4;
          this.radius = this.baseRadius * 1.5;
        } else {
          this.radius = this.baseRadius;
        }

        // Apply Shockwave impulses
        for (let sw of shockwavesRef.current) {
          const sDx = this.x - sw.x;
          const sDy = this.y - sw.y;
          const sDist = Math.hypot(sDx, sDy);
          const diff = Math.abs(sDist - sw.radius);
          if (diff < 30) {
            const push = (1 - diff / 30) * 4;
            const pushAngle = Math.atan2(sDy, sDx);
            this.vx += Math.cos(pushAngle) * push;
            this.vy += Math.sin(pushAngle) * push;
          }
        }

        this.vx *= this.friction;
        this.vy *= this.friction;

        if (Math.abs(this.vx) < 0.2) this.vx += (Math.random() - 0.5) * 0.3;
        if (Math.abs(this.vy) < 0.2) this.vy += (Math.random() - 0.5) * 0.3;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.shadowColor = this.isAccent ? "rgba(227, 43, 60, 0.6)" : "transparent";
        ctx.shadowBlur = this.isAccent ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 85);

    function initParticles() {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    const rgbMap = {
      crimson: "227, 43, 60",
      cyan: "0, 229, 255",
      violet: "168, 85, 247",
      emerald: "16, 185, 129",
      amber: "245, 158, 11"
    };
    const activeRgb = rgbMap[activeAccentId] || "227, 43, 60";

    // Mouse listeners
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isHovering = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const onMouseClick = (e) => {
      if (!isMotionActive) return;
      shockwavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        opacity: 0.8
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("click", onMouseClick);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isMotionActive) {
        // Draw Shockwaves
        for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
          const sw = shockwavesRef.current[i];
          sw.radius += 5;
          sw.opacity -= 0.02;

          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${activeRgb}, ${Math.max(0, sw.opacity * 0.4)})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          if (sw.radius >= sw.maxRadius || sw.opacity <= 0) {
            shockwavesRef.current.splice(i, 1);
          }
        }

        // Draw inter-particle synapse lines
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);

            if (dist < 110) {
              const alpha = (1 - dist / 110) * 0.18;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(${activeRgb}, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      } else {
        for (let i = 0; i < particles.length; i++) {
          particles[i].draw();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("click", onMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMotionActive]);

  return (
    <canvas
      id="swarm-canvas"
      ref={canvasRef}
      className={isMotionActive ? "" : "motion-off"}
      aria-hidden="true"
    />
  );
}
