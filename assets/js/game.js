// GLOBAL VARIABLES
//============================


//CRYSTAL VARIABLES
var crystal = {
    blue:
    {
        name: "Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
}


//Scores (Current target)
var currentScore = 0;
var targetScore = 0;

//Wins and losses
var winCount = 0;
var lossCount = 0;

//FUNCTIONS 
//==============================

// CALL THE HELPER FUCNTION FOR GETTING RANDOM NUMBERS 
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//  STARTS THE GAME AND RESTARTS THE GAME 
var startGame = function () {

    //RESET THE CURRENT SCORE 

    currentScore = 0;

    //SET A NEW TARGET SCORE  BETWEEN 19 AND 120

    targetScore = getRandom(19, 120);
    //SET DIFFERENT VALUES FOR EACH OF THE CRYSTALS (BETWEEN 1 AND 12)

    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    // CHANGE THE HTML TO REFLECT ALL OF THESE CHANGES

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //Test console
    console.log("---------------------------")
    console.log("Target Score" + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
    console.log("---------------------------")
}

//RESPOND TO CLICKS ON THE CRYSTALS 
var addValues = function (crystal) {
    currentScore = currentScore + crystal.value;

    //CHNAGE THE HTML TO REFLECT CHANGES IN CURRENT SCORE   
    $("#yourScore").html(currentScore);

    // call the check win fucntion 
    checkWin();




    //testing console 
    console.log("Your Score: " + currentScore);
}

// check if user won or lost and reset game 
var checkWin = function () {

    // check if currentScore is larger than targetScore 
    if (currentScore > targetScore) {
        alert("you lost!!");
        console.log("you lost!!!");

        //add to lose counter 
        lossCount++;


        // change lose count html 
        $("#lossCount").html(lossCount);

        //restart game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("you wnn!!");
        console.log("you Won!!");

        // add Wincounter 
        winCount++;

        // change win count html 
        $("#winCount").html(winCount);

        // restart the game 
        startGame();
    }



}
// MAIN PROCESS


//starts the game the first time 
startGame();

$("#blue").click(function () {
    addValues(crystal.blue);
});

$("#green").click(function () {
    addValues(crystal.red);
});

$("#red").click(function () {
    addValues(crystal.green);
});
$("#yellow").click(function () {
    addValues(crystal.yellow);
});

