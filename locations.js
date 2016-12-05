// Johnathan Clementi
// Intro to Programming
// Prof. A. Giorgio
// December 5th, 2016
// Game v1.0: Philmont Scout Ranch: The Trail Game


// Location prototype - item object contains 5 traits - id, name, description, item, and if the loc was visited.
    function location (id, name, desc, item){
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.item = item;
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
  var toothOfTime = new location (4, "Tooth of Time", "The most identifiable landmark on PSR property, you can see basecamp from the 'Tooth'. This rock structure sits at 9,003 ft above sea level.", null);
  var porcupine = new location (5, "Porcupine trail camp", "There are some ruins of an old cabin next to the Rayado creek at this trail camp. It looks like someone accidentally left some food here, you should pick it up so the bears don't eat it!", food);
  var clearCreek = new location (6, "Clear Creek staff camp", "This camp is the highest staff camp in elevation. There are black powder rifles to shoot here! Don't forget to pick up your new stove here", stove);
  var mountPhilips = new location (7, "Mount Philips", "This mountain is the 2nd tallest mountain on the property at 11,742ft.", null);
  var cimmarroncito = new location (8, "Cimmarroncito staff camp", "Otherwise known as 'Cito', this one of the largest and most central camps on the ranch. Cito also has outdoor rock climbing as well as an indoor bouldering gym", null);
  var vistoGrande = new location (9, "Visto Grande trail camp", "This camp has a beautiful view of the hike over the next few days.", null);
  var deanCow = new location (10, "Dean Cow staff camp", "Dean Cow is the third rock climbing camp at PSR.  You are now in the 2003 Ponil Complex Fire burn area. It is a exposed and hot area.", null);
  var headOfDean = new location (11, "Head of Dean staff camp", "HOD is a challenge course camp that helps your crew come together as a team.  The staff have new boots here for you!", boots);
  var baldyMountain = new location (12, "Baldy Mountain", "Baldy Mountain is the highest point on the ranch at 12,441ft above sea level. It was a tough climb to the top, but congrats, you made it!", null);
  var richCabins = new location (13, "Rich Cabins staff camp", "Rich Cabins is the former home of the Rich Family, which lived there from the 1880's to the late 1920's.", null);
  var ponil = new location (14, "Ponil staff camp", "Ponil was the first basecamp for PSR and still serves as the largest staff camp other than base camp. You can get your water bottles or boots branded", brand);
  var indianWritings = new location (15, "Indian Writings staff camp", "Indian Writings is an active archaeologic site that studies ancient Native American petroglyphs. You can press 'Take' to see go on a petroglyph tour.", petroglyph);
  var clarksFork = new location (16, "Clarks Fork staff camp", "Clarks for is the closest staff camp to the Tooth of Time and has horse riding! Take the giant fork as a prize!", fork;
// Location array
  var locations = [baseCamp,loversLeap,minersPark,craterLake,toothOfTime,porcupine,clearCreek,mountPhilips,cimmarroncito,vistoGrande,headOfDean];

// matrix
console.log ("create a matrix");
    var matrix = [
    /*                      [N,E,S,W]*/
    /* #0: baseCamp*/       [,,1,4],
    /* #1: loversLeap*/     [0,,,2],
    /* #2: minersPark*/     [16,1,3,],
    /* #3: craterLake*/     [2,,,5],
    /* #4: toothOfTime*/    [,0,,16],
    /* #5: porcupine*/      [6,3,,],
    /* #6: clearCreek*/     [7,,5,],
    /* #7:mountPhilips*/    [,8,6,],
    /* #8: cimmarroncito*/  [9,,16,7],
    /* #9: vistoGrande*/    [,10,8,],
    /* #10: deanCow*/       [11,,,9],
    /* #11: headOfDean*/    [13,14,10,12],
    /* #12: baldyMountain*/ [,11,,],
    /* #13: richCabins*/    [,,11,],
    /* #14: ponil*/         [,,15,11],
    /* #15: indianWritings*/[14,,0,],
    /* #16: clarksFork*/    [8,4,,16],
  ];
