var buttonspawnaudio = document.getElementById('buttonspawnaudio');
var playgametext = document.getElementById('playgame');
var canvas = document.getElementById('canvas');
var lotsofballs = document.getElementById('lotofballs');
const h1title = document.getElementById('h1title');
const circle2 = document.getElementById('circle2');
const circle = document.getElementById('circle');
var count = 1;
var count2 = 1;
var amount = 0;
var amount2 = 0;
var countw = 1;
var count2w = 1;
var amountw = 0;
var amount2w = 0;
let y = 1;
let y2 = 1;
let circleclone = 0;
let circle2clone = 0;

/* Please find my ammendments here. I've moved this function out of taskw */
/* The below snipped adds an event listener to the entire window. If anywhere is clicked it then checks to see if the element contains the class "circlestyle"
if it does, then the element is removed. This approach means that elements can only be removed if they are a circle. From what I can see this functions fine, but will need further work to refine the approach more.
 */ 

window.onclick = function(event) {
  let el2 = document.getElementById(event.target.id);
  if(event.target.classList.contains("circlestyle2")) {
    event.target.remove();
  }

  let el = document.getElementById(event.target.id);
  if(event.target.classList.contains("circlestyle")) {
    event.target.remove();
  }
}

function taskw(iw) {
  setTimeout(function() {
    circle2clone = canvas.appendChild(circle2.cloneNode(true));
    circle2clone.id = y;
    circle2clone.className = 'circlestyle2';
    y++;
    circle2.remove();
    amount2w = amountw++;
  }, 400 * iw);
}

function circle_2() {
  const array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  const randomItem = array[Math.floor(Math.random()*array.length)];
  const randomItem2 = array[Math.floor(Math.random()*array.length)];
  const randomItem3 = array[Math.floor(Math.random()*array.length)];
  const levelchange = document.getElementById('levelchange');
  const nextlevel = document.getElementById('nextlevel');

  circle2.style.backgroundColor = randomItem2;
  circle2.style.width = '10%';
  count2w = countw++;
  circle2.remove();
  amount2w = amountw--;
  circle2.style.height = '10%';

  if(amount2w == 0) {
    canvas.style.transition = 'all 2s';
    canvas.style.backgroundColor = randomItem3;
    count2w = countw / 2;
    for(let iw=0; iw<count2w; iw++) {
      buttonspawnaudio.play();
      taskw(iw);
    }
  }
}









function task(i) {
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
  const array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  const randomItem = array[Math.floor(Math.random()*array.length)];
  const randomItem2 = array[Math.floor(Math.random()*array.length)];
  const randomItem3 = array[Math.floor(Math.random()*array.length)];
  const levelchange = document.getElementById('levelchange');
  const nextlevel = document.getElementById('nextlevel');

  circle.style.backgroundColor = randomItem;
  count2 = count++;
  circle.remove();
  amount2 = amount--;
  circle.style.width = '10%';
  circle.style.height = '10%';

  if(amount2 == 0) {
    count2 = count / 2;
    for(let i=0; i<count2; i++) {
      buttonspawnaudio.play();
      task(i);
    }
  }
}

function playgame() {

  playgametext.innerHTML = '3';
  playgametext.style.width = '30%';
  setTimeout(function() {
    playgametext.innerHTML = '2';
    playgametext.style.transform = "rotate(180deg)";
    playgametext.style.transitionDuration = "1s";
  }, 1000);

  setTimeout(function() {
    playgametext.innerHTML = '1';

    var spin = 0;
    spin += 180;
    playgametext.style.transform = "rotatey(" + spin + "deg)";
    playgametext.style.transitionDuration = "1s";

  }, 2000);

  setTimeout(function() {
    playgametext.innerHTML = '';
    playgametext.style.width = '0';
    playgametext.style.height = '0';
    playgametext.style.border = 'none';
  }, 3000);

  setTimeout(function() {
    playgame2();
  }, 3800);
}

function playgame2() {
  //audio1.play();

  var sectionbottom = document.getElementById('sectionbottom');
  var title = document.getElementById('title');
  var theme = document.getElementById('theme');

  showsong.style.display = 'block';
  playgametext.style.display = 'none';
  title.style.display = 'block';
  canvas.style.display = 'block';
}

var firstaudio = document.getElementById('loadaudio');
var firstaudio2 = document.getElementById('loadaudio2');
var firstaudio3 = document.getElementById('loadaudio3');
var firstaudio4 = document.getElementById('loadaudio4');
var firstaudio5 = document.getElementById('loadaudio5');

function playfirstaudio() {
  if(firstaudio2.play() || firstaudio3.play() || firstaudio4.play() || firstaudio5.pause()) {
    firstaudio2.pause();
    firstaudio3.pause();
    firstaudio4.pause();
    firstaudio5.pause();
    firstaudio.play();
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

var showsong = document.getElementById('songs');

function showsongs() {
  if(showsong.style.height == '287px') {
    showsong.style.animation = 'zoom2 3s ease infinite';
    showsong.style.height = '0px';
    showsong.style.opacity = '0.6';
  } else {
    showsong.style.animation = 'none';
    showsong.style.height = '287px';
    showsong.style.opacity = '1';
  }
}

function noremove() {
  lotsofballs.style.display = 'none';
}

function yesremove() {
  const circle = document.getElementById('circle');
  const circle2 = document.getElementById('circle2');
}


function change() {
  h1title.innerHTML = quotearray[counter];
  counter++;
  if (counter >= quotearray.length) {
    counter = 0;
  }
}

var counter = 0;
var quotearray = ['This is pretty cool', 'Can you count those balls?', "Can you keep up?", "Have you got a song playing?", 'Press for instructions'];
var inst = setInterval(change, 9263);

function hidetitle() {
  if(title.style.width = '40%') {
    title.style.width = '1px';
    h1title.style.display = 'none';
    title.style.borderRadius = '5px';
    title.style.marginLeft = '-30px';
    title.style.opacity = '0.6';
  } else if(title.style.width = '1px') {
   title.style.width = '40%';
   h1title.style.display = 'block';
   title.style.borderRadius = '15px';
   title.style.opacity = '1';
 }
}

const instructions = document.getElementById('instructions');
setTimeout(function() {
  instructions.style.display = 'none';
}, 10000);

document.addEventListener('keydown', function(event) {
  const insdiv = document.getElementById('instructionsdiv');
  if(event.keyCode == 81) {
    insdiv.style.display = 'block';
  }

  if(insdiv.style.display == 'block') {
    setTimeout(function() {
      insdiv.style.display = 'none';
    }, 3000);
  }
});