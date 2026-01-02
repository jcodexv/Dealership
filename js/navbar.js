document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastY = window.scrollY;
    let ticking = false;

    function update() {
        if (lastY > 10) navbar.classList.add('active');
        else navbar.classList.remove('active');
        ticking = false;
    }

    function onScroll() {
        lastY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    lastY = window.scrollY;
    update();
});

const video = document.querySelector('.starter-page video');
const img = document.querySelector('.starter-page img');

if (video && img) {
    img.style.display = 'block';
    video.style.display = 'none';

    const reveal = () => {
        img.style.display = 'none';
        video.style.display = '';
    };

    video.addEventListener('canplaythrough', reveal, { once: true });
    video.addEventListener('loadeddata', reveal, { once: true });
    video.addEventListener('playing', reveal, { once: true });

    video.addEventListener('error', () => {
        img.style.display = 'block';
        video.style.display = 'none';
    }, { once: true });

    setTimeout(() => {
        if (video.readyState < 3) {
            img.style.display = 'block';
            video.style.display = 'none';
        }
    }, 5000);
}

