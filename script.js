// ===============================
// RNGANA
// ===============================
// KANADEX:
// Page 1 = Hiragana
// Page 2 = Katakana
// Katakana unlocks when all Hiragana
// characters have been collected.
// ===============================


// ===============================
// HIRAGANA DATA
// ===============================

const hiragana = [

    // ===========================
    // COMMON
    // ===========================

    // A
    { char: "あ", name: "A", rarity: "Common" },
    { char: "い", name: "I", rarity: "Common" },
    { char: "う", name: "U", rarity: "Common" },
    { char: "え", name: "E", rarity: "Common" },
    { char: "お", name: "O", rarity: "Common" },

    // K
    { char: "か", name: "Ka", rarity: "Common" },
    { char: "き", name: "Ki", rarity: "Common" },
    { char: "く", name: "Ku", rarity: "Common" },
    { char: "け", name: "Ke", rarity: "Common" },
    { char: "こ", name: "Ko", rarity: "Common" },

    // G
    { char: "が", name: "Ga", rarity: "Common" },
    { char: "ぎ", name: "Gi", rarity: "Common" },
    { char: "ぐ", name: "Gu", rarity: "Common" },
    { char: "げ", name: "Ge", rarity: "Common" },
    { char: "ご", name: "Go", rarity: "Common" },


    // ===========================
    // UNCOMMON
    // ===========================

    // S
    { char: "さ", name: "Sa", rarity: "Uncommon" },
    { char: "し", name: "Shi", rarity: "Uncommon" },
    { char: "す", name: "Su", rarity: "Uncommon" },
    { char: "せ", name: "Se", rarity: "Uncommon" },
    { char: "そ", name: "So", rarity: "Uncommon" },

    // Z
    { char: "ざ", name: "Za", rarity: "Uncommon" },
    { char: "じ", name: "Ji", rarity: "Uncommon" },
    { char: "ず", name: "Zu", rarity: "Uncommon" },
    { char: "ぜ", name: "Ze", rarity: "Uncommon" },
    { char: "ぞ", name: "Zo", rarity: "Uncommon" },

    // T
    { char: "た", name: "Ta", rarity: "Uncommon" },
    { char: "ち", name: "Chi", rarity: "Uncommon" },
    { char: "つ", name: "Tsu", rarity: "Uncommon" },
    { char: "て", name: "Te", rarity: "Uncommon" },
    { char: "と", name: "To", rarity: "Uncommon" },

    // D
    { char: "だ", name: "Da", rarity: "Uncommon" },
    { char: "ぢ", name: "Ji", rarity: "Uncommon" },
    { char: "づ", name: "Dzu", rarity: "Uncommon" },
    { char: "で", name: "De", rarity: "Uncommon" },
    { char: "ど", name: "Do", rarity: "Uncommon" },


    // ===========================
    // RARE
    // ===========================

    // N
    { char: "な", name: "Na", rarity: "Rare" },
    { char: "に", name: "Ni", rarity: "Rare" },
    { char: "ぬ", name: "Nu", rarity: "Rare" },
    { char: "ね", name: "Ne", rarity: "Rare" },
    { char: "の", name: "No", rarity: "Rare" },

    // H
    { char: "は", name: "Ha", rarity: "Rare" },
    { char: "ひ", name: "Hi", rarity: "Rare" },
    { char: "ふ", name: "Fu", rarity: "Rare" },
    { char: "へ", name: "He", rarity: "Rare" },
    { char: "ほ", name: "Ho", rarity: "Rare" },

    // B
    { char: "ば", name: "Ba", rarity: "Rare" },
    { char: "び", name: "Bi", rarity: "Rare" },
    { char: "ぶ", name: "Bu", rarity: "Rare" },
    { char: "べ", name: "Be", rarity: "Rare" },
    { char: "ぼ", name: "Bo", rarity: "Rare" },


    // ===========================
    // EPIC
    // ===========================

    // Little vowels
    { char: "ぁ", name: "Little A", rarity: "Epic" },
    { char: "ぃ", name: "Little I", rarity: "Epic" },
    { char: "ぅ", name: "Little U", rarity: "Epic" },
    { char: "ぇ", name: "Little E", rarity: "Epic" },
    { char: "ぉ", name: "Little O", rarity: "Epic" },

    // Little Y
    { char: "ゃ", name: "Little Ya", rarity: "Epic" },
    { char: "ゅ", name: "Little Yu", rarity: "Epic" },
    { char: "ょ", name: "Little Yo", rarity: "Epic" },

    // Little Tsu
    { char: "っ", name: "Little Tsu", rarity: "Epic" },

    // P
    { char: "ぱ", name: "Pa", rarity: "Epic" },
    { char: "ぴ", name: "Pi", rarity: "Epic" },
    { char: "ぷ", name: "Pu", rarity: "Epic" },
    { char: "ぺ", name: "Pe", rarity: "Epic" },
    { char: "ぽ", name: "Po", rarity: "Epic" },

    

    // ===========================
    // LEGENDARY
    // ===========================

    // M
    { char: "ま", name: "Ma", rarity: "Legendary" },
    { char: "み", name: "Mi", rarity: "Legendary" },
    { char: "む", name: "Mu", rarity: "Legendary" },
    { char: "め", name: "Me", rarity: "Legendary" },
    { char: "も", name: "Mo", rarity: "Legendary" },

    // R
    { char: "ら", name: "Ra", rarity: "Legendary" },
    { char: "り", name: "Ri", rarity: "Legendary" },
    { char: "る", name: "Ru", rarity: "Legendary" },
    { char: "れ", name: "Re", rarity: "Legendary" },
    { char: "ろ", name: "Ro", rarity: "Legendary" },


    // ===========================
    // MYTHIC
    // ===========================

    // Y
    { char: "や", name: "Ya", rarity: "Mythic" },
    { char: "ゆ", name: "Yu", rarity: "Mythic" },
    { char: "よ", name: "Yo", rarity: "Mythic" },

    // W
    { char: "わ", name: "Wa", rarity: "Mythic" },
    { char: "を", name: "Wo", rarity: "Mythic" },


    // ===========================
    // DIVINE
    // ===========================

    { char: "ん", name: "N", rarity: "Divine" },

// K combinations
    { char: "きゃ", name: "Kya", rarity: "Divine" },
    { char: "きゅ", name: "Kyu", rarity: "Divine" },
    { char: "きょ", name: "Kyo", rarity: "Divine" },

    // S combinations
    { char: "しゃ", name: "Sha", rarity: "Divine" },
    { char: "しゅ", name: "Shu", rarity: "Divine" },
    { char: "しょ", name: "Sho", rarity: "Divine" },

    // T combinations
    { char: "ちゃ", name: "Cha", rarity: "Divine" },
    { char: "ちゅ", name: "Chu", rarity: "Divine" },
    { char: "ちょ", name: "Cho", rarity: "Divine" },

    // ===========================
    // SECRET
    // ===========================

    
    // N combinations
    { char: "にゃ", name: "Nya", rarity: "Secret" },
    { char: "にゅ", name: "Nyu", rarity: "Secret" },
    { char: "にょ", name: "Nyo", rarity: "Secret" },

    // H combinations
    { char: "ひゃ", name: "Hya", rarity: "Secret" },
    { char: "ひゅ", name: "Hyu", rarity: "Secret" },
    { char: "ひょ", name: "Hyo", rarity: "Secret" },

    // M combinations
    { char: "みゃ", name: "Mya", rarity: "Secret" },
    { char: "みゅ", name: "Myu", rarity: "Secret" },
    { char: "みょ", name: "Myo", rarity: "Secret" },

    // R combinations
    { char: "りゃ", name: "Rya", rarity: "Secret" },
    { char: "りゅ", name: "Ryu", rarity: "Secret" },
    { char: "りょ", name: "Ryo", rarity: "Secret" },

    // G combinations
    { char: "ぎゃ", name: "Gya", rarity: "Secret" },
    { char: "ぎゅ", name: "Gyu", rarity: "Secret" },
    { char: "ぎょ", name: "Gyo", rarity: "Secret" },

    // J combinations
    { char: "じゃ", name: "Ja", rarity: "Secret" },
    { char: "じゅ", name: "Ju", rarity: "Secret" },
    { char: "じょ", name: "Jo", rarity: "Secret" },

    // B combinations
    { char: "びゃ", name: "Bya", rarity: "Secret" },
    { char: "びゅ", name: "Byu", rarity: "Secret" },
    { char: "びょ", name: "Byo", rarity: "Secret" },

    // P combinations
    { char: "ぴゃ", name: "Pya", rarity: "Secret" },
    { char: "ぴゅ", name: "Pyu", rarity: "Secret" },
    { char: "ぴょ", name: "Pyo", rarity: "Secret" },

        // ===========================
    // ADVANCED / FOREIGN SOUNDS
    // ===========================

    

    // T combinations
    { char: "てぃ", name: "Ti", rarity: "Unreal" },
    { char: "てゅ", name: "Tyu", rarity: "Unreal" },
    { char: "とぅ", name: "Tu", rarity: "Unreal" },

    // D combinations
    { char: "でぃ", name: "Di", rarity: "Unreal" },
    { char: "でゅ", name: "Dyu", rarity: "Unreal" },
    { char: "どぅ", name: "Du", rarity: "Unreal" },

    // F combinations
    { char: "ふぁ", name: "Fa", rarity: "Unreal" },
    { char: "ふぃ", name: "Fi", rarity: "Unreal" },
    { char: "ふぇ", name: "Fe", rarity: "Unreal" },
    { char: "ふぉ", name: "Fo", rarity: "Unreal" },

    // W combinations
    { char: "うぃ", name: "Wi", rarity: "Unreal" },
    { char: "うぇ", name: "We", rarity: "Unreal" },
    { char: "うぉ", name: "Wo", rarity: "Unreal" },

    // V combinations
    { char: "ゔぁ", name: "Va", rarity: "Unreal" },
    { char: "ゔぃ", name: "Vi", rarity: "Unreal" },
    { char: "ゔ", name: "Vu", rarity: "Unreal" },
    { char: "ゔぇ", name: "Ve", rarity: "Unreal" },
    { char: "ゔぉ", name: "Vo", rarity: "Unreal" },

        // ===========================
    // EXTENDED COMBINATIONS
    // ===========================

    // Y combinations
    { char: "いぇ", name: "Ye", rarity: "Unreal" },

    // K combinations
    { char: "きぇ", name: "Kye", rarity: "Unreal" },

    // G combinations
    { char: "ぎぇ", name: "Gye", rarity: "Unreal" },

    // S combinations
    { char: "しぇ", name: "She", rarity: "Unreal" },

    // J combinations
    { char: "じぇ", name: "Je", rarity: "Unreal" },

    // CH combinations
    { char: "ちぇ", name: "Che", rarity: "Unreal" },

    // N combinations
    { char: "にぇ", name: "Nye", rarity: "Unreal" },

    // H combinations
    { char: "ひぇ", name: "Hye", rarity: "Unreal" },

    // B combinations
    { char: "びぇ", name: "Bye", rarity: "Unreal" },

    // P combinations
    { char: "ぴぇ", name: "Pye", rarity: "Unreal" },

    // M combinations
    { char: "みぇ", name: "Mye", rarity: "Unreal" },

    // R combinations
    { char: "りぇ", name: "Rye", rarity: "Unreal" },
];

