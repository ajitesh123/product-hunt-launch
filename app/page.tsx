import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-8 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]">
      <h1 className="text-6xl mt-20 font-bold mb-16 text-center text-[#4B9FFF] tracking-tight">
        Logo Animation Showcase
      </h1>
      
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-6 text-center justify-center">
        <Link 
          href="/animated-logo" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white/20 backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              Design 1
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>

        <Link 
          href="/animated-logo2" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white/20 backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              Design 2
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>
      </div>
    </div>
  )
}