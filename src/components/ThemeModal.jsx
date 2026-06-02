function ThemeModal({ setTheme, selectedTheme, setSelectedTheme, closeModal }) {

    const themes = [
        { name: "default", icon: "🌞" },
        { name: "sad", icon: "🌧" },
        { name: "romantic", icon: "🌸" },
        { name: "edm", icon: "🌃" },
        { name: "lofi", icon: "🌌" },
    ];

    const themePositions = {
        default: { x: 0, y: 72 },
        sad: { x: 0, y: -110 },
        romantic: { x: -110, y: -72 },
        edm: { x: 72, y: 0 },
        lofi: { x: -110, y: 55 },
    };

    return (
        <div className="aura-system">
            {themes.map((theme) => {

                return (
                    <div key={theme.name} className={`planet ${selectedTheme === theme.name ? "planet-active" : ""}`}
                        style={{
                            left: `calc(50% + ${themePositions[theme.name].x}px)`,
                            top: `calc(50% + ${themePositions[theme.name].y}px)`
                        }}
                        onClick={() => { setSelectedTheme(theme.name); setTheme(theme.name); closeModal(); }}> {theme.icon}</div>
                );
            }
            )
            }
            <div className="sun-core" >{themes.find(t => t.name === selectedTheme)?.icon}</div>
        </div>
    );
}

export default ThemeModal;