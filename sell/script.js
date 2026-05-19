const products = [
    {
        id: 1,
        name: "Generation of Vanity T-shirt",
        color: "White",
        price: "$900.00",
        image: "../img/gen of vinity/t-shirt.jpg",
        image2: "../img/gen of vinity/photo1.jpg",
        isNew: true,
        Collection: "Generation-of-Vanity"
    },
    {
        id: 2,
        name: "Koe no katachi T-shirt",
        color: "Black",
        price: "$350.00",
        image: "../img/koe no katachi/T-shirt koe no katachi.jpg",
        image2: "../img/koe no katachi/T-shirt koe na katachi first.jpg",
        isNew: false,
        Collection: "Koe-no-katachi"
    },
    {
        id: 3,
        name: "Koe no katachi longsleeve",
        color: "Black",
        price: "$550.00",
        image: "../img/koe no katachi/koe no katachi long.png",
        image2: "../img/koe no katachi/koe no katachi long photo.jpg",
        isNew: false,
        Collection: "Koe-no-katachi"
    },
    {
        id: 4,
        name: "Koe no katachi zip-hoodie",
        color: "Black",
        price: "$1101.01",
        image: "../img/koe no katachi/koe no katachi zip.png",
        image2: "../img/koe no katachi/koe no katachi zip photo.jpg",
        isNew: false,
        Collection: "Koe-no-katachi"
    },
    {
        id: 5,
        name: "You are not alone longsleeve",
        color: "Black faded",
        price: "$1,250.00",
        image: "../img/ur not alone/ur not alone long.png",
        image2: "../img/ur not alone/ur not alone photo.png",
        isNew: false,
        Collection: "Ur-not-alone"
    },
    {
        id: 6,
        name: "I remember when I first noticed that you liked me too.",
        color: "White",
        price: "$666.00",
        image: "../img/i remember/long face.jpg",
        image2: "../img/i remember/long photo.jpg",
        isNew: true,
        Collection: "Generation-of-Vanity"
    }
];


const FILTERS = {
    "new": {
        title: "New Arrivals",
        filter: (p) => p.isNew
    },
    "generation-of-vanity": {
        title: "Generation of Vanity Collection",
        filter: (p) => p.Collection.toLowerCase() === "generation-of-vanity"
    },
    "koe-no-katachi": {
        title: "Koe no Katachi Collection",
        filter: (p) => p.Collection.toLowerCase() === "koe-no-katachi"
    },
    "ur-not-alone": {
        title: "You Are Not Alone Collection",
        filter: (p) => p.Collection.toLowerCase() === "ur-not-alone"
    },
    "all": {
        title: "All Products",
        filter: () => true
    }
};



function getFilteredProducts(filterType) {
    const filterConfig = FILTERS[filterType] || FILTERS["all"];
    return products.filter(filterConfig.filter);
}



function getTitleText(filterType) {
    const filterConfig = FILTERS[filterType] || FILTERS["all"];
    return filterConfig.title;
}



function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="../product/product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" data-hover="${product.image2 || product.image}">
            </a>
            <h3>${product.name}</h3>
            <p>${product.color}</p>
            <p>${product.price}</p>
        </div>
    `;
}



function addImageHoverEffect(container) {
    container.querySelectorAll(".product-card img").forEach(img => {
        const hoverSrc = img.dataset.hover;
        img.dataset.original = img.src;
        img.addEventListener("mouseenter", () => img.src = hoverSrc);
        img.addEventListener("mouseleave", () => img.src = img.dataset.original);
    });
}



function displayProducts(filterType = "all") {
    const container = document.querySelector(".sell");
    const title = document.querySelector(".sell-container h1");

    const filteredProducts = getFilteredProducts(filterType);
    const titleText = getTitleText(filterType);

    title.textContent = titleText;
    container.innerHTML = filteredProducts.map(createProductCard).join("");
    addImageHoverEffect(container);
}



document.querySelector("#all-products").addEventListener("click", () => displayProducts("all"));
document.querySelector("#new-products").addEventListener("click", () => displayProducts("new"));



const urlParams = new URLSearchParams(window.location.search);
const filterParam = urlParams.get("filter") || "all";
displayProducts(filterParam);

