// --- Interactive Behaviors ---

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for category links
    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate position considering the sticky header and nav
                const headerHeight = document.querySelector('.header').offsetHeight;
                const navHeight = document.querySelector('.category-nav').offsetHeight;
                const offsetPosition = targetElement.offsetTop - headerHeight - navHeight - 20; // 20px buffer

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});