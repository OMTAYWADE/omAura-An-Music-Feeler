const defaultTheme = {
  name: "Default",

  colors: {
    background:
      "bg-gradient-to-b from-sky-400 via-sky-300 to-green-200",

    sidebar:
      "bg-gradient-to-b from-sky-100/80 via-white/70 to-green-100/80 backdrop-blur-xl",

    accent: "text-sky-700",

    progress:
      "accent-sky-500",

    card:
      "bg-white/20",

    playListCurrSong:
      "from-sky-400/20 to-green-400/10 border border-sky-400/30",
  },

  effects: {
    glow:
      "shadow-[0_0_60px_rgba(59,130,246,0.15)]",
  },

  typography: {
    songTitle:
      "text-slate-800",

    artist:
      "text-slate-600",
  },

  albumArt: {
    className:
      "border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.25)]",
  },

  miniPlayer:
    "border-white/20 bg-white/10 backdrop-blur-3xl shadow-[0_0_30px_rgba(255,255,255,0.15)]",
};

export default defaultTheme;