// ===============================
// THEME SYSTEM
// ===============================

const themes = [
    "light",
    "dark",
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
    "mythic",
    "divine",
    "secret",
    "unreal"
];

const rarityThemes = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "legendary",
    "mythic",
    "divine",
    "secret",
    "unreal"
];

let adminUnlockAllThemes = false;


let currentTheme =
    localStorage.getItem("currentTheme") || "dark";

if (!themes.includes(currentTheme)) {

    currentTheme = "dark";

    localStorage.setItem(
        "currentTheme",
        "dark"
    );
}

document.body.classList.add(
    `theme-${currentTheme}`
);


function setTheme(theme) {
    if (!themes.includes(theme)) {
        return;
    }

    if (!isThemeUnlocked(theme)) {
        return;
    }

    document.body.classList.remove(
        ...themes.map(t => `theme-${t}`)
    );

    document.body.classList.add(
        `theme-${theme}`
    );

    currentTheme = theme;

    localStorage.setItem(
        "currentTheme",
        theme
    );
    localStorage.setItem(
    "currentTheme",
    theme
);
}

const themeSelector =
    document.getElementById("themeSelector");

function renderThemeSelector() {
    if (!themeSelector) return;

    themeSelector.innerHTML = "";

    themes.forEach(theme => {
        const button = document.createElement("button");

        const unlocked = isThemeUnlocked(theme);
        const active = currentTheme === theme;

        button.className = "theme-option";

        if (active) {
            button.classList.add("active");
        }

        if (!unlocked) {
            button.classList.add("locked");
        }

        const displayName =
            theme.charAt(0).toUpperCase() +
            theme.slice(1);

        button.textContent = unlocked
            ? displayName
            : `🔒 ${displayName}`;

        if (unlocked) {
            button.addEventListener("click", () => {
                setTheme(theme);
            });
        }

        themeSelector.appendChild(button);
    });
}


