import { useState, useRef, useEffect } from "react";
import { themes } from "../themes/index";
import { dbPromise } from "../db";
import { detectTheme } from "../utils/themeDetection";

export default function useAudioPlayer() {
    const audioRef = useRef(null);
    const analyserRef = useRef(null);
    const audioContextRef = useRef(null);
    const sourceRef = useRef(null);
    const [songs, setSongs] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentSong = songs[currentSongIndex];

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [volume, setVolume] = useState(1);

    const [isRepeat, setIsRepeat] = useState(false);

    const [isShuffle, setIsShuffle] = useState(false);

    const [isExpanded, setIsExpanded] = useState(false);

    const [showVolume, setShowVolume] = useState(false);

    const [theme, setTheme] = useState("default");

    const [audioData, setAudioData] = useState([]);

    const [audioLevel, setAudioLevel] = useState(0);

    const [showThemeModal, setShowThemeModal] = useState(false);
    const [centerTheme, setCenterTheme] = useState("default");
    const [isThemeChanging, setIsThemeChanging] = useState(false);
    const [isAutoTheme, setIsAutoTheme] = useState(true);

    const loadSavedSongs = async () => {
        const db = await dbPromise;

        const storedSongs = await db.getAll("songs");
        const restored = storedSongs.map(song => ({
            id: song.id,
            name: song.name,
            file: song.file,
            url: URL.createObjectURL(song.file),
        }));
        setSongs(restored);
    };

    const handleSongs = async (e) => {
        const files = Array.from(e.target.files);

        const db = await dbPromise;
        const existing = await db.getAll("songs");
        const existingNames = existing.map(song => song.name);
        for (const file of files) {
            if (!existingNames.includes(file.name)) {
                await db.add("songs", {
                    name: file.name,
                    file
                });
            }
        }

        await loadSavedSongs();
        setCurrentSongIndex(0);
        setIsPlaying(true);

    };

    useEffect(() => {
        loadSavedSongs();
    }, []);

    const clearPlaylist = async () => {
        const db = await dbPromise;
        const tx = db.transaction("songs", "readwrite");
        await tx.objectStore("songs").clear();
        await tx.done;
        setSongs([]);
    }

    const togglePlay = () => {
        console.log("togglePlay called")
        console.log(currentSong);
        console.log(audioRef.current);
        if (!currentSong) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        console.log("next Song");
        if (songs.length == 0) return;

        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setCurrentSongIndex(randomIndex);
            return;
        }

        if (currentSongIndex < songs.length - 1) {
            setCurrentSongIndex(currentSongIndex + 1);
        } else if (isRepeat) {
            setCurrentSongIndex(0);
        }
    };

    const previousSong = () => {
        if (currentSongIndex > 0) {
            setCurrentSongIndex(currentSongIndex - 1);
        }
    };

    const handleSeek = (e) => {
        const time = Number(e.target.value);

        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleVolume = (e) => {
        const value = Number(e.target.value);

        audioRef.current.volume = value;
        setVolume(value);
    };

    const toggleRepeat = () => {
        setIsRepeat(!isRepeat);
    };

    const toggleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    const toggleMute = () => {
        setVolume(0);
    };

    const cleanSongName = (name) => {
        return name
            .replace(".mp3", "")
            .replace("128 Kbps", "")
            .replace("320 Kbps", "")
            .replace(/\(.*?\)/g, "")
            .trim();
    };

    const currentTheme = themes[theme];

    useEffect(() => {
        if (!audioRef.current) return;
        if (sourceRef.current) return;

        const context = new (window.AudioContext || window.webkitAudioContext)();
        audioRef.current.addEventListener("play", () => {
            if (context.state === "suspended") {
                context.resume();
            }
        });
        console.log("Audio effect running");
        const analyser = context.createAnalyser();
        analyser.fftSize = 64;

        const source = context.createMediaElementSource(audioRef.current);
        source.connect(analyser);
        analyser.connect(context.destination);

        analyserRef.current = analyser;
        sourceRef.current = source;
        audioContextRef.current = context;

    }, []);

    useEffect(() => {
        const analyser = analyserRef.current;
        if (!analyser) return;

        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        const updateBars = () => {
            analyser.getByteFrequencyData(dataArray);
            setAudioData([...dataArray]);
            requestAnimationFrame(updateBars);
            const avg =
    dataArray.reduce((a,b)=>a+b,0)
    / dataArray.length;
    
    setAudioLevel(avg);
        };
        updateBars();
    }, []);

    const changeTheme = (newTheme) => {
        setIsThemeChanging(true);
        setTimeout(() => {
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        }, 300);

        setTimeout(() => {
            setIsThemeChanging(false);
        }, 1000);
    }

      useEffect(() => {
        if (!currentSong) return;
        const detectedTheme = detectTheme(currentSong.name);
        setCenterTheme(detectedTheme);
    }, [currentSong]);


    useEffect(() => {
        if (!isAutoTheme) return;
        if (!currentSong) return;
        const detectedTheme = detectTheme(currentSong.name);
        changeTheme(detectedTheme);
        console.log(
          currentSong.name,
          detectedTheme
        );
    }, [currentSong]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log(e.key);
            switch (e.key) {
                case " ":
                    console.log("SPACE PRESSED");
                    e.preventDefault();
                    togglePlay();
                    break;
                
                case "+":
                case "=": {
                    const newVolume = Math.min(volume + 0.1, 1);
                    setVolume(newVolume);
                    if (audioRef.current) {
                        audioRef.current.volume = newVolume;
                    }
                    break;
                    
                }
                case "-":{
                    const newVolume =  Math.max(volume - 0.1, 1);
                    setVolume(newVolume);
                    if (audioRef.current) {
                        audioRef.current.volume = newVolume;
                    }
                    break;
                } 
                case "ArrowRight":
                    nextSong();
                    break;
                case "ArrowLeft":
                    previousSong();
                    break;
                case "ArrowUp":
                    { const newVolume = Math.min(volume + 0.1, 1);
                    setVolume(newVolume);
                    if (audioRef.current) {
                        audioRef.current.volume = newVolume;
                    }
                    break;
                    }
                    
                case "ArrowDown":
                    { const newVolume =  Math.max(volume - 0.05, 1);
                    setVolume(newVolume);
                    if (audioRef.current) {
                        audioRef.current.volume = newVolume;
                    }
                    break;
                    }
                case "m":
                    toggleMute();
                    break;
                case "r":
                    toggleRepeat();
                    break;
                case "s":
                    toggleShuffle();
                    break;
                case "t":
                    setShowThemeModal(true);
                    break;
                case "Escape":
                    setShowThemeModal(false);
                    break;
                case "1":
                    setTheme("default");
                    break;
                case "2":
                    setTheme("romantic");
                    break;
                case "3":
                    setTheme("lofi");
                    break;
                case "4":
                    setTheme("sad");
                    break;
                case "5":
                    setTheme("edm");
                    break;
                default:
                    break;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSong, songs, isPlaying, volume, isRepeat, isShuffle]);
    

    return {
        audioRef,

        songs,
        currentSong,
        setCurrentSongIndex,
        currentSongIndex,

        isPlaying,

        currentTime,
        duration,

        handleSongs,
        togglePlay,
        nextSong,
        previousSong,

        setCurrentTime,
        setDuration,

        handleSeek,

        formatTime,

        volume,
        handleVolume,

        toggleRepeat, isRepeat,

        isShuffle, toggleShuffle,
        cleanSongName,
        isExpanded, setIsExpanded, showVolume, setShowVolume,
        theme, setTheme, currentTheme, setShowThemeModal, showThemeModal, centerTheme, setCenterTheme, changeTheme, isThemeChanging,
        clearPlaylist,
        audioData,
        audioLevel,
    };
}