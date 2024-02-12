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
        productListContainer.classList.add('row'); // Add Bootstrap row class

        // Create and append the title element
        const titleElement = document.createElement('h2');
        titleElement.textContent = 'Products';
        productList.appendChild(titleElement);

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4', 'mb-4'); // Add Bootstrap column and margin-bottom classes

            // Bootstrap card creation
            const card = document.createElement('div');
            card.classList.add('card');

            // Image
            const image = document.createElement('img');
            image.src = product.imageUrl;
            image.classList.add('card-img-top'); // Add Bootstrap card image top class

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const productName = document.createElement('h5');
            productName.classList.add('card-title');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.classList.add('card-text');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.classList.add('card-text');
            productPrice.textContent = `Price: ₱${product.price}`;

            const productDate = document.createElement('p');
            productDate.classList.add('card-text');
            productDate.textContent = `Date: ${product.date}`;

            // Bootstrap button creation
            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            addButton.classList.add('btn', 'btn-primary'); // Add Bootstrap button classes
            
            // Add event listener to the button
            let count = 0; // Initial count
            addButton.addEventListener('click', () => {
                count++;
                addButton.textContent = `Add to Cart (${count})`;
            });

            cardBody.appendChild(productName);
            cardBody.appendChild(productDescription);
            cardBody.appendChild(productPrice);
            cardBody.appendChild(productDate);
            cardBody.appendChild(addButton);

            card.appendChild(image); // Add image to card
            card.appendChild(cardBody);
            productCard.appendChild(card);

            productListContainer.appendChild(productCard);
        });

        productList.appendChild(productListContainer);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();
