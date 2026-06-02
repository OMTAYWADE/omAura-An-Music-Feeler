const edmTheme = {
  name: "EDM",

  colors: {
    background:
      "bg-gradient-to-br from-black via-slate-950 to-indigo-950",

    sidebar:
      "bg-black/80 backdrop-blur-xl border-r border-cyan-500/10",

    accent: "text-cyan-300",

    progress: "accent-cyan-400",

    card: "bg-cyan-500/5",

    playListCurrSong:
      "bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,.3)]",
  },

  effects: {
    glow:
      "shadow-[0_0_100px_rgba(34,211,238,.25)]",
  },

  typography: {
    songTitle: "text-cyan-100",
    artist: "text-cyan-300/60",
  },

  albumArt: {
    className:
      "border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,.2)]",
  },

  miniPlayer:
    "bg-black/20 backdrop-blur-3xl border border-cyan-300/10 shadow-[0_0_50px_rgba(34,211,238,.15)]",
};

export default edmTheme;