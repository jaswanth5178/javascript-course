// 1. Target the HTML container where items will go
const container = document.getElementById('products-container');

// 2. Double-check this URL string matches exactly
fetch('https://fakestoreapi.com/products')
    .then((response) => {
        // If the server returns HTML instead of JSON, throw a clear error
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we didn't get JSON! The API might be down or misspelt.");
        }
        return response.json();
    })
    .then((products) => {
        console.log("Data fetched successfully using Promises:", products);
        
        // Clear the error message if it succeeds
        container.innerHTML = ""; 

        // Loop through each product and build card components
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
    })
    .catch((error) => {
        console.error("Failed to fetch product data:", error);
        container.innerHTML = `<p style="color: red;">Error loading products: ${error.message}</p>`;
    });
