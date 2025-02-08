'use client'

import { useState, useEffect } from 'react'
import { ProductHuntRevealClient } from '../components/product-hunt-reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings2 } from "lucide-react"

export default function ProductHuntReveal() {
  const DEFAULT_BG_COLOR = '#f8f971'
  const DEFAULT_TEXT_COLOR = '#000000'

  const [bgColor, setBgColor] = useState(DEFAULT_BG_COLOR)
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR)

  // Load saved colors on mount
  useEffect(() => {
    const savedBgColor = localStorage.getItem('ph-bg-color')
    const savedTextColor = localStorage.getItem('ph-text-color')
    if (savedBgColor) setBgColor(savedBgColor)
    if (savedTextColor) setTextColor(savedTextColor)
  }, [])

  // Save colors when they change
  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setBgColor(newColor)
    localStorage.setItem('ph-bg-color', newColor)
  }

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setTextColor(newColor)
    localStorage.setItem('ph-text-color', newColor)
  }

  const handleReset = () => {
    setBgColor(DEFAULT_BG_COLOR)
    setTextColor(DEFAULT_TEXT_COLOR)
    localStorage.removeItem('ph-bg-color')
    localStorage.removeItem('ph-text-color')
  }

  return (
    <div className="relative">
      <div className="fixed top-20 left-4 z-50 w-80">
        <Card className="border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Accordion type="single" collapsible>
            <AccordionItem value="customization" className="border-none">
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <Settings2 className="h-4 w-4" />
                  <span className="font-medium">Appearance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="space-y-4 p-4 pt-0">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bgColor" className="text-sm text-muted-foreground">
                        Background
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          id="bgColor"
                          value={bgColor}
                          onChange={handleBgColorChange}
                          className="h-10 w-14 p-1 cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={bgColor}
                          onChange={handleBgColorChange}
                          className="h-10 font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="textColor" className="text-sm text-muted-foreground">
                        Text
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          id="textColor"
                          value={textColor}
                          onChange={handleTextColorChange}
                          className="h-10 w-14 p-1 cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={textColor}
                          onChange={handleTextColorChange}
                          className="h-10 font-mono"
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={handleReset}
                      variant="secondary" 
                      size="sm"
                      className="w-full"
                    >
                      Reset to Default
                    </Button>
                  </div>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
      <ProductHuntRevealClient bgColor={bgColor} textColor={textColor} />
    </div>
  )
} 