
// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});

// JavaScript for the typing effect
const professionText = document.getElementById("profession");
const professions = ["Web Developer", "UI/UX Designer"]; // Add other professions here
let professionIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < professions[professionIndex].length) {
    professionText.textContent += professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Typing speed (adjust as needed)
  } else {
    setTimeout(erase, 1000); // Delay before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    professionText.textContent = professions[professionIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Deleting speed (adjust as needed)
  } else {
    professionIndex = (professionIndex + 1) % professions.length;
    setTimeout(type, 500); // Delay before typing the next profession
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1500); // Delay before starting the typing effect
});

document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.getElementById("introduction");
    const introContent = document.querySelector(".intro-content");
    const introImage = document.querySelector(".intro-image");
    const introDetails = document.querySelector(".intro-details");

    // Function to check if the user is in the middle of the introduction section
    function isInMiddleOfSection() {
        const introRect = introSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the middle of the section is within the window's viewport
        return introRect.top <= windowHeight / 2 && introRect.bottom >= windowHeight / 2;
    }

    // Function to apply the animation classes based on the user's position
    function animateIntroduction() {
        if (isInMiddleOfSection()) {
            introImage.classList.add("intro-come-together");
            introDetails.classList.add("intro-come-together");
        } else {
            introImage.classList.remove("intro-come-together");
            introDetails.classList.remove("intro-come-together");
        }
    }

    // Check the user's position on page load and on scroll
    animateIntroduction();
    window.addEventListener("scroll", animateIntroduction);
});
