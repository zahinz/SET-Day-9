console.log(`PLAYER JS`);

// MUSIC SOURCE OBJECT DECLARE

let musicNow = {
    src: "",
    artist: "",
    title: "",
    cover: "",
}

let music1 = {
    src: "assets/audios/chainsmoker-paris.mp3",
    artist: "The Chainsmoker",
    title: "Paris",
    cover: "assets/thumbnails/chainsmoker-paris.png",
    duration: "3:36"
}

let music2 = {
    src: "assets/audios/ava-max-into-your-arms.mp3",
    artist: "Ava Max",
    title: "Into Your Arm",
    cover: "assets/thumbnails/ava-max-into-your-arms.jpg",
    duration: "3:19"
}

let music3 = {
    src: "assets/audios/justin-hold.mp3",
    artist: "Justin Bieber",
    title: "Hold",
    cover: "assets/thumbnails/justin-hold.jpg",
    duration: "3:30"
}

let music4 = {
    src: "assets/audios/chainsmoker-something-like-this.mp3",
    artist: "The Chainsmoker",
    title: "Somethin Just Like This",
    cover: "assets/thumbnails/chainsmoker-something-like-this.png",
    duration: "6:36"
}

let music5 = {
    src: "assets/audios/post-malone-rockstar.mp3",
    artist: "Post Malone",
    title: "Rockstar",
    cover: "assets/thumbnails/post-malone-rockstar.jpeg",
    duration: "3:38"
}

let musicList = [music1, music2, music3, music4, music5]









// DECLARE VARIABLE FOR MUSIC NOW 

// ? title
// let musicTitle = document.getElementById(`musicTitle`)
let musicTitle = document.getElementsByClassName(`music-title`)

// ? artist
// let musicArtist = document.getElementById(`musicArtist`)
let musicArtist = document.getElementsByClassName(`music-artist`)

// ? album cover
let musicThumbnailBig = document.getElementById(`coverNow`)
let musicThumbnailSmall = document.getElementById(`coverImage`)

// ? music duration
let totalDuration = document.getElementById(`totalDuration`)
let liveDuration = document.getElementById(`currentDuration`)

let totalDuration2 = document.getElementsByClassName(`total-duration`)
let liveDuration2 = document.getElementsByClassName(`current-duration`)


// ? music player
let musicPlayer = document.getElementById(`audioPlayer`)

// ? initial audio status
let musicPause = true
let musicLoop = false
let volume = 1

// ? play pause button
let mainBtn = document.getElementsByClassName(`main-btn`)

// ! NEW KNOWLEDGE HERE AND DONT UNDERSTAND
// ? duration converter
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    // if (hours   < 10) {hours   = "0"+hours;}
    // if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    // return hours + ':' + minutes + ':' + seconds;
    return minutes + ':' + seconds;
}

// ? duration bar
let liveBarWidth = document.getElementsByClassName(`current-duration-bar`)


// ? music card dynamic update from object by using loop until musicList.length
// * limit the character to 21

for (let i = 0; i < musicList.length; i++) {
    
    if (musicList[i].title.length > 20) {
    document.getElementById(`titleCard${i+1}`).innerHTML = musicList[i].title.substring(0, 20) + ".."
    }
    else {
        document.getElementById(`titleCard${i+1}`).innerHTML = musicList[i].title
    }

    document.getElementById(`artistCard${i+1}`).innerHTML = musicList[i].artist
    
    document.getElementsByClassName(`music-${i+1}`)[0].style.backgroundImage = `url(${musicList[i].cover})`

    document.getElementById(`durationCard${i+1}`).innerHTML = musicList[i].duration
}













// CONVERT DURATION TO MINUTE AND SECONDS
setInterval(() => {
    let timeNow = musicPlayer.currentTime
    let timeTotal = musicPlayer.duration

    timeNow = timeNow.toString()
    timeTotal = timeTotal.toString()

    console.log(timeNow.toHHMMSS())
    console.log(timeTotal.toHHMMSS())

    // ADD TO THE HTML SPAN
    totalDuration.innerHTML = timeTotal.toHHMMSS();
    liveDuration.innerHTML = timeNow.toHHMMSS()

    totalDuration2[0].innerHTML = timeTotal.toHHMMSS();
    liveDuration2[0].innerHTML = timeNow.toHHMMSS()

}, 1000);




// DYNAMICALLY UPDATE AUDIO SRC ALBUM COVER, TITLE & ARTIST EVERY HALF SECOND
setInterval(() => {
    musicTitle[0].innerHTML = musicNow.title;
    musicTitle[1].innerHTML = musicNow.title;

    musicArtist[0].innerHTML = musicNow.artist;
    musicArtist[1].innerHTML = musicNow.artist;
    musicArtist[2].innerHTML = musicNow.artist;

    musicThumbnailBig.style.backgroundImage = `url(${musicNow.cover})`
    musicThumbnailSmall.style.backgroundImage = `url(${musicNow.cover})`



}, 500);