function isThemeUnlocked(theme) {

    if (!rarityThemes.includes(theme)) {
        return true;
    }

    // Admin testing override
    if (adminUnlockAllThemes) {
        return true;
    }

    return hiragana
        .filter(item =>
            item.rarity.toLowerCase() === theme
        )
        .every(item =>
            hiraganaCollection.includes(item.char)
        );
}


// ===============================
// COMBINED ROLL POOL
// ===============================

const allKana = hiragana;


// ===============================
// GAME VARIABLES
// ===============================

let rolling = false;

let currentPage = "hiragana";

let rollCount =
    Number(
        localStorage.getItem("rollCount")
    ) || 0;


// ===============================
// COLLECTIONS
// ===============================

let hiraganaCollection =
    JSON.parse(
        localStorage.getItem(
            "hiraganaCollection"
        )
    ) || [];

if (
    rarityThemes.includes(currentTheme) &&
    !isThemeUnlocked(currentTheme)
) {

    currentTheme = "dark";

    localStorage.setItem(
        "currentTheme",
        "dark"
    );
}

// ===============================
// OLD COLLECTION MIGRATION
// ===============================

const oldCollection =
    JSON.parse(
        localStorage.getItem(
            "kanaCollection"
        )
    ) || [];

oldCollection.forEach(char => {

    if (
        hiragana.some(
            item => item.char === char
        ) &&
        !hiraganaCollection.includes(char)
    ) {

        hiraganaCollection.push(char);
    }
});

localStorage.setItem(
    "hiraganaCollection",
    JSON.stringify(
        hiraganaCollection
    )
);


// ===============================
// DOM ELEMENTS
// ===============================

const kanaDisplay =
    document.getElementById(
        "kanaDisplay"
    );

const kanaName =
    document.getElementById(
        "kanaName"
    );

const rarityDisplay =
    document.getElementById(
        "rarityDisplay"
    );

const rollButton =
    document.getElementById(
        "rollButton"
    );

const rollCounter =
    document.getElementById(
        "rollCounter"
    );

const collectionGrid =
    document.getElementById(
        "collectionGrid"
    );

const kanadexTitle =
    document.getElementById(
        "kanadexTitle"
    );

const kanadexCount =
    document.getElementById(
        "kanadexCount"
    );

const completionPercentage =
    document.getElementById(
        "completionPercentage"
    );

const previousPage =
    document.getElementById(
        "previousPage"
    );

const nextPage =
    document.getElementById(
        "nextPage"
    );


const unlockOverlay =
    document.getElementById(
        "unlockOverlay"
    );

const unlockParticles =
    document.getElementById(
        "unlockParticles"
    );

    // ==================================================
// SETTINGS
// ==================================================

const settingsButton =
    document.getElementById("settingsButton");

const settingsPanel =
    document.getElementById("settingsPanel");

const closeSettingsButton =
    document.getElementById("closeSettingsButton");

const sfxVolumeSlider =
    document.getElementById("sfxVolumeSlider");

const sfxVolumeValue =
    document.getElementById("sfxVolumeValue");

    const musicVolumeSlider =
    document.getElementById("musicVolumeSlider");

const musicVolumeValue =
    document.getElementById("musicVolumeValue");

    const animationToggle =
    document.getElementById("animationToggle");

const animationValue =
    document.getElementById("animationValue");

// ==================================================
// LOAD SETTINGS
// ==================================================

let sfxVolume =
    Number(
        localStorage.getItem("sfxVolume")
    );

if (
    Number.isNaN(sfxVolume)
) {

    sfxVolume = 1;

}

sfxVolumeSlider.value =
    sfxVolume * 100;

sfxVolumeValue.textContent =
    `${Math.round(sfxVolume * 100)}%`;
let musicVolume =
    Number(
        localStorage.getItem("musicVolume")
    );

if (
    Number.isNaN(musicVolume)
) {

    musicVolume = 0.5;

}

musicVolumeSlider.value =
    musicVolume * 100;

musicVolumeValue.textContent =
    `${Math.round(musicVolume * 100)}%`;

// ==================================================
// ANIMATION TOGGLE
// ==================================================

if (animationToggle) {

    animationToggle.addEventListener(
        "click",
        () => {

            animationsEnabled =
                !animationsEnabled;

            animationToggle.textContent =
                animationsEnabled
                    ? "ON"
                    : "OFF";

            animationValue.textContent =
                animationsEnabled
                    ? "ON"
                    : "OFF";

            localStorage.setItem(
                "animationsEnabled",
                animationsEnabled
            );

        }
    );

}

let animationsEnabled =
    localStorage.getItem(
        "animationsEnabled"
    );

if (
    animationsEnabled === null
) {
    animationsEnabled = true;
} else {
    animationsEnabled =
        animationsEnabled === "true";
}

if (animationToggle) {

    animationToggle.textContent =
        animationsEnabled
            ? "ON"
            : "OFF";

}

if (animationValue) {

    animationValue.textContent =
        animationsEnabled
            ? "ON"
            : "OFF";

}

// ==================================================
// OPEN SETTINGS
// ==================================================

if (settingsButton) {

    settingsButton.addEventListener(
        "click",
        () => {

            settingsPanel.classList.add(
                "show"
            );

        }
    );

}


// ==================================================
// CLOSE SETTINGS
// ==================================================

if (closeSettingsButton) {

    closeSettingsButton.addEventListener(
        "click",
        () => {

            settingsPanel.classList.remove(
                "show"
            );

        }
    );

}


// ==================================================
// CLOSE WHEN CLICKING OUTSIDE
// ==================================================

if (settingsPanel) {

    settingsPanel.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                settingsPanel
            ) {

                settingsPanel.classList.remove(
                    "show"
                );

            }

        }
    );

}


// ==================================================
// SFX VOLUME
// ==================================================

if (sfxVolumeSlider) {

    sfxVolumeSlider.addEventListener(
        "input",
        () => {

            sfxVolume =
                Number(
                    sfxVolumeSlider.value
                ) / 100;

            sfxVolumeValue.textContent =
                `${Math.round(sfxVolume * 100)}%`;

            localStorage.setItem(
                "sfxVolume",
                sfxVolume
            );

        }
    );

}

// ==================================================
// MUSIC VOLUME
// ==================================================

