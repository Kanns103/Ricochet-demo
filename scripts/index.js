var buttonspawnaudio = document.getElementById('buttonspawnaudio'), playgametext = document.getElementById('playgame'), canvas = document.getElementById('canvas'), count = 1, count2 = 1, amount = 0, amount2 = 0, countw = 1, count2w = 1, amountw = 0, amount2w = 0, showsong = document.getElementById('songs'), counter = 0, quotearray = ['What colour is the canvas?', 'How many balls are there?', "Can you keep up?", "Have you got a song playing?", 'Press for instructions'], inst = setInterval(change, 9263);
const h1title = document.getElementById('h1title'), circle2 = document.getElementById('circle2'), circle = document.getElementById('circle'), array = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod" ,"DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"], firstaudio = document.getElementById('loadaudio'), firstaudio2 = document.getElementById('loadaudio2'), firstaudio3 = document.getElementById('loadaudio3'), firstaudio4 = document.getElementById('loadaudio4'), firstaudio5 = document.getElementById('loadaudio5'), instructions = document.getElementById('instructions');
let y = 1, y2 = 1, circleclone = 0, circle2clone = 0, amountofballs = 1;

function checkballs() {
  if(y >= 25 || y2 >= 25) {
    h1title.style.color = 'LightGreen';
  }
  if(y >= 45 || y2 >= 45) {
    h1title.style.color = 'Orange';
  }
  if(y >= 75 || y2 >= 75) {
    h1title.style.color = 'crimson';
  }
}

window.onclick = function(event) {
  let el2 = document.getElementById(event.target.id);
  if(event.target.classList.contains("circlestyle2")) {
    event.target.remove();
    amountofballs++;
  }
  let el = document.getElementById(event.target.id);
  if(event.target.classList.contains("circlestyle")) {
    event.target.remove();
    amountofballs++;
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
  const randomItem = array[Math.floor(Math.random()*array.length)], randomItem2 = array[Math.floor(Math.random()*array.length)], randomItem3 = array[Math.floor(Math.random()*array.length)];

  checkballs();

  circle2.style.backgroundColor = randomItem2;
  circle2.style.width = '10%';
  circle2.style.height = '10%';
  count2w = countw++;
  amount2w = amountw--;
  circle2.remove();

  if(amount2w == 0) {
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

function playgame() {
  var spin = 0;

  playgametext.innerHTML = '3';
  playgametext.style.width = '30%';
  setTimeout(function() {
    playgametext.innerHTML = '2';
    playgametext.style.transform = "rotate(180deg)";
    playgametext.style.transitionDuration = "1s";
  }, 1000);

  setTimeout(function() {
    playgametext.innerHTML = '1';
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
  var sectionbottom = document.getElementById('sectionbottom'), title = document.getElementById('title');

  showsong.style.display = 'block';
  playgametext.style.display = 'none';
  title.style.display = 'block';
  canvas.style.display = 'block';
}

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

function change() {
  h1title.innerHTML = quotearray[counter];
  counter++;
  if (counter >= quotearray.length) {
    counter = 0;
  }
}

function hidetitle() {
  if(title.style.width == '1px') {
    setTimeout(function() {
      h1title.style.display = 'block';
    }, 200);
    title.style.width = '40%';
    title.style.marginLeft = 'auto';
    title.style.marginRight = 'auto';
    title.style.borderRadius = '15px';
    title.style.opacity = '1';
    

  }  else {
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
}, 10000);

 const insdiv = document.getElementById('instructionsdiv');

document.addEventListener('keydown', function(event) {
  if(event.keyCode == 81) {
    insdiv.style.display = 'block';
  }
});
document.addEventListener('keydown', function(event) {
  if(event.keyCode == 87) {
    insdiv.style.display = 'none';
  }
});

function changetext() {
 
  h1title.innerHTML = amountofballs;

}