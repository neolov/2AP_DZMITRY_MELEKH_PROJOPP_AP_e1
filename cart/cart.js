const cartContainer = document.querySelector(".cart-items");

const summaryQty = document.querySelector(".summary-qty");
const summarySubtotal = document.querySelector(".summary-subtotal");
const summaryShipping = document.querySelector(".summary-shipping");
const summaryTotal = document.querySelector(".summary-total");
const freeShippingMsg = document.querySelector(".free-shipping-msg");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function getPriceNumber(price) {
    return parseFloat(price.replace(/[^\d.]/g, ""));
}

function renderCart() {

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    let subtotal = 0;
    let totalQty = 0;

    cart.forEach((item, index) => {

        const price = getPriceNumber(item.price);
        subtotal += price;
        totalQty++;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-info">
                <h2>${item.name}</h2>
                <p>SIZE ${item.size}</p>
                <p>PRICE ${item.price}</p>
                <button class="remove-btn" data-index="${index}">REMOVE</button>
            </div>
        `;

        cartContainer.appendChild(div);
    });

    
    const freeShippingThreshold = 250;
    const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 25;
    const total = subtotal + shipping;

    
    if (summaryQty) summaryQty.textContent = totalQty;
    if (summarySubtotal) summarySubtotal.textContent = "$" + subtotal.toFixed(2);
    if (summaryShipping) summaryShipping.textContent = "$" + shipping.toFixed(2);
    if (summaryTotal) summaryTotal.textContent = "$" + total.toFixed(2);

    if (freeShippingMsg) {
        if (subtotal > 0 && subtotal < freeShippingThreshold) {
            const remaining = freeShippingThreshold - subtotal;
            freeShippingMsg.textContent =
                `YOU'RE $${remaining.toFixed(2)} AWAY FROM FREE SHIPPING`;
        } else if (subtotal >= freeShippingThreshold) {
            freeShippingMsg.textContent = "YOU HAVE FREE SHIPPING";
        } else {
            freeShippingMsg.textContent = "";
        }
    }

    attachRemoveEvents();
}

function attachRemoveEvents() {
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });
    });
}

renderCart();

const checkoutBtn =
    document.querySelector(".checkout-btn");

checkoutBtn.addEventListener(
    "click",
    async () => {

        const currentUser = JSON.parse(
            localStorage.getItem("currentUser")
        );

        
        if (!currentUser) {

            alert("Please login");

            window.location.href =
                "/account/account.html";

            return;
        }

        
        if (cart.length === 0) {

            alert("Cart is empty");

            return;
        }

        try {

            const response = await fetch(
                "/checkout",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        userId: currentUser.id,

                        cart: cart
                    })
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                alert(data.message);

                return;
            }

            
            alert("Order successful");

            
            localStorage.removeItem("cart");

            cart = [];

            
            renderCart();

        } catch (err) {

            console.error(err);

            alert("Server error");
        }
    }
);