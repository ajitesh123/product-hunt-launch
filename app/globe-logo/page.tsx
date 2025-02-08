"use client"

import { useState } from "react"
import GlobeAnimatedLogo from "../components/globe-animated-logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function GlobePage() {
  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [customLogo, setCustomLogo] = useState("")
  const [globeTheme, setGlobeTheme] = useState("default")

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCustomLogo(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const globeThemes = {
    default: {
      baseColor: [1, 1, 1] as [number, number, number],
      glowColor: [1, 1, 1] as [number, number, number],
    },
    blue: {
      baseColor: [0.3, 0.6, 1] as [number, number, number],
      glowColor: [0.3, 0.6, 1] as [number, number, number],
    },
    green: {
      baseColor: [0.3, 1, 0.6] as [number, number, number],
      glowColor: [0.3, 1, 0.6] as [number, number, number],
    },
    purple: {
      baseColor: [0.6, 0.3, 1] as [number, number, number],
      glowColor: [0.6, 0.3, 1] as [number, number, number],
    },
    orange: {
      baseColor: [1, 0.5, 0.2] as [number, number, number],
      glowColor: [1, 0.5, 0.2] as [number, number, number],
    },
    pink: {
      baseColor: [1, 0.4, 0.8] as [number, number, number],
      glowColor: [1, 0.4, 0.8] as [number, number, number],
    },
  }

  return (
    <div className="min-h-screen">
      <GlobeAnimatedLogo 
        backgroundColor={backgroundColor} 
        customLogo={customLogo}
        globeTheme={globeThemes[globeTheme as keyof typeof globeThemes]}
      />
      
      <div className="fixed top-8 left-8 w-80 bg-white/10 backdrop-blur-lg rounded-lg p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="customization">
            <AccordionTrigger className="text-white">Customize Globe</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                {/* Background Color */}
                <div className="space-y-2">
                  <Label className="text-white">Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-8 p-1"
                    />
                    <Input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1 text-white bg-transparent"
                    />
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label className="text-white">Custom Logo</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="text-white bg-transparent"
                  />
                </div>

                {/* Globe Theme */}
                <div className="space-y-2">
                  <Label className="text-white">Globe Theme</Label>
                  <Select onValueChange={setGlobeTheme} defaultValue={globeTheme}>
                    <SelectTrigger className="text-white bg-transparent">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="purple">Purple</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                      <SelectItem value="pink">Pink</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
} 