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

// Location function - item object contains six traits - id, name, description, description after visited, item, and if the loc was visited.
function location (id, name, desc, descVisited, item){
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.descVisited = descVisited;
  this.item = item;
  this.visited = false;

  function toString(){
    return desc;
  }  
}

// Item function - item object contains three traits - id, name, description.
  function Item (idarg,namearg,descarg) {
      this.id = idarg;
      this.name = namearg;
      this.desc = descarg;
      this.taken = false;

  function toString(){
        return desc;
      }
    }
