
 



function getDuck() {
let output = ""
 let ducks = prompt("How many ducks you going to Mint ");

 let duckMessage

if (ducks < 5){
    duckMessage = "Little Duckling"
}
else if (ducks > 10) {
    duckMessage = "Duck Whale"
}

else {
    duckMessage = "Quack Quack "
}

for ( let i = 0;i < ducks; i++) {
    output = output + "<img src='duck-01.png' alt='duck' class='duck'/>"
    console.log(i)
}

return document.write(duckMessage + output);

 }


// function getMood() {
// let mood = prompt (" How are you feeling happy or sad")
// let moodMessage;

// if (mood === "happy") {
//     moodMessage = "i'm pleased your're happy!";
// } else if (mood === "sad") {
//     moodMessage = "Chin up lad, We'll get you there!";
// } else {
//     moodMessage = "... i dont understand how you feel."
// }

// return document.write(moodMessage + " , ");

// }

/*

let x = 2;

if(x === 2)



*/