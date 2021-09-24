console.log(`TEST HAHA`);

// DECLARE VARIABLE

// ? audio player
let audioPlayerID = document.getElementById(`audioPlayerId`)

// ? mute status
let muteIco = document.getElementById(`muteBtn`)
let muteAudio = true

// ? duration bar
let timeBar = document.getElementById(`durationBar`)

// ? end bar
let endBar = document.getElementById(`endBar`)

// ? GET THE TOTAL DURATION OF THE AUDIO
// console.log(audioPlayerID);
console.log(audioPlayerID.duration);
let totalDuration = audioPlayerID.duration;
console.log(totalDuration);

// ? ARTIST & TITLE TEXT
let titleText = document.getElementById(`titleText`)
let artistText = document.getElementById(`artistText`)


// ! SET INTERVAL CHECK CURRENT DURATION
// setInterval(function checkTime() {

//     // GET CURRENT DURATION 
//     let currentTime = audioPlayerID.currentTime;
//     console.log(currentTime);

//     // CALCULATE THE PERCENTAGE
//     scaledTimebar = (currentTime/totalDuration * 100)


//     // APPLY THE PERCENTAGE OF THE TIMEBAR
//     timeBar.style.width = scaledTimebar + "%"
//     console.log(timeBar.style.width);

//     // APPLY THE POSITION OF END BAR
//     endBar.style.left = scaledTimebar + "%"

// }, 100);


// ! DISCO BALL

setInterval(function discoBall() {
    let clrR = Math.floor(Math.random() * 255)
    let clrG = Math.floor(Math.random() * 255)
    let clrB = Math.floor(Math.random() * 255)

    console.log(`R (${clrR}) G (${clrG}) B (${clrB}) `);
    document.getElementById(`bodyID`).style.backgroundColor = `rgb(${clrR}, ${clrG},${clrB})`
}, 1000);




// INTRODUCTION FOR OBJECT
// *key & value

let songList = {
    src: "assets/30sec.mp3",
    title: "Happy birthday",
    artist: "Justin Bieber",
}

let songList2 = {
    src: "assets/littlebit.mp3",
    title: "Little Bit",
    artist: "Lady Gaga",
}


function getSong(songData) {
    // if (songData === "songList") {
    //     console.log(songList.src);
    // }
    // else if (songData ==="songList2") {
    //     console.log(songList2.src);
    // }


    // ! NEW KNOWLEDGE HERE

    switch (songData) {
        case 'songList':
            audioPlayerID.src = songList.src;
            console.log(songList.src);
            titleText.innerHTML = songList.title;
            artistText.innerHTML = songList.artist

            break;
        case 'songList2' :
            audioPlayerID.src = songList2.src;
            console.log(songList2.src);
            titleText.innerHTML = songList2.title;
            artistText.innerHTML = songList2.artist
            break;
        
        // IT WILL SHOW WHEN WE RUN THE CODE AT THE TOP
        default:
            console.log(`HELLO WORLD`);
            break;
    }
}




// BUTTON FUNCTION

function playSound() {
    audioPlayerID.play()
    console.log(`play`);
}

function pauseSound() {
    audioPlayerID.pause()
    console.log(`pause`);
}

function unmute() {
    if (muteAudio == true) {
        muteAudio = false
        muteIco.innerHTML = `<i class="fas fa-volume-mute"></i>`
    }
    else {
        muteAudio = true
        muteIco.innerHTML = `<i class="fas fa-volume-up"></i>`
    }
    audioPlayerID.muted = muteAudio
    console.log(`mute status`, audioPlayerID.muted);
}