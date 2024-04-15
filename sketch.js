
/*
  How to Sprite Sheet:
  https://editor.p5js.org/aaronsherwood/sketches/H7D2yV3he


  How to button:
  https://editor.p5js.org/mrbombmusic/sketches/B1fM_hvJG

*/

var parts = {
  hair: [
    {
      menuSize: 40,
      menuY: 0,
      defaultPos: {x: 100, y: 150},
      draw: function(size, color) {
        noFill();
        strokeWeight(size / 10);
        stroke(color[0], color[1], color[2]);
        
        let numberOfStrands = 20;
        let radius = size / 2;
        
        for (let i = 0; i < numberOfStrands; i++) {
          let angle = TWO_PI * i / numberOfStrands;
          let x1 = cos(angle) * radius;
          let y1 = sin(angle) * radius;
          let x2 = x1 * 0.8;
          let y2 = y1 * 0.8;
          line(0, 0, x2, y2);
        }
      },
    },
    {
      menuSize: 40,
      menuY: 0,
      defaultPos: {x: 100, y: 150},
      draw: function(size, color) {
        let thickness = abs(size) * 0.8;
        ellipse(0, 0, size, thickness);
      },
    },
    {
      menuSize: 40,
      menuY: 20,
      defaultPos: {x: 100, y: 180},

      draw: function(size, color) {
        noFill();
        strokeWeight(size / 10);
        stroke(color[0], color[1], color[2]);
        
        let numberOfStrands = 10;
        let hairLength = size * 0.5;
        let waveAmplitude = size / 5;
        
        for (let i = 0; i < numberOfStrands; i++) {
          let x1 = map(i, 0, numberOfStrands - 1, -size / 2, size / 2);
          let y1 = 0;
          let x2 = x1;
          let y2 = y1 - hairLength;
          let waveOffset = map(x1, -size / 2, size / 2, 0, TWO_PI);
          y2 += sin(waveOffset) * waveAmplitude;
          line(x1, y1, x2, y2);
        }
      }
      
      
      
      
      
    },
    {
      menuSize: 40,
      menuY: 0,
      defaultPos: {x: 100, y: 100},
      draw: function(size, color) {},
      
    },
  ],

  eyebrows: [
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 230},
      draw: function(size) {
        let thickness = abs(size) * 0.3;
        beginShape();
        vertex(-size / 2, -thickness / 2);
        quadraticVertex(0, -thickness * 1.5, size / 2, -thickness / 2);
        quadraticVertex(0, thickness / 2, -size / 2, thickness / 2);
        endShape(CLOSE);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 230},
      draw: function(size) {
        let thickness = abs(size) * 0.3;
        beginShape();
        vertex(-size / 2, -thickness / 2);
        bezierVertex(-size / 3, -thickness, size / 3, -thickness * 1.5, size / 2, -thickness / 2);
        bezierVertex(size / 3, thickness / 2, -size / 3, thickness, -size / 2, -thickness / 2);
        endShape(CLOSE);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 230},
      draw: function(size) {
        let thickness = abs(size) * 0.3;
        beginShape();
        vertex(-size / 2, -thickness / 2);
        vertex(0, -thickness * 0.8);
        vertex(size / 2, -thickness / 2);
        vertex(size / 4, thickness / 4);
        endShape(CLOSE);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 180},
      draw: function(size) {},
    }
  ],

  head: [
    {
      menuSize: 150,
      menuY: 0,
      defaultPos: {x: 100, y: 250},
      draw: function(size) {
        let thickness = abs(size) * 1.3;
        ellipse(0, 0, size, thickness);
      },
    }
    
  ],

  eyes: [
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 250},
      draw: function (size, color) {
        let pupilSize = size *0.4;
  
        fill(255);
        ellipse(0, 0, size, size);
  
        fill(color[0], color[1], color[2]);
        ellipse(0, 0, pupilSize, pupilSize);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 250},
      draw: function (size, color) {
        let pupilSize = size *0.4;
  
        fill(255);
        ellipse(0, 0, size, size);
  
        fill(color[0], color[1], color[2]);
        ellipse(0, 0, pupilSize, pupilSize);
  
        // Draw upper eyelid
        fill(0); // Eyelid color
        arc(0, -1 / 2, size, size, PI, TWO_PI, CHORD);
      },
    },
    {
      menuSize: 18,
      menuY: 0,
      defaultPos: {x: 100, y: 250},
      draw: function(size, color) {
        let pupilSize = size * 0.5;
        let eyeWidth = size * 1.2;
        let eyeHeight = size * 0.8;
    
        fill(255);
        ellipse(0, 0, eyeWidth, eyeHeight);
    
        fill(color[0], color[1], color[2]);
        ellipse(0, 0, pupilSize, pupilSize);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 250},
      draw: function (size, color) {
        let pupilSize = size * 0.5;
        let eyeWidth = size * 1.2;
        let eyeHeight = size * 0.8;
    
        fill(255);
        ellipse(0, 0, eyeWidth, eyeHeight);
    
        fill(color[0], color[1], color[2]);
        ellipse(0, 0, pupilSize, pupilSize);
    
        // Draw upper eyelid
        fill(0); // Eyelid color
        arc(0, -1 / 2, eyeWidth, eyeHeight, PI, TWO_PI, CHORD);
      },
    }
  ],

  nose: [
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 260},
      draw: function (size, color) {
        let thickness = abs(size) * 2;
        beginShape();
        vertex(-size / 2, thickness / 2);
        vertex(0, -thickness / 2);
        vertex(size / 2, thickness / 2);
        endShape(CLOSE);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 280},
      draw: function(size, color) {
        let noseWidth = size * 1.5;
        let noseHeight = size * 0.8;
        let nostrilSize = size * 0.3;
        
        fill(color[0], color[1], color[2]);
        ellipse(0, 0, noseWidth, noseHeight);
        
        fill(255); // Nostril color
        ellipse(-noseWidth / 4, 0, nostrilSize, nostrilSize); // Left nostril
        ellipse(noseWidth / 4, 0, nostrilSize, nostrilSize); // Right nostril
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 280},
      draw: function(size, color) {
        let noseWidth = size * 1.2;
        let noseHeight = size * 0.8;
        let curveAmount = size * 0.1;
        
        fill(color[0], color[1], color[2]);
        beginShape();
        vertex(-noseWidth / 2, 0); // Left point
        quadraticVertex(0, -noseHeight, noseWidth / 2, 0); // Top point
        quadraticVertex(0, curveAmount, -noseWidth / 2, 0); // Curve back to start point
        endShape(CLOSE);
      },
    },
    {
      menuSize: 20,
      menuY: 0,
      defaultPos: {x: 100, y: 280},
      draw: function(size, color) {
        let noseWidth = size * 1.2;
        let noseHeight = size * 0.6;
        let cornerRadius = size * 0.1;
        
        fill(color[0], color[1], color[2]);
        rectMode(CENTER);
        rect(0, 0, noseWidth, noseHeight, cornerRadius);
      },
    }
  
  ],

  mouth: [
    {
      menuSize: 30,
      menuY: 0,
      defaultPos: {x: 100, y: 310},
      draw: function (size, color) {
        noFill();
        stroke(color[0], color[1], color[2]);
        strokeWeight(size / 5);
        
        let lipWidth = size;
        let lipHeight = size / 1.5;
        
        beginShape();
        vertex(lipWidth / 2, 0);
        bezierVertex(lipWidth / 3, lipHeight / 2, -lipWidth / 3, lipHeight / 2, -lipWidth / 2, 0);
        endShape();
      },
    },
    {
      menuSize: 30,
      menuY: 5,
      defaultPos: {x: 100, y: 310},
      draw: function (size, color) {
        noFill();
        stroke(color[0], color[1], color[2]);
        strokeWeight(size / 5);
        
        let lipWidth = size;
        let lipHeight = size / 1.5;
        
        beginShape();
        vertex(-lipWidth / 2, 0);
        bezierVertex(-lipWidth / 3, -lipHeight / 2, lipWidth / 3, -lipHeight / 2, lipWidth / 2, 0);
        endShape();
      },
    },
    {
      menuSize: 30,
      menuY: 0,
      defaultPos: {x: 100, y: 310},
      draw: function (size, color) {
        let lipWidth = size * 1.3;
        let lipHeight = size * 1.1;
        
        beginShape();
        vertex(lipWidth / 2, 0);
        bezierVertex(lipWidth / 3, lipHeight / 2, -lipWidth / 3, lipHeight / 2, -lipWidth / 2, 0);
        endShape();
      },
    },
    {
      menuSize: 30,
      menuY: 10,
      defaultPos: {x: 100, y: 310},
      draw: function (size, color) {
        let lipWidth = size * 1.3;
        let lipHeight = size * 1.1;
        
        // Draw mouth
        beginShape();
        vertex(-lipWidth / 2, 0);
        bezierVertex(-lipWidth / 3, -lipHeight / 2, lipWidth / 3, -lipHeight / 2, lipWidth / 2, 0);
        endShape();
      },
    },
  ]

};

