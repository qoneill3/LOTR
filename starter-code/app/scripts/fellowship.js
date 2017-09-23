console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

  function makeMiddleEarth() {

      var middleEarth = document.createElement('section');
      
      for(var i = 0, len = lands.length; i < len; i++) {
        var land = document.createElement('article');
        var h1 = document.createElement('H1');
        var textNode = document.createTextNode(lands[i]);
        h1.appendChild(textNode);
        land.appendChild(h1);
        middleEarth.appendChild(Land);
      }

      body.appendChild(middleEarth);
  }
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}
makeMiddleEarth();




// Part 2
var theShire =body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  var hobbitList = document.createElement('ul');
  for (var i = 0, len = hobbits.length; i < len; i++){
      var hobbit = document.createElement('li');
      hobbit.className = "hobbit";
      var textNode = document.createTextNode(hobbits[i]);
      hobbits.appendChild(textNode);
      hobbitList.appendChild(hobbit);

  }

  theShire.appendChild(hobbitList);
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {

  var theRing = document.createElement('div');
  theRing.id = 'the-ring';
  // create a div with an id of 'the-ring'
  theRing.className = "magic-imbued-jewelry";
  // give the div a class of 'magic-imbued-jewelry'
  theRing.addEventListener("click", nazgulScreech);
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var frodo = theShire.querySelectorAll('li')[0];
  console.log(frodo);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  var aside = document.createElement('aside');
  // create an aside tag
  var buddyList = document.createElement('ul');
  for (var i=0, len = buddies.length; i < len; i++) {
    var buddy = document.createElement('li');
    buddy.className = "buddy";
    var textNode = document.createTextNode(buddies[i]);
    buddy.appendChild(textNode);
    buddyList.appendChild(buddy);
  }
  // attach an unordered list of the 'buddies' in the aside
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);

  console.log(rivendell);
  // insert your aside as a child element of rivendell
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {

  strider.textContent = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}

console.log(strider);
beautifulStranger();


// Part 6

var hobbits = theShire.querySelector('ul');

function leaveTheShire() {

  rivendell.appendChild(hobbits);
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {

  var theFellowship = document.createElement('div');
  theFellowship.className = 'the-fellowship';
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
