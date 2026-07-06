/* main.js - Global Interactions, Sticky Header, Mobile Drawer Navigation, Active Page Highlight */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Scroll Effect
    const header = document.querySelector('.header-wrapper');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load in case user refreshed down the page

    // 2. Mobile Drawer Navigation & Burger Menu
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    const toggleMobileNav = () => {
        const isOpen = mobileNav.classList.toggle('open');
        burgerMenu.classList.toggle('open', isOpen);
        overlay.classList.toggle('open', isOpen);
        // Lock body scrolling when drawer is open
        body.style.overflow = isOpen ? 'hidden' : '';
    };

    if (burgerMenu && mobileNav && overlay) {
        burgerMenu.addEventListener('click', toggleMobileNav);
        overlay.addEventListener('click', toggleMobileNav);
        
        // Close menu when mobile links are clicked
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('open')) {
                    toggleMobileNav();
                }
            });
        });
    }

    // Close mobile nav on Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
            toggleMobileNav();
        }
    });

    // 3. Highlight Current Active Page in Navigation Links
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if href is part of the path (simple matching for local development / static files)
        if (href && (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith('/') && href === 'index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. Inquire Button Smooth Scroll Anchor Fallbacks
    // If an element links to a section within the page, let's smooth scroll to it
    const localScrollLinks = document.querySelectorAll('a[href^="#"]');
    localScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