if (musicVolumeSlider) {

    musicVolumeSlider.addEventListener(
        "input",
        () => {

            musicVolume =
                Number(
                    musicVolumeSlider.value
                ) / 100;

            musicVolumeValue.textContent =
                `${Math.round(musicVolume * 100)}%`;

            localStorage.setItem(
                "musicVolume",
                musicVolume
            );
            if (musicGain) {

    musicGain.gain.value =
        musicVolume;

}

        }
    );

}

// ===============================
// AUDIO
// ===============================

let audioContext = null;


function initAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window["webkitAudioContext"]
            )();
    }

    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();
    }
}


function playTone(
    frequency,
    duration,
    volume = 0.05
) {

    if (!audioContext) return;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.value =
        frequency;

    // Apply SFX volume setting
    const finalVolume =
        volume * sfxVolume;

    gain.gain.setValueAtTime(
        finalVolume,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime +
        duration
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime +
        duration
    );
}

// ==================================================
// BACKGROUND MUSIC
// ==================================================

let musicGain = null;
let musicStarted = false;
let musicTimer = null;

function initMusic() {

    if (!audioContext) return;

    if (musicGain) return;

    musicGain =
        audioContext.createGain();

    musicGain.gain.value =
        musicVolume;

    musicGain.connect(
        audioContext.destination
    );
}


// ===============================
// RNGANA BACKGROUND MUSIC
// ===============================

// ===============================
// RNGANA THEME MUSIC
// ===============================

const musicThemes = {

    dark: [
        261.63, 329.63, 392.00, 523.25,
        392.00, 329.63, 293.66, 329.63,

        293.66, 349.23, 440.00, 587.33,
        440.00, 349.23, 329.63, 349.23,

        261.63, 329.63, 392.00, 523.25,
        587.33, 523.25, 392.00, 329.63,

        293.66, 349.23, 440.00, 587.33,
        523.25, 440.00, 349.23, 261.63
    ],

    light: [
        392.00, 440.00, 523.25, 587.33,
        659.25, 587.33, 523.25, 440.00,

        392.00, 493.88, 587.33, 659.25,
        783.99, 659.25, 587.33, 493.88
    ],

    common: [
        261.63, 329.63, 392.00, 329.63,
        261.63, 293.66, 349.23, 293.66,

        261.63, 329.63, 392.00, 440.00,
        392.00, 329.63, 293.66, 261.63
    ],

    uncommon: [
        293.66, 349.23, 440.00, 523.25,
        440.00, 349.23, 293.66, 349.23,

        329.63, 392.00, 493.88, 587.33,
        493.88, 392.00, 329.63, 392.00
    ],

    rare: [
        261.63, 392.00, 523.25, 659.25,
        523.25, 392.00, 293.66, 440.00,

        329.63, 493.88, 587.33, 783.99,
        587.33, 493.88, 392.00, 329.63
    ],

    epic: [
        293.66, 349.23, 466.16, 587.33,
        698.46, 587.33, 466.16, 349.23,

        329.63, 392.00, 523.25, 622.25,
        783.99, 622.25, 523.25, 392.00
    ],

    legendary: [
        261.63, 329.63, 392.00, 523.25,
        659.25, 523.25, 392.00, 329.63,

        293.66, 369.99, 440.00, 587.33,
        739.99, 587.33, 440.00, 369.99
    ],

    mythic: [
        220.00, 277.18, 329.63, 440.00,
        523.25, 440.00, 329.63, 277.18,

        246.94, 293.66, 369.99, 493.88,
        587.33, 493.88, 369.99, 293.66
    ],

    divine: [
        196.00, 246.94, 293.66, 392.00,
        493.88, 392.00, 293.66, 246.94,

        220.00, 277.18, 329.63, 440.00,
        554.37, 440.00, 329.63, 277.18
    ],

    secret: [
        523.25, 659.25, 783.99, 1046.50,
        783.99, 659.25, 987.77, 1174.66,

        880.00, 1046.50, 1318.51, 1567.98,
        1318.51, 1046.50, 1174.66, 880.00,

        659.25, 783.99, 1046.50, 1318.51,
        1567.98, 1318.51, 1046.50, 783.99
    ],

    unreal: [
        130.81, 196.00, 261.63, 392.00,
        523.25, 392.00, 261.63, 196.00,

        146.83, 220.00, 293.66, 440.00,
        587.33, 440.00, 293.66, 220.00,

        164.81, 246.94, 329.63, 493.88,
        659.25, 493.88, 329.63, 246.94
    ]
};

let musicNoteIndex = 0;


function playMusicNote() {

    if (!audioContext || !musicGain)
        return;


    const now =
        audioContext.currentTime;


    // ===========================
    // MELODY
    // ===========================

    const oscillator =
        audioContext.createOscillator();

    const noteGain =
        audioContext.createGain();


    oscillator.type =
        "triangle";

    const currentMusic =
    musicThemes[currentTheme] ||
    musicThemes.dark;

oscillator.frequency.value =
    currentMusic[musicNoteIndex];


    noteGain.gain.setValueAtTime(
        0.035,
        now
    );

    noteGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.38
    );


    oscillator.connect(noteGain);
    noteGain.connect(musicGain);


    oscillator.start(now);

    oscillator.stop(
        now + 0.4
    );


    // ===========================
    // QUIET BASS
    // ===========================

    if (musicNoteIndex % 4 === 0) {

        const bass =
            audioContext.createOscillator();

        const bassGain =
            audioContext.createGain();


        bass.type =
            "sine";


        bass.frequency.value =
            musicNoteIndex < 16
                ? 130.81
                : 146.83;


        bassGain.gain.setValueAtTime(
            0.018,
            now
        );

        bassGain.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.8
        );


        bass.connect(bassGain);
        bassGain.connect(musicGain);


        bass.start(now);

        bass.stop(
            now + 0.8
        );
    }

// ===========================
// SECRET SPARKLES
// ===========================

if (
    currentTheme === "secret" &&
    musicNoteIndex % 2 === 0
) {

    const sparkle =
        audioContext.createOscillator();

    const sparkleGain =
        audioContext.createGain();

    sparkle.type =
        "sine";

    sparkle.frequency.value =
        1046.50 +
        Math.random() * 600;

    sparkleGain.gain.setValueAtTime(
        0.001,
        now
    );

    sparkleGain.gain.exponentialRampToValueAtTime(
        0.025,
        now + 0.03
    );

    sparkleGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.35
    );

    sparkle.connect(sparkleGain);
    sparkleGain.connect(musicGain);

    sparkle.start(now);

    sparkle.stop(
        now + 0.4
    );
}


// ===========================
// UNREAL ATMOSPHERE
// ===========================