// RANDOMISATION DURING FIRST LOAD AND PRESS RANDOM BUTTON  

musicRandom = Math.floor(Math.random()*musicList.length)
musicNow.src = musicList[musicRandom].src
console.log(musicList[musicRandom].src);

musicNow.artist = musicList[musicRandom].artist;
console.log(musicList[musicRandom].artist);

musicNow.title = musicList[musicRandom].title;
console.log(musicList[musicRandom].title);

musicNow.cover = musicList[musicRandom].cover;
console.log(musicList[musicRandom].cover);
console.log(" ");

// ?INSERT SOURCE TO THE MEDIA
musicPlayer.src = musicNow.src


// * shuffle function
function shuffleMusic() {
    musicRandom = Math.floor(Math.random()*musicList.length)
    musicNow.src = musicList[musicRandom].src
    console.log(musicList[musicRandom].src);

    musicNow.artist = musicList[musicRandom].artist;
    console.log(musicList[musicRandom].artist);

    musicNow.title = musicList[musicRandom].title;
    console.log(musicList[musicRandom].title);

    musicNow.cover = musicList[musicRandom].cover;
    console.log(musicList[musicRandom].cover);
    console.log(" ");

    // ?INSERT SOURCE TO THE MEDIA
    musicPlayer.src = musicNow.src

    // ?PLAY THE MUSIC
    musicPlayer.play()
    musicPause = false

    // ?CHANGE ICON TO PAUSE
    mainBtn[0].innerHTML = `<i class="fas fa-pause"></i>`
    mainBtn[1].innerHTML = `<i class="fas fa-pause"></i>`

}



// PLAY PAUSE FUNCTION

function playAudio() {
    switch (musicPause) {
        case true:
            musicPlayer.play()
            musicPause = false
            mainBtn[0].innerHTML = `<i class="fas fa-pause"></i>`
            mainBtn[1].innerHTML = `<i class="fas fa-pause"></i>`

            break;
    
        case false:
            musicPlayer.pause()
            musicPause = true
            mainBtn[0].innerHTML = `<i class="fas fa-play"></i>`
            mainBtn[1].innerHTML = `<i class="fas fa-play"></i>`
            break;
    }
}



// CHANGE MUSIC WHEN PRESS CARD

function selectMusic(n) {
    musicNow = musicList[n]
    console.log(musicNow);
    musicPlayer.src = musicNow.src

    musicPlayer.play()
    musicPause = false
    mainBtn[0].innerHTML = `<i class="fas fa-pause"></i>`
    mainBtn[1].innerHTML = `<i class="fas fa-pause"></i>`
}


// DURATION BAR

setInterval(() => {

    let currentDuration = (musicPlayer.currentTime / musicPlayer.duration) * 100
    console.log(currentDuration, "%");

    liveBarWidth[0].style.width = currentDuration + "%"
    liveBarWidth[1].style.width = currentDuration + "%"

}, 1000);


// NEXT AND PREV BUTTON

function prevMusic() {
    // ? prevent execute playAudio()
    document.getElementById(`coverNow`).onclick = "#"

    console.log(`PREV`);
}
function nextMusic() {
    // ? prevent execute playAudio()
    document.getElementById(`coverNow`).onclick = "#"

    console.log(`NEXT`);
}


// LOOP MUSIC

function loopBtn() {
    
    switch (musicLoop) {
        case false:
            musicPlayer.loop = true 
            musicLoop = true
            document.getElementById(`loopBtn`).classList.add("active-loop")
            console.log(musicLoop, document.getElementById(`loopBtn`).classList);
            break;


        case true:
            musicPlayer.loop = false 
            musicLoop = false
            document.getElementById(`loopBtn`).classList.remove("active-loop")
            console.log(musicLoop);
            break;
    }

}


// VOLUME BUTTON

function volBtn(n) {
    
}

function volLevel(num) {

    // *increase or decrease volume
    volume += num;
    
        // *limit the max and min
        if (volume < 0.1) {
            volume = 0
            console.log(volume, 1);
            document.getElementById(`muteLabel`).classList.remove(`fa-volume-down`)
            document.getElementById(`muteLabel`).classList.add(`fa-volume-mute`, `active-loop`)
        }

        else if (volume >= 0.1 && volume < 1) {
            document.getElementById(`muteLabel`).classList.add(`fa-volume-down`)
            document.getElementById(`muteLabel`).classList.remove(`fa-volume-mute`, `active-loop`)
        }

        else if (volume > 1) {
            volume = 1
            console.log(volume, 2);
        }

    // *apply the number on video
    musicPlayer.volume = volume;
    console.log(volume);
    
}



