// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// December 5th, 2016
// Game v1.0: Philmont Scout Ranch: The Trail Game


// Item function - item object contains three traits - id, name, description.
  function item (id,name,desc) {
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.taken = false;

  function toString(){
        return desc;
      }
    }

// Item prototype declaration and description, first value is id, second is name of item, third is description of item)
    var stove = new item (0, "Stove", "This camp stove will help you cook warm meals");
    var food = new item (1, "Food", "Woah, someone left three freeze-dried meals on the ground!");
    var backpack = new item (2, "Backpack", "This is a brand new backpack to hold all of your gear");
    var boots = new item (3, "Boots", "Those old boots gave you blisters! Here are some new ones! :D");
    var nalgene = new item (4, "Nalgene water bottle", "This Nalgene water bottle holds a liter of water!");
    var crewFlag = new item (5, "Crew Leader Flag", "This American Flag is attached to the crew leader's backpack");
    var brand = new item (6, "Brand", "You got your boots and nalgene branded here!");
    var petroglyph = new item (7, "Petroglyphs", "The petroglyph tour has some really cool Native American rock pictograms.");
    var fork = new item (8, "Fork", "This giant fork is the symbol for Clarks Fork. Don't let the staff know you have it, or they'll come after you!");

//Array for items
    var itemsArray = [stove, food, backpack, boots, nalgene, crewFlag, brand, petroglyph, fork];

// Inventory hold - open spaces for items
    var inventory = [];

//Take function evaluates whether or not there is an item at the location
//If not, it tells user that there is no item
//If there is, it 'takes' the item and puts it in the user's inventory and then removes it from the location so that if you visit the location again, the item wont be there
  function btnInvTake(){
    var locitem = locations[currentLvl];

    if (locitem.item === null){
      updateDisplay ("There are no items at this camp!");
    }
    else {
      var item = locitem.item;
      inventory.push(item.name);
      locitem.item = null;
      updateDisplay ("Congrats! You recieved: "+ item.name);
    }
}


//
function btnInvList(){
	var message = "Your Inventory is: " + inventory;
	updateDisplay(message);
}
