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


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
   
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500); 
    
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500);
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
                showCursor: false
            });

            new Typed(".about-p", {
                strings: ["I am a passionate Full Stack Developer with a strong interest in building responsive and scalable web applications. I specialize in frontend development using HTML, CSS, JavaScript, and React, and I also have a solid understanding of backend technologies like Node.js, Express, and MongoDB. I enjoy solving problems, writing clean and efficient code, and continuously learning new technologies to improve my development skills. I am always eager to take on new challenges and grow as a developer by building impactful and user-friendly applications."],
                typeSpeed: 15,
                startDelay: 1200,
                showCursor: false
            });
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about-text');
if(aboutSection) {
    aboutObserver.observe(aboutSection);
}