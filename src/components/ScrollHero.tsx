"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ScrollHeroProps {
  frameCount?: number; // Modify your frame count here
}

export function ScrollHero({ frameCount = 100 }: ScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndex = useRef(0);
  const requestRef = useRef<number | null>(null);
  const scrollRatioRef = useRef(0);

  const [text, setText] = useState("");
  const fullText = "Full Stack Developer | MERN | Next.js | Performance Optimization | LLM Apps";

  // Typing animation for hero text
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const drawFrame = useCallback((index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    
    // Ensure the image is fully loaded before trying to draw or read its dimensions
    if (!img.complete || img.naturalWidth === 0) return;

    // Use high-DPI scaling for crisp canvas rendering on modern laptop screens
    const dpr = window.devicePixelRatio || 1;
    // We cache the size to avoid expensive getBoundingClientRect calls during scroll
    let rectWidth = canvasSizeRef.current.width;
    let rectHeight = canvasSizeRef.current.height;

    if (rectWidth === 0 || rectHeight === 0) {
      const rect = canvas.getBoundingClientRect();
      rectWidth = rect.width;
      rectHeight = rect.height;
      canvasSizeRef.current = { width: rectWidth, height: rectHeight };
    }

    // Actual physical pixels needed
    const physicalWidth = rectWidth * dpr;
    const physicalHeight = rectHeight * dpr;

    if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
       canvas.width = physicalWidth;
       canvas.height = physicalHeight;
       // Reset smoothing for crisp upscaling if needed
       ctx.imageSmoothingEnabled = true;
       ctx.imageSmoothingQuality = "high";
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Native implementation of 'object-fit: cover' mapping
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let drawX = 0;
    let drawY = 0;

    if (imgRatio > canvasRatio) {
       // Image is relatively wider than the canvas space
       drawHeight = canvas.height;
       drawWidth = canvas.height * imgRatio;
       drawX = (canvas.width - drawWidth) / 2;
    } else {
       // Image is relatively taller than the canvas space
       drawWidth = canvas.width;
       drawHeight = canvas.width / imgRatio;
       drawY = (canvas.height - drawHeight) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Preload images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedNumber = i.toString().padStart(3, '0');
        img.src = `/frames/ezgif-frame-${paddedNumber}.jpg`;
        img.onload = () => {
            loadedImages++;
            if (loadedImages === 1 && canvasRef.current) {
               // Draw the first frame instantly when it loads
               drawFrame(0);
            }
        };
        images.push(img);
    }
    imagesRef.current = images;
  }, [frameCount, drawFrame]);

  useEffect(() => {
    const calculateScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollRange = rect.height - windowHeight;
      let progress = -rect.top / scrollRange;
      progress = Math.max(0, Math.min(1, progress));
      scrollRatioRef.current = progress;
    };

    const handleResize = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            canvasSizeRef.current = { width: rect.width, height: rect.height };
            // Trigger a redraw of current frame
            drawFrame(currentFrameIndex.current);
        }
    };

    const renderLoop = () => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollRatioRef.current * frameCount)
      );

      if (frameIndex !== currentFrameIndex.current) {
         drawFrame(frameIndex);
         currentFrameIndex.current = frameIndex;
      }
      requestRef.current = requestAnimationFrame(renderLoop);
    };

    calculateScroll();
    handleResize();
    
    const handleScroll = () => calculateScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [frameCount, drawFrame]);


  return (
    <section 
      ref={containerRef} 
      className="relative h-[200vh] bg-black" 
      id="hero"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Decorative Background inside sticky */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.14] mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-12">
           
           {/* Left side: Hero Text */}
           <div className="flex flex-col justify-center text-left py-20 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium text-zinc-300">Available for new opportunities</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
              >
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Aswinkumar</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-16 lg:h-8 mb-6"
              >
                <span className="text-lg md:text-xl text-zinc-400 font-mono">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-xl text-lg text-zinc-400 mb-10"
              >
                I build scalable web applications, real-time systems, and LLM-powered tools. 
                Specialized in performance optimization and creating dynamic user experiences.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-fit"
              >
                <a href="#projects" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                  View Projects <ArrowRight size={18} />
                </a>
                <a href="/resume.pdf" target="_blank" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                  Resume <Download size={18} />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-6"
              >
                <a href="https://github.com/aswinkumar" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                  <GithubIcon size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/aswinkumar" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                  <LinkedinIcon size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="mailto:contact@aswinkumar.com" className="text-zinc-500 hover:text-white transition-colors">
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
              </motion.div>
           </div>

           {/* Right side: Canvas Render */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center"
           >
              {/* Optional: Glossy effect over canvas */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl pointer-events-none z-10 border border-white/5"></div>
              
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover rounded-3xl opacity-80"
              />
           </motion.div>

        </div>

        {/* Scroll down indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
           <span className="text-xs text-zinc-500 uppercase tracking-widest hidden md:block">Scroll Frame</span>
           <motion.div
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent"
           />
        </motion.div>
      </div>
    </section>
  );
}