var colors = [
  [112, 41, 3],
  [182, 93, 27],
  [151, 44, 0],
  [69, 65, 59],
  [178, 141, 255],
  [173, 248, 215],
  [254, 201, 221],
  [255, 171, 171],
  [110, 182, 255],
  [231, 255, 169],
  [151, 193, 169],
  [209, 182, 167]
];

var buttons = [
  {
    x: 90,
    y: 0,
    w: 50,
    h: 50,
    label: 'mouth',
    drawIcon: function() {
      var menuSize = parts['mouth'][0].menuSize;
      drawPart('mouth', 0, this.x+this.w/2, this.y+25, menuSize, 0, [0, 0, 0]);
    },
    onClick: function(){
      options.currentMenu = 'mouth';
      loadMenu('mouth');
    }
  },
  {
    x: 145,
    y: 0,
    w: 50,
    h: 50,
    label: 'eyebrow',
    drawIcon: function() {
      var menuSize = parts['eyebrows'][0].menuSize;
      drawPart('eyebrows', 0, this.x+12, this.y+25, -menuSize, 0, [0, 0, 0]);
      drawPart('eyebrows', 0, this.x+this.w-12, this.y+25, menuSize, 0, [0, 0, 0]);
    },
    onClick: function(){
      options.currentMenu = 'eyebrow';
      loadMenu('eyebrows');
    }
  },
  {
    x: 200,
    y: 0,
    w: 50,
    h: 50,
    label: 'hair',
    drawIcon: function() {
      var menuSize = parts['hair'][1].menuSize;
      drawPart('hair', 1, this.x+this.w/2, this.y+25, -menuSize, 0, [0, 0, 0]);
    },
    onClick: function(){
      options.currentMenu = 'hair';
      loadMenu('hair');
    }
  },
  {
    x: 255,
    y: 0,
    w: 50,
    h: 50,
    label: 'eye',
    drawIcon: function() {
      var menuSize = parts['eyes'][1].menuSize;
      drawPart('eyes', 1, this.x+12, this.y+25, -menuSize, 0, [0, 0, 0]);
      drawPart('eyes', 1, this.x+this.w-12, this.y+25, menuSize, 0, [0, 0, 0]);
    },
    onClick: function(){
      options.currentMenu = 'eye';
      loadMenu('eyes');
    }
  },
  {
    x: 310,
    y: 0,
    w: 50,
    h: 50,
    label: 'nose',
    drawIcon: function() {
      var menuSize = parts['nose'][1].menuSize;
      drawPart('nose', 1, this.x+this.w/2, this.y+25, -menuSize, 0, [0, 0, 0]);
    },
    onClick: function(){
      options.currentMenu = 'nose';
      loadMenu('nose');
    }
  },

  {
    x: 255,
    y: 255,
    w: 50,
    h: 50,
    label: 'up',
    attribute: 'addY',
    onClick: function(){
      options[options.currentMenu].addY -= 5;
    }
  },
  {
    x: 310,
    y: 255,
    w: 50,
    h: 50,
    label: 'down',
    attribute: 'addY',
    onClick: function(){
      options[options.currentMenu].addY += 5;
    }
  },

  {
    x: 255,
    y: 310,
    w: 50,
    h: 50,
    label: 'far',
    attribute: 'spacing',
    onClick: function(){
      options[options.currentMenu].spacing += 5;
    }
  },
  {
    x: 310,
    y: 310,
    w: 50,
    h: 50,
    label: 'close',
    attribute: 'spacing',
    onClick: function(){
      if (options[options.currentMenu].spacing <= 0) return;
      options[options.currentMenu].spacing -= 5;
    }
  },

  {
    x: 255,
    y: 365,
    w: 50,
    h: 50,
    label: 'bigger',
    attribute: 'size',
    onClick: function(){
      options[options.currentMenu].size += 5;
    }
  },
  {
    x: 310,
    y: 365,
    w: 50,
    h: 50,
    label: 'smaller',
    attribute: 'size',
    onClick: function(){
      if (options[options.currentMenu].size <= 5) return;
      options[options.currentMenu].size -= 5;
    }
  },

  {
    x: 255,
    y: 420,
    w: 50,
    h: 50,
    label: 'left',
    attribute: 'rotation',
    onClick: function(){
      options[options.currentMenu].rotation -= 0.1;
    }
  },
  {
    x: 310,
    y: 420,
    w: 50,
    h: 50,
    label: 'right',
    attribute: 'rotation',
    onClick: function(){
      options[options.currentMenu].rotation += 0.1;
    }
  },

  {
    x: 335,
    y: 55,
    w: 25,
    h: 25,
    color: colors[0],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 305,
    y: 55,
    w: 25,
    h: 25,
    color: colors[1],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 275,
    y: 55,
    w: 25,
    h: 25,
    color: colors[2],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 245,
    y: 55,
    w: 25,
    h: 25,
    color: colors[3],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 335,
    y: 85,
    w: 25,
    h: 25,
    color: colors[4],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 305,
    y: 85,
    w: 25,
    h: 25,
    color: colors[5],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 275,
    y: 85,
    w: 25,
    h: 25,
    color: colors[6],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 245,
    y: 85,
    w: 25,
    h: 25,
    color: colors[7],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },

  {
    x: 335,
    y: 115,
    w: 25,
    h: 25,
    color: colors[8],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 305,
    y: 115,
    w: 25,
    h: 25,
    color: colors[9],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 275,
    y: 115,
    w: 25,
    h: 25,
    color: colors[10],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  },
  {
    x: 245,
    y: 115,
    w: 25,
    h: 25,
    color: colors[11],
    onClick: function(){
      options[options.currentMenu].color = this.color;
    }
  }
];

