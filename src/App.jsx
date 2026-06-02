import useAudioPlayer from "./hooks/useAudioPlayer";
import RomanticEffects from "./themes/RomanticEffects";
import LofiEffects from "./themes/LofiEffects";
import SadEffects from "./themes/SadEffects";
import EdmEffects from "./themes/EdmEffects";
import './themes/romanticTheme.css'
import "./themes/lofiTheme.css";
import "./themes/sadTheme.css";
import "./themes/edmTheme.css";
import "./themes/defaultTheme.css";
import "./components/ThemeModal.css";
import "./components/ThemeTransition.css";
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Palette } from 'lucide-react'
import DefaultEffects from "./themes/DefaultEffects";
import ThemeModal from "./components/ThemeModal";

export default function App() {
  const {
    audioRef,

    songs, currentSong, setCurrentSongIndex, currentSongIndex,
    isPlaying,
    currentTime, duration,

    handleSongs, togglePlay, nextSong, previousSong,
    setCurrentTime, setDuration, handleSeek,
    formatTime,

    volume, handleVolume,
    toggleRepeat, isRepeat,

    isShuffle, toggleShuffle,
    cleanSongName,
    showVolume, setShowVolume,
    theme, setTheme, currentTheme, setShowThemeModal,showThemeModal, selectedTheme, centerTheme, setCenterTheme, changeTheme, isThemeChanging,
    clearPlaylist,
    audioData,
    audioLevel,
  } = useAudioPlayer();



  return (
    <div className={` h-screen overflow-hidden flex text-white ${currentTheme.colors.background} `}>


      {/* Playlist */}
      <aside className={`w-[320px] h-full flex flex-col overflow-hidden ${currentTheme.colors.sidebar} `}>

        <div className="p-5 border-b border-zinc-800">

          <h1 className="text-3xl font-bold">
            OmAura
          </h1>

          <p className="text-zinc-500 mt-1">
            {songs.length} Songs
          </p>

          <input
            type="file" multiple accept="audio/*" onChange={handleSongs} className="mt-4"
          />
          <button className="bg-pink-400/10" onClick={clearPlaylist}>
            Clear Playlist
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto py-3 px-4 scrollbar-thin playListScroll">

          {songs.map((song, index) => (

            <li
              key={index}
              onClick={() => setCurrentSongIndex(index)}
              className={`p-4 mb-3 rounded-2xl cursor-pointer transition-all duration-300
                  ${index === currentSongIndex ? `bg-gradient-to-r ${currentTheme.colors.playListCurrSong} text-white` : "hover:bg-zinc-800"
                }`}
            >
              {cleanSongName(song.name)}
            </li>

          ))}

        </ul>

      </aside>

      {/* Right Side */}
      <main className="flex-1 flex flex-col relative overflow-hidden">

        {theme === "romantic" && <RomanticEffects />}
        {theme === "lofi" && <LofiEffects />}
        {theme === "sad" && <SadEffects />}
        {theme === "edm" && (
          <EdmEffects audioLevel={audioLevel} />
        )}
        {theme === "default" && <DefaultEffects />}
        {/* Visual Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className=" absolute w-[900px] h-[900px] rounded-full bg-pink-400/20 blur-[220px] animate-pulse"></div>

          <div
            className={`w-[320px] h-[320px] rounded-[40px] border flex items-center justify-center ${currentTheme.albumArt.className}`}
          >

            Album Art
          </div>

          <h2 className={` text-3xl font-bold mt-5 text-center max-w-xl ${currentTheme.typography.songTitle}  `}>
            {currentSong ? cleanSongName(currentSong.name) : "No Song Selected"}
          </h2>

          <p className="mt-6 text-zinc-600 uppercase tracking-widest">
            Visualizer Area
          </p>

        </div>

        {/* Mini Player */}
        <div className={`border-t px-8 py-4 flex-shrink-0 ${currentTheme.miniPlayer}`}>

          <div className="grid grid-cols-3 items-center">

            {/* Left */}

            {/* Main Controls */}
            <div className="flex gap-6">
              <button
                onClick={() => setShowVolume(!showVolume)}
                className=""
              >
                <Volume2 size={18} />
              </button>

            </div>

            {/* Center*/}
            {/* Song Info */}
            <div className=" text-center">

              <p className=" font-semibold text-lg truncate max-w-[500px] mx-auto text-5xl font-bold ">
                {currentSong
                  ? cleanSongName(currentSong.name)
                  : "No Song"}
              </p>

              <p className="text-zinc-500 text-sm ">
                Unknown Artist
              </p>
              <div className="mt-5 flex justify-center items-center gap-8">
                <button
                  onClick={toggleShuffle}
                  className={isShuffle ? "active" : "inactive"}
                >
                  <Shuffle size={18} />
                </button>
                <button onClick={previousSong} className="romantic-control">
                  <SkipBack size={20} />
                </button>

                <button onClick={togglePlay} className="playingBtn" > {isPlaying ? <Pause size={28} /> : <Play size={28} />} </button>

                <button onClick={nextSong} className="romantic-control">
                  <SkipForward size={20} />
                </button>

                <button
                  onClick={toggleRepeat}
                  className={isRepeat ? "active" : "inactive"}
                >
                  <Repeat size={18} />
                </button>
              </div>

            </div>

            {/* Song Info */}
            <div className="flex justify-end gap-10">

              {showVolume && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2">

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolume}
                    className="rotate-[-90deg] w-24"
                  />

                </div>
              )}

              <button className="" onClick={() => setShowThemeModal(true)}>
                <Palette size={18} />
              </button>
            </div>

          </div>
         
          {/* Secondary Controls */}
          <p className={currentTheme.typography.artist}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
          <div className="flex justify-center text-2xl relative">


            <input type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} className={`w-full ${currentTheme.colors.progress}`} />
          </div>

        </div>

         {showThemeModal && (
          <ThemeModal
            setTheme={changeTheme}
              setSelectedTheme={setCenterTheme}
              selectedTheme={centerTheme}
              closeModal={() => setShowThemeModal(false)}
            />
        )}
        
        {isThemeChanging && (
    <div className="aura-pulse"></div>
)}
      </main>

      <audio ref={audioRef} src={currentSong?.url} autoPlay onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)} onEnded={nextSong} onLoadedMetadata={() => setDuration(audioRef.current.duration)} />

    </div>

  );
}