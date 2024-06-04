
console.log("INITIATION CODE JS GLOBAL");

// -------------------------------------------------------------------- NOISE BACKGROUND

const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;

    // Create Noise
    const createNoise = () => {
        try {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;

            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }

            noiseData.push(idata);
        } catch (error) {
            console.error("Error in createNoise:", error);
        }
    };

    // Play Noise
    const paintNoise = () => {
        try {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }

            ctx.putImageData(noiseData[frame], 0, 0);
        } catch (error) {
            console.error("Error in paintNoise:", error);
        }
    };

    // Loop
    const loop = () => {
        try {
            paintNoise(frame);

            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, (1000 / 25));
        } catch (error) {
            console.error("Error in loop:", error);
        }
    };

    // Setup
    const setup = () => {
        try {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;

            canvas.width = wWidth;
            canvas.height = wHeight;

            for (let i = 0; i < 10; i++) {
                createNoise();
            }

            loop();
        } catch (error) {
            console.error("Error in setup:", error);
        }
    };

    // Reset
    let resizeThrottle;
    const reset = () => {
        try {
            window.addEventListener('resize', () => {
                window.clearTimeout(resizeThrottle);

                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        } catch (error) {
            console.error("Error in reset:", error);
        }
    };

    // Init
    const init = (() => {
        try {
            canvas = document.getElementById('noise');
            if (canvas) {
                ctx = canvas.getContext('2d');
                setup();
            } else {
                console.warn("Canvas element with id 'noise' not found.");
            }
        } catch (error) {
            console.error("Error in init:", error);
        }
    })();
};

noise();

if (window.addEventListener) {
    try {
        var state = 0, do_want = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        window.addEventListener("keydown", function (e) {
            if (e.keyCode == do_want[state]) state++;
            else state = 0;
            if (state == 10)
                window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=14s";
        }, true);
    } catch (error) {
        console.error("Error in keydown event listener:", error);
    }
}

$(document).ready(function () {
    try {
        $('.menu-toggle').click(function () {
            $('.menu-toggle').toggleClass('active')
            $('nav').toggleClass('active')
        });
    } catch (error) {
        console.error("Error in document ready:", error);
    }
});

// ------------------------------------------------------------------  TYPING SCRIPT

// Uncomment the following code if the necessary elements are present

// function typeEffect(element, speed) {
//     try {
//         var text = element.innerHTML;
//         element.innerHTML = "";
        
//         var i = 0;
//         var timer = setInterval(function() {
//             if (i < text.length) {
//                 element.append(text.charAt(i));
//                 i++;
//             } else {
//                 clearInterval(timer);
//             }
//         }, speed);
//     } catch (error) {
//         console.error("Error in typeEffect:", error);
//     }
// }

// var speed = 75;
// var h1 = document.querySelector('h1');
// var p = document.querySelector('p');
// var delay = h1 ? h1.innerHTML.length * speed + speed : 0;

// if (h1 && p) {
//     typeEffect(h1, speed);
//     setTimeout(function () {
//         p.style.display = "inline-block";
//         typeEffect(p, speed);
//     }, delay);
// } else {
//     console.warn("Elements 'h1' or 'p' not found.");
// }

// ------------------------------------------------------------------  GLITCH TEXTE RANDOM

const chars = "☺Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

var Glitch = function (selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch) {
    this.selector = selector;
    this.index = index;
    this.numberOfGlitchedLetter = numberOfGlitchedLetter;
    this.innerText;
    this.charArray = [];
    this.charIndex = [];
    this.timeGlitch = timeGlitch;
    this.timeBetweenGlitch = timeBetweenGlitch;
    this.timePerLetter = timePerLetter;
    this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
    this.count = 0;
}

Glitch.prototype.init = function () {
    try {
        this.innerText = this.selector.innerText;
        this.charArray = this.innerText.split("");
        if (this.numberOfGlitchedLetter == undefined || this.numberOfGlitchedLetter > this.innerText.length) {
            this.numberOfGlitchedLetter = this.innerText.length;
        }
        this.defineCharIndexToRandomize();
    } catch (error) {
        console.error("Error in Glitch.init:", error);
    }
}

Glitch.prototype.defineCharIndexToRandomize = function () {
    try {
        this.charIndex = [];
        for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
            let randCharIndex = Math.floor(Math.random() * this.charArray.length);
            this.charIndex.push(randCharIndex);
        }
    } catch (error) {
        console.error("Error in Glitch.defineCharIndexToRandomize:", error);
    }
}

