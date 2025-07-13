// --- Search and Filter Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const menuItems = document.querySelectorAll('.menu-item');
    const menuCategories = document.querySelectorAll('.menu-category');
    const decorativeImages = document.querySelectorAll('main img'); // Select all images inside main

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        // Filter menu items
        menuItems.forEach(item => {
            const itemName = item.getAttribute('data-item-name') || item.querySelector('h3, h4').textContent.toLowerCase();
            if (itemName.includes(query)) {
                item.style.display = 'flex'; // Use flex since .menu-item is flex
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide category titles based on visible items
        menuCategories.forEach(category => {
            const visibleItems = category.querySelectorAll('.menu-item[style*="display: flex"]');
            if (visibleItems.length > 0) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });

        // Show/hide images based on search input value
        decorativeImages.forEach(img => {
            if (query) {
                img.style.display = 'none';
            } else {
                img.style.display = 'block';
            }
        });
    });
});
