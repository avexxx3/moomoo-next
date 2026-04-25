export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden selection:bg-black selection:text-white animate-background-pan"
      style={{
        backgroundImage: "url('/cow_pattern.jpg')",
        backgroundSize: '300px',
        backgroundRepeat: 'repeat'
      }}
    >
      {/* Subtle overlay to soften the pattern */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      <main className="relative z-10 flex flex-col items-center gap-12 px-6 text-center">
        {/* Main Content Card */}
        <div className="relative group">
          {/* Decorative background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-white/40 to-black/5 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />

          <div className="relative p-12 md:p-20 bg-white/90 backdrop-blur-xl rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-white/50 flex flex-col items-center gap-8 transform hover:translate-y-[-8px] transition-all duration-700 ease-out">

            <div className="space-y-4">
              <h1
                className="text-7xl md:text-9xl font-normal leading-tight text-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
                style={{ fontFamily: 'var(--font-milky)' }}
              >
                Coming soon...
              </h1>

              <div className="flex items-center justify-center gap-2">
                <div className="h-[2px] w-12 bg-black/10" />
                <span className="text-black/20 text-2xl">🐄</span>
                <div className="h-[2px] w-12 bg-black/10" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-zinc-900 font-medium tracking-tight">
                Something <span className="italic font-bold">moooo-velous</span> is grazing.
              </p>
              <p className="text-zinc-500 text-lg md:text-xl font-light">
                We're milking every detail to bring you the best experience.
              </p>
            </div>

            {/* Pulsing indicator */}
            <div className="flex gap-3 mt-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-black rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Aesthetic milk splash-like shapes in corners */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/40 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/40 rounded-full blur-3xl" />
    </div>
  );
}