Glitch.prototype.randomize = function () {
    try {
        //copy the char array
        let randomString = Array.from(this.charArray);

        //randomize char
        for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
            let randIndex = Math.floor(Math.random() * chars.length);
            let randCharIndex = this.charIndex[i];
            if (randomString[randCharIndex] !== ' ') {
                randomString[randCharIndex] = chars[randIndex];
            }
        }
        this.selector.innerText = randomString.join("");
    } catch (error) {
        console.error("Error in Glitch.randomize:", error);
    }
}

Glitch.prototype.update = function (interval) {
    try {
        if (this.count >= this.maxCount - 1) {
            this.selector.innerText = this.innerText;
            this.defineCharIndexToRandomize();
            let ctx = this;
            let wait = setTimeout(function () {
                ctx.count = 0;
            }, this.timeBetweenGlitch);
        } else {
            this.randomize();
            this.count++;
        }
    } catch (error) {
        console.error("Error in Glitch.update:", error);
    }
}

Glitch.prototype.glitch = function () {
    try {
        let ctx = this;
        let interval = setInterval(function () {
            ctx.update(this);
        }, this.timePerLetter);
    } catch (error) {
        console.error("Error in Glitch.glitch:", error);
    }
}

var arrayElements;
var glitchArray = [];

function initAllGlitch() {
    try {
        arrayElements = document.querySelectorAll(".glitch-random");
        for (let i = 0; i < arrayElements.length; i++) {
            let selector = arrayElements[i];
            let randLetterNumber = 2 + Math.floor(Math.random() * 3);
            let randGlitchTime = 500 + Math.floor(Math.random() * 2500);
            let randGlitchPauseTime = 10500 + Math.floor(Math.random() * 2500);
            let glitch = new Glitch(selector, i, randLetterNumber, 200, 65, randGlitchPauseTime);
            glitch.init();
            glitchArray.push(glitch);
        }
    } catch (error) {
        console.error("Error in initAllGlitch:", error);
    }
}

function update() {
    try {
        for (let i = 0; i < glitchArray.length; i++) {
            let glitch = glitchArray[i];
            glitch.glitch();
        }
    } catch (error) {
        console.error("Error in update:", error);
    }
}

initAllGlitch();
update();

// ------------------------------------------------------------------  GLITCH MOT RANDOM CSS


document.addEventListener('DOMContentLoaded', () => {
    try {
             // Fonction pour retirer les classes glitch et layers des éléments avec la classe random-glitch
             function removeGlitchClasses() {
                try {
                    document.querySelectorAll('.random-glitch').forEach(el => {
                        el.classList.remove('glitch', 'layers');
                    });
                } catch (error) {
                    console.error("Error in removeGlitchClasses:", error);
                }
            }
    
            // Fonction pour ajouter les classes glitch et layers à un élément aléatoire avec la classe random-glitch
            function addGlitchClassesRandomly() {
                try {
                    const elements = document.querySelectorAll('.random-glitch');
                    if (elements.length === 0) return;
    
                    const randomIndex = Math.floor(Math.random() * elements.length);
                    const randomElement = elements[randomIndex];
    
                    randomElement.classList.add('glitch', 'layers');
    
                    // Après 5 secondes, retirer à nouveau les classes
                    setTimeout(() => {
                        try {
                            randomElement.classList.remove('glitch', 'layers');
                        } catch (error) {
                            console.error("Error in setTimeout (remove glitch classes):", error);
                        }
                    }, 5000);
                } catch (error) {
                    console.error("Error in addGlitchClassesRandomly:", error);
                }
            }
    
            // Fonction pour gérer le cycle de retrait et d'ajout des classes
            function glitchCycle() {
                try {
                    removeGlitchClasses();
                    addGlitchClassesRandomly();
    
                    // Planifier le prochain cycle dans un temps aléatoire entre 10 et 15 secondes
                    const randomTime = Math.floor(Math.random() * 5000) + 10000; // Entre 10000 ms (10s) et 15000 ms (15s)
                    setTimeout(glitchCycle, randomTime);
                } catch (error) {
                    console.error("Error in glitchCycle:", error);
                }
            }
    
            // Lancer le premier cycle
            glitchCycle();
        } catch (error) {
            console.error("Error in DOMContentLoaded event:", error);
        }
    });
    









    console.log("END JS GLOBAL");