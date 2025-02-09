'use client'

import { useState, useEffect } from 'react'
import { ProductHuntRevealClient } from './product-hunt-reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings2 } from "lucide-react"
import Image from 'next/image'

export default function ProductHuntReveal() {
  const DEFAULT_BG_COLOR = '#f8f971'
  const DEFAULT_TEXT_COLOR = '#000000'
  const DEFAULT_IFRAME_URL = 'https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=775464&theme=light&period=daily'

  const [bgColor, setBgColor] = useState(DEFAULT_BG_COLOR)
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR)
  const [iframeUrl, setIframeUrl] = useState(DEFAULT_IFRAME_URL)
  const [customLogo, setCustomLogo] = useState('')

  // Load saved settings on mount
  useEffect(() => {
    const savedBgColor = localStorage.getItem('ph-bg-color')
    const savedTextColor = localStorage.getItem('ph-text-color')
    const savedIframeUrl = localStorage.getItem('ph-iframe-url')
    const savedCustomLogo = localStorage.getItem('ph-custom-logo')
    if (savedBgColor) setBgColor(savedBgColor)
    if (savedTextColor) setTextColor(savedTextColor)
    if (savedIframeUrl) setIframeUrl(savedIframeUrl)
    if (savedCustomLogo) setCustomLogo(savedCustomLogo)
  }, [])

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setCustomLogo(result)
        localStorage.setItem('ph-custom-logo', result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleReset = () => {
    setBgColor(DEFAULT_BG_COLOR)
    setTextColor(DEFAULT_TEXT_COLOR)
    setIframeUrl(DEFAULT_IFRAME_URL)
    setCustomLogo('')
    localStorage.removeItem('ph-bg-color')
    localStorage.removeItem('ph-text-color')
    localStorage.removeItem('ph-iframe-url')
    localStorage.removeItem('ph-custom-logo')
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
                    {/* Logo Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="logo" className="text-sm text-muted-foreground">
                        Custom Logo
                      </Label>
                      <div className="flex flex-col gap-2">
                        {customLogo && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-border">
                            <Image
                              src={customLogo}
                              alt="Custom Logo"
                              fill
                              className="object-contain"
                              unoptimized // Since we're using data URL
                            />
                          </div>
                        )}
                        <div className="flex gap-2">
                          <Input
                            type="file"
                            id="logo"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="text-sm"
                          />
                          {customLogo && (
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                setCustomLogo('')
                                localStorage.removeItem('ph-custom-logo')
                              }}
                              className="shrink-0"
                            >
                              ×
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bgColor" className="text-sm text-muted-foreground">
                        Background
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          id="bgColor"
                          value={bgColor}
                          onChange={(e) => {
                            setBgColor(e.target.value)
                            localStorage.setItem('ph-bg-color', e.target.value)
                          }}
                          className="h-10 w-14 p-1 cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={bgColor}
                          onChange={(e) => {
                            setBgColor(e.target.value)
                            localStorage.setItem('ph-bg-color', e.target.value)
                          }}
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
                          onChange={(e) => {
                            setTextColor(e.target.value)
                            localStorage.setItem('ph-text-color', e.target.value)
                          }}
                          className="h-10 w-14 p-1 cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={textColor}
                          onChange={(e) => {
                            setTextColor(e.target.value)
                            localStorage.setItem('ph-text-color', e.target.value)
                          }}
                          className="h-10 font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="iframeUrl" className="text-sm text-muted-foreground">
                        Badge URL
                      </Label>
                      <Input
                        type="text"
                        id="iframeUrl"
                        value={iframeUrl}
                        onChange={(e) => {
                          setIframeUrl(e.target.value)
                          localStorage.setItem('ph-iframe-url', e.target.value)
                        }}
                        className="h-10 font-mono text-xs"
                        placeholder="Enter Product Hunt badge URL..."
                      />
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
      <ProductHuntRevealClient 
        bgColor={bgColor} 
        textColor={textColor} 
        iframeUrl={iframeUrl}
        customLogo={customLogo}
      />
    </div>
  )
} 