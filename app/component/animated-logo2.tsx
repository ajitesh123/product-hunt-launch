"use client"

import { motion } from "framer-motion"

export default function AnimatedLogo2() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dc5331] p-8">
      <div className="flex items-center gap-12 md:gap-16">
        {/* Tough Tongue AI Logo */}
        <div className="h-20 w-20 md:h-32 md:w-32">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png"
            alt="Tough Tongue AI Logo"
            className="w-full h-full"
          />
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-16 md:h-24 bg-neutral-300" />

        {/* Product Hunt Section with Animated Cat */}
        <div className="flex items-center gap-6">
          <motion.div
            className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center overflow-hidden"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
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
      </div>
    </div>
  )
}

