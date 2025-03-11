const audioPlayer = new Audio();
let currentSongIndex = 0;
const songs = [
    "Agua Cristalina - Quincas Moreira.mp3",
    "Amazing Grace - Casa Rosa.mp3",
    "Calle Calor - Quincas Moreira.mp3",
    "Curadora - Casa Rosa.mp3",
    "Jaranero - Quincas Moreira.mp3",
    "Kung Fu Love Tree - Quincas Moreira.mp3",
    "No Se - Casa Rosa.mp3",
    "Pueblo Magico - Quincas Moreira.mp3",
    "Santa Clarita - Quincas Moreira.mp3",
    "Sus Remedios - Casa Rosa.mp3"
];

// Function to play a song
function playSong(index) {
    if (index < 0 || index >= songs.length) return;
    currentSongIndex = index;
    audioPlayer.src = `songs/${songs[index]}`;
    audioPlayer.play();
    updateUI();
}

// Function to pause the song
function pauseSong() {
    audioPlayer.pause();
}




// Update UI to highlight the playing song
function updateUI() {
    document.querySelectorAll('.song-item').forEach((item, index) => {
        item.classList.toggle('playing', index === currentSongIndex);
    });
}

// Attach event listeners
window.onload = function () {
    const songList = document.querySelector(".song-list");
    songs.forEach((song, index) => {
        let songItem = document.createElement("div");
        songItem.classList.add("song-item");
        songItem.textContent = song;
        songItem.addEventListener("click", () => playSong(index));
        songList.appendChild(songItem);
    });
};

document.querySelector(".play-button").addEventListener("click", () => playSong(currentSongIndex));
document.querySelector(".pause-button").addEventListener("click", pauseSong);
document.querySelector(".next-button").addEventListener("click", nextSong);
document.querySelector(".prev-button").addEventListener("click", prevSong);

audioPlayer.addEventListener("ended", nextSong);
