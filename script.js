const menuLinks = document.querySelectorAll('.menu li a');

menuLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const headerHeight = document.querySelector('.header').offsetHeight;
  const targetPosition = targetElement.getBoundingClientRect().top - headerHeight;
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, 1000);
    window.scrollTo(0, run);
    if (timeElapsed < 1000) requestAnimationFrame(scrollAnimation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

// JavaScript for logo rotation animation
const logo = document.querySelector('.logo h1');

window.addEventListener('load', rotateLogo);

function rotateLogo() {
  logo.style.animation = 'rotateLogo 2s ease-in-out';
}

const introduction = document.querySelector('.introduction');


window.addEventListener('load', function() {
  introduction.classList.add('active');
});

// JavaScript for parallax effect
window.addEventListener('scroll', parallax);

function parallax() {
  const scrolled = window.pageYOffset;
  introduction.style.backgroundPositionY = -(scrolled * 0.4) + 'px';
}

 // ... (previous JavaScript code remains the same) ...

  // JavaScript for real bubble effect
  const bubbleContainer = document.getElementById('bubble-container');

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = `${Math.random() * 20 + 10}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
    bubble.style.animationDelay = `${Math.random() * 2}s`;

    bubbleContainer.appendChild(bubble);

    bubble.addEventListener('animationiteration', () => {
      bubbleContainer.removeChild(bubble);
    });
  }

  setInterval(createBubble, 2000); // Create a new bubble every 2 seconds

  const professions = ['Front-End Developer', 'UX Designer'];
  let professionIndex = 0;
  let professionElement = document.getElementById('profession');
  
  function typeProfession() {
    let prefix = "I'm a ";
    let currentProfession = professions[professionIndex];
    let charIndex = 0;
  
    function type() {
      const text = currentProfession.slice(0, ++charIndex);
      professionElement.textContent = prefix + text;
  
      if (charIndex < currentProfession.length) {
        setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
      } else {
        setTimeout(erase, 1500); // Wait for a while before erasing
      }
    }
  
    function erase() {
      const text = currentProfession.slice(0, --charIndex);
      professionElement.textContent = prefix + text;
  
      if (charIndex > 0) {
        setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
      } else {
        professionIndex = (professionIndex + 1) % professions.length;
        currentProfession = professions[professionIndex];
        setTimeout(type, 500); // Wait for a while before typing the next profession
      }
    }
  
    type();
  }
  
  typeProfession(); // Start the typing effect
  


  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  

  const backToTopButton = document.querySelector('.back-to-top');
const scrollDuration = 500; // Adjust scrolling duration (in milliseconds)

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

backToTopButton.addEventListener('click', function (e) {
  e.preventDefault();

  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollToTop(currentTime) {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, -startPosition, scrollDuration);
    window.scrollTo(0, run);
    if (timeElapsed < scrollDuration) requestAnimationFrame(scrollToTop);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollToTop);
});
