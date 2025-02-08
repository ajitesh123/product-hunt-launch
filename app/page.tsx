import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-8 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]">
      <h1 className="text-6xl mt-20 font-bold mb-16 text-center text-[#4B9FFF] tracking-tight">
        Logo Animation for Product Hunt
      </h1>
      
      <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-white to-transparent mb-24" />
      
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center justify-center">
        <Link 
          href="/animated-logo" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
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
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              Design 2
            </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>

        <Link 
          href="/customize-logo" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              Design 3
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Customizable Version
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>

        <Link 
          href="/celebrate" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              Celebration
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              With Confetti Effect
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>

        <Link 
          href="/ph-widget" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              PH Widget
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              With animation
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>

        <Link 
          href="/keep-votes" 
          className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
              Keep Voting
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Thank You Message
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
        </Link>
      </div>

      {/* GIF Showcase Section */}
      <div className="mt-32 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Library of Gifs created
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Design 1', gif: '/gifs/PH1.gif' },
            { title: 'Design 2', gif: '/gifs/PH2.gif' },
            { title: 'Product Hunt Widget', gif: '/gifs/PH7.gif' },
          ].map((item, index) => (
            <div 
              key={index}
              className="relative rounded-xl overflow-hidden bg-black/40 border border-white/20 group"
            >
              <div className="aspect-video relative">
                <Image
                  src={item.gif}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </p>
                <a
                  href={item.gif}
                  download={`${item.title.toLowerCase().replace(' ', '-')}.gif`}
                  className="px-4 py-2 bg-[#4B9FFF] text-white rounded-lg hover:bg-[#3a8de6] transition-colors duration-200 flex items-center gap-2"
                >
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download GIF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}