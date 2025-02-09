"use client"

import { useState } from "react"
import ProductHuntCelebration from "../components/product-hunt-celebration"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ProductHuntCelebrationPage() {
  const [backgroundColor, setBackgroundColor] = useState("#f8f971")
  const [productHuntLink, setProductHuntLink] = useState(
    "https://www.producthunt.com/posts/tough-tongue-ai-2-0"
  )

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50 bg-black backdrop-blur-md p-4 rounded-lg border border-white/20">
        <Accordion type="single" collapsible className="w-[300px]">
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
                  Product Hunt Link
                </label>
                <input
                  type="text"
                  value={productHuntLink}
                  onChange={(e) => setProductHuntLink(e.target.value)}
                  placeholder="Enter Product Hunt post URL"
                  className="w-full px-3 py-2 bg-white/10 rounded border border-white/20 
                    text-white text-sm placeholder:text-gray-400 focus:outline-none 
                    focus:ring-2 focus:ring-white/30"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <ProductHuntCelebration
        backgroundColor={backgroundColor}
        productHuntLink={productHuntLink}
      />
    </div>
  )
} 