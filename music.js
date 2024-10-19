const playlist = document.getElementById('playlist');
const searchInput = document.getElementById('searchInput');
const audio = new Audio();
const playPauseBtn = document.getElementById('playPause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volumeControl = document.getElementById('volume');
const coverImg = document.getElementById('cover');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playerEl = document.querySelector('.player');

const songs = [{
    title: "Song Tu_itni_Khoobsurat_Hai",
    artist: "Artist 21",
    cover: "https://i.ytimg.com/vi/4ArFBPM4DYU/maxresdefault.jpg",
    file: "Music/Tu_itni_Khoobsurat_Hai_Reloaded_-_Prakriti_Kakar___Amjad_Nadeem___Jubin_Nautiyal___Gaurav_Jang(128k).mp3"
}, {
    title: "Song Guli Mata",
    artist: "Artist 1",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQab4ZeCtlhQ1FRMfjcqzP6LEWSOy_wiPz7FA&s",
    file: "Music/Guli_Mata_-_Official_Video___Saad_Lamjarred___Shreya_Ghoshal___Jennifer_Winget___Ps_Official(0).mp3"
}, {
    title: "Song Gulabi Aankhen",
    artist: "Artist 2",
    cover: "https://i.ytimg.com/vi/hgi2MYAFgE8/maxresdefault.jpg",
    file: "Music/Gulabi_Aankhen___Sanam(256k).mp3"
}, {
    title: "Song O_Mere_Dil_Ke_Chain",
    artist: "Artist 3",
    cover: "https://i.ytimg.com/vi/ZGSFEfopTro/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbaIhLdzaZJcLwAodQxS8zfM_lpw",
    file: "Music/O_Mere_Dil_Ke_Chain___Sanam(256k).mp3"
}, {
    title: "Song Mere_Nishan",
    artist: "Artist 4",
    cover: "https://i1.sndcdn.com/artworks-000124310437-xt7iue-t240x240.jpg",
    file: "Music/_Mere_Nishan__Full_Audio_Song_by_Darshan_Raval(0).mp3"
}, {
    title: "Song Akhiyaan_Gulaab",
    artist: "Artist 5",
    cover: "https://c.saavncdn.com/214/Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240205151011-500x500.jpg",
    file: "Music/Akhiyaan_Gulaab__Song___Shahid_Kapoor,_Kriti_Sanon___Mitraz___Teri_Baaton_Mein_Aisa_Uljha_Jiya(0).mp3"
}, {
    title: "Song Kisi_Khubsurat_Pari_Jaisi_Hogi",
    artist: "Artist 6",
    cover: "i7.jpg",
    file: "Music/Kisi_Khubsurat_Pari_Jaisi_Hogi___Oo_Jaane_Jaana___Old_Song_Slowed._Reverved____Bollywood_Lofi(0).mp3"
}, {
    title: "Song Ride_It",
    artist: "Artist 7",
    cover: "https://images.genius.com/f62be339c319936038ad0ed27ca7012a.300x300x1.jpg",
    file: "Music/Ride_It_[Lyrics]_-_Jay_sean____Hindi_Version(0).mp3"
}, {
    title: "Song Tere_Pyaar_Mein",
    artist: "Artist 8",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcV-hvIszhjjP_yAtKG2h8zcS-XV0TNnWDQ&s",
    file: "Music/Tere_Pyaar_Mein__Full_Video__Tu_Jhoothi_Main_Makkaar__Ranbir,Shraddha__Pritam_Arijit,Nikhita,Amitabh(0).mp3"
}, {
    title: "Song Aaj_Ki_Raat",
    artist: "Artist 9",
    cover: "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2024/07/24/500x300_835380-untitled1.webp",
    file: "Music/Aaj_Ki_Raat_Lyrics_-_Stree_2___Sachin-Jigar,_Madhubanti_Bagchi,_Divya_Kumar(128k).mp3"
}, {
    title: "Song AUR_-_DOORIYAAN",
    artist: "Artist 10",
    cover: "https://i.ytimg.com/vi/VDrO044VHpY/maxresdefault.jpg",
    file: "Music/AUR_-_DOORIYAAN_-_Raffey_-_Ahad_-_Usama__Official_Audio_(0).mp3"
}, {
    title: "Song One_Dance",
    artist: "Artist 11",
    cover: "https://i.ytimg.com/vi/ki0Ocze98U8/sddefault.jpg",
    file: "Music/Drake_-_One_Dance__Lyrics__ft._Wizkid___Kyla(0).mp3"
}, {
    title: "Song Girl_I_Need_You",
    artist: "Artist 12",
    cover: "https://i.ytimg.com/vi/ndNOhJ8CqrE/maxresdefault.jpg",
    file: "Music/Girl_I_Need_You_Lyrical___BAAGHI___Tiger,_Shraddha___Arijit_Singh,_Meet_Bros,_Roach_Killa,_Khushboo(0).mp3"
}, {
    title: "Song Mujhe_Peene_Do",
    artist: "Artist 13",
    cover: "https://i.ytimg.com/vi/tOXMlseYc7E/maxresdefault.jpg",
    file: "Music/Mujhe_Peene_Do_-_Darshan_Raval___Official_Music_Video___Romantic_Song_2020___Naushad_Khan(0).mp3"
}, {
    title: "Song Prabh_-_9_45",
    artist: "Artist 14",
    cover: "https://i.ytimg.com/vi/J730cMGqqvs/maxresdefault.jpg",
    file: "Music/Prabh_-_9_45__Official_Music_Video__feat._Jay_Trak(0).mp3"
}, {
    title: "Song PRADA_-JASS_MANAK",
    artist: "Artist 15",
    cover: "https://i.ytimg.com/vi/wKRAdg4Hm6I/sddefault.jpg",
    file: "Music/PRADA_-_JASS_MANAK_[Slowed_Reverb]_-_Satti_Dhillon___Punjabi_Lofi_Song___Chill_with_Beats__Textaudio(0).mp3"
}, {
    title: "Song Teri_Baaton_Mein",
    artist: "Artist 16",
    cover: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/teri-baaton-mein-aisa-uljha-jiya-et00383266-1707806462.jpg",
    file: "Music/Teri_Baaton_Mein_Aisa_Uljha_Jiya__Title_Track___Shahid_Kapoor,_Kriti_Sanon___Raghav,Tanishk,_Asees(256k).mp3"
}, {
    title: "Song Popular",
    artist: "Artist 17",
    cover: "https://i.ytimg.com/vi/xnvkStb2jT0/sddefault.jpg",
    file: "Music/The_Weeknd,_Madonna,_Playboi_Carti_-_Popular__Visualizer_(0).mp3"
}, {
    title: "Song Under_The_Influence",
    artist: "Artist 18",
    cover: "https://i1.sndcdn.com/artworks-xeg2Q3RYz7Mi8zas-kuz70w-t500x500.jpg",
    file: "Music/Under_The_Influence_-_Chris_Brown__LYRICS_(0).mp3"
}, {
    title: "Song Baby my valantin",
    artist: "Artist 19",
    cover: "https://i.ytimg.com/vi/gG17lBieBFk/maxresdefault.jpg",
    file: "Music/ckay_-love_nwantiti__tiktok_remix__slowed___reverb__Lyrics(0).mp3"
}, {
    title: "Song Tera_Zikr",
    artist: "Artist 20",
    cover: "https://i.scdn.co/image/ab67616d0000b2732679dbf4d9b5d3836d08ff3e",
    file: "Music/Darshan_Raval_-_Tera_Zikr_Official_4K_Video_(0).mp3"
}];

let currentSongIndex = 0;

function loadSong(song) {
    titleEl.textContent = song.title;
    artistEl.textContent = song.artist;
    coverImg.src = song.cover;
    audio.src = song.file;
}

function updatePlaylist(filteredSongs = songs) {
    playlist.innerHTML = '';
    filteredSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="title">${song.title}</span>
            <span class="artist">${song.artist}</span>
        `;
        li.addEventListener('click', () => {
            currentSongIndex = songs.indexOf(song);
            loadSong(songs[currentSongIndex]);
            playSong();
            updatePlaylist();
        });
        if (index === currentSongIndex) {
            li.classList.add('active');
        }
        playlist.appendChild(li);
    });
}

function playSong() {
    playerEl.classList.add('playing');
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    document.getElementById('play-icon').style.display = 'none';
    document.getElementById('pause-icon').style.display = 'inline';
}

function pauseSong() {
    playerEl.classList.remove('playing');
    audio.pause();
    document.getElementById('play-icon').style.display = 'inline';
    document.getElementById('pause-icon').style.display = 'none';
}

playPauseBtn.addEventListener('click', () => {
    const isPlaying = playerEl.classList.contains('playing');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
});

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;

    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    if (audio.duration) {
        const durationMinutes = Math.floor(audio.duration / 60);
        const durationSeconds = Math.floor(audio.duration % 60);
        durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    }
});

progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    if (!isNaN(seekTime)) {
        audio.currentTime = seekTime;
    }
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
});

function filterSongs(searchTerm) {
    return songs.filter(song => {
        const titleMatch = song.title.toLowerCase().includes(searchTerm.toLowerCase());
        const artistMatch = song.artist.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || artistMatch;
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    const filteredSongs = filterSongs(searchTerm);
    updatePlaylist(filteredSongs);
});

loadSong(songs[currentSongIndex]);
updatePlaylist();

// Error handling for audio loading
audio.addEventListener('error', (e) => {
    console.error('Error loading audio:', e);
    alert('Error loading audio. Please try another song.');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        const isPlaying = playerEl.classList.contains('playing');
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    } else if (e.code === 'ArrowRight') {
        nextBtn.click();
    } else if (e.code === 'ArrowLeft') {
        prevBtn.click();
    }
});

// Improve search functionality
let searchTimeout;
searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = searchInput.value.trim();
        const filteredSongs = filterSongs(searchTerm);
        updatePlaylist(filteredSongs);
    }, 300); // Debounce search for better performance
});

// Add shuffle functionality
const shuffleBtn = document.createElement('button');
shuffleBtn.innerHTML = '<i class="fas fa-random"></i>';
shuffleBtn.title = 'Shuffle';
shuffleBtn.classList.add('music-action-button');
document.querySelector('.controls').appendChild(shuffleBtn);

shuffleBtn.addEventListener('click', () => {
    const shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
    songs.splice(0, songs.length, ...shuffledSongs);
    currentSongIndex = 0;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
});

// Add repeat functionality
const repeatBtn = document.createElement('button');
repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
repeatBtn.title = 'Repeat';
repeatBtn.classList.add('music-action-button');
document.querySelector('.controls').appendChild(repeatBtn);

let isRepeat = false;
repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
    audio.loop = isRepeat;
});

// Improve error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e);
    alert('An unexpected error occurred. Please refresh the page and try again.');
});