var seedInput;

var options = {
  seed: '',
  currentMenu: 'eyebrow',
  head: {
    index: 0,
    size: 150,
    addY: 0,
    color: [255, 227, 198]
  },
  hair: {
    index: 0,
    size: 100,
    addY: 0,
    color: [255, 200, 100]
  },
  mouth: {
    index: 0,
    size: 30,
    addY: 0,
    rotation: 0,
    color: [0, 0, 0]
  },
  nose: {
    index: 0,
    size: 30,
    addY: 0,
    rotation: 0,
    color: [0, 0, 0]
  },
  eye: {
    index: 0,
    size: 30,
    addY: 0,
    spacing: 35,
    rotation: 0,
    color: [0, 0, 0]
  },
  eyebrow: {
    index: 0,
    size: 60,
    addY: 0,
    spacing: 35,
    rotation: 0,
    color: [89, 59, 40]
  }
}

function share() {
  var message = document.getElementById("copyMsg");
  message.classList.add("show");
  setTimeout(function() {
      message.classList.remove("show");
  }, 1000);

  // make options json smaller
  var minOptions = {
    a: [options.head.index, options.head.size, options.head.addY, options.head.color],
    b: [options.hair.index, options.hair.size, options.hair.addY, options.hair.color],
    c: [options.mouth.index, options.mouth.size, options.mouth.addY, options.mouth.rotation, options.mouth.color],
    d: [options.nose.index, options.nose.size, options.nose.addY, options.nose.rotation, options.nose.color],
    e: [options.eye.index, options.eye.size, options.eye.addY, options.eye.spacing, options.eye.rotation, options.eye.color],
    f: [options.eyebrow.index, options.eyebrow.size, options.eyebrow.addY, options.eyebrow.spacing, options.eyebrow.rotation, options.eyebrow.color]
  }

  var data = encodeURI(JSON.stringify(minOptions));
  window.history.pushState('', '', '?data=' + data);
  navigator.clipboard.writeText(window.location.href);
}

