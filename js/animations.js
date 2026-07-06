/* animations.js - Intersection Observer Scroll Reveals & Count-up animations for statistics */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll-reveal Entrance Animations via Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once animated, we don't need to observe it again
                    observer.unobserve(entry.target);
                }
            });
        };

        const revealObserver = new IntersectionObserver(revealCallback, {
            root: null, // Viewport
            rootMargin: '0px 0px -10% 0px', // Trigger slightly before element is fully visible
            threshold: 0.1 // 10% visible
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers: show elements immediately
        revealElements.forEach(element => {
            element.classList.add('active');
        });
    }

    // 2. Animated Counting Numbers for Statistics
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2000; // Animation duration in milliseconds
        const frameRate = 1000 / 60; // 60 frames per second
        const totalFrames = Math.round(duration / frameRate);
        let currentFrame = 0;
        
        // Check if target is indeed a valid number
        if (isNaN(target)) return;

        const countIncrement = target / totalFrames;
        
        const counter = setInterval(() => {
            currentFrame++;
            const currentValue = Math.min(Math.floor(countIncrement * currentFrame), target);
            element.textContent = currentValue + suffix;
            
            if (currentFrame >= totalFrames) {
                element.textContent = target + suffix;
                clearInterval(counter);
            }
        }, frameRate);
    };

    // Use Intersection Observer to trigger counter when visible
    if ('IntersectionObserver' in window && statNumbers.length > 0) {
        const statCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        };

        const statObserver = new IntersectionObserver(statCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        });

        statNumbers.forEach(stat => {
            // Set initial state to 0 with suffix
            const suffix = stat.getAttribute('data-suffix') || '';
            stat.textContent = '0' + suffix;
            statObserver.observe(stat);
        });
    } else {
        // Fallback: load final values immediately
        statNumbers.forEach(stat => {
            const target = stat.getAttribute('data-target');
            const suffix = stat.getAttribute('data-suffix') || '';
            stat.textContent = target + suffix;
        });
    }
});
