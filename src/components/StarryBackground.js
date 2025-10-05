import React, { useEffect, useRef } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const lastShootingStarRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Create stars function
    const createStars = () => {
      const stars = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 12000); // Slightly more stars for visibility
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.8 + 0.4,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.1,
          driftY: (Math.random() - 0.5) * 0.1,
          originalX: 0,
          originalY: 0
        });
      }
      return stars;
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Recreate stars on resize
      starsRef.current = createStars();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    starsRef.current = createStars();

    // Create shooting star
    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY;
      
      switch(side) {
        case 0: // top
          startX = Math.random() * canvas.width;
          startY = -50;
          endX = startX + (Math.random() - 0.5) * 200;
          endY = canvas.height + 50;
          break;
        case 1: // right
          startX = canvas.width + 50;
          startY = Math.random() * canvas.height;
          endX = -50;
          endY = startY + (Math.random() - 0.5) * 200;
          break;
        case 2: // bottom
          startX = Math.random() * canvas.width;
          startY = canvas.height + 50;
          endX = startX + (Math.random() - 0.5) * 200;
          endY = -50;
          break;
        case 3: // left
          startX = -50;
          startY = Math.random() * canvas.height;
          endX = canvas.width + 50;
          endY = startY + (Math.random() - 0.5) * 200;
          break;
      }
      
      return {
        startX,
        startY,
        endX,
        endY,
        currentX: startX,
        currentY: startY,
        progress: 0,
        speed: 0.02 + Math.random() * 0.01,
        opacity: 0.8 + Math.random() * 0.2,
        trail: []
      };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Check for new shooting star (every 30 seconds)
      const now = Date.now();
      if (now - lastShootingStarRef.current > 30000) {
        shootingStarsRef.current.push(createShootingStar());
        lastShootingStarRef.current = now;
      }
      
      // Update and draw shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter(shootingStar => {
        shootingStar.progress += shootingStar.speed;
        shootingStar.currentX = shootingStar.startX + (shootingStar.endX - shootingStar.startX) * shootingStar.progress;
        shootingStar.currentY = shootingStar.startY + (shootingStar.endY - shootingStar.startY) * shootingStar.progress;
        
        // Add to trail
        shootingStar.trail.push({
          x: shootingStar.currentX,
          y: shootingStar.currentY,
          opacity: shootingStar.opacity * (1 - shootingStar.progress)
        });
        
        // Keep only last 20 trail points
        if (shootingStar.trail.length > 20) {
          shootingStar.trail.shift();
        }
        
        // Draw shooting star trail
        ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity * (1 - shootingStar.progress)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.trail[0].x, shootingStar.trail[0].y);
        for (let i = 1; i < shootingStar.trail.length; i++) {
          ctx.lineTo(shootingStar.trail[i].x, shootingStar.trail[i].y);
        }
        ctx.stroke();
        
        // Draw shooting star head
        ctx.beginPath();
        ctx.arc(shootingStar.currentX, shootingStar.currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity * (1 - shootingStar.progress)})`;
        ctx.fill();
        
        // Remove if completed
        return shootingStar.progress < 1;
      });
      
      starsRef.current.forEach(star => {
        // Update twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Update position with subtle drift
        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();

        // Add subtle glow for larger stars
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.1})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starry-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default StarryBackground;
