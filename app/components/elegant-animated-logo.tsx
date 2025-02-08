"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ElegantAnimatedLogo() {
  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [customLogo, setCustomLogo] = useState<string>("")
  const [particleColor, setParticleColor] = useState("#4B9FFF")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCustomLogo(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50 bg-black backdrop-blur-md p-4 rounded-lg border border-white/20">
        <Accordion type="single" collapsible className="w-[260px]">
          <AccordionItem value="customization">
            <AccordionTrigger className="text-white hover:no-underline">
              Customization Options
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Background Color
                </label>
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Particle Color
                </label>
                <input
                  type="color"
                  value={particleColor}
                  onChange={(e) => setParticleColor(e.target.value)}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Upload Logo
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="block w-full text-sm text-gray-300
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-white/10 file:text-white
                    hover:file:bg-white/20
                    cursor-pointer"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Enhanced Particles Background */}
      <div
        className="relative flex items-center justify-center min-h-screen"
        style={{ backgroundColor }}
      >
        <Particles
          id="elegant-particles"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: particleColor,
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.7,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.4,
                  sync: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: particleColor,
                opacity: 0.5,
                width: 1.5,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            retina_detect: true,
          }}
        />

        <div className="relative z-10 flex items-center gap-16">
          {/* Animated Logo */}
          <motion.div
            className="h-32 w-32"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={
                customLogo ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png"
              }
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Elegant Divider */}
          <motion.div
            className="h-24 w-px bg-white"
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Product Hunt Logo */}
          <motion.div
            className="relative w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSKml0TqIvLEFBULYtDXewY72UhGUY.png"
              alt="Product Hunt Cat"
              className="w-4/5 h-4/5 object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
} 