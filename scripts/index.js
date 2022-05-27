var buttonspawnaudio = document.getElementById('buttonspawnaudio'), playgametext = document.getElementById('playgame'), canvas = document.getElementById('canvas'), count = 1, count2 = 1, amount = 0, amount2 = 0, countw = 1, count2w = 1, amountw = 0, amount2w = 0, showsong = document.getElementById('songs'), circleclone = 0, circle2clone = 0, amountofballs = 1;
const h1title = document.getElementById('h1title'), circle2 = document.getElementById('circle2'), circle = document.getElementById('circle'), array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"], firstaudio = document.getElementById('loadaudio'), firstaudio2 = document.getElementById('loadaudio2'), firstaudio3 = document.getElementById('loadaudio3'), firstaudio4 = document.getElementById('loadaudio4'), firstaudio5 = document.getElementById('loadaudio5'), instructions = document.getElementById('instructions'), insdiv = document.getElementById('instructionsdiv');
let y = 1, y2 = 1;
// Creating the variables

function checkballs() { // This function checks if a certain amount of balls have been clicked then changes the text colour
  if(y >= 25 || y2 >= 25) { //This || operator is an OR operator and says 'if this OR this then do this'
    h1title.style.color = 'LightGreen'; // Set the text colour
}
if(y >= 45 || y2 >= 45) {
  h1title.style.color = 'Orange';
}
if(y >= 75 || y2 >= 75) {
  h1title.style.color = 'crimson';
}
}

window.onclick = function(event) { //If anywhere has been clicked
  h1title.innerHTML = amountofballs; // Change h1title tag every time this function is called
  if(event.target.classList.contains("circlestyle2")) { // If the touched area contains this element
    event.target.remove(); // Remove it
    amountofballs++; // Add 1 to the variable amountofballs
  }
  if(event.target.classList.contains("circlestyle")) {
    event.target.remove();
    amountofballs++;
  }
}

function taskw(iw) { // This function holds cloning the original balls
  setTimeout(function() { // This function is virtually a sleep function for javascript and the numbers at the bottom is how long it 'sleeps' for
    circle2clone = canvas.appendChild(circle2.cloneNode(true)); // This is how the original ball gets cloned. I assign a variable to the clonenode
    circle2clone.id = y; // I then assign an id to the variable but it is different each time because y increments by 1 on line 35 each time this function is called
    circle2clone.className = 'circlestyle2'; // Assign a class name to the variable so the new clonenode gets styled the same as the original ball
    y++; // This increments by one each time this function is called
    circle2.remove(); // Remove the original ball
    amount2w = amountw++; // variable equals variable then increment by one
  }, 400 * iw); // Set the amount of time for the setTimeout function. In this case is 0.4 seconds
}

function circle_2() { // This function holds the information and styling of the original ball. This function gets invoked when the ball is clicked. An onclick is used within the html files
  const randomItem2 = array[Math.floor(Math.random()*array.length)], randomItem3 = array[Math.floor(Math.random()*array.length)]; // This math.random randomly selects a value from an array

  checkballs(); // This invokes the function starting line 6

  circle2.style.backgroundColor = randomItem2; // Set the background colour of the ball from the math.random line of code
  circle2.style.width = '10%'; // Set the width of the ball
  circle2.style.height = '10%'; // Set the height of the ball
  count2w = countw++; // variable is equal to variable and increment by one
  amount2w = amountw--; // variable is equal to variable and subtract by one
  circle2.remove(); // Remove original ball

  if(amount2w == 0) { // This will only carry on if variable is equal to 0
    canvas.style.backgroundColor = randomItem3; // Assign random background colour to the background colour of the canvas.
    count2w = countw / 2; // variable equals to variable then divide by two
    for(let iw=0; iw<count2w; iw++) { // For loop to decide how many times to invoke the cloning function which decides how many times it should clone the original ball
      buttonspawnaudio.play(); // Play a 'popping' audio for when user has gotten rid of that stack of balls
      taskw(iw); // Invoke the clone function
    }
  }
}

function task(i) { // The function to clone ball 2. I've already explained everything that this does for ball 1 so i won't explain everything here as its the same
setTimeout(function() {
  circleclone = canvas.appendChild(circle.cloneNode(true));
  circleclone.id = y2;
  circleclone.className = 'circlestyle';
  y2++;
  circle.remove();
  amount2 = amount++;
}, 400 * i);
}

function circle_1() {
  const randomItem = array[Math.floor(Math.random()*array.length)], randomItem2 = array[Math.floor(Math.random()*array.length)], randomItem3 = array[Math.floor(Math.random()*array.length)];

  checkballs();

  circle.style.backgroundColor = randomItem;
  count2 = count++;
  circle.remove();
  amount2 = amount--;
  circle.style.width = '10%';
  circle.style.height = '10%';

  if(amount2 == 0) {
    canvas.style.backgroundColor = randomItem3;
    count2 = count / 2;
    for(let i=0; i<count2; i++) {
      buttonspawnaudio.play();
      task(i);
    }
  }
}

