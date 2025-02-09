import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-8 bg-[radial-gradient(circle_at_center,rgba(75,159,255,0.05)_0,transparent_100%),radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_100%,20px_20px] relative">
      {/* Add subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-gradient-shift" />
      
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-6xl mt-20 sm:mt-28 font-bold mb-8 text-center text-[#4B9FFF] tracking-tight">
          Logo Animation for Product Hunt
        </h1>
        
        <div className="h-px w-full sm:w-1/2 mx-auto bg-gradient-to-r from-transparent via-white to-transparent mb-8" />
        
        {/* Add GitHub contribution banner */}
        <div className="max-w-xl mx-auto mb-6 text-center">
          <a 
            href="https://github.com/ajitesh123/product-hunt-launch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">This project is open source - Contribute on GitHub</span>
          </a>
        </div>

        {/* Update grid to show 4 cards per row on larger screens */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 text-center justify-center">
          <Link 
            href="/animated-logo" 
            className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
                Design 1
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Tough Tongue: PH Color
              </p>
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
              <p className="text-sm text-gray-400 mt-2">
                Tough Tongue: Yellow Catchy
              </p>
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

          <Link 
            href="/globe-logo" 
            className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
                Globe Design
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                With 3D Globe Effect
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
          </Link>

          <Link 
            href="/product-hunt-reveal" 
            className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
                Product Hunt Reveal
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Special Celebration
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
          </Link>

          <Link 
            href="/elegant-reveal" 
            className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
                Elegant Reveal
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                With Particle Effects
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
          </Link>

          <Link 
            href="/product-hunt-celebration" 
            className="p-4 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 bg-black/40 border border-white backdrop-blur-sm group relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#4B9FFF] transition-colors">
                PH Celebration
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                With Badge & Confetti
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
          </Link>
        </div>

        {/* Update GIF showcase section */}
        <div className="mt-20 sm:mt-32 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-16">
            Library of Gifs created
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {[
              { title: 'Design 1', gif: '/gifs/PH1.gif' },
              { title: 'Design 2', gif: '/gifs/Ph2.gif' },
              { title: 'Celbration Effect', gif: '/gifs/PH4.gif' },
              { title: 'Keep Voting Message', gif: '/gifs/PH8.gif' },
              { title: 'Product Hunt Widget', gif: '/gifs/PH9.gif' },
              { title: 'Globe Design', gif: '/gifs/PH14.gif' },
              { title: 'PH Celebration', gif: '/gifs/PH23.gif' },
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
    </div>
  )
}