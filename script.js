/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText = document.getElementById("typingText");

const roles = [
    "Fresher Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Python Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeRole() {

    if (!typingText) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }
    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeRole, speed);
}


typeRole();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-info, .skill, .card, .education-card, .contact-box"
);


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   STAGGER SKILL ANIMATION
========================================= */

const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {

    skill.style.transitionDelay =
        `${index * 0.07}s`;

});


/* =========================================
   STAGGER PROJECT / INTERNSHIP CARDS
========================================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});


/* =========================================
   SCROLL PROGRESS BAR
========================================= */

const progressBar =
    document.querySelector(".scroll-progress");


function updateScrollProgress() {

    if (!progressBar) {
        return;
    }

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${percentage}%`;
}


window.addEventListener(
    "scroll",
    updateScrollProgress
);

updateScrollProgress();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        const href =
            item.getAttribute("href");

        if (href === `#${currentSection}`) {

            item.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =========================================
   ESCAPE KEY CLOSES MOBILE MENU
========================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        navLinks
    ) {

        navLinks.classList.remove("active");

    }

});