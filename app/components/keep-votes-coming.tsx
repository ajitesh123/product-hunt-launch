"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

interface KeepVotesComingProps {
  defaultConfig?: {
    logo: string
    backgroundColor: string
    contentColor?: string
  }
}

export default function KeepVotesComing({ defaultConfig }: KeepVotesComingProps) {
  const [logo, setLogo] = useState(defaultConfig?.logo || '')
  const [backgroundColor, setBackgroundColor] = useState(defaultConfig?.backgroundColor || '#dc5331')
  const [contentColor, setContentColor] = useState(defaultConfig?.contentColor || '#ffffff')

  // Bar chart data - increased number of bars from 20 to 20
  const bars = Array.from({ length: 20 }, (_, i) => ({
    height: 20 + (i * 3) + Math.random() * 8,
    delay: i * 0.08,
    initialHeight: 15 + Math.random() * 10, // Added initial height for animation variety
  }))

  const barAnimation = {
    animate: {
      height: ["0%", "100%", "0%"],
      y: ["100%", "0%", "100%"],
    },
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5
    }
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor }}>
      {/* Settings Panel */}
      <div className="absolute top-4 left-4 z-50 w-80">
        <Accordion type="single" collapsible className="w-full bg-black/20 backdrop-blur-sm rounded-lg">
          <AccordionItem value="customization" className="border-none">
            <AccordionTrigger className="px-4 py-2" style={{ color: contentColor }}>
              Customization
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo" style={{ color: contentColor }}>Logo URL</Label>
                  <Input
                    id="logo"
                    placeholder="Enter logo URL"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                    className="bg-white/10 border-white/20"
                    style={{ color: contentColor, borderColor: `${contentColor}20` }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="backgroundColor" style={{ color: contentColor }}>Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="backgroundColor"
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-20 bg-white/10 border-white/20"
                      style={{ borderColor: `${contentColor}20` }}
                    />
                    <Input
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      placeholder="#000000"
                      className="bg-white/10 border-white/20"
                      style={{ color: contentColor, borderColor: `${contentColor}20` }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contentColor" style={{ color: contentColor }}>Content Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="contentColor"
                      type="color"
                      value={contentColor}
                      onChange={(e) => setContentColor(e.target.value)}
                      className="w-20 bg-white/10 border-white/20"
                      style={{ borderColor: `${contentColor}20` }}
                    />
                    <Input
                      value={contentColor}
                      onChange={(e) => setContentColor(e.target.value)}
                      placeholder="#ffffff"
                      className="bg-white/10 border-white/20"
                      style={{ color: contentColor, borderColor: `${contentColor}20` }}
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="flex flex-col items-center max-w-4xl w-full gap-8">
          {/* Logos */}
          <div className="flex items-center gap-12 md:gap-16">
            <Image 
              src={logo} 
              alt="Logo" 
              width={60} 
              height={60} 
              className="rounded-slg"
            />
            
            {/* Vertical Divider */}
            <div className="w-px h-16 md:h-24 bg-white/30" />
            
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZSKml0TqIvLEFBULYtDXewY72UhGUY.png"
              alt="Product Hunt" 
              width={60} 
              height={60}
            />
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: contentColor }}>
              Thank you for all the support
            </h1>
            <div className="text-xl md:text-2xl italic" style={{ color: `${contentColor}E6` }}>
              Keep the Votes Coming!
            </div>
          </div>

          {/* Chart Section */}
          <div className="w-full relative">
            <div className="w-full h-64 relative">
              <svg className="w-full h-full" style={{ borderColor: `${contentColor}30` }} viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={contentColor} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={contentColor} stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Horizontal Grid Lines */}
                {[20, 40, 60, 80].map((y) => (
                  <path
                    key={y}
                    d={`M0 ${y} L100 ${y}`}
                    stroke={`${contentColor}1A`}
                    strokeWidth="0.5"
                  />
                ))}

                {/* Bars */}
                {bars.map((bar, index) => {
                  const barWidth = 2.5
                  const gap = (100 - (bars.length * barWidth)) / (bars.length + 1)
                  const x = gap + (index * (barWidth + gap))
                  
                  return (
                    <motion.rect
                      key={index}
                      x={x}
                      width={barWidth}
                      height={`${bar.height}%`}
                      fill="url(#barGradient)"
                      stroke={`${contentColor}80`}
                      strokeWidth="0.15"
                      initial={{ height: "0%", y: "100%" }}
                      animate={{
                        height: [`${bar.initialHeight}%`, `${bar.height}%`, `${bar.initialHeight}%`],
                        y: [`${100 - bar.initialHeight}%`, `${100 - bar.height}%`, `${100 - bar.initialHeight}%`],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        delay: bar.delay,
                        repeat: Infinity,
                        repeatDelay: 0.2,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      whileHover={{
                        scale: 1.1,
                        fill: contentColor,
                        transition: { duration: 0.2 }
                      }}
                      rx={1.5}
                    />
                  )
                })}
              </svg>
            </div>

            {/* Upvote Button */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 z-10">
              <motion.button 
                className="px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 text-base shadow-lg"
                style={{ 
                  backgroundColor: contentColor,
                  color: backgroundColor  // Inverted colors for button
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L15 14H1L8 2Z" fill="currentColor"/>
                </svg>
                Upvote
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 