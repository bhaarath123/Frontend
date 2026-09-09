const productsArray = [];

const addProdBtn = document.getElementById('add-prod-btn');
const catalogGrid = document.getElementById('catalog-grid');

const inputName = document.getElementById('prod-name');
const inputPrice = document.getElementById('prod-price');
const inputCategory = document.getElementById('prod-category');

addProdBtn.addEventListener('click', () => {
    const nameValue = inputName.value.trim();
    const priceValue = inputPrice.value.trim();
    const categoryValue = inputCategory.value;

    if (nameValue === "" || priceValue === "" || categoryValue === "") {
        alert("Please completely fill out all product information fields.");
        return;
    }

    const productObject = {
        name: nameValue,
        price: parseFloat(priceValue).toFixed(2),
        category: categoryValue
    };

    productsArray.push(productObject);

    renderProductCatalog();

    inputName.value = "";
    inputPrice.value = "";
    inputCategory.value = "";
});

function renderProductCatalog() {
    catalogGrid.innerHTML = "";

    productsArray.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <h3>${product.name}</h3>
            <div class="price-tag">$${product.price}</div>
            <span class="category-badge">${product.category}</span>
        `;

        catalogGrid.appendChild(card);
    });
}
