/* gallery.js - Interactive Filterable Gallery Category Sorting & Responsive Lightbox Modal */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gallery Filtering System
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    // Simple animation reset: trigger reflow to restart fade-ins
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.85)';
                    
                    setTimeout(() => {
                        if (filterValue === 'all' || category === filterValue) {
                            item.style.display = 'block';
                            // Trigger redraw to activate transitions
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.display = 'none';
                        }
                    }, 250); // Matches card hide transition duration
                });
            });
        });
    }

    // 2. Lightbox Modal Functionality
    const lightboxModal = document.querySelector('.lightbox-modal');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const body = document.body;

    const openLightbox = (imgSrc, imgAlt) => {
        if (!lightboxModal || !lightboxImg || !lightboxCaption) return;
        
        lightboxImg.src = imgSrc;
        lightboxImg.alt = imgAlt;
        lightboxCaption.textContent = imgAlt;
        
        lightboxModal.classList.add('open');
        body.style.overflow = 'hidden'; // Stop background scroll
    };

    const closeLightbox = () => {
        if (!lightboxModal) return;
        
        lightboxModal.classList.remove('open');
        body.style.overflow = ''; // Resume background scroll
        // Clear src after transitions complete to save resources
        setTimeout(() => {
            if (lightboxImg) lightboxImg.src = '';
        }, 300);
    };

    // Attach click events to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const img = item.querySelector('img');
            if (img) {
                const imgSrc = img.getAttribute('src');
                const imgAlt = img.getAttribute('alt') || 'KGN Classes Gallery Photo';
                openLightbox(imgSrc, imgAlt);
            }
        });
    });

    // Close on click of close button or outside content wrapper
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            // If click is on the modal background, not on the image or caption
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    // Close on ESC key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('open')) {
            closeLightbox();
        }
    });
});
