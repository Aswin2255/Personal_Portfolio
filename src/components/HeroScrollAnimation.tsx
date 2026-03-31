"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const FRAME_COUNT = 120;

const currentFrame = (index: number) =>
  `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.png`;

export default function HeroScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const progressValue = useMotionValue(0);

  // Text is completely invisible (0) until mid-scroll (0.5), then gradually appears fully by the end (0.95)
  const textOpacity = useTransform(progressValue, [0, 0.5, 0.95], [0, 0, 1]);
  const textY = useTransform(progressValue, [0, 0.5, 0.95], [50, 50, 0]);
  const textScale = useTransform(progressValue, [0, 0.5, 0.95], [0.9, 0.9, 1]);
  
  // Scroll progress for other elements

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = useCallback((frameIndex: number) => {
    if (!canvasRef.current || !images[frameIndex]) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const img = images[frameIndex];
    if (!img.complete || img.naturalWidth === 0) return;

    // High-DPI Screen scaling
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Calculate physical pixel dimensions
    const physicalWidth = Math.floor(rect.width * dpr);
    const physicalHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
      canvas.width = physicalWidth;
      canvas.height = physicalHeight;
      // Also strictly define the logical width/height to avoid stretching
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasAspectRatio = canvas.width / canvas.height;
    const imgAspectRatio = img.naturalWidth / img.naturalHeight;
    
    let renderWidth, renderHeight, xOffset, yOffset;
    
    if (canvasAspectRatio > imgAspectRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgAspectRatio;
      xOffset = 0;
      yOffset = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgAspectRatio;
      renderHeight = canvas.height;
      xOffset = (canvas.width - renderWidth) / 2;
      yOffset = 0;
    }

    context.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  }, [images]);

  useEffect(() => {
    if (imagesLoaded < FRAME_COUNT || !canvasRef.current || !containerRef.current) return;

    const resizeCanvas = () => {
      renderFrame(0);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Trigger layout calculation

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollPos = -containerRect.top;
      const maxScroll = containerRect.height - window.innerHeight;
      
      let progress = scrollPos / maxScroll;
      progress = Math.max(0, Math.min(1, progress));

      progressValue.set(progress); // Manually set perfectly synced scroll value

      const frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
      animationFrameId = requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [imagesLoaded, renderFrame, progressValue]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-background selection:bg-primary/40 selection:text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Fullscreen Canvas Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Loading Indicator */}
          {imagesLoaded < FRAME_COUNT && (
            <div className="absolute inset-0 flex items-center justify-center z-50 bg-background text-foreground flex-col gap-6 p-8">
              <div className="text-2xl font-black tracking-tighter uppercase">
                Initializing<span className="animate-pulse text-primary">_</span>
              </div>
              <div className="w-full max-w-md h-0.5 bg-white/10 relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_var(--color-primary)] transition-all duration-300 ease-out"
                  style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
                />
              </div>
              <div className="text-xs font-mono text-muted-foreground tracking-[0.3em]">
                [ BUFFERING: {String(Math.round((imagesLoaded / FRAME_COUNT) * 100)).padStart(3, '0')}% ]
              </div>
            </div>
          )}

          <canvas
            ref={canvasRef}
            className="block h-full w-full object-cover opacity-80"
          />
          
          {/* Gradients to blend canvas with background/text */}
          <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
        </div>

        {/* HUD Overlay Elements - Clean Minimal */}
        <div className="absolute top-24 left-6 md:left-12 z-20 flex flex-col gap-1 pointer-events-none">
          <p className="text-[10px] md:text-xs text-muted-foreground font-mono tracking-widest uppercase">
            STATUS: ACTIVE
          </p>
          <div className="w-8 h-[1px] bg-primary/50"></div>
        </div>
        
        <div className="absolute bottom-12 right-6 md:right-12 z-20 text-right pointer-events-none">
          <p className="text-[10px] md:text-xs text-muted-foreground font-mono tracking-widest uppercase">
            {String(FRAME_COUNT).padStart(3, '0')} FRAMES
          </p>
          <div className="w-full flex justify-end mt-2">
            <div className="w-12 h-[1px] bg-secondary/50"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-foreground pointer-events-none z-20"
          style={{ opacity: useTransform(progressValue, [0, 0.1], [1, 0]) }}
        >
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-muted-foreground">Scroll Down</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>

        {/* Main Content Overlay - Minimalistic Fade In */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pointer-events-auto">
          <motion.div 
            style={{ opacity: textOpacity, scale: textScale, y: textY }}
            className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-20"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 tracking-tight leading-tight m-0 pb-2 drop-shadow-2xl">
              Aswin<span className="text-primary">.</span>
            </h1>
            
            <div className="flex flex-col items-center gap-6 mt-6">
              <h2 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium tracking-wide">
                Full Stack Developer
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                I build scalable and high-performance web applications.
              </p>
            </div>
            
            {/* Glassmorphism Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full sm:w-auto">
              <a href="#projects" className="relative group px-8 py-4 rounded-xl font-medium text-sm md:text-base overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute inset-[1px] bg-background/20 backdrop-blur-sm rounded-xl transition-all group-hover:bg-background/0"></div>
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  View Projects
                </span>
              </a>
              <a href="/resume.pdf" className="relative group px-8 py-4 rounded-xl font-medium text-sm md:text-base overflow-hidden transition-all hover:scale-[1.02] border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10">
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  Download Resume
                </span>
              </a>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  );
}

