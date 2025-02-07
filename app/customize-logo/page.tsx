"use client"

import { useState, useRef } from "react"
import CustomizableAnimatedLogo from "../components/customizable-animated-logo"

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
      <div className="fixed top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Background Color
            </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Logo
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="mt-1 block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
            />
          </div>
        </div>
      </div>
      <CustomizableAnimatedLogo
        backgroundColor={backgroundColor}
        customLogo={customLogo}
      />
    </div>
  )
} 