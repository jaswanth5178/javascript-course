const container = document.getElementById('products-container');

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        console.log("Data fetched successfully using Async/Await:", products);
        
        container.innerHTML = ""; 

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title.slice(0, 30)}...</h3>
                <p><strong>$${product.price}</strong></p>
            `;
            
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to fetch product data:", error);
        container.innerHTML = `<p style="color: red;">Error loading products: ${error.message}</p>`;
    }
}

fetchProducts();
