const apiUrl = 'assets/js/data.json';

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const productList = document.getElementById('product-list');
        const productListContainer = document.createElement('div');
        productListContainer.style.display = 'flex'; 
        productListContainer.style.flexWrap = 'wrap';
        productListContainer.style.justifyContent = 'space-between';

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.style.marginBottom = '20px';
            productCard.style.padding = '10px';
            productCard.style.border = '1px solid #ccc';
            productCard.style.borderRadius = '5px';
            productCard.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            productCard.style.width = 'calc(20% - 20px)';
            productCard.style.verticalAlign = 'top';

            const productDescription = document.createElement('h3');
            productDescription.textContent = `Description: ${product.description}`;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: ₱${product.price}`;

            const productDate = document.createElement('p');
            productDate.textContent = `Date: ${product.date}`;

            productCard.appendChild(productDescription);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productDate);

            productListContainer.appendChild(productCard);
        });

        productList.appendChild(productListContainer);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();
