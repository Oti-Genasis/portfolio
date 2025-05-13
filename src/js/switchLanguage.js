
let translations = {};
let currentLang = detectBrowserLanguage(); // langue détectée

function detectBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    if (lang.startsWith("fr")) return "FR";
    if (lang.startsWith("en")) return "EN";
    return "EN";
}

// Charger les données JSON et appliquer la langue initiale
fetch("lang.json")
    .then(response => response.json())
    .then(data => {
        translations = data;
        setLang(currentLang);
    });

function setLang(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Mettre à jour le contenu
    document.getElementById("header-title").textContent = t.header.title;
    document.getElementById("header-subtitle").textContent = t.header.subtitle;
    document.getElementById("header-cta").textContent = t.header.cta;

    document.getElementById("about-title").textContent = t.about.title;
    document.getElementById("about-content").textContent = t.about.content;

    const projectsList = document.getElementById("projects-list");
    document.getElementById("projects-title").textContent = t.projects.title;
    projectsList.innerHTML = "";
    t.projects.list.forEach(project => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Voir le projet</a>
      `;
        projectsList.appendChild(div);
    });

    document.getElementById("contact-title").textContent = t.contact.title;
    document.getElementById("form-name-label").textContent = t.contact.form.name;
    document.getElementById("form-email-label").textContent = t.contact.form.email;
    document.getElementById("form-message-label").textContent = t.contact.form.message;
    document.getElementById("form-submit").textContent = t.contact.form.submit;

    // 🔁 Mettre à jour le texte du bouton
    const btn = document.getElementById("lang-switcher");
    btn.textContent = (lang === "FR") ? "EN" : "FR";
}

// 🎯 Gestion du clic sur le bouton de langue
document.getElementById("lang-switcher").addEventListener("click", () => {
    const newLang = currentLang === "FR" ? "EN" : "FR";
    setLang(newLang);
});

