"use client";

import React, { useEffect, useRef, useState } from "react";

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

  // Set up the canvas and scroll event listener
  useEffect(() => {
    if (imagesLoaded < FRAME_COUNT || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(0);
    };

    const renderFrame = (frameIndex: number) => {
      if (!images[frameIndex]) return;

      const img = images[frameIndex];
      
      // Calculate aspect ratio to cover the screen
      const canvasAspectRatio = canvas.width / canvas.height;
      const imgAspectRatio = img.width / img.height;
      
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

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const html = document.documentElement;
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate scroll progress within the container
      // Using absolute position since container spans multiple viewports
      const scrollPos = -containerRect.top;
      const maxScroll = containerRect.height - window.innerHeight;
      
      let progress = scrollPos / maxScroll;
      
      // Clamp progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      const frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
      
      animationFrameId = requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial render
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [imagesLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Loading Indicator */}
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white flex-col gap-4">
            <div className="text-xl font-medium tracking-widest text-[#a1a1aa] uppercase">
              Loading
            </div>
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
              />
            </div>
            <div className="text-sm text-white/50">
              {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        <div className="relative z-10 text-center flex flex-col items-center justify-center p-6 mix-blend-difference pointer-events-none">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-4 tracking-tighter drop-shadow-2xl">
            Hi, I'm Aswin
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-6 tracking-tight drop-shadow-2xl">
            Software Development Engineer
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl font-medium drop-shadow-lg">
            I build scalable systems and full-stack applications.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference text-white/60 pointer-events-none z-10">
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
