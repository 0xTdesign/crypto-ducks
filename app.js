
 
 
 function getDuck() {
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

return document.write(duckMessage + ", ");

 }


function getMood() {
let mood = prompt (" How are you feeling happy or sad")
let moodMessage;

if (mood === "happy") {
    moodMessage = "i'm pleased your're happy!";
} else if (mood === "sad") {
    moodMessage = "Chin up lad, We'll get you there!";
} else {
    moodMessage = "... i dont understand how you feel."
}

return document.write(moodMessage + " , ");

}