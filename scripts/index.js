const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function() {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active')
        return navbar.classList.remove('active');
});

// Scroll reveal
window.sr = ScrollReveal({reset: true});
sr.reveal('.header__right', {duration: 1000, distance: '90px'});

window.sr = ScrollReveal({reset: true});
sr.reveal('.header__left', {duration: 1000, distance: '90px', delay: 700});

window.sr = ScrollReveal({reset: false});
sr.reveal('.navbar__content', {duration: 1000, distance: '90px', delay: 300});

window.sr = ScrollReveal({reset: true});
sr.reveal('.about_left', {duration: 1000, distance: '90px', delay: 300, origin:'left'});

window.sr = ScrollReveal({reset: true});
sr.reveal('.about_right', {duration: 1000, distance: '90px', delay: 600, origin:'right'});

window.sr = ScrollReveal({reset: true});
sr.reveal('.about_right', {duration: 1000, distance: '90px', delay: 600, origin:'right'});

window.sr = ScrollReveal({reset: true});
sr.reveal('.tertiary-title mb-m', {duration: 1000, distance: '90px', delay: 600});

window.sr = ScrollReveal({reset: true});
sr.reveal('.description', {duration: 1000,distance: '90px', delay: 600});

window.sr = ScrollReveal({reset: true});
sr.reveal('.skills_item1', {duration: 1000,distance: '90px', delay: 600});

window.sr = ScrollReveal({reset: true});
sr.reveal('.skills_item2', {duration: 1000,distance: '90px', delay: 800});

window.sr = ScrollReveal({reset: true});
sr.reveal('.skills_item3', {duration: 1000,distance: '90px', delay: 1000});

window.sr = ScrollReveal({reset: true});
sr.reveal('.skills', {duration: 1000,distance: '90px', delay: 300});

window.sr = ScrollReveal({reset: true});
sr.reveal('.project__content', {duration: 1000, distance: '90px', delay: 600});

window.sr = ScrollReveal({reset: true});
sr.reveal('.projeto1', {duration: 1000,distance: '90px', delay: 1000, origin: 'left'});

window.sr = ScrollReveal({reset: true});
sr.reveal('.projeto2', {duration: 1000,distance: '90px', delay: 1000, origin: 'right'});

window.sr = ScrollReveal({reset: true});
sr.reveal('.projeto3', {duration: 1000,distance: '90px', delay: 1000, origin: 'left'});



