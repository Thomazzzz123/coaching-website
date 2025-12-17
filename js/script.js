/* =========================
   MENU MOBILE
========================= */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

/* =========================
   FORMULAIRE FORMSPREE
========================= */
const form = document.getElementById('formContainer');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();
  const experience = document.getElementById('experience').value;
  const objectif = document.getElementById('objectif').value.trim();
  const majeur = document.getElementById('majeur').checked;

  // Validation champs
  if (!nom || !email || !age || !experience || !objectif) {
    alert('Merci de remplir tous les champs obligatoires');
    return;
  }

  // Validation âge
  if (!majeur || parseInt(age) < 18) {
    alert('Vous devez être majeur pour soumettre une demande');
    return;
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Merci de saisir un email valide');
    return;
  }

  // Envoi vers Formspree
  fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: new FormData(form)
  })
    .then(response => {
      if (response.ok) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
        form.reset();
      } else {
        alert('Erreur lors de l’envoi du formulaire');
      }
    })
    .catch(() => {
      alert('Erreur réseau, veuillez