function loadPage() {
  seedInput = document.getElementById('seed');

  // check for seed in url
  const urlParams = new URLSearchParams(window.location.search);

  const data = urlParams.get('data');
  if (data) {
    loadData();
    return;
  }

  const seed = urlParams.get('seed');
  if (seed) {
    options.seed = seed;
    seedInput.value = seed;
    loadSeed();
    return;
  }

  newSeed();
}

function loadData() {
  const urlParams = new URLSearchParams(window.location.search);
  let minOptions = JSON.parse(decodeURI(urlParams.get('data')));

  // load minified options into normal json
  try {
    options = {
      seed: '',
      currentMenu: 'eyebrow',
      head: {
        index: minOptions.a[0],
        size: minOptions.a[1],
        addY: minOptions.a[2],
        color: minOptions.a[3]
      },
      hair: {
        index: minOptions.b[0],
        size: minOptions.b[1],
        addY: minOptions.b[2],
        color: minOptions.b[3]
      },
      mouth: {
        index: minOptions.c[0],
        size: minOptions.c[1],
        addY: minOptions.c[2],
        rotation: minOptions.c[3],
        color: minOptions.c[4]
      },
      nose: {
        index: minOptions.d[0],
        size: minOptions.d[1],
        addY: minOptions.d[2],
        rotation: minOptions.d[3],
        color: minOptions.d[4]
      },
      eye: {
        index: minOptions.e[0],
        size: minOptions.e[1],
        addY: minOptions.e[2],
        spacing: minOptions.e[3],
        rotation: minOptions.e[4],
        color: minOptions.e[5]
      },
      eyebrow: {
        index: minOptions.f[0],
        size: minOptions.f[1],
        addY: minOptions.f[2],
        spacing: minOptions.f[3],
        rotation: minOptions.f[4],
        color: minOptions.f[5]
      }
    }
  } catch (e) {
    newSeed();
  }

}

