// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// December 5th, 2016
// Game v1.0: Philmont Scout Ranch: The Trail Game



//Initialization Function - boots up program
  function init() {
    item();
    location();
    characterMover();
  }

// Function to display score and location in textbox
  function updateDisplay (message) {
     var target = document.getElementById("textDisplay");
     target.value = message + "\n\n\n" + target.value;
  }

//Help function - gives user valid inpunts and commands
  function btnHelp(){
      updateDisplay ("The valid moves are North, South, East, West, N, S, E, W." +
                      "\n\n" + "Or use the buttons below" + "\n" + "Commands are 'Lets Hike', 'Help', 'Take' and 'Inventory.'" + "\n" + "Press 'Lets Hike' to input your directional command." + "\n" + "Press 'Help' for a list of valid commands and inputs." + "\n" + "Press 'Take' to store the item in your inventory." + "\n" + "Press 'Inventory' to see your inventory."
                    );
    }

// Declaration of Global Variables
    var score = 0;
    var currentLvl = 0;
    var limit = 5;
    var btnErrorCount = 0;

// Constant variables NORTH, EAST, SOUTH, WEST
    var NORTH = 0;
    var EAST = 1;
    var SOUTH = 2;
    var WEST = 3;

// If the user is inputing too many of the same inputs, the game will stop the user and remind them to use all four directions
    function btnError() {
        btnErrorCount = btnErrorCount + 1;
      if (btnErrorCount < limit) {
        updateDisplay("Stop wandering off! Try going a different direction!")
      }
      else {
        updateDisplay("Now you're completely lost. Call for an airlift by chosing a different direction.")
      }
    }
