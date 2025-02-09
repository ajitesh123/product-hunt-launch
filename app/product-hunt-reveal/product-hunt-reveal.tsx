'use client'

import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import Image from 'next/image'

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

  useEffect(() => {
    const duration = 4000 // Increased duration
    const animationEnd = Date.now() + duration

    // Fire initial celebration burst
    const fireCelebrationBurst = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700', '#ff9ff3', '#feca57'],
        scalar: 1.2,
      })
    }

    // Fire side cannons
    const fireSideCannons = () => {
      // Left cannon
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700'],
      })
      // Right cannon
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700'],
      })
    }

    // Fire golden rain
    const fireGoldenRain = () => {
      confetti({
        particleCount: 40,
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        ticks: 300,
        gravity: 1,
        origin: { y: 0 },
        colors: ['#FFD700', '#ffd32a', '#ffa502'],
      })
    }

    // Initial burst
    fireCelebrationBurst()

    // Sequence of effects
    setTimeout(fireSideCannons, 300)
    setTimeout(fireGoldenRain, 600)
    setTimeout(fireCelebrationBurst, 900)
    setTimeout(fireSideCannons, 1200)
    
    // Continuous gentle sparkles
    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval)
        setShowBadge(true)
        
        // Final celebration burst when showing badge
        setTimeout(() => {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.7 },
            colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700', '#ff9ff3'],
          })
        }, 300)
        
        return
      }

      // Gentle sparkles during animation
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0.3, y: 0.5 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700'],
        ticks: 200,
        gravity: 0.6,
        scalar: 0.75,
        drift: 0.5,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 0.7, y: 0.5 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#FFD700'],
        ticks: 200,
        gravity: 0.6,
        scalar: 0.75,
        drift: -0.5,
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl w-full mx-auto">
        {!showBadge && (
          <div className="text-center animate-fade-scale-in">
            <div className="flex items-center justify-center gap-12 md:gap-16 mb-12">
              <div className="h-16 w-16 md:h-24 md:w-24">
                <img
                  src={customLogo || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png"}
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-px h-12 md:h-20 bg-neutral-300" />

              <div className="relative w-16 h-16 md:h-24 md:w-24 rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSKml0TqIvLEFBULYtDXewY72UhGUY.png"
                  alt="Product Hunt Cat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-6 animate-bounce" style={{ color: textColor }}>
              🎉 We had a great time at Product Hunt! 🎉
            </h1>
            <p className="text-2xl animate-pulse" style={{ color: textColor }}>
              Celebrating something amazing...
            </p>
          </div>
        )}
        
        {showBadge && (
          <div className="text-center animate-fade-scale-in">
            <h2 className="text-2xl md:text-4xl font-bold mb-8" style={{ color: textColor }}>
              Thank you for your support! 🚀
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-[350px] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 rounded-lg p-4">
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
        )}
      </div>
    </div>
  )
} 