// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// December 5th, 2016
// Game v1.0: Philmont Scout Ranch: The Trail Game


// Location prototype - item object contains 5 traits - id, name, description, item, and if the loc was visited.
    function location (id, name, desc, descVisited, item){
      this.id = id;
      // alert(id);
      this.name = name;
      // alert(name);
      this.desc = desc;
      // alert(desc);
      // this.descVisited = descVisited;
      this.item = item;
      // alert(item);
      this.visited = false;

      function toString(){
        return name + desc;
  }
}

// Location declaration and description: (ID #, Name of location, description of location; if there is an item at this location (staff camps))
  var baseCamp = new location (0, "Base Camp", "All Philmont Treks begin at base camp. Get your tent assignment and enjoy opening campfire! Don't forget to pick up your Crew Flag", crewFlag);
  var loversLeap = new location (1, "Lovers Leap trail camp", "Your first night on trail is at Lovers Leap trail camp! Get some sleep, tomorrow is going to be a long day of hiking!", null);
  var minersPark = new location (2, "Miners Park staff camp", "Welcome to the 'South Country!' You can experience outdoor rock climbing at Miners Park! There is a new nalgene for sale here.", nalgene);
  var craterLake = new location (3, "Crater Lake staff camp", "Crater Lake is a living history camp that is set in an early 20th century logging company. You can climb a spar pole here!", null);
  var toothOfTime = new location (4, "Tooth of Time", "The most identifiable landmark on PSR property, you can see basecamp from the 'Tooth'. This rock structure sits at 9,003 ft above sea level", food);
  var porcupine = new location (5, "Porcupine trail camp", "There are some ruins of an old cabin next to the Rayado creek at this trail camp", null);
  var clearCreek = new location (6, "Clear Creek staff camp", "This camp is the highest staff camp in elevation. There are black powder rifles to shoot here! Don't forget to pick up your new stove here", stove);
  var mountPhilips = new location (7, "Mount Philips", "This mountain is the 2nd tallest mountain on the property at 11,742ft.", null);
  var cimmarroncito = new location (8, "Cimmarroncito staff camp", "Otherwise known as 'Cito', this one of the largest and most central camps on the ranch. Cito also has outdoor rock climbing as well as an indoor bouldering gym", null);
  var vistoGrande = new location (9, "Visto Grande trail camp", "This camp has a beautiful view of the hike over the next few days.", null);
  var headOfDean = new location (10, "Head of Dean staff camp", "HOD is a challenge course camp that helps your crew come together as a team.  The staff have new boots here for you!", boots);
// Location array
  var locations = [baseCamp,loversLeap,minersPark,craterLake,toothOfTime,porcupine,clearCreek,mountPhilips,cimmarroncito,vistoGrande,headOfDean];

// matrix
console.log ("create a matrix");
    var matrix = [
    /*                [N,E,S,W]*/
    /* baseCamp*/     [0,0,1,1],
    /*loversLeap*/    [0,0,3,2],
    /*minersPark*/    [8,4,3,3],
    /*craterLake*/    [2,1,3,5],
    /*toothOfTime*/   [4,0,4,2],
    /*porcupine*/     [6,3,5,5],
    /*clearCreek*/    [7,6,5,6],
    /*mountPhilips*/  [7,8,6,7],
    /*cimmarroncito*/ [9,8,2,7],
    /*vistoGrande*/   [10,9,8,9],
    /*headOfDean*/    [10,10,9,10],
  ];
