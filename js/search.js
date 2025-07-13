// --- Search and Filter Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const menuItems = document.querySelectorAll('.menu-item'); /* */
    const menuCategories = document.querySelectorAll('.menu-category'); /* */

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        // Filter menu items
        menuItems.forEach(item => {
            // Updated to use data-item-name for item name or fallback to textContent
            const itemName = item.getAttribute('data-item-name') || item.querySelector('h3, h4').textContent.toLowerCase(); /* */
            if (itemName.includes(query)) {
                item.style.display = 'flex'; // Use flex since .menu-item is flex
            } else {
                item.style.display = 'none'; /* */
            }
        });

        // Show/hide category titles based on visible items
        menuCategories.forEach(category => {
            // Updated selector to match .menu-item and its display style
            const visibleItems = category.querySelectorAll('.menu-item[style*="display: flex"]'); /* */
            if (visibleItems.length > 0) {
                category.style.display = 'block'; /* */
            } else {
                category.style.display = 'none'; /* */
            }
        });
    });
});