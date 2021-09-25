console.log(`UI JS`);

// DECLARE VARIABLES


// ? Maximise and minimise player

let playerPage = document.getElementById(`page2`)

let maxPageStatus = `none`


// ? Maximise and minimise searchbar

let searchArea = document.getElementById(`searchArea`)

let searchBtn = document.getElementById(`searchBtn`)

let searchText = document.getElementById(`searchText`)

let searchBar = document.getElementById(`searchBar`)

let searchField = document.getElementById(`searchField`)

let searchBarOpen = false





// FUNCTION

// ? MAXIMISE PLAYER WHEN CLICK BOTTOM BAR
function maxSizePlayerPage() {

    console.log(`Pressed DIV to max player page`);

    playerPage.style.display = `flex`;
    maxPageStatus = `flex`

    console.log(playerPage.style.display, maxPageStatus);

    playerPage.classList.remove(`swipe-down`)

    playerPage.classList.add(`swipe-up`)

    console.log(playerPage.classList);

}

// ? MINIMISE PLAYER WHEN CLICK ICON
function minSizePlayerPage() {

    console.log(`Pressed i to min player page`);

    playerPage.classList.remove(`swipe-up`)

        playerPage.classList.add(`swipe-down`)
        
        console.log(playerPage.classList);

    // ? WAIT 650 THEN DISPLAY BLOCK
    setTimeout (function() {
        
        playerPage.style.display = `none`;
        maxPageStatus = `none`

        console.log(playerPage.style.display, maxPageStatus);

    }, 650);
}

// ? MAXIMISE MINIMISE SEARCH BAR

function searchAction() {

    console.log(`PRESS SEARCH BUTTON`);

    switch (searchBarOpen) {
        case false:
            searchText.style.display = `none`

            searchBar.classList.add(`grow-width`)
            searchBar.classList.remove(`shrink-width`)


            // WAIT UNTIL FINISH GROW
            setTimeout( function() {
                searchField.style.display = `block`
            }, 300);

            searchBarOpen = true
            console.log(`SEARCH OPEN`, searchBarOpen)
            break;
    
        case true:
            searchBar.classList.add(`shrink-width`)
            searchBar.classList.remove(`grow-width`)

            searchField.style.display = `none`
            searchField.value =""

            // WAIT UNTIL FINISH SHRINK
            setTimeout( function() {
                searchText.style.display = `block`
                searchBar.style.width = "min-content"
            }, 300);

            searchBarOpen = false
            console.log(`SEARCH OPEN`, searchBarOpen)
            break;
    }   

}



// DYNAMIC CHANGE DAY AND DATE

// ? UPDATE DAY WHEN LOAD WEB PAGE
const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]

let day = days[new Date().getDay()]

console.log(day);

document.getElementById(`todayDay`).innerHTML = day


// ? UPDATE DATE WHEN LOAD WEB PAGE
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[new Date().getMonth()]
let date = new Date().getDate()
let year = new Date().getFullYear()

let fullDate = `${date} ${month} ${year}`

document.getElementById(`todayDate`).innerHTML = fullDate


setInterval(() => {

    // ? CHANGE DAY EVERY 1 SECOND

    document.getElementById(`todayDay`).innerHTML = day

    // ? CHANGE DATE EVERY 1 SECOND
    document.getElementById(`todayDate`).innerHTML = fullDate

}, 1000);



