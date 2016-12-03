# Clementi_Repo
This is the repository for Johnathan Clementi during the Intro to Programming course at Marist College.

Currently, this repository contains my game project for this class.  

5 different versions have completed thus far, and the final version is due on December 5th, 2016.  
Please see commit history for the different versions of the game.
Questions should be directed to: johnathan.clementi1@marist.edu


Notes:

V1.0 (Final Project):
Fix anything that was incorrect or incomplete with your prior project. (Commit. Push.)
Then, beginning with a perfect implementation of the prior version of your game, implement the following new features:
  [75 pts] Add a puzzle element to the gameplay so that it's necessary for the player to solve the puzzle to "win" or at least complete the game.
    Perhaps the player needs to acquire certain items to progress to the final location.
    Maybe some locations need to be encountered in a specific order.
    It could be something that can only happen after a given number of moves, or after a certain score is achieved by one or both of the methods above.
    Conceivably, it's some combination of all of these.  Be creative!  Make sure that the puzzle makes sense in the context of the game and that it's solvable by the player.
  [75 pts] Redo your navigation one final time, this time with a matrix; no more if-else, no more switch-case.  Write a function that takes the current location and direction moves as parameters and returns the new location (or the same location if the move was invalid).  Use that function to run all player navigation through the game.
  [50 pts] All non-navigation requirements from all projects 2, 3, 4, and 5 perfectly implemented.
  [-∞ if not] Software Development Best Practices ubiquitious in your source code.

V0.8 (Project 5)
To do:
Fix anything that was incorrect or incomplete with your prior project. (Commit. Push.)
Then, beginning with a perfect implementation of the prior version of your game, implement the following new features:
[10 pts] Develop a Location prototype {id, name, description, item, toString()}
[5 pts] Instantiate an instance of Location() for each location in your game.  (If you have 10 locations in your game, you'll have 10 instances of the same prototype.)
[10 pts] Store those location instances in a global array.
[10 pts] Refactor your game so that the location functions use this global array instead of the hard-coded text you had before.
[5 pts] Develop an Item prototype {id, name description, toString()}
[5 pts] Instantiate an instance of Item() for each item that can be found in your game (at least four (4) of them) and store zero or one item at each location.
[5 pts] Declare a global array to hold the player's inventory.
[5 pts] Modify your take command to use the inventory array.
[5 pts] Update your i or inventory command to make use of this array when listing the items the player is carrying.
