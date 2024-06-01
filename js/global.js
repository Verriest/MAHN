
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

    function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
        
        var i = 0;
        var timer = setInterval(function() {
        if (i < text.length) {
          element.append(text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    }
    
    
    // application
    var speed = 75;
    var h1 = document.querySelector('h1');
    var p = document.querySelector('p');
    var delay = h1.innerHTML.length * speed + speed;
    
    // type affect to header
    typeEffect(h1, speed);
    
    
    // type affect to body
    setTimeout(function(){
      p.style.display = "inline-block";
      typeEffect(p, speed);
    }, delay);
    