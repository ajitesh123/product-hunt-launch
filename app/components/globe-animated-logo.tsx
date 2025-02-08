"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe from "cobe"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface GlobeAnimatedLogoProps {
  backgroundColor: string
  customLogo?: string
  globeTheme?: {
    baseColor: [number, number, number]
    glowColor: [number, number, number]
  }
}

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

export default function GlobeAnimatedLogo({
  backgroundColor = "#000000",
  customLogo,
  globeTheme = {
    baseColor: [1, 1, 1],
    glowColor: [1, 1, 1],
  },
}: GlobeAnimatedLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [count, setCount] = useState(0)
  const [upvotes, setUpvotes] = useState<Upvote[]>([])
  const upvoteIdRef = useRef(0)

  useEffect(() => {
    let phi = 0
    let width = 0

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener('resize', onResize)
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: globeTheme.baseColor,
      markerColor: [1, 0.5, 0.2],
      glowColor: globeTheme.glowColor,
      opacity: 1,
      markers: [],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
        state.width = width * 2
        state.height = width * 2
      }
    })

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [globeTheme])

  // Generate upvotes animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment count
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1)

      // Add new upvote animation
      const angle = Math.random() * Math.PI * 2
      const radius = 120 // Increased radius for larger globe
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      setUpvotes(prev => [...prev, { id: upvoteIdRef.current, x, y }])
      upvoteIdRef.current += 1

      // Remove old upvotes
      setTimeout(() => {
        setUpvotes(prev => prev.filter(upvote => upvote.id !== upvoteIdRef.current - 1))
      }, 2000)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8"
      style={{ backgroundColor }}
    >
      {/* Logos Section */}
      <div className="flex items-center gap-12 md:gap-16 mb-12">
        {/* Custom Logo */}
        <div className="relative h-20 w-20 md:h-32 md:w-32 p-2">
          <Image
            src={
              customLogo ||
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png"
            }
            alt="Company Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80px, 128px"
          />
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-16 md:h-24 bg-neutral-300" />

        {/* Product Hunt Logo */}
        <div className="relative h-20 w-20 md:h-32 md:w-32 rounded-full bg-black flex items-center justify-center p-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSKml0TqIvLEFBULYtDXewY72UhGUY.png"
            alt="Product Hunt Cat"
            fill
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 80px, 128px"
          />
        </div>
      </div>

      {/* Globe Section */}
      <div className="relative">
        {/* Upvote Count */}
        <motion.div 
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6154] text-white px-4 py-2 rounded-lg text-base font-semibold flex items-center gap-2 shadow-lg shadow-[#ff6154]/20 z-10"
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

        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-transparent flex items-center justify-center overflow-hidden"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              contain: "layout paint size",
              opacity: 1,
            }}
          />
          
          {/* Floating Upvotes */}
          <AnimatePresence>
            {upvotes.map((upvote) => (
              <motion.div
                key={upvote.id}
                className="absolute flex flex-col items-center"
                initial={{ 
                  x: upvote.x,
                  y: upvote.y,
                  scale: 0,
                  opacity: 0 
                }}
                animate={{ 
                  scale: 1,
                  opacity: [0, 1, 0],
                  y: upvote.y - 80
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex flex-col items-center gap-1">
                  <UpvoteIcon />
                  <div className="text-[#ff6154] text-2xl font-bold bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg">
                    +1
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
} 