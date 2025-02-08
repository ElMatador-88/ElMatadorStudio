document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Aggiungiamo un movimento casuale (effetto disperso)
    const randomX = (Math.random() - 0.5) * 100; // Movimento casuale lungo l'asse X
    const randomY = (Math.random() - 0.5) * 100; // Movimento casuale lungo l'asse Y

    // Impostiamo la posizione e i valori personalizzati per il movimento
    particle.style.left = `${x - 6}px`; // Centriamo la particella
    particle.style.top = `${y - 6}px`;
    particle.style.setProperty('--random-x', `${randomX}px`);
    particle.style.setProperty('--random-y', `${randomY}px`);

    // Aggiungiamo la particella al body
    document.body.appendChild(particle);

    // Rimuoviamo la particella dopo l'animazione
    setTimeout(() => {
        particle.remove();
    }, 1000); // La particella scomparirà dopo 1 secondo
}
document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Aggiungiamo un movimento casuale (effetto disperso)
    const randomX = (Math.random() - 0.5) * 100; // Movimento casuale lungo l'asse X
    const randomY = (Math.random() - 0.5) * 100; // Movimento casuale lungo l'asse Y

    // Impostiamo la posizione e i valori personalizzati per il movimento
    particle.style.left = `${x - 6}px`; // Centriamo la particella
    particle.style.top = `${y - 6}px`;
    particle.style.setProperty('--random-x', `${randomX}px`);
    particle.style.setProperty('--random-y', `${randomY}px`);

    // Aggiungiamo la particella al body
    document.body.appendChild(particle);

    // Rimuoviamo la particella dopo l'animazione
    setTimeout(() => {
        particle.remove();
    }, 1000); // La particella scomparirà dopo 1 secondo
}
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Aggiusta questo valore per il margine superiore
                    behavior: "smooth" // Scroll fluido
                });
            }
        });
    });
});
// Animazione al scroll per i servizi
document.addEventListener("scroll", function () {
    document.querySelectorAll(".card").forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".social-button");

    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`; // Ritardo progressivo per ogni icona
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.2}s`; // Ritardo progressivo
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.getElementById("contact");

    function revealOnScroll() {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            contactSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Controllo iniziale

    // Effetto digitazione per il testo
    const text = "Contattami su Discord o Instagram!";
    let index = 0;
    const typingElement = document.createElement("p");
    typingElement.classList.add("typing-text");
    document.getElementById("contact").appendChild(typingElement);

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeText, 100);
        }
    }

    setTimeout(typeText, 500);
});

