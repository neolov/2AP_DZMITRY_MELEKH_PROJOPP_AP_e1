const products = [
    {
        id: 1,
        name: "Generation of Vanity",
        price: "900$",
        images: [
            "../img/gen of vinity/t-shirt.jpg",
            "../img/gen of vinity/photo1.jpg",
            "../img/gen of vinity/photo 2.jpg"
        ],
        col_name: "Generation of Vanity collection",
        desc: "t-shirts Generation of Vanity, fabric composition 100 cotton, print, loose fit."
    },
    {
        id: 2,
        name: "Koe no katachi T-shirt",
        price: "$350.00",
        images: [
            "../img/koe no katachi/T-shirt koe no katachi.jpg",
            "../img/koe no katachi/T-shirt koe no katachi back.png",
            "../img/koe no katachi/T-shirt koe na katachi first.jpg",
            "../img/koe no katachi//T-shirt koe no katachi second.jpg"
        ],
        col_name: "t-shirts Koe no katachi, fabric composition 97 cotton 3 lycra, machine embroidery, loose fit.",
        desc: "1010011 1101111 1101101 1100101 1110100 1101001 1101101 1100101 1110011 100000 1110100 1101000 1100101 100000 1100001 1101110 1110011 1110111 1100101 1110010 100000 1101001 1110011 100000 1100001 1110011 100000 1110011 1101001 1101101 1110000 1101100 1100101 100000 1100001 1110011 100000 1101100 1100101 1100001 1110010 1101110 1101001 1101110 1100111 100000 1110100 1101111 100000 1101100 1101001 1110011 1110100 1100101 1101110"
    },
    {
        id: 3,
        name: "Koe no katachi longsleeve",
        price: "$550.00",
        images: [
            "../img/koe no katachi/koe no katachi long.png",
            "../img/koe no katachi/koe no katachi long back.png",
            "../img/koe no katachi/koe no katachi long photo.jpg",
            "../img/koe no katachi/koe no katachi long photo 2.jpg"
        ],
        col_name: "Koe no katachi longsleeve, fabric composition 97 cotton 3 lycra, machine embroidery, loose fit.",
        desc: "1010011 1101111 1101101 1100101 1110100 1101001 1101101 1100101 1110011 100000 1110100 1101000 1100101 100000 1100001 1101110 1110011 1110111 1100101 1110010 100000 1101001 1110011 100000 1100001 1110011 100000 1110011 1101001 1101101 1110000 1101100 1100101 100000 1100001 1110011 100000 1101100 1100101 1100001 1110010 1101110 1101001"
    },
    {
        id: 4,
        name: "Koe no katachi zip-hoodie",
        price: "$1101.01",
        images: [
            "../img/koe no katachi/koe no katachi zip.png",
            "../img/koe no katachi/koe no katachi zip back.png",
            "../img/koe no katachi/koe no katachi zip photo.jpg",
            "../img/koe no katachi/koe no katachi zip photo 2.jpg"
        ],
        col_name: "Koe no katachi zip-hoodie, fabric composition 97 cotton 3 lycra, machine embroidery, loose fit.",
        desc: "1010011 1101111 1101101 1100101 1110100 1101001 1101101 1100101 1110011 100000 1110100 1101000 1100101 100000 1100001 1101110 1110011 1110111 1100101 1110010 100000 1101001 1110011 100000 1100001 1110011 100000 1110011 1101001 1101101 1110000 1101100 1100101 100000 1100001 1110011 100000 1101100 1100101"
    },
    {
        id: 5,
        name: "You are not alone longsleeve",
        price: "$1250.00",
        images: [
            "../img/ur not alone/ur not alone long.png",
            "../img/ur not alone/ur not alone long back.png",
            "../img/ur not alone/ur not alone photo 2.png",
            "../img/ur not alone/ur not alone long 50.png"
        ],
        col_name: "It's time to find a way.",
        desc: "• This item is made from premium materials, hand-dyed and torn; each piece is unique, and each piece is subject to quality control.• This item has a distressed effect from the factory.• The front print is made with the highest quality ink that withstands numerous washes.• A washing guide is included inside.• Fabric: cotton + lycra (increased density)"
    },
    {
        id: 6,
        name: "I remember when I first noticed that you liked me too.",
        price: "$666.00",
        images: [
            "../img/i remember/long face.jpg",
            "../img/i remember/long back.jpg",
            "../img/i remember/long photo.jpg"
        ],
        col_name: "two friends... <br> When you leave, I still see you. <br> It always happens to me. <br> The sun sets, I want to hear your voice. <br> Thank you for being with me.",
        desc: "• 100% cotton, • etching, • no seams"
    }
];

const productId = new URLSearchParams(window.location.search).get("id");
const product = products.find(p => p.id == productId);

if (!product) {
    document.querySelector(".product-page").innerHTML = "<h2>Product not found</h2>";
} else {
    
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".product-price").textContent = product.price;
    document.querySelector(".collection-name").innerHTML = product.col_name.replace(/•/g, "<br>•");
    document.querySelector(".product-desc").innerHTML = product.desc.replace(/•/g, "<br>•");

    const mainImg = document.querySelector(".product-main-img");
    const thumbs = document.querySelector(".product-thumbs");

    if (product.images.length > 0) {
        mainImg.src = product.images[0];
        for (let i = 0; i < product.images.length; i++) {
            const img = document.createElement("img");
            img.src = product.images[i];
            img.addEventListener("click", () => mainImg.src = product.images[i]);
            thumbs.appendChild(img);
        }
    }
}
