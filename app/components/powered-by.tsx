import Link from "next/link"

interface PoweredByProps {
  className?: string
}

export function PoweredBy({ className = "" }: PoweredByProps) {
  return (
    <div className="fixed bottom-3 right-3 flex flex-col items-end gap-2 bg-gradient-to-br from-black/80 to-black/90 p-4 rounded-lg backdrop-blur-sm border border-white/5">
      {/* Product Hunt Launch Support */}
      <Link
        href="https://www.producthunt.com/posts/tough-tongue-ai-2-0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-medium flex items-center gap-1"
      >
        <span className="text-white/60">Support our</span>
        <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent hover:to-cyan-300 transition-all duration-300">
          Product Hunt launch
        </span>
        <span className="text-white/60">! 🚀</span>
      </Link>

      {/* Powered By Section */}
      <Link
        href="https://www.toughtongueai.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group flex items-center gap-1.5 hover:gap-2 
          text-[10px] font-light tracking-wide
          text-white/40 hover:text-white/80
          transition-all duration-300 ease-in-out
          ${className}
        `}
      >
        <span className="font-light text-white/60">powered by</span>
        <span className="font-medium bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent group-hover:to-cyan-300">
          Tough Tongue AI
        </span>
        <svg
          className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
} 