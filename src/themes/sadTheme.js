const sadTheme = {
  name: "Sad",

  colors: {
    background:
      "bg-gradient-to-br from-slate-950 via-blue-950 to-black",

    sidebar:
      "bg-gradient-to-b from-slate-950/90 via-blue-950/80 to-black/90 backdrop-blur-xl",

    accent: "text-blue-300",

    progress:
      "accent-blue-400 shadow-[0_0_15px_rgba(96,165,250,.25)]",

    card: "bg-slate-900/30",

    playListCurrSong:
      "from-blue-500/15 to-slate-500/10 border border-blue-500/20",
  },

  effects: {
    glow:
      "shadow-[0_0_80px_rgba(96,165,250,.15)]",
  },

  typography: {
    songTitle: "text-blue-100",
    artist: "text-blue-300/60",
  },

  albumArt: {
    className:
      "border border-blue-300/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(96,165,250,.15)]",
  },

  miniPlayer:
    "border-blue-300/10 bg-black/20 backdrop-blur-3xl shadow-[0_0_40px_rgba(96,165,250,.1)]",
};

export default sadTheme;