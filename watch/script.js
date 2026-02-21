const products = [
    {
        id: 1,
        name: "Deyros Sport",
        price: 120,
        image: "1.jpg"
    },
    {
        id: 2,
        name: "Olevs Tourbillon",
        price: 250,
        image: "2.jpg"
    },
    {
        id: 3,
        name: "Lige Luxury",
        price: 150,
        image: "3.jpg"
    },
    {
        id: 4,
        name: "Astron Blue",
        price: 2100,
        image: "4.jpg"
    },
    {
        id: 5,
        name: "Astron Stealth",
        price: 2300,
        image: "5.jpg"
    },
    {
        id: 6,
        name: "Astron Leather",
        price: 2200,
        image: "6.jpg"
    },
    {
        id: 8,
        name: "Bonvier Classic",
        image: "10.jpg"
    },
    {
        id: 9,
        name: "Gold Elite Set",
        image: "11.jpg"
    }
];

let cartCount = 0;

function init() {
    const grid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const priceHtml = product.price ? `<p>$${product.price.toLocaleString()}</p>` : '';
        const buttonHtml = product.price 
            ? `<button class="btn-primary" onclick="addToCart(${product.id})" style="margin-top: auto; width: 100%;">Add to Cart</button>`
            : `<button class="btn-primary" style="margin-top: auto; width: 100%;">View More</button>`;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            ${priceHtml}
            ${buttonHtml}
        `;
        
        grid.appendChild(card);
    });
}

function addToCart(id) {
    cartCount++;
    updateCartDisplay();
    
    // Optional: Visual feedback
    const product = products.find(p => p.id === id);
    alert(`${product.name} added to cart!`);
}

function updateCartDisplay() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cartCount;
    }
}

// Initialize the store when the page loads
document.addEventListener('DOMContentLoaded', init);