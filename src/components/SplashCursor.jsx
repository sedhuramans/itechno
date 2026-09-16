'use client';
import { useEffect, useRef } from 'react';

export default function TechNexusCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Respect accessibility and touch devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    if (prefersReducedMotion || isTouchDevice) return;

    let particles = [];
    let animationFrameId;
    let isRunning = false;
    let mouse = { x: -1000, y: -1000 };
    let lastSpawnTime = 0;
    let lastSpawnPos = { x: -1000, y: -1000 };
    let rotation = 0;

    // Luxury Tech Palette: Gold + Sapphire Blue + Diamond White
    const colors = ['#D4AF37', '#F5D77F', '#3B82F6', '#60A5FA', '#FFFFFF'];
    const maxParticles = 22; 
    const connectionDistance = 75; 
    const connectionDistanceSq = connectionDistance * connectionDistance;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class NodeParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        
        // Slight drift
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 1.8 + 1.2; 
        this.life = 1;
        this.decay = Math.random() * 0.025 + 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${this.life})`;
        ctx.fill();
      }

      hexToRgb(hex) {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
      }
    }

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const now = performance.now();
      const dx = mouse.x - lastSpawnPos.x;
      const dy = mouse.y - lastSpawnPos.y;
      const movedDistSq = dx * dx + dy * dy;

      // Throttle particle creation to save CPU & avoid GC pressure while maintaining 60 FPS
      if (particles.length < maxParticles && (now - lastSpawnTime > 16 || movedDistSq > 100)) {
        lastSpawnTime = now;
        lastSpawnPos = { x: mouse.x, y: mouse.y };
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        particles.push(new NodeParticle(mouse.x + offsetX, mouse.y + offsetY));
      }

      startAnimation();
    };

    const handlePointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // If idle and no particles left, pause RAF
      if (mouse.x === -1000 && particles.length === 0) {
        isRunning = false;
        return;
      }

      // Additive blending for luxury glow
      ctx.globalCompositeOperation = 'lighter';

      // --- 1. DRAW THE NODE NETWORK TAIL ---
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Check nearby nodes using squared distance (fast, no Math.sqrt unless within range)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistanceSq) {
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const opacity = (1 - (distance / connectionDistance)) * Math.min(particles[i].life, particles[j].life);
            ctx.strokeStyle = i % 2 === 0
              ? `rgba(59, 130, 246, ${opacity * 0.65})`
              : `rgba(212, 175, 55, ${opacity * 0.65})`; 
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Draw lines from the tail nodes directly to the active cursor head
        if (mouse.x !== -1000) {
          const mouseDx = particles[i].x - mouse.x;
          const mouseDy = particles[i].y - mouse.y;
          const mouseDistSq = mouseDx * mouseDx + mouseDy * mouseDy;
          
          if (mouseDistSq < connectionDistanceSq) {
            const mouseDistance = Math.sqrt(mouseDistSq);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            const mouseOpacity = (1 - (mouseDistance / connectionDistance)) * particles[i].life;
            ctx.strokeStyle = `rgba(245, 215, 127, ${mouseOpacity * 0.75})`; 
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Remove dead particles
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      // --- 2. DRAW THE ROTATING TECH HEAD ---
      if (mouse.x !== -1000) {
        ctx.globalCompositeOperation = 'source-over';
        
        ctx.save();
        ctx.translate(mouse.x, mouse.y);
        rotation += 0.02; 
        ctx.rotate(rotation);

        // Outer dashed tech ring (Metallic Imperial Gold)
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.9)';
        ctx.lineWidth = 1.3;
        ctx.setLineDash([4, 5]); 
        ctx.stroke();
        ctx.setLineDash([]); 

        // Inner solid ring (Electric Sapphire Blue)
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.95)';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Diamond White core target dot
        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    startAnimation();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
}