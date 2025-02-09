"use client"

import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"
import { motion } from "framer-motion"

interface ProductHuntCelebrationProps {
  backgroundColor?: string
  confettiColors?: string[]
}

export default function ProductHuntCelebration({
  backgroundColor = "#f8f971",
  confettiColors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
}: ProductHuntCelebrationProps) {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Confetti overlay */}
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
        gravity={0.1}
        colors={confettiColors}
      />

      <div className="flex flex-col items-center gap-8">
        {/* Animated Product Hunt Cat */}
        <motion.div
          className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center overflow-hidden"
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

        {/* Animated Product Hunt Badge */}
        <motion.div 
          className="z-10"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <a
            href="https://www.producthunt.com/posts/tough-tongue-ai-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tough-tongue-ai-2-0"
            target="_blank"
            rel="noopener noreferrer"
            className="block transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=775464&theme=light&t=1739071675916"
              alt="Tough Tongue AI 2.0 - A multimodal agent to create, share and rehearse scenarios | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </motion.div>
      </div>
    </div>
  )
} 