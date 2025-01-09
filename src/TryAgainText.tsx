export function TryAgainText() {
    return (
        <div className="relative text-center select-none">
            {/* Shadow layer */}
            <span className="absolute text-7xl font-black uppercase tracking-wider
                text-black/10 blur-[3px]
                left-0 top-1
                animate-shadow-pulse">
                Try Again!
            </span>
            {/* Main text */}
            <span className="relative text-7xl font-black uppercase tracking-wider
                text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400
                [text-shadow:_0_0_20px_rgba(255,255,255,0.4),_2px_2px_3px_rgb(0_0_0_/_30%)]
                animate-text-shine">
                Try Again!
            </span>
        </div>
    )
} 