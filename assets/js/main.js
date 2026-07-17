/**
 * ==========================================================================
 * Plomería y Electricidad Sánchez - Lógica Principal (main.js)
 * Funcionalidades: Sticky Navbar, Menú Móvil Drawer, Scroll Reveal,
 * Smooth Scroll y Control de Acordeón FAQ.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. Navbar Sticky & Cambio al Scroll (> 50px)
    // --------------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll(); // Verificar al cargar

    // --------------------------------------------------------------------------
    // 2. Menú Móvil (Drawer & Backdrop)
    // --------------------------------------------------------------------------
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-menu');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMobileMenu() {
        if (drawer && backdrop) {
            drawer.classList.add('open');
            backdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
            drawer.setAttribute('aria-hidden', 'false');
            if (closeBtn) closeBtn.focus();
        }
    }

    function closeMobileMenu() {
        if (drawer && backdrop) {
            drawer.classList.remove('open');
            backdrop.classList.remove('open');
            document.body.style.overflow = '';
            drawer.setAttribute('aria-hidden', 'true');
            if (mobileBtn) mobileBtn.focus();
        }
    }

    if (mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Cerrar menú con tecla Escape para accesibilidad
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    // --------------------------------------------------------------------------
    // 3. Smooth Scroll Preciso con Offset para Navbar Fija (80px)
    // --------------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navHeight = navbar ? navbar.offsetHeight : 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --------------------------------------------------------------------------
    // 4. Scroll Reveal Animations (IntersectionObserver)
    // --------------------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-in');
    
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.12
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback si el navegador no soporta IntersectionObserver
        revealElements.forEach(el => el.classList.add('reveal-active'));
    }

    // --------------------------------------------------------------------------
    // 5. Acordeón FAQ Exclusivo (Cerrar los demás al abrir uno)
    // --------------------------------------------------------------------------
    const faqDetails = document.querySelectorAll('section details');
    faqDetails.forEach(targetDetail => {
        targetDetail.addEventListener('toggle', () => {
            if (targetDetail.open) {
                faqDetails.forEach(detail => {
                    if (detail !== targetDetail && detail.open) {
                        detail.open = false;
                    }
                });
            }
        });
    });
});
