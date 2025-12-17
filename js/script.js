// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 64; // Hauteur de la navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Gestion du formulaire de contact
const submitBtn = document.getElementById('submitBtn');
const formContainer = document.getElementById('formContainer');
const successMessage = document.getElementById('successMessage');

submitBtn.addEventListener('click', () => {
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();
  const experience = document.getElementById('experience').value;
  const objectif = document.getElementById('objectif').value.trim();
  const majeur = document.getElementById('majeur').checked;

  // Validation
  if (!nom || !email || !age || !experience || !objectif) {
    alert('Merci de remplir tous les champs obligatoires');
    return;
  }

  if (!majeur) {
    alert('Vous devez certifier être majeur et comprendre les conditions du suivi médical');
    return;
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Merci de saisir un email valide');
    return;
  }

  // Vérification âge
  if (parseInt(age) < 18) {
    alert('Vous devez être majeur (18 ans minimum) pour soumettre une demande');
    return;
  }

  // Simulation d'envoi (à remplacer par un vrai backend)
  console.log('Demande de protocole soumise:', {
    nom,
    email,
    age,
    experience,
    objectif,
    date: new Date().toISOString()
  });

  // Note: Pour intégrer un vrai système d'envoi d'email, utilise Formspree ou EmailJS
  // Exemple avec Formspree:
  // fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ nom, email, age, experience, objectif })
  // })

  // Afficher le message de succès
  formContainer.style.display = 'none';
  successMessage.style.display = 'block';

  // Réinitialiser après 4 secondes
  setTimeout(() => {
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('objectif').value = '';
    document.getElementById('majeur').checked = false;
  }, 4000);
});

// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les cartes pour l'animation
document.querySelectorAll('.value-card, .offer-card, .method-card, .network-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Navigation active selon la section visible
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Avertissement pour les mineurs (sécurité supplémentaire)
window.addEventListener('load', () => {
  const age = localStorage.getItem('ageVerified');
  if (!age) {
    // Tu peux ajouter ici une popup de vérification d'âge si nécessaire
    console.log('Site réservé aux personnes majeures');
  }
});