function playgame() { // This is for the start of the game prompting the user to start the game
  var spin = 0; // variable to assist in the animations

  // Start of the countdown
  playgametext.innerHTML = '3'; // Set text to 3
  playgametext.style.width = '30%'; // Set the width to 30%. This is considered the first animation
  setTimeout(function() { // function to sleep the program for a set amount of time
    playgametext.innerHTML = '2'; // set the text to 2
    playgametext.style.transform = "rotate(180deg)"; // rotate the element 180 degrees for the second animation
    playgametext.style.transitionDuration = "1s"; // set the transition duration so its visible and doesn't happen to slow or fast
  }, 1000); // 1000 is for 1 second

  setTimeout(function() {
    playgametext.innerHTML = '1'; // Set text to 1
    spin += 180; // Spin animation. How far the animation should spin
    playgametext.style.transform = "rotatey(" + spin + "deg)"; // Animation in general and shows what the animation should be
    playgametext.style.transitionDuration = "1s";
  }, 2000); // 2000 this time is 2 seconds so the animations don't all happen together

  setTimeout(function() {

    // last animation (shrink)
    playgametext.innerHTML = ''; // set the text to nothing
    playgametext.style.width = '0'; // set the width to nothing
    playgametext.style.height = '0'; // set the height to nothing
    playgametext.style.border = 'none'; // get rid of border
  }, 3000);

  setTimeout(function() {
    playgame2(); // invoke a function that will hide and show elements
  }, 3800); // 3.8 seconds
}

function playgame2() { // Function that hides and shows the right element
  var title = document.getElementById('title'); // getting the element from html and assigning a variable to it

  showsong.style.display = 'block'; // showing the showsong variable
  playgametext.style.display = 'none'; // hiding the playgametext variable
  title.style.display = 'block'; // showing the title variable
  canvas.style.display = 'block'; // showing the canvas variable
}

// These functions play and pause the right audios. It stops any other audios from playing if one plays
function playfirstaudio() {
  if(firstaudio2.play() || firstaudio3.play() || firstaudio4.play() || firstaudio5.pause()) { // If audio is played or audio is played etc
    firstaudio2.pause(); // pause audio
    firstaudio3.pause();
    firstaudio4.pause();
    firstaudio5.pause();
    firstaudio.play(); // play audio
  }
}

function playsecondaudio() {
  if(firstaudio.play() || firstaudio3.play() || firstaudio4.play() || firstaudio5.pause()) {
    firstaudio.pause();
    firstaudio4.pause();
    firstaudio3.pause();
    firstaudio5.pause();
    firstaudio2.play();
  }
}

function playthirdaudio() {
  if(firstaudio2.play() || firstaudio.play() || firstaudio4.play() || firstaudio5.pause()) {
    firstaudio2.pause();
    firstaudio4.pause();
    firstaudio.pause();
    firstaudio5.pause();
    firstaudio3.play();
  }
}

function playfourthaudio() {
  if(firstaudio.play() || firstaudio2.play() || firstaudio3.play() || firstaudio5.pause()) {
    firstaudio.pause();
    firstaudio2.pause();
    firstaudio3.pause();
    firstaudio5.pause();
    firstaudio4.play();
  }
}

function playfifthaudio() {
  if(firstaudio.play() || firstaudio2.play() || firstaudio3.play() || firstaudio4.play()) {
    firstaudio.pause();
    firstaudio2.pause();
    firstaudio3.pause();
    firstaudio4.pause();
    firstaudio5.play();
  }
}

function showsongs() { // Function to show songs

  // This expands and shortens back to the normal songs container
  if(showsong.style.height == '287px') { // If the height is equal to 287px
    showsong.style.animation = 'zoom2 3s ease infinite'; // set the animation again
    showsong.style.height = '0px'; // set the height 0
    showsong.style.opacity = '0.6'; // set the opacity back to 0.6
  } else {
    showsong.style.animation = 'none';
    showsong.style.height = '287px';
    showsong.style.opacity = '1';
  }
}

function hidetitle() { // This hides the section that shows how many balls are clicked
  if(title.style.width == '1px') {
    setTimeout(function() { // 'sleep' function again
      h1title.style.display = 'block';
    }, 200);
    title.style.width = '40%';

    // Lines 211 and 212 center the element again
    title.style.marginLeft = 'auto';
    title.style.marginRight = 'auto';
    title.style.borderRadius = '15px'; // Change the border radius
    title.style.opacity = '1';
  } else {
    setTimeout(function() {
      title.style.width = '1px';
      title.style.borderRadius = '5px';
      title.style.marginLeft = '-30px';
      title.style.opacity = '0.6';
    }, 200);
    h1title.style.display = 'none';
  } 
}

setTimeout(function() {
  instructions.style.display = 'none';
}, 10000); // This hides the element after 10 seconds

document.addEventListener('keydown', function(event) { // Event listener to detect if a certain key is pressed
  if(event.keyCode == 81) { // If key 81 (Q) is pressed
    insdiv.style.display = 'block'; // Show the insdiv variable
  }
});
document.addEventListener('keydown', function(event) { // Another event listener but this time to detect is key 87 (W) is pressed
  if(event.keyCode == 87) {
    insdiv.style.display = 'none';
  }
});

function hotcornerclick() { // This is a hot corner. It is invoked with onclick in the html file. It consists of an invisible button
  var hotcorner = document.getElementById('hotcorner');

  if(hotcorner.style.opacity == 0.5) {
    hotcorner.style.opacity = 1;
    insdiv.style.display = 'none';
  } else {
    insdiv.style.display = 'block';
    hotcorner.style.opacity = 0.5;
  }
}