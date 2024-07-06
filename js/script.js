history.scrollRestoration = 'manual'

const numStars = 45;

const hero = document.getElementById('hero');
for (let i = 0; i < numStars; i++) {
	const star = document.createElement('div');
	star.classList.add('sparkle'); 
	star.style.top = `${Math.random() * 100}%`;
	star.style.left = `${Math.random() * 100}%`;
	hero.appendChild(star);
}

var bottone = document.getElementById('scopri');
var destinazione = document.getElementById('serv');

bottone.addEventListener('click', function() {
  var offsetTop = destinazione.offsetTop;
  var duration = 1400; // Durata dello scorrimento in millisecondi
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  var scroll = function() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, ((now - startTime) / duration));
    var easedTime = easeInOutQuad(time);

    window.scrollTo(0, start + ((offsetTop - start) * easedTime));

    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  };

  var easeInOutQuad = function(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  requestAnimationFrame(scroll);
});

document.addEventListener("DOMContentLoaded", function() {
    const animElements = document.querySelectorAll('.anim');
    
    window.addEventListener('scroll', function() {
        animElements.forEach(function(anim) {
            const divPosition = anim.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 2;

            if (divPosition < screenPosition) {
                anim.classList.add('visible');
            }
        });
    });
});

event.target.style.width / document.documentElement.clientWidth * 100
