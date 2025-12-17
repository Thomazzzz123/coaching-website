# 🏋️ Site Vitrine Coaching Sportif Premium

Site web moderne et professionnel pour présenter des offres de coaching sportif haut niveau.

## 📁 Structure du projet

```
coaching-website/
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles CSS
├── js/
│   └── script.js      # JavaScript
└── README.md          # Ce fichier
```

---

## 🚀 Installation & Lancement

### Méthode 1 : Ouvrir directement (Recommandé)

1. **Crée un dossier** sur ton PC nommé `coaching-website`
2. **Crée les sous-dossiers** :
   - `css/`
   - `js/`
3. **Copie les fichiers** :
   - `index.html` à la racine
   - `style.css` dans le dossier `css/`
   - `script.js` dans le dossier `js/`
4. **Double-clique** sur `index.html` pour ouvrir dans ton navigateur

### Méthode 2 : Avec un serveur local (Optionnel)

Si tu as Python installé :

```bash
cd coaching-website
python -m http.server 8000
```

Puis ouvre : `http://localhost:8000`

---

## ✨ Fonctionnalités

### ✅ Incluses
- Navigation sticky responsive
- Menu mobile hamburger
- Smooth scroll entre sections
- Formulaire de contact (simulation)
- Animations au scroll
- Design mobile-first
- 3 offres de coaching
- Section méthodologie
- À propos & Contact

### 🔄 À intégrer (optionnel)

**Backend pour le formulaire :**
- Utilise [Formspree](https://formspree.io) (gratuit)
- Ou [EmailJS](https://www.emailjs.com) (gratuit)
- Ou un script PHP

**Analytics :**
- Google Analytics
- Plausible (privacy-friendly)

---

## 🎨 Personnalisation

### Modifier les textes

Ouvre `index.html` et modifie directement :
- Le nom de marque (APEXCOACH)
- Les prix des offres
- Email et téléphone
- Contenu des sections

### Modifier les couleurs

Ouvre `css/style.css` et change les variables en haut du fichier :

```css
:root {
  --black: #0A0A0A;      /* Fond principal */
  --gray-dark: #1A1A1A;  /* Fond secondaire */
  --white: #FFFFFF;      /* Texte principal */
  /* ... */
}
```

### Ajouter des images

Remplace les émojis par des images :

```html
<!-- Au lieu de -->
<div class="icon">🎯</div>

<!-- Utilise -->
<img src="images/icon-target.png" alt="Personnalisé">
```

---

## 📱 Responsive

Le site s'adapte automatiquement :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

---

## 🔧 Intégration d'un vrai formulaire

### Avec Formspree (gratuit)

1. Va sur [formspree.io](https://formspree.io)
2. Crée un compte et un formulaire
3. Récupère ton endpoint (ex: `https://formspree.io/f/xxxxxxxx`)
4. Dans `js/script.js`, remplace la fonction `submitBtn` :

```javascript
submitBtn.addEventListener('click', async () => {
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const objectif = document.getElementById('objectif').value.trim();

  if (!nom || !email || !objectif) {
    alert('Merci de remplir tous les champs');
    return;
  }

  try {
    const response = await fetch('https://formspree.io/f/TON_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, objectif })
    });

    if (response.ok) {
      formContainer.style.display = 'none';
      successMessage.style.display = 'block';
      setTimeout(() => {
        formContainer.style.display = 'block';
        successMessage.style.display = 'none';
        document.getElementById('nom').value = '';
        document.getElementById('email').value = '';
        document.getElementById('objectif').value = '';
      }, 3000);
    }
  } catch (error) {
    alert('Erreur lors de l\'envoi');
  }
});
```

---

## 🌐 Hébergement en ligne (gratuit)

### Netlify (Recommandé)

1. Va sur [netlify.com](https://netlify.com)
2. Glisse-dépose ton dossier `coaching-website`
3. Ton site est en ligne ! (ex: `random-name.netlify.app`)
4. Tu peux changer le nom de domaine

### GitHub Pages

1. Crée un repo GitHub
2. Pousse tes fichiers
3. Active GitHub Pages dans Settings
4. URL : `username.github.io/coaching-website`

### Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Connecte ton GitHub
3. Déploie automatiquement

---

## 📊 SEO & Performance

### Ajouter un favicon

Place `favicon.ico` à la racine et ajoute dans `<head>` :

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Optimiser le référencement

Dans `index.html`, ajoute dans `<head>` :

```html
<meta name="keywords" content="coaching sportif, musculation, recomposition corporelle">
<meta property="og:title" content="ApexCoach - Coaching Sportif Premium">
<meta property="og:description" content="Transformation physique et performance">
<meta property="og:image" content="https://ton-site.com/preview.jpg">
```

---

## 🐛 Problèmes fréquents

### Le menu mobile ne fonctionne pas
- Vérifie que `script.js` est bien dans le dossier `js/`
- Ouvre la console (F12) pour voir les erreurs

### Le CSS ne s'applique pas
- Vérifie le chemin : `href="css/style.css"`
- Actualise avec Ctrl+F5 (vide le cache)

### Les liens ne fonctionnent pas
- Vérifie que les `id` des sections correspondent aux `href`
- Ex: `<section id="offres">` et `<a href="#offres">`

---

## 📞 Support

Pour toute question ou personnalisation avancée, contacte-moi via l'interface Claude !

---

## 📄 Licence

Ce code est libre d'utilisation pour ton projet personnel ou commercial.

---

**Créé avec ❤️ par Claude**