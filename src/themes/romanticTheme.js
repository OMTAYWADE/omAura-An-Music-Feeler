const romanticTheme = {
    name: "Romantic",

    colors: {
        background: "bg-gradient-to-br from-pink-950 via-rose-900 to-red-950",

        sidebar: "bg-gradient-to-b from-rose-950/90 via-pink-950/80 to-rose-950/90 backdrop-blur-xl",

        accent: "text-pink-300",

        progress: "accent-pink-400",
    
        card: "bg-rose-900/30",
        playListCurrSong: " from-pink-500/20 to-rose-500/10 border border-pink-500/30",

    },
    effects: {
        glow: "shadow-[0_0_80px_rgba(244,114,182,0.25)]",
        
        visualizer: "soft-wave",
        
    },
    typography: {
        songTitle: "text-pink-100",
        artist: "text-pink-300/70",
    },
    albumArt: { className: "border-pink-300/20 bg-pink-500/5 shadow-[0_0_80px_rgba(255,105,180,0.25)] animate-float" },
    miniPlayer: " border-pink-300/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_60px_rgba(255,105,180,0.15)]",
}; 

export default romanticTheme;