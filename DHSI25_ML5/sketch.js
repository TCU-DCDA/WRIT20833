/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates face mesh and hand tracking.
 */

let faceMesh;
let handPose;
let video;
let faces = [];
let hands = [];
let thoughts = [];
let faceOptions = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };
let handOptions = { maxHands: 2, flipHorizontal: false };

// Self-deprecating thoughts
let negativeThoughts = [
  "I'm not good enough",
  "Everyone is judging me",
  "I always mess things up",
  "I'm such a failure",
  "Why did I say that?",
  "I'm so awkward",
  "Nobody likes me",
  "I'm disappointing everyone",
  "I can't do anything right",
  "I'm so stupid",
  "I don't belong here",
  "I'm wasting everyone's time",
  "I'm such an impostor",
  "I'm going to embarrass myself",
  "I'm not smart enough",
  "I should just give up",
  "I'm so pathetic",
  "Everyone can see I'm fake",
  "I'm never going to succeed",
  "I'm so annoying"
];

function preload() {
  // Load face mesh and hand pose models
  faceMesh = ml5.faceMesh(faceOptions);
  handPose = ml5.handPose(handOptions);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  // Start detecting face and hands
  faceMesh.detectStart(video, gotFaces);
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Clear background (remove this line to show video)
  background("#4d1979"); // Purple background
  // Uncomment the line below to show the video feed:
  // image(video, 0, 0, width, height);

  // Draw face mesh tracking
  drawFaceMesh();
  
  // Draw hand tracking
  drawHands();
  
  // Draw streaming thoughts
  drawThoughts();
  
  // Generate new thoughts occasionally
  if (faces.length > 0 && random() < 0.02) { // 2% chance each frame
    generateThought();
  }
  
  // Update existing thoughts
  updateThoughts();
  
  // Check for hand interactions with thoughts
  checkHandInteractions();
}

// Handle window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(windowWidth, windowHeight);
}

// Draw face mesh points
function drawFaceMesh() {
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      fill("white");
      noStroke();
      circle(keypoint.x, keypoint.y, 2); // Smaller points for face detail
    }
  }
}

// Draw hand tracking points and connections
function drawHands() {
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    
    // Draw hand keypoints
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill("white");
      noStroke();
      circle(keypoint.x, keypoint.y, 5);
    }
    
    // Draw hand skeleton
    drawHandSkeleton(hand);
  }
}

// Draw hand skeleton connections
function drawHandSkeleton(hand) {
  stroke("white");
  strokeWeight(1);
  
  // Hand connections - fingers and palm
  let connections = [
    // Thumb
    [0, 1], [1, 2], [2, 3], [3, 4],
    // Index finger
    [0, 5], [5, 6], [6, 7], [7, 8],
    // Middle finger
    [0, 9], [9, 10], [10, 11], [11, 12],
    // Ring finger
    [0, 13], [13, 14], [14, 15], [15, 16],
    // Pinky
    [0, 17], [17, 18], [18, 19], [19, 20],
    // Palm connections
    [5, 9], [9, 13], [13, 17]
  ];
  
  for (let connection of connections) {
    let pointA = hand.keypoints[connection[0]];
    let pointB = hand.keypoints[connection[1]];
    
    if (pointA && pointB) {
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}

// Callback functions
function gotFaces(results) {
  faces = results;
}

function gotHands(results) {
  hands = results;
}

// Generate a new thought from a random face point
function generateThought() {
  if (faces.length > 0) {
    let face = faces[0];
    // Pick a random keypoint from the head area (roughly top 1/3 of face points)
    let headPoints = face.keypoints.slice(0, Math.floor(face.keypoints.length / 3));
    let randomPoint = random(headPoints);
    
    let thought = {
      text: random(negativeThoughts),
      centerX: randomPoint.x, // center point for orbiting
      centerY: randomPoint.y,
      angle: random(TWO_PI), // starting angle for circular motion
      radius: random(50, 120), // distance from center
      angleSpeed: random(0.01, 0.03), // how fast it orbits
      radiusSpeed: random(0.5, 1.5), // how the radius changes
      alpha: 255,
      life: 0,
      maxLife: random(600, 900), // longer life - 10-15 seconds
      bobSpeed: random(0.02, 0.05), // vertical bobbing
      bobAmount: random(10, 25), // how much it bobs
      beingBrushed: false, // flag for brush interaction
      brushedLife: 0 // time since being brushed
    };
    
    thoughts.push(thought);
  }
}

// Update and remove old thoughts
function updateThoughts() {
  for (let i = thoughts.length - 1; i >= 0; i--) {
    let thought = thoughts[i];
    
    if (thought.beingBrushed) {
      // Handle brushed thoughts - make them scatter and fade quickly
      thought.brushedLife++;
      thought.centerX += random(-5, 5); // scatter movement
      thought.centerY += random(-5, 5);
      thought.alpha = map(thought.brushedLife, 0, 30, 255, 0); // fade out quickly
      
      // Remove brushed thoughts after 30 frames (0.5 seconds)
      if (thought.brushedLife >= 30) {
        thoughts.splice(i, 1);
        continue;
      }
    }
    
    // Update the orbital motion
    thought.angle += thought.angleSpeed;
    thought.life++;
    
    // Create swirling motion with changing radius
    let radiusVariation = sin(thought.life * 0.02) * 20;
    let currentRadius = thought.radius + radiusVariation;
    
    // Calculate position based on circular motion around the center point
    thought.x = thought.centerX + cos(thought.angle) * currentRadius;
    thought.y = thought.centerY + sin(thought.angle) * currentRadius;
    
    // Add vertical bobbing motion
    thought.y += sin(thought.life * thought.bobSpeed) * thought.bobAmount;
    
    // Keep thoughts on screen by constraining position
    thought.x = constrain(thought.x, 0, width);
    thought.y = constrain(thought.y, 0, height);
    
    if (!thought.beingBrushed) {
      // Fade in and out cycle instead of just fading out
      let fadePhase = (thought.life / thought.maxLife) * TWO_PI;
      thought.alpha = (sin(fadePhase * 0.5) * 0.5 + 0.5) * 200 + 55; // oscillate between 55-255
    }
    
    // Remove if life expired
    if (thought.life >= thought.maxLife) {
      thoughts.splice(i, 1);
    }
  }
}

// Draw all streaming thoughts
function drawThoughts() {
  textAlign(LEFT, CENTER);
  textSize(12);
  
  for (let thought of thoughts) {
    fill(255, thought.alpha);
    noStroke();
    text(thought.text, thought.x, thought.y);
  }
}

// Check if hands are interacting with thoughts
function checkHandInteractions() {
  for (let hand of hands) {
    for (let keypoint of hand.keypoints) {
      // Check each thought for collision with hand points
      for (let thought of thoughts) {
        if (!thought.beingBrushed) {
          let distance = dist(keypoint.x, keypoint.y, thought.x, thought.y);
          // If hand is close enough to thought, start brushing it away
          if (distance < 40) { // 40 pixel brush radius
            thought.beingBrushed = true;
            thought.brushedLife = 0;
          }
        }
      }
    }
  }
}