if (
    currentTheme === "unreal" &&
    musicNoteIndex % 4 === 0
) {

    const atmosphere =
        audioContext.createOscillator();

    const atmosphereGain =
        audioContext.createGain();

    atmosphere.type =
        "sine";

    atmosphere.frequency.value =
        65.41;

    atmosphereGain.gain.setValueAtTime(
        0.001,
        now
    );

    atmosphereGain.gain.exponentialRampToValueAtTime(
        0.035,
        now + 0.15
    );

    atmosphereGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 1.5
    );

    atmosphere.connect(atmosphereGain);
    atmosphereGain.connect(musicGain);

    atmosphere.start(now);

    atmosphere.stop(
        now + 1.6
    );
}

    // ===========================
    // NEXT NOTE
    // ===========================

    musicNoteIndex =
    (musicNoteIndex + 1) %
    currentMusic.length;
}


function startMusic() {

    if (musicStarted)
        return;


    initAudio();
    initMusic();


    if (!audioContext || !musicGain)
        return;


    musicStarted = true;

    playMusicNote();

    function changeMusicTheme() {

    musicNoteIndex = 0;

    if (!musicStarted)
        return;

    clearInterval(musicTimer);

    playMusicNote();

    musicTimer =
        setInterval(
            playMusicNote,
            250
        );
}

    musicTimer =
        setInterval(
            playMusicNote,
            250
        );
}

function playRarityUnlockJingle(rarity) {

    if (!audioContext || !musicGain)
        return;

    const now =
        audioContext.currentTime;

    const jingles = {

        common: [261.63, 329.63, 392.00],

        uncommon: [293.66, 369.99, 440.00],

        rare: [329.63, 415.30, 493.88, 659.25],

        epic: [349.23, 440.00, 523.25, 698.46],

        legendary: [392.00, 493.88, 587.33, 783.99],

        mythic: [440.00, 554.37, 659.25, 880.00],

        divine: [493.88, 622.25, 739.99, 987.77],

        secret: [523.25, 659.25, 783.99, 1046.50, 1318.51],

        unreal: [261.63, 392.00, 523.25, 783.99, 1046.50]
    };

    const notes =
        jingles[rarity.toLowerCase()];

    if (!notes)
        return;

    notes.forEach((frequency, index) => {

        const oscillator =
            audioContext.createOscillator();

        const noteGain =
            audioContext.createGain();

        const startTime =
            now + index * 0.16;

        oscillator.type =
            rarity.toLowerCase() === "unreal"
                ? "sine"
                : "triangle";

        oscillator.frequency.value =
            frequency;

        noteGain.gain.setValueAtTime(
            0.001,
            startTime
        );

        noteGain.gain.exponentialRampToValueAtTime(
            0.06,
            startTime + 0.02
        );

        noteGain.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + 0.5
        );

        oscillator.connect(noteGain);
        noteGain.connect(musicGain);

        oscillator.start(startTime);

        oscillator.stop(
            startTime + 0.55
        );
    });
}

// ===============================
// ROLL SOUND
// ===============================

function playRollTick(progress) {

    if (!audioContext) return;

    const frequency =
        250 +
        (1 - progress) * 500;

    playTone(
        frequency,
        0.035,
        0.025
    );
}


// ===============================
// RARITY SOUND
// ===============================

function playRaritySound(rarity) {

    const sounds = {

        Common: [
            300
        ],

        Uncommon: [
            400,
            500
        ],

        Rare: [
            500,
            650
        ],

        Epic: [
            500,
            650,
            800
        ],

        Legendary: [
            500,
            700,
            900,
            1100
        ],

        Mythic: [
            500,
            750,
            1000,
            1300
        ],

        Divine: [
            600,
            850,
            1100,
            1400,
            1700
        ],

        Secret: [
            700,
            1000,
            1300,
            1700,
            2100
        ],

        Unreal: [
            500,
            700,
            900,
            1200,
            1500,
            1800,
            2200,
            2600
        ]
    };


    const notes =
        sounds[rarity] || [300];


    notes.forEach(
        (frequency, index) => {

            setTimeout(
                () => {

                    playTone(
                        frequency,
                        0.18,
                        0.06
                    );

                },
                index * 100
            );
        }
    );
}


// ===============================
// RANDOM KANA BY RARITY
// ===============================

function getRandomByRarity(
    rarity,
    pool
) {

    const possible =
        pool.filter(
            item =>
                item.rarity === rarity
        );


    if (
        possible.length === 0
    ) {

        return pool[
            Math.floor(
                Math.random() *
                pool.length
            )
        ];
    }


    return possible[
        Math.floor(
            Math.random() *
            possible.length
        )
    ];
}


// ===============================
// RNG SYSTEM
// ===============================

function getRandomKana() {

    const rollPool = hiragana;


    const roll =
        Math.random() * 100000;


    // Unreal = 0.0001%
    if (roll < 0.1) {

        return getRandomByRarity(
            "Unreal",
            rollPool
        );
    }


    // Secret = 0.0009%
    if (roll < 1) {

        return getRandomByRarity(
            "Secret",
            rollPool
        );
    }


    // Divine = 0.01%
    if (roll < 11) {

        return getRandomByRarity(
            "Divine",
            rollPool
        );
    }


    // Mythic = 0.05%
    if (roll < 61) {

        return getRandomByRarity(
            "Mythic",
            rollPool
        );
    }


    // Legendary = 0.2%
    if (roll < 261) {

        return getRandomByRarity(
            "Legendary",
            rollPool
        );
    }


    // Epic = 1%
    if (roll < 1261) {

        return getRandomByRarity(
            "Epic",
            rollPool
        );
    }


    // Rare = 10%
    if (roll < 11261) {

        return getRandomByRarity(
            "Rare",
            rollPool
        );
    }


    // Uncommon = 10%
    if (roll < 21261) {

        return getRandomByRarity(
            "Uncommon",
            rollPool
        );
    }


    // Common
    return getRandomByRarity(
        "Common",
        rollPool
    );
}


// ===============================
// NORMAL ROLL
// ===============================

function roll() {

    if (rolling) return;


    rolling = true;

    initAudio();

    rollButton.disabled = true;


    kanaDisplay.className =
        "kana-display";

    rarityDisplay.className =
        "rarity";


    // ==================================================
    // ANIMATIONS OFF
    // ==================================================

    if (!animationsEnabled) {

        revealResult();

        return;
    }


    // ==================================================
    // NORMAL ANIMATION
    // ==================================================

    const startTime =
        performance.now();

    const duration =
        3000;


    function animate(currentTime) {

        const elapsed =
            currentTime -
            startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const randomItem =
            allKana[
                Math.floor(
                    Math.random() *
                    allKana.length
                )
            ];


        kanaDisplay.textContent =
            randomItem.char;

        kanaName.textContent =
            randomItem.name;


        playRollTick(
            progress
        );


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                animate
            );

        } else {

            revealResult();
        }
    }


    requestAnimationFrame(
        animate
    );
}

