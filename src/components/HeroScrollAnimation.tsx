"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const FRAME_COUNT = 240;

const currentFrame = (index: number) =>
  `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function HeroScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

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
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[frameIndex];
    if (!img.complete || img.naturalWidth === 0) return;

    // High-DPI Screen scaling
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const physicalWidth = rect.width * dpr;
    const physicalHeight = rect.height * dpr;

    if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
      canvas.width = physicalWidth;
      canvas.height = physicalHeight;
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
  }, [imagesLoaded, renderFrame]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-background selection:bg-accent/40 selection:text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 md:px-12 py-10 pt-24 font-sans relative">
        
        {/* Decorative HUD Elements */}
        <div className="absolute top-24 right-8 hidden lg:flex items-center gap-3 text-[10px] font-mono text-[hsl(76,100%,50%)] uppercase tracking-[0.2em] border border-[hsl(76,100%,50%)]/20 px-3 py-1 bg-[#1a2e05]/30">
           <div className="w-1.5 h-1.5 bg-[hsl(76,100%,50%)] rounded-none animate-pulse"></div>
           OPTIMAL PERFORMANCE
        </div>

        {/* Massive Title */}
        <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-6 md:mb-10 px-4">
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-foreground uppercase tracking-tighter leading-none m-0 p-0 text-left mix-blend-difference z-30 pointer-events-none drop-shadow-2xl">
            Aswin<span className="text-[hsl(76,100%,50%)]">.</span>
          </h1>
          <div className="text-left md:text-right mt-4 md:mt-0 pb-2">
            <h2 className="text-lg md:text-2xl font-bold text-foreground uppercase tracking-tight">Software Engineer</h2>
            <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase max-w-[200px]">SCALABLE SYSTEMS & FULL-STACK DEVELOPMENT</p>
          </div>
        </div>

        {/* The Frame Container (Bigger) */}
        <div className="relative w-full max-w-[1400px] aspect-[4/3] md:aspect-[16/9] bg-card overflow-hidden border-2 border-border shadow-2xl flex items-center justify-center p-1 md:p-2 group">
          <div className="relative w-full h-full border border-white/5 bg-black overflow-hidden pointer-events-none">
             
            {/* Loading Indicator */}
            {imagesLoaded < FRAME_COUNT && (
              <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white flex-col gap-6 p-8">
                <div className="text-2xl font-black tracking-tighter uppercase text-white">
                  Initializing<span className="animate-pulse">_</span>
                </div>
                <div className="w-full max-w-md h-0.5 bg-white/10 relative">
                  <div 
                    className="absolute top-0 left-0 h-full bg-[hsl(76,100%,50%)] shadow-[0_0_10px_hsl(76,100%,50%)] transition-all duration-300 ease-out"
                    style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
                  />
                </div>
                <div className="text-xs font-mono text-white/40 tracking-[0.3em]">
                  [ BUFFERING: {String(Math.round((imagesLoaded / FRAME_COUNT) * 100)).padStart(3, '0')}% ]
                </div>
              </div>
            )}

            <canvas
              ref={canvasRef}
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 sm:object-contain md:object-cover"
            />
            
            {/* Inner HUD/Gradients */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 mix-blend-multiply"></div>
            
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10 text-left pointer-events-none">
              <div className="inline-block border border-[hsl(76,100%,50%)]/50 bg-black/60 px-3 py-1 mb-3 backdrop-blur-md">
                <p className="text-[10px] md:text-xs text-[hsl(76,100%,50%)] font-mono tracking-widest uppercase">
                  SEQ. {FRAME_COUNT} / READY
                </p>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 border border-white/10 w-12 h-12 flex items-center justify-center bg-black/20 backdrop-blur-md">
               <div className="w-2 h-2 bg-white/80 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground pointer-events-none z-10">
            <span className="text-[10px] md:text-xs uppercase font-mono tracking-[0.4em] text-[hsl(76,100%,50%)]">Scroll Down</span>
            <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[hsl(76,100%,50%)] to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