function newSeed() {
  options.seed = random(100000).toString();
  seedInput.value = options.seed;
  window.history.pushState('', '', '?seed=' + options.seed);
  loadSeed();
}

function rand(min, max, salt = '') {
  let hash = 0;
  let str = options.seed + salt;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return (hash % (max - min + 1)) + min;
}

function loadSeed() {
  options.seed = seedInput.value;

  //options.head.size = random(50, 200);
  options.hair.size = rand(50, 150, 'a99');
  options.hair.index = floor(rand(0, parts['hair'].length - 1, 'a11'));
  options.hair.color = colors[floor(rand(0, colors.length - 1, 'aaa'))];
  options.hair.addY = rand(-20, 20, 'at234tg');

  options.mouth.size = rand(20, 40, '34g');
  options.mouth.index = floor(rand(0, parts['mouth'].length - 1, '21e'));
  options.mouth.color = colors[floor(rand(0, colors.length - 1, 'bbb'))];
  options.mouth.addY = rand(-20, 20, '3t423t');
  options.mouth.rotation = rand(-PI/4, PI/4, '3t234t');

  options.nose.size = rand(20, 40, 't5y6i');
  options.nose.index = floor(rand(0, parts['nose'].length - 1, '23r23'));
  options.nose.color = colors[floor(rand(0, colors.length - 1, '222346'))];
  options.nose.addY = rand(-20, 20, '89y54');
  options.nose.rotation = rand(-PI/4, PI/4, '12g6j');

  options.eye.size = rand(20, 40, '213r43');
  options.eye.index = floor(rand(0, parts['eyes'].length - 1, '12eh6'));
  options.eye.color = colors[floor(rand(0, colors.length - 1, 'ddd'))];
  options.eye.addY = rand(-20, 20, 'ooo45');
  options.eye.rotation = rand(-PI/4, PI/4, '465h4');
  options.eye.spacing = rand(5, 50, 'gw34t54');

  options.eyebrow.size = rand(30, 60, '23f34');
  options.eyebrow.index = floor(rand(0, parts['eyebrows'].length - 1, '97645'));
  options.eyebrow.color = colors[floor(rand(0, colors.length - 1, 4, '123f43f'))];
  options.eyebrow.addY = rand(-20, 20, '3f23f');
  options.eyebrow.rotation = rand(-PI/4, PI/4, 'f234f');
  options.eyebrow.spacing = rand(5, 50, 'erge34t4');
}

function drawPart(partName, index, x, y, size, rotation, color) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(color[0], color[1], color[2]);

  parts[partName][index].draw(size, color);

  pop();
}

