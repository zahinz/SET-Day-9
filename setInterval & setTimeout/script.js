console.log(`audio js`);
// function breakLine() {
//     console.log(` `);    
// }

// // ? Traditional way
// setInterval(moveBox, 1000);
// function moveBox () {
//     console.log(`Hi`);
// }

// // ? Modern way & local function
// setInterval(function (){
//     console.log(`run setInterval without write function name`);
// }, 1000)


// let timer = setInterval(function(){
//     console.log(`setInterval inside timer variable`);
// }, 1000)

// // setInterval( breakLine(), 1000)

// ? Declare function setInterval and display in H1 #score

let scoreNumber = 0;
let score = document.getElementById(`score`);

// ? add #box1
let box1X = 0
let box1Id = document.getElementById(`box1`)

// ? add #box2
let box2Y = 0
let box2Id = document.getElementById(`box2`)

// ? add #box3
let box3 = 0
let box3Id = document.getElementById(`box3`)


// ? setTimeout function, stop the boxInterval animation
setTimeout(countDown, 5000) 
    function countDown() {
        console.log(`STOP!!`);
        clearInterval(boxInterval)
    }


// !STUCK HERE
setTimeout (countDown2, 10000)
    function countDown2() {
        console.log(`RUN AGAIN!!!`);
        setInterval(increaseScore(), 500);
    }




// ? setInterval function

let boxInterval = setInterval(function increaseScore() {
    if (scoreNumber >= 60) {
        // *reset score to zero
        scoreNumber = 0;
        score.innerHTML = scoreNumber
        console.log(`the score is ${scoreNumber}`);

        // *reset #box1 10px width
        box1X = 0;
        box1Id.style.width = box1X + "px";
        console.log("Width of #box1 = ", box1X);

        // *reset #box2 10px height
        box2Y = 0;
        box2Id.style.height = box2Y + "px";
        console.log("Height of #box2 = ",box2Y);

        // *reset #box3 0px top & left
        box3 = 0;
        box3Id.style.top = box3 + "px";
        box3Id.style.left = box3 + "px";
        console.log("top and left of #box3 = ",box2Y);
        
    }
    else {
        // *update score by 1
        scoreNumber += 1;
        score.innerHTML = scoreNumber
        console.log(`the score is ${scoreNumber}`);

        // *increase #box1 10px width
        box1X += 10;
        box1Id.style.width = box1X + "px";
        console.log("Width of #box1 = ", box1X);

        // *increase #box2 10px width
        box2Y += 10;
        box2Id.style.height = box2Y + "px";
        console.log("Height of #box2 = ",box2Y);

        // *increase #box3 10px top & left
        box3 += 10;
        box3Id.style.top = box3 + "px";
        box3Id.style.left = box3 + "px";
        console.log("top and left of #box3 = ",box2Y);
    }

}, 100)




