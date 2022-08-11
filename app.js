
let ducks = prompt("How many ducks you going to Mint ");

let message

if (ducks < 5){
    message = "Little Duckling"
}
else if (ducks > 10) {
    message = "Duck Whale"
}

else {
    message = "Quack Quack "
}

// document.write(message);


let mood = prompt (" How are you feeling happy or sad")
let moodMessage;

if (mood === "happy") {
    moodMessage = "i'm pleased your're happy!";
} else if (mood === "sad") {
    moodMessage = "Chin up lad, We'll get you there!";
} else {
    moodMessage = "... i dont understand how you feel."
}

document.write(message + "Your're feeling"+ mood + "," + moodMessage);

