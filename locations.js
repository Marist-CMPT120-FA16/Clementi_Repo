// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// November 7th, 2016
// Game vO.4: Hitchhikers Guide to the Appalachian Trail-->

// To do:
// 1. still need to fix functionality of button functions - level counting is messed up
// 2. add a map (does it need to be interactive??!?!?!)
// 3. Help Command -
    //  - button that displays all available commands and options
// 4. init function needs “onload” event tag and functionality
// 5. BUTTONS MUST TURN OFF AND ON NOW!
// 6. Add items to be taken at different locations - “list” command to display current inventory


 // Declaration of Global Variables
     var currentLvl = 0;
     var score = 0;
     var btnErrorCount = 0;
     var limit = 5;
     var loc0 = false;
     var loc1 = false;
     var loc2 = false;
     var loc3 = false;
     var loc4 = false;
     var loc5 = false;
     var loc6 = false;
     var loc7 = false;
     var loc8 = false;
     var loc9 = false;

 //Initialization Function - boots up program
   function init() {
     trail();
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

//Inventory Command
     function btnInvList(){
       updateDisplay ("Your inventory is: " + inventory)
     }

 // Trail function is a switch case function that analysizes what level the user is on, and then pushes them to the function for that level
 // Switch case simply calls the function for the indiviual location handler

   function trail() {
     var message = "";
     switch (currentLvl) {
         case 0: Location0();
           break;
         case 1: Location1();
           break;
         case 2: Location2();
           break;
         case 3: Location3();
           break;
         case 4: Location4();
           break;
         case 5: Location5();
           break;
         case 6: Location6();
           break;
         case 7: Location7();
           break;
         case 8: Location8();
           break;
         case 9: Location9();
           break;
         default: message = "You broke your femur and had to return home to recover. Better luck next year."
       }

       updateDisplay(message);
     }

 // Event Handlers
 // First objective is to display a message as to where the user is.
 // Then the scoreCheck function is activated, which counts the users score based on the current level
 // These two are then pieced together and then sent to the updateDisplay function which displays the text in the textbox

   function Location0() {
     var message = "0. You are at the Southern Terminus of the AT: Springer Mountain in Georgia.";
     scoreCheck ();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location1() {
     var message = "1. Congrats! You've made it to the Great Smokey Mountains, you still have quite a ways to go.";
     scoreCheck ();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location2() {
     var message = "2. Next stop: The Blue Ridge Mountains!";
     scoreCheck ();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location3() {
     var message = "3. Well done, you've made it to Shenandoah National Park!";
     scoreCheck ();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location4() {
     var message = "4. Woohoo! You have arrived at Harpers Ferry, West Virginia. Check out the history of this town!";
     scoreCheck();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location5() {
     var message = "5. Welcome to the half way point: Pine Grove Furnace. Get a half gallon of ice cream to celebrate!";
     scoreCheck();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location6() {
     var message = "6. You made it to the Taconic Mountains! Stop into New Paltz for a drink and a nice burger! P.S. You're also very close to Marist College!";
     scoreCheck();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location7() {
     var message = "7. Awesome job, you're now in the White Mountains! Enjoy your stay at the AMC huts!";
     scoreCheck();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location8() {
     var message = "8. You are now in the Presidential Mountain Range! Take a look at the Mt. Washington";
     scoreCheck();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

   function Location9() {
     var message = "9. Wow!!! You made it all the way to Mt. Katahdin, the northern terminus of the AT!!! You hiked a grand total of 2,181 miles!";
     scoreCheck();
     message = message + "\n" + "Your score is: " + score;
     updateDisplay(message);
   }

 // Score Check function
 // Decides whether or not the user has been to this location before
 // If they have not, 5 point is awarded; if they have, no points are added

   function scoreCheck() {
     if (! loc0) {
       if (currentLvl === 0) {
         score = score + 5;
         loc0 = true;
       }
     else if ((! loc1) && (currentLvl === 1)) {
       score = score + 5;
       loc1 = true;
       }
     else if ((! loc2) && (currentLvl === 2)) {
       score = score + 5;
       loc2 = true;
       }
     else if ((! loc3) && (currentLvl === 3)) {
       score = score + 5;
       loc3 = true;
       }
     else if ((! loc4) && (currentLvl === 4)) {
       score = score + 5;
       loc4 = true;
       }
     else if ((! loc5) && (currentLvl === 5)) {
       score = score + 5;
       loc5 = true;
       }
     else if ((! loc6) && (currentLvl === 6)) {
       score = score + 5;
       loc6 = true;
       }
     else if ((! loc7) && (currentLvl === 7)) {
       score = score + 5;
       loc7 = true;
       }
     else if ((! loc8) && (currentLvl === 8)) {
       score = score + 5;
       loc8 = true;
       }
     else if ((! loc9) && (currentLvl === 9)) {
       score = score + 5;
       loc9 = true;
       }
     }
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

 // Button Event Function Handlers
 // Decides what level the user is at and based on the current level, advances the user to another level
 // The level numbers are used to determine which location function should be carried out, and thus which "location" (meaning along the AT) the user is at
     function btnNorth() {
       if (currentLvl === 0) {
         currentLvl = 1;
       } else if (currentLvl === 3) {
         btnError();
       } else if (currentLvl === 5) {
         btnError();
       } else if (currentLvl === 7) {
         btnError();
       } else if (currentLvl === 2) {
           currentLvl = 3;
       } else if (currentLvl === 4) {
             currentLvl = 5;
       } else if (currentLvl === 6) {
             currentLvl = 7;
       }
         trail();
     }

     function btnWest(){
       if (currentLvl === 1){
         currentLvl = 2;
       } else if (currentLvl === 3) {
         btnError();
       } else if (currentLvl === 5) {
         btnError();
       } else if (currentLvl === 7) {
         btnError();
       } else if (currentLvl === 4){
           currentLvl = 5;
       } else if (currentLvl === 2) {
           currentLvl = 3;
       } else if (currentLvl === 6) {
             currentLvl = 7;
       }
        trail();
      }


     function btnSouth(){
       if (currentLvl === 1){
         currentLvl = 2;
       } else if (currentLvl === 2) {
         btnError();
       } else if (currentLvl === 4) {
         btnError();
       } else if (currentLvl === 7) {
         btnError();
       } else if (currentLvl === 3){
           currentLvl = 4;
       } else if (currentLvl === 5) {
           currentLvl = 6;
       } else if (currentLvl === 6) {
             currentLvl = 7;
       }
         trail();
     }

     function btnEast(){
       if (currentLvl === 2){
         currentLvl = 3;
       } else if (currentLvl === 1) {
         btnError();
       } else if (currentLvl === 3) {
         btnError();
       } else if (currentLvl === 7) {
         btnError();
       } else if (currentLvl === 5){
           currentLvl = 6;
       } else if (currentLvl === 4) {
           currentLvl = 5;
       } else if (currentLvl === 6) {
             currentLvl = 7;
       }
         trail();
     }

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