// ===============================
// NEW DISCOVERY POPUP
// ===============================

function showNewPopup() {

    const popup =
        document.createElement("div");

    popup.className =
        "new-discovery-popup";

    popup.textContent =
        "NEW!";

    document.body.appendChild(
        popup
    );

    setTimeout(
        () => {

            popup.remove();

        },
        1500
    );
}

// ===============================
// REVEAL RESULT
// ===============================

function revealResult() {

    const result =
        getRandomKana();


    kanaDisplay.textContent =
        result.char;

    kanaName.textContent =
        result.name;

    rarityDisplay.textContent =
        result.rarity;


    rarityDisplay.className =
        `rarity ${result.rarity.toLowerCase()}`;


    kanaDisplay.className =
        `kana-display effect-${result.rarity.toLowerCase()}`;


    playRaritySound(
        result.rarity
    );


    rollCount++;


    localStorage.setItem(
        "rollCount",
        rollCount
    );


    rollCounter.textContent =
        `Rolls: ${rollCount}`;


    let isNew = false;



    // ===========================
    // HIRAGANA DISCOVERY
    // ===========================

    if (
        hiragana.some(
            item =>
                item.char ===
                result.char
        )
    ) {

        if (
            !hiraganaCollection.includes(
                result.char
            )
        ) {

            hiraganaCollection.push(
                result.char
            );


            if (
                hiraganaCollection.length ===
                hiragana.length
            ) {

                justUnlockedKatakana =
                    true;
            }


            localStorage.setItem(
                "hiraganaCollection",
                JSON.stringify(
                    hiraganaCollection
                )
            );


            isNew = true;
        }

    }



    updateKanadex(
    isNew,
    result.char
);

if (isNew) {
    showNewPopup();
}



    rolling = false;

    rollButton.disabled = false;
}



// ===============================
// UPDATE KANADEX
// ===============================

function updateKanadex(
    newDiscovery = false,
    discoveredCharacter = ""
) {
    renderCollection(
        hiragana,
        hiraganaCollection
    );

    if (newDiscovery) {
        const items =
            collectionGrid.querySelectorAll(
                ".collection-item"
            );

        items.forEach(item => {
            if (
                item.dataset.character ===
                discoveredCharacter
            ) {
                item.classList.add(
                    "new-discovery"
                );
            }
        });
    }
}


// ===============================
// RENDER COLLECTION
// ===============================

function renderCollection(
    items,
    discoveredCollection
) {

    collectionGrid.innerHTML =
        "";


    const total =
        items.length;


    const discovered =
        discoveredCollection.length;


    kanadexCount.textContent =
        `Characters discovered: ${discovered} / ${total}`;


    const percentage =
        total === 0
            ? 0
            : Math.floor(
                (
                    discovered /
                    total
                ) * 100
            );


    completionPercentage.textContent =
        `${percentage}%`;


    items.forEach(item => {

        const isDiscovered =
            discoveredCollection.includes(
                item.char
            );


        const element =
            document.createElement(
                "div"
            );


        element.dataset.character =
            item.char;


        if (
            isDiscovered
        ) {

            element.className =
                `collection-item ${item.rarity.toLowerCase()}`;


            const character =
                document.createElement(
                    "div"
                );


            character.className =
                "collection-character";


            character.textContent =
                item.char;


            const name =
                document.createElement(
                    "div"
                );


            name.className =
                "collection-name";


            name.textContent =
                item.name;


            element.appendChild(
                character
            );

            element.appendChild(
                name
            );

        } else {

            element.className =
                "collection-item locked";


            const character =
                document.createElement(
                    "div"
                );


            character.className =
                "collection-character";


            character.textContent =
                "?";


            const name =
                document.createElement(
                    "div"
                );


            name.className =
                "collection-name";


            name.textContent =
                "LOCKED";


            element.appendChild(
                character
            );

            element.appendChild(
                name
            );
        }


        collectionGrid.appendChild(
            element
        );
    });
}



// ===============================
// ROLL BUTTON
// ===============================

rollButton.addEventListener(
    "click",
    roll
);


// ==================================================
// GITHUB AUTHENTICATION
// ==================================================

// ==========================================
// GITHUB DOM
// ==========================================

const githubLoginButton =
    document.getElementById("githubLoginButton");

const githubLoggedIn =
    document.getElementById("githubLoggedIn");

const githubAvatar =
    document.getElementById("githubAvatar");

const githubUsername =
    document.getElementById("githubUsername");

const githubLogoutButton =
    document.getElementById("githubLogoutButton");


// ==========================================
// ADMIN DOM
// ==========================================

const ADMIN_USERNAME =
    "MonsterosityGH";

let currentGithubUsername =
    null;

let isAdmin =
    false;

const adminButton =
    document.getElementById("adminButton");

const adminPanel =
    document.getElementById("adminPanel");

const closeAdminButton =
    document.getElementById("closeAdminButton");

const adminKanaInput =
    document.getElementById("adminKanaInput");

const adminGetButton =
    document.getElementById("adminGetButton");

    const adminRemoveButton =
    document.getElementById("adminRemoveButton");

const adminGetStatus =
    document.getElementById("adminGetStatus");

const adminAnimationSelect =
    document.getElementById("adminAnimationSelect");

const adminAnimationButton =
    document.getElementById("adminAnimationButton");

const adminAnimationStatus =
    document.getElementById("adminAnimationStatus");

const adminThemeControl =
    document.getElementById("adminThemeControl");

const adminUnlockThemes =
    document.getElementById("adminUnlockThemes");

// ==========================================
// UPDATE LOGIN UI
// ==========================================

function updateGithubUI(user) {

    if (!user) {

        currentGithubUsername = null;
        isAdmin = false;

        if (githubLoginButton) {
            githubLoginButton.style.display =
                "inline-block";
        }

        if (githubLoggedIn) {
            githubLoggedIn.style.display =
                "none";
        }

        if (adminButton) {
            adminButton.style.display =
                "none";
        }

        if (adminThemeControl) {
    adminThemeControl.style.display = "flex";
}

        
if (adminThemeControl) {
    adminThemeControl.style.display = "none";
}

        return;
    }

    currentGithubUsername =
        user.login;

    isAdmin =
        user.login === ADMIN_USERNAME;

    if (githubLoginButton) {
        githubLoginButton.style.display =
            "none";
    }

    if (githubLoggedIn) {
        githubLoggedIn.style.display =
            "flex";
    }

    if (githubAvatar) {
        githubAvatar.src =
            user.avatar_url;

        githubAvatar.alt =
            `${user.login}'s GitHub avatar`;
    }

    if (githubUsername) {
        githubUsername.textContent =
            `@${user.login}`;
    }

    if (adminButton) {
        adminButton.style.display =
            isAdmin
                ? "block"
                : "none";
    }
}


