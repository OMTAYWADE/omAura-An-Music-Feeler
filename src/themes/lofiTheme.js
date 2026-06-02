const lofiTheme = {
  name: "Lofi",

  colors: {
    background:
      "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900",

    sidebar:
      "bg-gradient-to-b from-slate-950/90 via-indigo-950/80 to-slate-950/90 backdrop-blur-xl",

    accent: "text-cyan-300",

    progress: "accent-cyan-400 shadow-[0_0_15px_rgba(196,181,253,.35)]",

    card: "bg-slate-900/30",

    playListCurrSong:
      "from-cyan-500/20 to-indigo-500/10 border border-cyan-500/30 ",
    
  },

  effects: {
    glow:
      "shadow-[0_0_80px_rgba(34,211,238,0.2)]",
  },

  typography: {
    songTitle: "text-cyan-100",
    artist: "text-cyan-300/60",
  },

albumArt: {
  className:
    "border border-cyan-300/20 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.15)]",
},

  miniPlayer:
    "border-cyan-300/10 bg-black/10 backdrop-blur-3xl shadow-[0_0_60px_rgba(34,211,238,0.1)]",
};

export default lofiTheme;