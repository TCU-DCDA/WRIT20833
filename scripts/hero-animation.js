// Hero Animation: Humanities meets Code
// Metaphorical representation of text/humanities flowing into computational structures

let particles = [];
let codeStructures = [];
let humanitiesWords = ['poetry', 'literature', 'history', 'culture', 'narrative', 'meaning', 'identity', 'society', 'philosophy', 'art'];
let codeWords = ['function', 'variable', 'array', 'loop', 'class', 'method', 'object', 'data', 'algorithm', 'syntax'];
let wordIndex = 0;
let codeIndex = 0;
let canvas;

function setup() {
    // Create canvas and attach it to the hero animation div
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('hero-animation');
    
    // Initialize particles representing humanities concepts
    for (let i = 0; i < 50; i++) {
        particles.push(new HumanitiesParticle());
    }
    
    // Initialize code structures
    for (let i = 0; i < 8; i++) {
        codeStructures.push(new CodeStructure(random(width), random(height)));
    }
}

function draw() {
    clear(); // Transparent background to show hero content behind
    
    // Update and display humanities particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        
        // Check if particle should transform into code
        if (particles[i].shouldTransform()) {
            particles.splice(i, 1);
            // Add a new code particle
            particles.push(new CodeParticle());
        }
    }
    
    // Update and display code structures
    for (let structure of codeStructures) {
        structure.update();
        structure.display();
    }
    
    // Add new humanities particles occasionally
    if (frameCount % 120 === 0) {
        particles.push(new HumanitiesParticle());
    }
    
    // Draw connection lines between nearby elements
    drawConnections();
}

class HumanitiesParticle {
    constructor() {
        this.x = random(-100, width + 100);
        this.y = random(height);
        this.vx = random(-0.5, 0.5);
        this.vy = random(-0.3, 0.3);
        this.word = random(humanitiesWords);
        this.alpha = 255;
        this.size = random(12, 18);
        this.life = 300;
        this.maxLife = 300;
        this.color = color(0, 245, 255, this.alpha); // Cyan
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.alpha = map(this.life, 0, this.maxLife, 0, 180);
        this.color = color(0, 245, 255, this.alpha);
        
        // Gentle floating motion
        this.x += sin(frameCount * 0.01 + this.y * 0.01) * 0.5;
        this.y += cos(frameCount * 0.005 + this.x * 0.01) * 0.3;
    }
    
    display() {
        push();
        translate(this.x, this.y);
        
        // Text glow effect
        fill(this.color);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont('Rajdhani');
        
        // Draw text with glow
        for (let i = 3; i > 0; i--) {
            fill(0, 245, 255, this.alpha / (i * 2));
            text(this.word, 0, 0);
        }
        
        pop();
    }
    
    shouldTransform() {
        return this.life <= 0 && random() < 0.3;
    }
}

class CodeParticle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-0.3, 0.3);
        this.vy = random(-0.3, 0.3);
        this.word = random(codeWords);
        this.alpha = 255;
        this.size = random(10, 14);
        this.life = 400;
        this.maxLife = 400;
        this.color = color(255, 0, 128, this.alpha); // Pink
        this.brackets = random(['{}', '[]', '()', '<>']);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.alpha = map(this.life, 0, this.maxLife, 0, 200);
        this.color = color(255, 0, 128, this.alpha);
        
        // More structured movement
        this.x += sin(frameCount * 0.02) * 0.2;
        this.y += cos(frameCount * 0.015) * 0.2;
    }
    
    display() {
        push();
        translate(this.x, this.y);
        
        fill(this.color);
        textAlign(CENTER, CENTER);
        textSize(this.size);
        textFont('Orbitron');
        
        // Draw code with brackets
        let displayText = this.brackets.charAt(0) + this.word + this.brackets.charAt(1);
        
        // Draw text with glow
        for (let i = 2; i > 0; i--) {
            fill(255, 0, 128, this.alpha / (i * 1.5));
            text(displayText, 0, 0);
        }
        
        pop();
    }
}

class CodeStructure {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.nodes = [];
        this.connections = [];
        this.pulsePhase = random(TWO_PI);
        
        // Create a small network structure
        for (let i = 0; i < 4; i++) {
            this.nodes.push({
                x: random(-30, 30),
                y: random(-30, 30),
                pulse: random(TWO_PI)
            });
        }
        
        // Create connections between nodes
        for (let i = 0; i < this.nodes.length - 1; i++) {
            this.connections.push([i, (i + 1) % this.nodes.length]);
        }
    }
    
    update() {
        this.pulsePhase += 0.02;
        for (let node of this.nodes) {
            node.pulse += 0.05;
        }
        
        // Slow drift
        this.x += sin(frameCount * 0.003) * 0.1;
        this.y += cos(frameCount * 0.004) * 0.1;
    }
    
    display() {
        push();
        translate(this.x, this.y);
        
        // Draw connections
        stroke(0, 255, 65, 100); // Green
        strokeWeight(1);
        for (let conn of this.connections) {
            let node1 = this.nodes[conn[0]];
            let node2 = this.nodes[conn[1]];
            line(node1.x, node1.y, node2.x, node2.y);
        }
        
        // Draw nodes
        noStroke();
        for (let node of this.nodes) {
            let pulse = sin(node.pulse) * 0.5 + 0.5;
            let size = 3 + pulse * 2;
            fill(0, 255, 65, 150 + pulse * 100); // Green
            ellipse(node.x, node.y, size);
            
            // Node glow
            fill(0, 255, 65, 50);
            ellipse(node.x, node.y, size * 3);
        }
        
        pop();
    }
}

function drawConnections() {
    stroke(128, 0, 255, 30); // Purple
    strokeWeight(0.5);
    
    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let d = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            if (d < 100) {
                let alpha = map(d, 0, 100, 50, 0);
                stroke(128, 0, 255, alpha);
                line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Function to start animation (called from main.js)
function startHeroAnimation() {
    // Animation will start automatically when P5.js loads
}