// ==========================================
// CHECK LOGIN
// ==========================================

async function checkGithubLogin() {

    try {

        const response =
            await fetch(
                "/api/me",
                {
                    credentials:
                        "same-origin"
                }
            );

        if (!response.ok) {
            throw new Error(
                "Login check failed."
            );
        }

        const data =
            await response.json();

        if (data.loggedIn) {
            updateGithubUI(data.user);
        } else {
            updateGithubUI(null);
        }

    } catch (error) {

        console.error(
            "GitHub login check failed:",
            error
        );

        updateGithubUI(null);
    }
}


// ==========================================
// GITHUB LOGIN BUTTON
// ==========================================

if (githubLoginButton) {

    githubLoginButton.addEventListener(
        "click",
        () => {
            window.location.href =
                "/auth/github";
        }
    );
}


// ==========================================
// GITHUB LOGOUT BUTTON
// ==========================================

if (githubLogoutButton) {

    githubLogoutButton.addEventListener(
        "click",
        () => {
            window.location.href =
                "/auth/logout";
        }
    );
}


// ==========================================
// ADMIN BUTTON
// ==========================================

if (adminButton) {

    adminButton.addEventListener(
        "click",
        () => {

            if (!isAdmin)
                return;

            if (adminPanel) {
                adminPanel.classList.add(
                    "show"
                );
            }

            if (adminKanaInput) {
                adminKanaInput.focus();
            }
        }
    );
}


// ==========================================
// CLOSE ADMIN
// ==========================================

function closeAdminPanel() {

    if (adminPanel) {
        adminPanel.classList.remove(
            "show"
        );
    }
}

if (closeAdminButton) {

    closeAdminButton.addEventListener(
        "click",
        closeAdminPanel
    );
}


// ==========================================
// CLICK OUTSIDE
// ==========================================

if (adminPanel) {

    adminPanel.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                adminPanel
            ) {

                closeAdminPanel();
            }
        }
    );
}


// ==========================================
// ESCAPE
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            adminPanel &&
            adminPanel.classList.contains(
                "show"
            )
        ) {

            closeAdminPanel();
        }
    }
);


// ==========================================
// START LOGIN CHECK
// ==========================================

checkGithubLogin();
// ==================================================
// FIND KANA
// ==================================================

function findKana(search) {

    const cleanSearch =
        search
            .trim()
            .toLowerCase();


    if (
        !cleanSearch
    ) {

        return null;
    }


    const allItems = hiragana;


    // Character

    const characterMatch =
        allItems.find(
            item =>
                item.char.toLowerCase() ===
                cleanSearch
        );


    if (
        characterMatch
    ) {

        return characterMatch;
    }


    // Romanized name

    const nameMatch =
        allItems.find(
            item =>
                item.name.toLowerCase() ===
                cleanSearch
        );


    return nameMatch || null;
}


// ==================================================
// ADMIN GET / REMOVE KANA
// ==================================================

function adminGetKana() {

    if (!isAdmin) {
        return;
    }

    const search =
        adminKanaInput.value.trim();

    if (!search) {

        adminGetStatus.textContent =
            "Enter a kana or name.";

        adminGetStatus.className =
            "admin-status error";

        return;
    }

    const item =
        findKana(search);

    if (!item) {

        adminGetStatus.textContent =
            `Kana "${search}" was not found.`;

        adminGetStatus.className =
            "admin-status error";

        return;
    }

    let alreadyOwned = false;


    // ===========================
    // HIRAGANA
    // ===========================

    const isHiragana =
        hiragana.some(
            kana =>
                kana.char === item.char
        );


    if (isHiragana) {

        alreadyOwned =
            hiraganaCollection.includes(
                item.char
            );

        if (!alreadyOwned) {

            hiraganaCollection.push(
                item.char
            );

            localStorage.setItem(
                "hiraganaCollection",
                JSON.stringify(
                    hiraganaCollection
                )
            );
        }
    }

    // ===========================
    // STATUS
    // ===========================

    if (alreadyOwned) {

        adminGetStatus.textContent =
            `${item.char} (${item.name}) is already collected.`;

    } else {

        adminGetStatus.textContent =
            `✓ Added ${item.char} (${item.name}) — ${item.rarity}`;
    }

    adminGetStatus.className =
        "admin-status success";

        updateKanadex();
renderThemeSelector();
}

// ==================================================
// ADMIN REMOVE KANA
// ==================================================

function adminRemoveKana() {

    if (!isAdmin) {
        return;
    }

    const search =
        adminKanaInput.value.trim();

    if (!search) {

        adminGetStatus.textContent =
            "Enter a kana or name.";

        adminGetStatus.className =
            "admin-status error";

        return;
    }


    const item =
        findKana(search);

    if (!item) {

        adminGetStatus.textContent =
            `Kana "${search}" was not found.`;

        adminGetStatus.className =
            "admin-status error";

        return;
    }


    // ===========================
    // FIND COLLECTION
    // ===========================

    const isHiragana =
        hiragana.some(
            kana =>
                kana.char === item.char
        );


    const collection =
    hiraganaCollection;


    const index =
        collection.indexOf(
            item.char
        );


    // ===========================
    // NOT COLLECTED
    // ===========================

    if (index === -1) {

        adminGetStatus.textContent =
            `${item.char} (${item.name}) isn't collected.`;

        adminGetStatus.className =
            "admin-status error";

        return;
    }


    // ===========================
    // REMOVE
    // ===========================

    collection.splice(
        index,
        1
    );


    localStorage.setItem(
    "hiraganaCollection",
    JSON.stringify(
        collection
    )
);


    // ===========================
    // STATUS
    // ===========================

    adminGetStatus.textContent =
        `✓ Removed ${item.char} (${item.name}) — ${item.rarity}`;

    adminGetStatus.className =
        "admin-status success";


    // ===========================
    // UPDATE KANADEX
    // ===========================

    updateKanadex();
renderThemeSelector();
}


// ==================================================
// GET BUTTON
// ==================================================

