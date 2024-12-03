const products = [
    { name: "Atom One", price: "$199", image: "assets/images/modelx.jpg" },
    { name: "Atom Two (Coming Soon)", price: "TBD", image: "assets/images/modely.jpg" },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const card = document.createElement('div');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', displayProducts);
