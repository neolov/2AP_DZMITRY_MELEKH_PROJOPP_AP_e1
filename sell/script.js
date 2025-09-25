const products = [
    {
        id: 1,
        name: "SID JACKET",
        color: "BLACK",
        price: "$6,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo1.jpg",
        isNew: true
    },
    {
        id: 2,
        name: "MALCOLM TRENCH JACKET",
        color: "OLIVE",
        price: "$11,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo3.jpg",
        isNew: false
    },
    {
        id: 3,
        name: "MALCOLM TRENCH JACKET",
        color: "OLIVE",
        price: "$11,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo3.jpg",
        isNew: false
    },
        {
        id: 4,
        name: "MALCOLM TRENCH JACKET",
        color: "OLIVE",
        price: "$11,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo3.jpg",
        isNew: false
    },
        {
        id: 5,
        name: "MALCOLM TRENCH JACKET",
        color: "OLIVE",
        price: "$11,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo3.jpg",
        isNew: false
    },
        {
        id: 6,
        name: "MALCOLM TRENCH JACKET",
        color: "OLIVE",
        price: "$11,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo3.jpg",
        isNew: true
    },
        {
        id: 7,
        name: "MALCOLM TRENCH JACKET",
        color: "OLIVE",
        price: "$11,200.00",
        image: "../img/t-shirt.jpg",
        image2: "../img/photo3.jpg",
        isNew: true
    }
];

function displayProducts(filterNew = false) {
    const container = document.querySelector(".sell");
    container.innerHTML = "";

    const filteredProducts = filterNew
        ? products.filter(product => product.isNew)
        : products;

    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" data-hover="${product.image2 || product.image}">
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

