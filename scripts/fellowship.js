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
var body = document.body;
var makeMiddleEarth = function () {

   var middleEarth = $('<section id="middle-earth"></section>');

    for (var i = 0; i < lands.length; i++) {
      $(middleEarth).append('<article><h1>' + lands[i] + '</h1></article>');
    }
    $('body').append(middleEarth)
  };
makeMiddleEarth();

var makeHobbits = function () {
var hobbitList = $('<ul id="hobbitList"></ul>');
for (var i = 0; i < hobbits.length; i++)
    hobbitList.append('<li class="hobbits">' + hobbits[i] + '</li>');
    $('article:nth-child(1)').append(hobbitList);
};
makeHobbits()

var keepItSecretKeepItSafe = function () {
 var divRing = $('<div id="the-ring" class="magic-imbued-jewelry"></div>')
  // create a div with an id of `'the-ring'`
  // give the div a class of `'magic-imbued-jewelry'`
  // add the ring as a child of `Frodo`
  $('li:nth-child(1)').append(divRing);
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
var aside = $('<aside></aside>');
 var buddiesList = $('<ul id="listofBuddies"></ul>')
  for (var i = 0; i < buddies.length; i++) {
    $(buddiesList).append('<li class="buddies">' + buddies[i] + '</li>')
    }
 $(aside).append(buddiesList);
 $('article:nth-child(2)').append(aside);
};
makeBuddies()

var beautifulStranger = function () {
  $('aside ul li').eq(3).html('Aragon')
   // change the `'Strider'` text to `'Aragorn'`
   //$(this).html(beautifulStranger).replace('Strider','Aragorn')
};
beautifulStranger()
