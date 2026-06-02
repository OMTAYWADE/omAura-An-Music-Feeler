export const themeKeywords = {
   romantic: [ "dil", "ishq", "mohabbat", "pyaar", "pyar", "love", "lover", "sajna", "sanam", "jaan", "jana", "janaa", "mehboob", "humsafar", "raanjhana", "heeriye", "soniye", "tere", "meri", "tum", "tu", "saath", "paas", "nazar", "khuda", "chand", "chaand", "pal pal", "khushi", "yaara", "yaari"
  ],
  sad: [ "judai", "bewafa", "bewafaa", "tanha", "tanhai", "yaad", "yaadein", "rona", "aansu", "ansu", "dard", "gham", "gum", "bichhad", "chhod", "pagal", "akela", "alone", "lost", "broken", "jeeve", "zindagi"
  ],

      lofi: [ "rain", "baarish", "barish", "night", "raat", "midnight", "moon", "chaand", "sky", "khamosh", "safar", "journey", "dream", "khwab", "lofi", "chill"
  ],

      edm: [ "dj", "remix", "bass", "drop", "club", "party", "dance", "electro", "beat", "festival", "bhangra", "nach", "nachi", "dancefloor"
  ],
};

export function detectTheme(songName) {
    const name = songName.toLowerCase();
    const scores = { default: 1, romantic: 0, sad: 0, lofi: 0, edm: 0 };

    Object.entries(themeKeywords).forEach(([theme, keywords]) => {
        keywords.forEach(keyword => {
            if (name.includes(keyword)) {
                scores[theme] += 3;
            }
        });
    });
    return Object.keys(scores).reduce((a, b)=> scores[b] < scores[a] ? a : b);
}