if (adminGetButton) {

    adminGetButton.addEventListener(
        "click",
        adminGetKana
    );
}


// ==================================================
// REMOVE BUTTON
// ==================================================

if (adminRemoveButton) {

    adminRemoveButton.addEventListener(
        "click",
        adminRemoveKana
    );
}


// ==================================================
// ENTER TO GET
// ==================================================

if (adminKanaInput) {

    adminKanaInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                adminGetKana();
            }
        }
    );
}


// ==================================================
// ADMIN ANIMATION SYSTEM
// ==================================================

function adminPlayAnimation() {

    if (
        !isAdmin
    ) {

        return;
    }


    const animation =
        adminAnimationSelect.value;


    adminAnimationStatus.textContent =
        `Playing ${animation.toUpperCase()} animation...`;

    adminAnimationStatus.className =
        "admin-status success";


    if (
        animation ===
        "unreal"
    ) {

        playUnrealAnimation();

        return;
    }


    playRarityAnimation(
        animation
    );
}


// ==================================================
// NORMAL ADMIN RARITY ANIMATION
// ==================================================

function playRarityAnimation(
    rarity
) {

    const rarityName =
        rarity.charAt(0).toUpperCase() +
        rarity.slice(1);


    kanaDisplay.textContent =
        "★";

    kanaName.textContent =
        "Animation Test";


    rarityDisplay.textContent =
        rarity.toUpperCase();


    kanaDisplay.className =
        "kana-display";


    rarityDisplay.className =
        "rarity";


    void kanaDisplay.offsetWidth;


    kanaDisplay.classList.add(
        `effect-${rarity}`
    );


    rarityDisplay.classList.add(
        rarity
    );


    playRaritySound(
        rarityName
    );
}


// ==================================================
// UNREAL CINEMATIC ANIMATION
// ==================================================

function playUnrealAnimation() {

    initAudio();


    // IMPORTANT:
    //
    // This animation:
    //
    // ✓ does NOT give a kana
    // ✓ does NOT increase rolls
    // ✓ does NOT save a discovery
    // ✓ does NOT change the RNG
    //
    // It is purely an animation test.


    // Stop if another roll is happening.

    if (
        rolling
    ) {

        adminAnimationStatus.textContent =
            "Finish the current roll first.";

        adminAnimationStatus.className =
            "admin-status error";

        return;
    }


    // ===========================
    // SETUP
    // ===========================

    kanaDisplay.textContent =
        "★";

    kanaName.textContent =
        "Animation Test";

    rarityDisplay.textContent =
        "UNREAL";


    kanaDisplay.className =
        "kana-display";

    rarityDisplay.className =
        "rarity unreal";


    // ===========================
    // CREATE EFFECT LAYER
    // ===========================

    let effect =
        document.getElementById(
            "unrealEffect"
        );


    if (
        effect
    ) {

        effect.remove();
    }


    effect =
        document.createElement(
            "div"
        );


    effect.id =
        "unrealEffect";


    effect.className =
        "unreal-effect";


    document.body.appendChild(
        effect
    );


    // ===========================
    // FLASH
    // ===========================

    const flash =
        document.createElement(
            "div"
        );


    flash.className =
        "unreal-flash";


    effect.appendChild(
        flash
    );


    // ===========================
    // SHOCKWAVE
    // ===========================

    const shockwave =
        document.createElement(
            "div"
        );


    shockwave.className =
        "unreal-shockwave";


    effect.appendChild(
        shockwave
    );


    // ===========================
    // PARTICLES
    // ===========================

    for (
        let i = 0;
        i < 90;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "unreal-particle";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            150 +
            Math.random() *
            650;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            `${x}px`
        );


        particle.style.setProperty(
            "--y",
            `${y}px`
        );


        const size =
            3 +
            Math.random() * 10;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        particle.style.animationDelay =
            `${Math.random() * 0.25}s`;


        effect.appendChild(
            particle
        );
    }


    // ===========================
    // SCREEN SHAKE
    // ===========================

    document.body.classList.add(
        "unreal-shake"
    );


    setTimeout(
        () => {

            document.body.classList.remove(
                "unreal-shake"
            );

        },
        900
    );


    // ===========================
    // KANA ANIMATION
    // ===========================

    void kanaDisplay.offsetWidth;


    kanaDisplay.classList.add(
        "effect-unreal"
    );


    // ===========================
    // SOUND
    // ===========================

    playUnrealSound();


    // ===========================
    // BIG UNREAL TEXT
    // ===========================

    setTimeout(
        () => {

            const title =
                document.createElement(
                    "div"
                );


            title.className =
                "unreal-title";


            title.textContent =
                "UNREAL";


            effect.appendChild(
                title
            );


        },
        700
    );


    // ===========================
    // FINAL BURST
    // ===========================

    setTimeout(
        () => {

            createUnrealBurst(
                effect
            );

        },
        1250
    );


    // ===========================
    // CLEANUP
    // ===========================

    setTimeout(
        () => {

            effect.remove();

        },
        3200
    );
}


// ==================================================
// UNREAL SOUND
// ==================================================

function playUnrealSound() {

    const notes = [
        220,
        330,
        440,
        660,
        880,
        1320,
        1760,
        2200
    ];


    notes.forEach(
        (frequency, index) => {

            setTimeout(
                () => {

                    playTone(
                        frequency,
                        0.22,
                        0.07
                    );

                },
                index * 90
            );
        }
    );
}


// ==================================================
// FINAL UNREAL BURST
// ==================================================

function createUnrealBurst(
    container
) {

    const burst =
        document.createElement(
            "div"
        );


    burst.className =
        "unreal-final-burst";


    container.appendChild(
        burst
    );


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "unreal-final-particle";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            450;


        particle.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );


        particle.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );


        particle.style.left =
            "50%";


        particle.style.top =
            "50%";


        burst.appendChild(
            particle
        );
    }


    setTimeout(
        () => {

            burst.remove();

        },
        1200
    );
}


// ==================================================
// ADMIN PLAY BUTTON
// ==================================================

if (
    adminAnimationButton
) {

    adminAnimationButton.addEventListener(
        "click",
        adminPlayAnimation
    );
}
// ==================================================
// ADMIN UNLOCK THEMES
// ==================================================
if (adminUnlockThemes) {

    adminUnlockThemes.addEventListener(
        "change",
        () => {

            adminUnlockAllThemes =
                adminUnlockThemes.checked;

            renderThemeSelector();
        }
    );

}

// ==================================================
// INITIALIZE
// ==================================================
startMusic();
document.addEventListener(
    "click",
    () => {

        

    },
    { once: true }
);
renderThemeSelector();