function setup() {
  createCanvas(500, 500);

  loadPage();
  
  // click first menu button
  buttons[0].onClick();
}

function draw() {
  background(0);

  // draw buttons
  for(var i=0; i<buttons.length; i++) {
    var b = buttons[i];
    drawButton(b);
  }

  let head = options.head;
  let headPos = parts['head'][head.index].defaultPos;
  drawPart('head', head.index, headPos.x, headPos.y + head.addY, head.size, 0, head.color);

  let hair = options.hair;
  let hairPos = parts['hair'][hair.index].defaultPos;
  drawPart('hair', hair.index, hairPos.x, hairPos.y + hair.addY, hair.size, 0, hair.color);

  let mouth = options.mouth;
  let mouthPos = parts['mouth'][mouth.index].defaultPos;
  drawPart('mouth', mouth.index, mouthPos.x, mouthPos.y + mouth.addY, mouth.size, mouth.rotation, mouth.color);

  let eye = options.eye;
  let eyePos = parts['eyes'][eye.index].defaultPos;
  drawPart('eyes', eye.index, eyePos.x - eye.spacing, eyePos.y + eye.addY, -eye.size, -eye.rotation, eye.color);
  drawPart('eyes', eye.index, eyePos.x + eye.spacing, eyePos.y + eye.addY, eye.size, eye.rotation, eye.color);

  let nose = options.nose;
  let nosePos = parts['nose'][nose.index].defaultPos;
  drawPart('nose', nose.index, nosePos.x, nosePos.y + nose.addY, nose.size, nose.rotation, nose.color);

  let brow = options.eyebrow;
  let browPos = parts['eyebrows'][brow.index].defaultPos;
  drawPart('eyebrows', brow.index, browPos.x - brow.spacing, browPos.y + brow.addY, -brow.size, -brow.rotation, brow.color);
  drawPart('eyebrows', brow.index, browPos.x + brow.spacing, browPos.y + brow.addY, brow.size, brow.rotation, brow.color);
}

function loadMenu(menuName) {
  let menu = parts[menuName];
  // delete temp buttons
  buttons = buttons.filter(b => !b.temp);

  // create buttons for menu
  for (var i = 0; i < menu.length; i++) {
    let index = i;
    var b = {
      x: 255 + (i > 0 && i % 2 == 1 ? 55 : 0),
      y: 145 + 55*floor(i/2),
      w: 50,
      h: 50,
      label: 'brow ' + i,
      drawIcon: function() {
        var menuSize = menu[index].menuSize;
        var menuY = menu[index].menuY;
        if (menuName == 'nose' || menuName == 'hair' || menuName == 'head' || menuName == 'mouth') {
          drawPart(menuName, index, this.x+this.w/2, this.y+this.h/2 + menuY, menuSize, 0, [0, 0, 0]);
        } else {
          drawPart(menuName, index, this.x+12, this.y+this.w/2, -menuSize, 0, [0, 0, 0]);
          drawPart(menuName, index, this.x+this.w-12, this.y+this.h/2 + menuY, menuSize, 0, [0, 0, 0]);
        }
      },
      onClick: function() {
        options[options.currentMenu].index = index;
      },
      temp: true,
    };
    buttons.push(b);
  }
}

function drawButton(b) {

  // skip attribute buttons that don't apply on current page
  if (b.attribute && options[options.currentMenu][b.attribute] == null) {
    return;
  }

  if (mouseIsPressed && isMouseOverButton(b)) {
    fill(80); // pressed
  } else if (options.currentMenu == b.label) {
    fill(100); // selected
  } else {

    if (b.color) {
      fill(b.color[0], b.color[1], b.color[2]); // custom color
    } else {
      fill(150); // default not selected
    }

  }

  rect(b.x, b.y, b.w, b.h);
  if (b.drawIcon) {
    b.drawIcon();
  } else if (b.label) {
    fill(0);
    text(b.label, b.x+10, b.y+30);
  }
}

function mousePressed() {
  for(var i=0; i<buttons.length; i++) {
    var b = buttons[i];
    if (isMouseOverButton(b)) {
      b.onClick();
    }
  }
}

function isMouseOverButton(b) {
  return mouseX > b.x && mouseX < b.x+b.w && mouseY > b.y && mouseY < b.y+b.h;
}
