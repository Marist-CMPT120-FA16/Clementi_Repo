// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// December 5th, 2016
// Game v1.0: Philmont Scout Ranch: The Trail Game

// Button Event Function Handlers
// Click event for each button codes for 1 column of events in matrix
// i.e. North = 1st column; East = 2nd column; South = 3rd column; West = 4th column
  function btnNorth(){
      currentLvl = matrix[currentLvl][NORTH];
      characterMover();
    }
  function btnEast(){
      currentLvl = matrix[currentLvl][EAST];
      characterMover();
    }
  function btnSouth(){
      currentLvl = matrix[currentLvl][SOUTH];
      characterMover();
    }
  function btnWest(){
      currentLvl = matrix[currentLvl][WEST];
      characterMover();
    }


// characterMover function is no longer switch case; simple else if statement that determines what level the user is at
// Then it looks to see if the user has been at that location. If they have, no score is added, if not, 5pts is added to the score
// Then the buttons are disabled based on what actions can be carried out
  function characterMover(){
    var tempLocale = locations[currentLvl];
    var msg = tempLocale.name + ":" + "\n" + tempLocale.desc;

    scoreCount(tempLocale);

    if (tempLocale.id == matrix[currentLvl[NORTH]]){
    document.getElementById("btnNorth").disabled = true;
  } if (tempLocale.id == matrix[currentLvl[EAST]]){
    document.getElementById("btnEast").disabled = true;
  } if (tempLocale.id == matrix[currentLvl[SOUTH]]){
    document.getElementById("btnSouth").disabled = true;
  } if (tempLocale.id == matrix[currentLvl[WEST]]){
    document.getElementById("btnWest").disabled = true;
  }
    updateDisplay (msg + "\n" + "Your score is: " + score);
}

// Score counting function
    function scoreCount (tempLocale){
      if (tempLocale.visited === false){
            score += 5;
            tempLocale.visited = true;
        }
    }

// User inputed command control
// Takes user imput from command textbox, converts it to lowercase
// Switch case is then entered, if command is valid, it will call the button functions which activate the chain
// If the command is not valid, message stating what the valid commands are will be displayed

  function cmdBoxGo (direction){
    direction = direction.toLowerCase();

    switch (direction) {
        // North command
          case ("n"):
          case ("north"):
            btnNorth();
            break;
        // West command
          case ("w"):
          case ("west"):
            btnWest();
            break;
        // South command
          case ("s"):
          case ("south"):
            btnSouth();
            break;
        // East command
          case ("e"):
          case ("east"):
            btnEast();
            break;

          default: updateDisplay("Whoops, please only input valid direction values such as North, South, East, West, N, S, E, W");
        }
        onClick = document.getElementById("cmdBox").value = '';
      }
