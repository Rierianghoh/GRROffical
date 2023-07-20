const professions = ['Web Designer & Developer', 'Frontend Developer', 'UI/UX Designer'];
let professionIndex = 0;

function typeProfession() {
  const professionSpan = document.getElementById('profession');
  const profession = professions[professionIndex];
  let charIndex = 0;

  const typeInterval = setInterval(() => {
    if (charIndex <= profession.length) {
      professionSpan.textContent = profession.substr(0, charIndex);
      charIndex++;
    } else {
      clearInterval(typeInterval);
      setTimeout(deleteProfession, 1000);
    }
  }, 100);
}

function deleteProfession() {
  const professionSpan = document.getElementById('profession');
  let profession = professions[professionIndex];
  let charIndex = profession.length;

  const deleteInterval = setInterval(() => {
    if (charIndex >= 0) {
      professionSpan.textContent = profession.substr(0, charIndex);
      charIndex--;
    } else {
      clearInterval(deleteInterval);
      professionIndex = (professionIndex + 1) % professions.length;
      typeProfession();
    }
  }, 50);
}

// Start the typing animation on page load
document.addEventListener('DOMContentLoaded', () => {
  typeProfession();
});

function updateActiveLink(href) {
  const iframe = document.getElementById('iframe');
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const links = iframeDocument.querySelectorAll('nav a');

  links.forEach(link => {
    if (link.getAttribute('href') === href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Add event listener to the iframe to update active link on page load
document.getElementById('iframe').addEventListener('load', function() {
  const currentHref = window.location.hash;
  updateActiveLink(currentHref);
});