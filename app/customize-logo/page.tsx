"use client"

import { useState, useRef } from "react"
import CustomizableAnimatedLogo from "../components/customizable-animated-logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CustomizePage() {
  const [backgroundColor, setBackgroundColor] = useState("#f8f971")
  const [customLogo, setCustomLogo] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)

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
      <CustomizableAnimatedLogo
        backgroundColor={backgroundColor}
        customLogo={customLogo}
      />
    </div>
  )
} 