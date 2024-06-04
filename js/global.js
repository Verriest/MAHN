
// -------------------------------------------------------------------- NOISE BACKGROUND

const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

noise();


if ( window.addEventListener ) {
    var state = 0, do_want = [38,38,40,40,37,39,37,39,66,65];
    window.addEventListener("keydown", function(e) {
    if ( e.keyCode == do_want[state] ) state++;
    else state = 0;
    if ( state == 10 )
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=14s";
    }, true);
    }


    $(document).ready(function(){
        $('.menu-toggle').click(function(){
            $('.menu-toggle').toggleClass('active')
            $('nav').toggleClass('active')
        })
    })

    // ------------------------------------------------------------------  TIPING SCRIPT

    // function typeEffect(element, speed) {
    //     var text = element.innerHTML;
    //     element.innerHTML = "";
        
    //     var i = 0;
    //     var timer = setInterval(function() {
    //     if (i < text.length) {
    //       element.append(text.charAt(i));
    //       i++;
    //     } else {
    //       clearInterval(timer);
    //     }
    //   }, speed);
    // }
    
    
    // // application
    // var speed = 75;
    // var h1 = document.querySelector('h1');
    // var p = document.querySelector('p');
    // var delay = h1.innerHTML.length * speed + speed;
    
    // // type affect to header
    // typeEffect(h1, speed);
    
    
    // // type affect to body
    // setTimeout(function(){
    //   p.style.display = "inline-block";
    //   typeEffect(p, speed);
    // }, delay);
    

    /*  GLITCH TEXTE RANDOM*/

    const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

var Glitch = function(selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch){
	this.selector = selector;
	this.index = index;
	this.numberOfGlitchedLetter = numberOfGlitchedLetter;
	this.innerText;
	this.charArray = [];
	this.charIndex = [];
	this.timeGlitch = timeGlitch;
	this.timeBetweenGlitch = timeBetweenGlitch;
	this.timePerLetter = timePerLetter;
	this.maxCount = Math.floor(this.timeGlitch/this.timePerLetter);
	this.count = 0;
}

Glitch.prototype.init = function(){
	this.innerText = this.selector.innerText;
	this.charArray = this.innerText.split("");
	if(this.numberOfGlitchedLetter == undefined || this.numberOfGlitchedLetter > this.innerText.length){
		this.numberOfGlitchedLetter = this.innerText.length;
	}
	this.defineCharIndexToRandomize();
}

Glitch.prototype.defineCharIndexToRandomize = function(){
	this.charIndex = [];
	for(let i=0; i<this.numberOfGlitchedLetter; i++){
		let randCharIndex = Math.floor(Math.random() * this.charArray.length);
		this.charIndex.push(randCharIndex);
	}
}

Glitch.prototype.randomize = function(){
	//copy the char array
	let randomString = Array.from(this.charArray);
	
	//randomize char
	for(let i=0; i<this.numberOfGlitchedLetter; i++){
		let randIndex = Math.floor(Math.random() * chars.length);
		let randCharIndex = this.charIndex[i];
		if(randomString[randCharIndex] !== ' '){
			randomString[randCharIndex] = chars[randIndex];
		}
	}
	this.selector.innerText = randomString.join("");
}

Glitch.prototype.update = function(interval){
	if(this.count >= this.maxCount - 1){
		this.selector.innerText = this.innerText;
		this.defineCharIndexToRandomize();
		let ctx = this;
		let wait = setTimeout(function(){
			ctx.count = 0;
		}, this.timeBetweenGlitch);
	}else{
		this.randomize();
		this.count ++;
	}
}

Glitch.prototype.glitch = function(){
	let ctx = this;
	let interval= setInterval(function(){
        ctx.update(this);
        },this.timePerLetter);
}

var arrayElements;
var glitchArray = [];

function initAllGlitch(){
	arrayElements = document.querySelectorAll(".glitch-random");
	for(let i=0; i<arrayElements.length; i++){
		let selector = arrayElements[i];
		let randLetterNumber = 2 + Math.floor(Math.random() * 3);
		let randGlitchTime = 500 + Math.floor(Math.random() * 2500);
		let randGlitchPauseTime = 10500 + Math.floor(Math.random() * 2500);
		let glitch = new Glitch(selector, i, randLetterNumber, 200, 65, randGlitchPauseTime);
		glitch.init();
		glitchArray.push(glitch);
	}
}


function update(){
	for(let i=0; i<glitchArray.length; i++){
		let glitch = glitchArray[i];
		glitch.glitch();
	}
}

initAllGlitch();
update();


document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour retirer les classes glitch et layers des éléments avec la classe random-glitch
    function removeGlitchClasses() {
        document.querySelectorAll('.random-glitch').forEach(el => {
            el.classList.remove('glitch', 'layers');
        });
    }

    // Fonction pour ajouter les classes glitch et layers à un élément aléatoire avec la classe random-glitch
    function addGlitchClassesRandomly() {
        const elements = document.querySelectorAll('.random-glitch');
        if (elements.length === 0) return;

        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomElement = elements[randomIndex];

        randomElement.classList.add('glitch', 'layers');

        // Après 5 secondes, retirer à nouveau les classes
        setTimeout(() => {
            randomElement.classList.remove('glitch', 'layers');
        }, 5000);
    }

    // Fonction pour gérer le cycle de retrait et d'ajout des classes
    function glitchCycle() {
        removeGlitchClasses();
        addGlitchClassesRandomly();

        // Planifier le prochain cycle dans un temps aléatoire entre 10 et 15 secondes
        const randomTime = Math.floor(Math.random() * 5000) + 10000; // Entre 10000 ms (10s) et 15000 ms (15s)
        setTimeout(glitchCycle, randomTime);
    }

    // Lancer le premier cycle
    glitchCycle();
});