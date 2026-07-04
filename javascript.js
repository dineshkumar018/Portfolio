var typed=new Typed(".text",{
    strings: ["Frontend Developer", "React Developer" ,"Full Stack Developer"],
    typeSpeed:100 ,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
});

window.addEventListener('load', () => {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos, 10));
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});




// Add intersection observer for skills animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('skills-active');
        }
    });
}, {
    threshold: 0.1
});

const skillContainers = document.querySelectorAll('.container1');
skillContainers.forEach(container => {
    skillsObserver.observe(container);
});

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

// Automatically add reveal class to Expertise and Project cards
const cardsToReveal = document.querySelectorAll('.Services-list div, .project-list div');
cardsToReveal.forEach(card => card.classList.add('reveal'));

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => {
    revealObserver.observe(el);
});

// About Me Typing Animation Observer
let aboutTyped = false;
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !aboutTyped) {
            aboutTyped = true;
            new Typed(".about-h4", {
                strings: ["Full Stack Developer!"],
                typeSpeed: 50,
                showCursor: true,
                onComplete: function(self) {
                    self.cursor.style.display = 'none';
                    
                    new Typed(".about-p", {
                        strings: ["I am a passionate Full Stack Developer with a strong interest in building responsive and scalable web applications. I specialize in frontend development using HTML, CSS, JavaScript, and React, and I also have a solid understanding of backend technologies like Node.js, Express, and MongoDB. I enjoy solving problems, writing clean and efficient code, and continuously learning new technologies to improve my development skills. I am always eager to take on new challenges and grow as a developer by building impactful and user-friendly applications."],
                        typeSpeed: 15,
                        showCursor: true
                    });
                }
            });
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-text');
if(aboutSection) {
    aboutObserver.observe(aboutSection);
}