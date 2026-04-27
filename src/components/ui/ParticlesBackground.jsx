import React, { useEffect, useRef } from "react";

export const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let particlesArray = [];
    let animationFrameId;
    const pixelsPerParticle = 5000; // Higher values yield fewer particles.
    const maxParticles = 200; // Performance cap for particle count.
    const maxConnectionDistance = 150; // Max distance (px) for connection lines.

    const handleResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      init();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = "rgba(255, 255, 255, 0.4)";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      const particleCount = Math.min(
        maxParticles,
        (canvas.width * canvas.height) / pixelsPerParticle
      );
      for (let i = 0; i < particleCount; i += 1) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      const maxDistanceSquared =
        maxConnectionDistance * maxConnectionDistance;
      const cellSize = maxConnectionDistance;
      const grid = new Map();

      for (let i = 0; i < particlesArray.length; i += 1) {
        const particle = particlesArray[i];
        const cellX = Math.floor(particle.x / cellSize);
        const cellY = Math.floor(particle.y / cellSize);
        const key = `${cellX},${cellY}`;
        if (!grid.has(key)) {
          grid.set(key, []);
        }
        grid.get(key).push(i);
      }

      for (let i = 0; i < particlesArray.length; i += 1) {
        const particle = particlesArray[i];
        const cellX = Math.floor(particle.x / cellSize);
        const cellY = Math.floor(particle.y / cellSize);

        for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
          for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
            const neighborKey = `${cellX + offsetX},${cellY + offsetY}`;
            const neighbors = grid.get(neighborKey);
            if (!neighbors) continue;

            for (let n = 0; n < neighbors.length; n += 1) {
              const j = neighbors[n];
              if (j <= i) continue;

              const dx = particle.x - particlesArray[j].x;
              const dy = particle.y - particlesArray[j].y;
              const distanceSquared = dx * dx + dy * dy;

              if (distanceSquared < maxDistanceSquared) {
                const opacity =
                  1 - Math.sqrt(distanceSquared) / maxConnectionDistance;
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i += 1) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connect();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 bottom-0 left-0 right-0 md:left-80 lg:left-96 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
