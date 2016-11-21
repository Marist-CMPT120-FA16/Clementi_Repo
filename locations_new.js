// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// November 7th, 2016
// Game vO.4: Hitchhikers Guide to the Appalachian Trail-->

// To do:
// Fix anything that was incorrect or incomplete with your prior project. (Commit. Push.)
// Then, beginning with a perfect implementation of the prior version of your game, implement the following new features:
// [10 pts] Develop a Location prototype {id, name, description, item, toString()}
// [5 pts] Instantiate an instance of Location() for each location in your game.  (If you have 10 locations in your game, you'll have 10 instances of the same prototype.)
// [10 pts] Store those location instances in a global array.
// [10 pts] Refactor your game so that the location functions use this global array instead of the hard-coded text you had before.
// [5 pts] Develop an Item prototype {id, name description, toString()}
// [5 pts] Instantiate an instance of Item() for each item that can be found in your game (at least four (4) of them) and store zero or one item at each location.
// [5 pts] Declare a global array to hold the player's inventory.
// [5 pts] Modify your take command to use the inventory array.
// [5 pts] Update your i or inventory command to make use of this array when listing the items the player is carrying.


//Initialization Function - boots up program
  function init() {
    updateDisplay ("To begin your trek at Philmont Scout Ranch, click a button or input a direction and click 'Lets Hike!'!");
    document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnEast").disabled = false;
    document.getElementById("btnWest").disabled = true;
  }

// Function to display score and location in textbox
  function updateDisplay (message) {
     var target = document.getElementById("textDisplay");
     target.value = message + "\n\n\n" + target.value;
  }

//Help function - gives user valid inpunts and commands
  function btnHelp(){
      updateDisplay ("The valid moves are North, South, East, West, N, S, E, W." +
                      "\n\n" + "Or use the buttons below" + "\n" + "Commands are 'Lets Hike', 'Help', 'Take' and 'Inventory.'"
                      + "\n" + "Press 'Lets Hike' to input your directional command."
                      + "\n" + "Press 'Help' for a list of valid commands and inputs."
                      + "\n" + "Press 'Take' to store the item in your inventory."
                      + "\n" + "Press 'Inventory' to see your inventory."
                      )
    }

// Declaration of Global Variables
        var score = 0;
        var btnErrorCount = 0;
        var limit = 5;
// Inventory hold - open spaces for items
        var inventory = [""];


// Location prototype - item object contains 5 traits - id, name, description, item, and if the loc was visited.

  }
}

// Location declaration and description: (ID #, Name of location, description of location; if there is an item at this location (staff camps))
  var craterLake = new location (3, "Crater Lake staff camp", "Crater Lake is a living history camp that is set in an early 20th century logging company. You can climb a spar pole here!", null);
  var mountPhilips = new location (7, "Mount Philips", "This mountain is the 2nd tallest mountain on the property at 11,742ft.");
  var vistoGrande = new location (9, "Visto Grande trail camp", "This camp has a beautiful view of the hike over the next few days.", null);
  var locations = [baseCamp,loversLeap,minersPark,craterLake,toothOfTime,porcupine,clearCreek,mountPhilips,cimmarroncito,vistoGrande,headOfDean];
// Item function - item object contains three traits - id, name, description.
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.taken = false;

  function toString(){
        return desc;
      }
    }

// Item declaration and description, first value is id, second is name of item, third is description of item)
    var stove = new item (0, "Stove", "This camp stove will help you cook warm meals");
    var food = new item (1, "Food", "Woah, someone left three freeze-dried meals on the ground!");
    var backpack = new item (2, "Backpack", "This is a brand new backpack to hold all of your gear");
    var boots = new item (3, "Boots", "Those old boots gave you blisters! Here are some new ones! :D");
    var naglene = new item (4, "Nalgene water bottle", "These water bottles hold a litre of water each!");
    var crewFlag = new item (5, "Crew Leader Flag", "This American Flag is attached to the crew leader's backpack")

// matrix
    var matrix = [
    // baseCamp       [N,E,S,W]
                      [0,0,1,2],
    // loversLeap
    // minersPark
    // craterLake
    // toothOfTime
    // porcupine
    // clearCreek
    // mountPhilips
    // cimmarroncito
    // vistoGrande
    // headOfDean
    ];

// Button Event Function Handlers
// Click event for each button codes for 1 column of events in matrix
// i.e. North = 1st column; East = 2nd column; South = 3rd column; West = 4th column
  function btnNorth(){
      currentLvl = matrix[currentLvl][0];
      trail();
    }
  function btnEast(){
      currentLvl = matrix[currentLvl][1];
      trail();
    }
  function btnSouth(){
      currentLvl = matrix[currentLvl][2];
      trail();
    }
  function btnWest(){
      currentLvl = matrix[currentLvl][3];
      trail();
    }


// Trail function is no longer switch case; simple else if statement that determines what level the user is at
// Then it looks to see if the user has been at that location. If they have, no score is added, if not, 5pts is added to the score
// Then the buttons are disabled based on what actions can be carried out
  function trail(){

      score += 5;
  }
    document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnEast").disabled = false;
    document.getElementById("btnSouth").disabled = true;
    document.getElementById("btnWest").disabled = false;

    document.getElementById("btnNorth").disabled = true;
    document.getElementById("btnEast").disabled = true;
    document.getElementById("btnSouth").disabled = true;
    document.getElementById("btnWest").disabled = true;
  }
    updateDisplay (msg);
}

//Take function evaluates whether or not there is an item at the location
//If not, it tells user that there is no item
//If there is, it 'takes' the item and puts it in the user's inventory and then removes it from the location so that if you visit the location again, the item wont be there
  function btnInvTake(){
    var loc = location[currentLvl];
      updateDisplay ("There are no items at this camp!")
    }
    else {
      inventory[item.id] = item;
   // loc.desc = loc descVisited;
   // updateDisplay ("Congrats! You recieved: "+ item.name);
    }
}

function btnInvList(){
	var message = "Your Inventory is:" + inventory;
  updateDisplay (message);
}

// User inputed command control
// Takes user imput from command textbox, converts it to lowercase
// Switch case is then entered, if command is valid, it will call the button functions which activate the chain
// If the command is not valid, message stating what the valid commands are will be displayed

  function cmdBoxGo (direction){
    var prevLvl = currentLvl
    direction = direction.toLowerCase();

    switch (direction) {
        // North command
          case ('n'):
          case ('north'):
            btnNorth();
            break;
        // West command
          case ('w'):
          case ('west'):
            btnWest();
            break;
        // South command
          case ('s'):
          case ('south'):
            btnSouth();
            break;
        // East command
          case ('e'):
          case ('east'):
            btnEast();
            break;

          default: updateDisplay("Whoops, please only input valid direction values such as North, South, East, West, N, S, E, W");
        }
        document.getElementById('cmdBoxGo').value = "";
      }
