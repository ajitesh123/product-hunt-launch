"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChromePicker } from 'react-color'
import Image from "next/image"

interface Particle {
  x: number
  y: number
  z: number
  radius: number
  color: string
  speed: number
  targetZ: number
  update: (mouseX: number, mouseY: number) => void
  draw: (ctx: CanvasRenderingContext2D) => void
}

export default function ProductHuntEmbed() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [customLogo, setCustomLogo] = useState(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png"
  )
  const [phLink, setPhLink] = useState(
    "https://www.producthunt.com/posts/tough-tongue-ai-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tough&#0045;tongue&#0045;ai&#0045;2&#0045;0"
  )
  const [phBadgeUrl, setPhBadgeUrl] = useState(
    "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=775464&theme=light&t=1738954913772"
  )
  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [activeTab, setActiveTab] = useState<'appearance' | 'links'>('appearance')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class ParticleClass {
      x: number
      y: number
      z: number
      radius: number
      color: string
      speed: number
      targetZ: number

      constructor() {
        this.x = Math.random() * canvas!.width - canvas!.width / 2
        this.y = Math.random() * canvas!.height - canvas!.height / 2
        this.z = Math.random() * 1900 + 100
        this.radius = Math.random() * 2 + 1
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`
        this.speed = Math.random() * 3 + 1
        this.targetZ = Math.random() * 1000
      }

      update(mouseX: number, mouseY: number) {
        this.z -= this.speed
        if (this.z <= 100) {
          this.z = 2000
          this.x = Math.random() * canvas!.width - canvas!.width / 2
          this.y = Math.random() * canvas!.height - canvas!.height / 2
        }

        const dx = this.x / (this.z * 0.001) - mouseX
        const dy = this.y / (this.z * 0.001) - mouseY
        this.x -= dx * 0.02
        this.y -= dy * 0.02

        this.radius += Math.sin(Date.now() * 0.01) * 0.1
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 2000 / Math.max(2000 - this.z, 1)
        const x = this.x * scale + canvas!.width / 2
        const y = this.y * scale + canvas!.height / 2
        const r = Math.max(this.radius * scale, 0.1)

        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass())
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y)
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mousePosition])

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />
      
      <div className="absolute top-4 right-4 z-20">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white/60 backdrop-blur-sm">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Open settings</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 p-6 backdrop-blur-lg bg-black/80 border-gray-800 text-white shadow-2xl">
            <div className="grid gap-6">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold tracking-tight">Widget Settings</h4>
                <p className="text-sm text-gray-400">
                  Customize the appearance and links of your Product Hunt widget
                </p>
              </div>

              <div className="flex gap-2 p-1 bg-gray-900/50 rounded-lg">
                <Button
                  variant={activeTab === 'appearance' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="w-full"
                  onClick={() => setActiveTab('appearance')}
                >
                  Appearance
                </Button>
                <Button
                  variant={activeTab === 'links' ? 'secondary' : 'ghost'}
                  size="sm"
                  className="w-full"
                  onClick={() => setActiveTab('links')}
                >
                  Links
                </Button>
              </div>

              {activeTab === 'appearance' ? (
                <div className="grid gap-4">
                  <div className="space-y-3">
                    <Label className="text-gray-300">Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg border border-gray-800 bg-gray-900/50 p-2 flex items-center justify-center">
                        <Image
                          src={customLogo}
                          alt="Preview"
                          width={64}
                          height={64}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                setCustomLogo(reader.result as string)
                              }
                              reader.readAsDataURL(file)
                            }
                          }}
                          className="text-sm bg-gray-900/50 border-gray-800 text-gray-300"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs border-gray-800 hover:bg-gray-800"
                          onClick={() => setCustomLogo("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-qSap48M4U2sMdTOgDgAAZYC9UZCW2S.png")}
                        >
                          Reset to Default
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-300">Background Color</Label>
                    <div className="relative">
                      <Button
                        variant="outline"
                        className="w-full h-10 border-gray-800 bg-gray-900/50 hover:bg-gray-800"
                        onClick={() => setShowColorPicker(!showColorPicker)}
                      >
                        <div
                          className="w-6 h-6 rounded-md mr-2"
                          style={{ backgroundColor }}
                        />
                        <span className="text-gray-300">{backgroundColor}</span>
                      </Button>
                      {showColorPicker && (
                        <div className="absolute top-full left-0 mt-2 z-50">
                          <div
                            className="fixed inset-0"
                            onClick={() => setShowColorPicker(false)}
                          />
                          <div className="rounded-lg overflow-hidden bg-[#1a1a1a] shadow-lg">
                            <ChromePicker
                              color={backgroundColor}
                              onChange={(color) => setBackgroundColor(color.hex)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="space-y-3">
                    <Label className="text-gray-300">Product Hunt Link</Label>
                    <Input
                      value={phLink}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhLink(e.target.value)}
                      className="bg-gray-900/50 border-gray-800 text-gray-300"
                      placeholder="Enter Product Hunt post URL"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-300">Badge URL</Label>
                    <Input
                      value={phBadgeUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhBadgeUrl(e.target.value)}
                      className="bg-gray-900/50 border-gray-800 text-gray-300"
                      placeholder="Enter Product Hunt badge URL"
                    />
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-gray-800 hover:bg-gray-800"
                    onClick={() => {
                      setPhLink("https://www.producthunt.com/posts/tough-tongue-ai-2-0?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tough&#0045;tongue&#0045;ai&#0045;2&#0045;0")
                      setPhBadgeUrl("https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=775464&theme=light&t=1738954913772")
                    }}
                  >
                    Reset to Default Links
                  </Button>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 flex justify-center"
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
            <Image
              src={customLogo}
              alt="Company Logo"
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
            />
          </motion.div>

          <motion.h1 
            className="text-5xl font-bold mb-8 text-white"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            We&apos;re live on Product Hunt! 🚀
          </motion.h1>
          
          <motion.div
            className="animate-float"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href={phLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={phBadgeUrl}
                alt="Tough Tongue AI 2.0 - A multimodal agent to create, share and rehearse scenarios | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 