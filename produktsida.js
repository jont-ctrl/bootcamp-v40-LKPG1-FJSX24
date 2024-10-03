function sortProducts() {
    const grid = document.getElementById('product-grid');
    const products = Array.from(grid.getElementsByClassName('product'));

    const sortBy = document.getElementById('sort').value;

    products.sort((a, b) => {
        if (sortBy === 'name') {
            // Sortera efter namn (A-Ö)
            return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
        } else if (sortBy === 'price') {
            // Sortera efter pris (Lågt till Högt)
            return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
        }
    });

    // Rensa och återmontera produkterna i rätt ordning
    grid.innerHTML = '';
    products.forEach(product => grid.appendChild(product));
}