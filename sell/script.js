const products = [
    {
        id: 1,
        name: "Generation of Vanity T-shirt",
        color: "White",
        price: "$900.00",
        image: "../img/gen of vinity/t-shirt.jpg",
        image2: "../img/gen of vinity/photo1.jpg",
        isNew: true
    },
    {
        id: 2,
        name: "Koe no katachi T-shirt",
        color: "Black",
        price: "$350.00",
        image: "../img/koe no katachi/T-shirt koe no katachi.jpg",
        image2: "../img/koe no katachi/T-shirt koe na katachi first.jpg",
        isNew: false
    },
    {
        id: 3,
        name: "Koe no katachi longsleeve",
        color: "Black",
        price: "$550.00",
        image: "../img/koe no katachi/koe no katachi long.png",
        image2: "../img/koe no katachi/koe no katachi long photo.jpg",
        isNew: false
    },
        {
        id: 4,
        name: "Koe no katachi zip-hoodie",
        color: "Black",
        price: "$1101.01",
        image: "../img/koe no katachi/koe no katachi zip.png",
        image2: "../img/koe no katachi/koe no katachi zip photo.jpg",
        isNew: false
    },
        {
        id: 5,
        name: "You are not alone longsleeve",
        color: "Black faded",
        price: "$1,250.00",
        image: "../img/ur not alone/ur not alone long.png",
        image2: "../img/ur not alone/ur not alone photo.png",
        isNew: false
    },
        {
        id: 6,
        name: "I remember when I first noticed that you liked me too.",
        color: "White",
        price: "$666.00",
        image: "../img/i remember/long face.jpg",
        image2: "../img/i remember/long photo.jpg",
        isNew: true
    }
];

function displayProducts(filterNew = false) {
    const container = document.querySelector(".sell");
    const title = document.querySelector(".sell-container h1");
    container.innerHTML = "";

    const filteredProducts = filterNew
        ? products.filter(product => product.isNew)
        : products;

    title.textContent = filterNew ? "New Arrivals " : " All Products ";

filteredProducts.forEach(product => {
    const productHTML = `
        <div class="product-card">
            <a href="../product/product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" data-hover="${product.image2 || product.image}">
            </a>
            <h3>${product.name}</h3>
            <p>${product.color}</p>
            <p>${product.price}</p>
        </div>
    `;
    container.innerHTML += productHTML;
});




    container.querySelectorAll(".product-card img").forEach(img => {
        const hoverSrc = img.dataset.hover;
        img.dataset.original = img.src; 
        img.addEventListener("mouseenter", () => {
            img.src = hoverSrc;
        });
        img.addEventListener("mouseleave", () => {
            img.src = img.dataset.original;
        });
    });
}

displayProducts(false);

document.querySelector("#all-products").addEventListener("click", () => {
    displayProducts(false);
});

document.querySelector("#new-products").addEventListener("click", () => {
    displayProducts(true);
});


