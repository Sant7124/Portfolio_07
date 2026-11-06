import React, { useEffect, useRef } from "react";

export function SwarmCanvas({ isMotionActive }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 140, isHovering: false });

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
        // Accent color (red #e32b3c) or soft white (#f2efeb)
        this.isAccent = Math.random() > 0.65;
        this.color = this.isAccent ? "227, 43, 60" : "242, 239, 235";
        this.alpha = Math.random() * 0.5 + 0.2;
        this.friction = 0.98;
        this.ease = 0.05;
      }

      update() {
        // Natural wandering drift
        this.x += this.vx;
        this.y += this.vy;

        // Bounce gently at screen edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive mouse interaction (Flocking / Swarm gravity)
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRef.current.radius && mouseRef.current.isHovering) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          // Swarm vortex around cursor
          this.vx += Math.cos(angle + Math.PI / 2) * force * 0.4;
          this.vy += Math.sin(angle + Math.PI / 2) * force * 0.4;
          this.radius = this.baseRadius * 1.5;
        } else {
          this.radius = this.baseRadius;
        }

        this.vx *= this.friction;
        this.vy *= this.friction;

        // Maintain baseline subtle ambient drift
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

    // Mouse listener
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

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isMotionActive) {
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
              ctx.strokeStyle = `rgba(227, 43, 60, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      } else {
        // Static gentle constellation dots when motion is paused
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

