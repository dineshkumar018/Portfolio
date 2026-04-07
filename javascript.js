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
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500);
});