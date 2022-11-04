// Using globe scope for win/lose/draw
var win = 0;
var lose = 0;
var draw = 0;

console.log("W: " + win + " L: " + lose + " D: " + draw)
// Design the game
var game = function () {
    // Player inputs R or P or S
    usrChoice = window.prompt("Rock, paper, or scissors? \nPlease input R for Rock, P for Paper, or S for scissors.");
    rps = ["R", "P", "S"]
    // Check for invalid inputs
    while (!rps.includes(usrChoice)) {
        window.alert("Invalid input value. \nPlease use the exact uppercase letters to play the game.")
        usrChoice = window.prompt("Please re-enter your choice using uppercase R, P, or S.")
    }
    // PC randomly choose R, P, or S
    pcChoice = rps[Math.floor(Math.random() * 3)]
    // Define the rules of the game
    playerWins = {
        R: "S",
        S: "P",
        P: "R"
    }
    // Shows player choice and PC choice
    window.alert("you chose " + usrChoice)
    window.alert("computer chose " + pcChoice)
    // Determin who is the winner and shows the score
    if (usrChoice === pcChoice) {
        draw = draw + 1;
        window.alert("it's a tie! \nYour current score is: \nWin: " + win + " Lose: " + lose + " Draw: " + draw);
    } else {
        var compForPlayerWins = playerWins[usrChoice];
        if (compForPlayerWins === pcChoice) {
            win = win + 1;
            window.alert("you won!! \nYour current score is: \nWin: " + win + " Lose: " + lose + " Draw: " + draw);
        } else {
            lose = lose + 1;
            window.alert("you lose :(  \nYour current score is: \nWin: " + win + " Lose: " + lose + " Draw: " + draw);
        }
    }

}
// Launch the game
game()

// Asking if the player wants to replay
var replay = confirm("Do you wanna replay?");
// The player can keep replaying if they want
while (replay) {
    window.alert("Let's play again!")
    game()
    replay = confirm("Do you wanna replay?")
}
// When the player choose not to play, the game will stop and show the final score
if (!replay) {
    window.alert("Thanks for playing! \nYour final score is: \nWin: " + win + " Lose: " + lose + " Draw: " + draw)
}
