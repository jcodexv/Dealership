document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelector('.nav-items');
    const navToggler = document.querySelector('.navbar-toggler');
    const togglerIcon = navToggler?.querySelector('i');
    if (!navbar || !navItems || !navToggler || !togglerIcon) return;

    Object.assign(navbar.style, {
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1000'
    });

    const isMobile = () => window.innerWidth <= 880;
    const hasScrolled = () => window.scrollY > 10;

    const update = () => {
        if (!isMobile()) {
            navbar.classList.toggle('active', hasScrolled());
        } else {
            if (hasScrolled()) {
                navbar.classList.add('active');
            } else if (!navItems.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        }
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    navToggler.addEventListener('click', () => {
        const opening = !navItems.classList.contains('active');
        navItems.classList.toggle('active');

        if (opening) {
            togglerIcon.className = 'fa-solid fa-xmark';
        } else {
            togglerIcon.className = 'fa-solid fa-bars-staggered';
        }

        if (isMobile() && opening && !hasScrolled() && !navbar.classList.contains('active')) {
            navbar.classList.add('active');
        }

        if (isMobile() && !opening && !hasScrolled()) {
            navbar.classList.remove('active');
        }
    });

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

    ['canplaythrough', 'loadeddata', 'playing'].forEach(e =>
        video.addEventListener(e, reveal, { once: true })
    );

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


