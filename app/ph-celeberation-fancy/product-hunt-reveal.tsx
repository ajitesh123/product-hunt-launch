'use client'

import { useEffect, useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"

type Shape = 'square' | 'circle' | 'star'

interface Upvote {
  id: number
  x: number
  y: number
}

const UpvoteIcon = ({ width = "24", height = "24", className = "text-[#ff6154]" }) => (
  <svg 
    width={width}
    height={height}
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M12 4L3 15H21L12 4Z" />
  </svg>
)

interface ProductHuntRevealClientProps {
  bgColor: string
  textColor: string
  iframeUrl: string
  customLogo?: string
}

export function ProductHuntRevealClient({ 
  bgColor = '#eab308',
  textColor = '#ffffff',
  iframeUrl,
  customLogo
}: ProductHuntRevealClientProps) {
  const [showBadge, setShowBadge] = useState(false)
  const [count, setCount] = useState(400)
  const [upvotes, setUpvotes] = useState<Upvote[]>([])
  const upvoteIdRef = useRef(0)

  useEffect(() => {
    const duration = 5000 // Extended duration for more impact
    const animationEnd = Date.now() + duration

    // Enhanced celebration burst with better particle distribution
    const fireCelebrationBurst = () => {
      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0.8,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['star', 'circle'] as Shape[],
        colors: ['#FFD700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#ff9ff3', '#feca57']
      };

      confetti({
        ...defaults,
        particleCount: 80,
        scalar: 1.2,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        confetti({
          ...defaults,
          particleCount: 50,
          scalar: 0.75,
          origin: { y: 0.7 }
        });
      }, 150);
    }

    // Spiral effect
    const fireSpiral = () => {
      const defaults = {
        particleCount: 15,
        startVelocity: 25,
        spread: 20,
        ticks: 200,
        gravity: 0.6,
        colors: ['#FFD700', '#ff6b6b', '#4ecdc4']
      };

      let angle = 0;
      const interval = setInterval(() => {
        const xPos = 0.5 + Math.cos(angle) * 0.3;
        const yPos = 0.5 + Math.sin(angle) * 0.15;
        
        confetti({
          ...defaults,
          origin: { x: xPos, y: yPos }
        });

        angle += 0.2;
        if (angle >= Math.PI * 2) clearInterval(interval);
      }, 50);
    }

    // Enhanced side cannons with wave effect
    const fireSideCannons = () => {
      const fireWave = (start: number, end: number, isLeft: boolean) => {
        const particleCount = 10;
        const angleSpread = (end - start) / 3;
        
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            confetti({
              particleCount,
              angle: isLeft ? start + (i * angleSpread) : end - (i * angleSpread),
              spread: 30,
              origin: { x: isLeft ? 0 : 1, y: 0.65 },
              colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700'],
              startVelocity: 35,
              gravity: 0.8,
              decay: 0.93,
            });
          }, i * 100);
        }
      };

      fireWave(30, 60, true);  // Left cannon
      fireWave(120, 150, false);  // Right cannon
    }

    // Sequence of effects
    fireCelebrationBurst();
    setTimeout(fireSpiral, 300);
    setTimeout(fireSideCannons, 800);
    setTimeout(fireCelebrationBurst, 1500);
    setTimeout(fireSpiral, 2000);
    setTimeout(fireSideCannons, 2500);

    // Gentle ambient particles
    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        setShowBadge(true);
        
        // Final celebration sequence
        fireCelebrationBurst();
        setTimeout(fireSpiral, 300);
        setTimeout(fireSideCannons, 600);
        
        return;
      }

      // Ambient particles
      confetti({
        particleCount: 1,
        angle: Math.random() * 360,
        spread: 60,
        origin: { 
          x: 0.2 + Math.random() * 0.6, 
          y: 0.2 + Math.random() * 0.4 
        },
        colors: ['#FFD700', '#ff6b6b', '#4ecdc4'],
        ticks: 200,
        gravity: 0.4,
        scalar: 0.8,
        drift: Math.random() * 2 - 1,
        shapes: ['circle', 'square'] as Shape[],
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Modify upvotes animation useEffect
  useEffect(() => {
    if (!showBadge) return

    const interval = setInterval(() => {
      // Increment count with smaller random increments
      setCount(prev => prev + Math.floor(Math.random() * 2) + 1) // 1-2 upvotes per increment

      // Add new upvote animation
      const badgeWidth = 500
      const x = (Math.random() - 0.5) * badgeWidth
      const y = 0

      setUpvotes(prev => [...prev, { id: upvoteIdRef.current, x, y }])
      upvoteIdRef.current += 1

      setTimeout(() => {
        setUpvotes(prev => prev.filter(upvote => upvote.id !== upvoteIdRef.current - 1))
      }, 2000)
    }, 800)

    return () => clearInterval(interval)
  }, [showBadge])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-1000" 
         style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl w-full mx-auto">
        {!showBadge && (
          <div className="text-center">
            <div className="flex items-center justify-center gap-12 md:gap-16 mb-12">
              {/* Custom Logo */}
              <div className="h-16 w-16 md:h-24 md:w-24">
                <img
                  src={customLogo || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png"}
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Vertical Divider */}
              <div className="w-px h-12 md:h-20 bg-neutral-300" />

              {/* Product Hunt Cat */}
              <motion.div
                className="relative w-16 h-16 md:h-24 md:w-24 rounded-full bg-black flex items-center justify-center overflow-hidden"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSKml0TqIvLEFBULYtDXewY72UhGUY.png"
                  alt="Product Hunt Cat"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <h1 
              className="text-2xl md:text-3xl font-bold mb-6 animate-[bounce_1.5s_ease-in-out_infinite]" 
              style={{ color: textColor }}
            >
              🎉 We had a great time at Product Hunt! 🎉
            </h1>
          </div>
        )}
        
        {showBadge && (
          <div className="text-center animate-[fadeInScale_0.6s_ease-out]">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px]">
                {/* Upvote Count */}
                <motion.div 
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-16 bg-[#ff6154] text-white px-4 py-2 rounded-lg text-base font-semibold flex items-center gap-2 shadow-lg shadow-[#ff6154]/20 z-50"
                  initial={{ scale: 0.8, y: 20, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    y: 0, 
                    opacity: 1 
                  }}
                  key={count}
                >
                  <UpvoteIcon 
                    width="16" 
                    height="16" 
                    className="text-white" 
                  />
                  <span className="min-w-[2ch] text-center">{count}</span>
                </motion.div>

                {/* Floating Upvotes */}
                <div className="absolute inset-0 overflow-visible pointer-events-none z-50">
                  <AnimatePresence>
                    {upvotes.map((upvote) => (
                      <motion.div
                        key={upvote.id}
                        className="absolute left-1/2 top-0 flex flex-col items-center"
                        initial={{ 
                          x: upvote.x,
                          y: 0,
                          scale: 0,
                          opacity: 0 
                        }}
                        animate={{ 
                          scale: 1,
                          opacity: [0, 1, 0],
                          y: -100
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <UpvoteIcon />
                          <div className="text-[#ff6154] text-xl font-bold">
                            +1
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Product Hunt Badge */}
                <div className="relative transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 rounded-lg p-4 animate-[fadeInUp_1s_ease-out]">
                  <a 
                    href="https://www.producthunt.com/posts/tough-tongue-ai-2-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full relative aspect-[350/64]"
                  >
                    <Image 
                      src={iframeUrl}
                      alt="Product Hunt Badge"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 