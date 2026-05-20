document.querySelectorAll(".menu-category").forEach(categoryItem => {

    categoryItem.addEventListener("click", () => {

        const currentSubmenu =
            categoryItem.nextElementSibling;

        document
        .querySelectorAll(".submenu")
        .forEach(otherMenu => {

            if (otherMenu !== currentSubmenu) {

                otherMenu.style.display = "none";
            }
        });

        if (currentSubmenu) {

            const isOpen =
                currentSubmenu.style.display === "block";

            currentSubmenu.style.display =
                isOpen ? "none" : "block";
        }
    });
});




const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);

if (!currentUser) {

    window.location.href =
        "/account/index.html";
}

document.getElementById(
    "accountName"
).textContent = currentUser.name;

document.getElementById(
    "accountEmail"
).textContent = currentUser.email;

document
.getElementById("logoutBtn")
.addEventListener("click", () => {

    localStorage.removeItem(
        "currentUser"
    );

    window.location.href =
        "/account/index.html";
});

const ordersBtn =
    document.getElementById("ordersBtn");

const ordersContainer =
    document.getElementById("ordersContainer");

ordersBtn.addEventListener("click", () => {

    renderOrders();
});

async function renderOrders() {

    ordersContainer.innerHTML = "";

    const response = await fetch("/users");

    const users = await response.json();

    const user = users.find(
        u => u.id === currentUser.id
    );

    if (!user.orders || user.orders.length === 0) {

        ordersContainer.innerHTML =
            "<p>No orders yet.</p>";

        return;
    }

    const reversedOrders =
        [...user.orders].reverse();

    reversedOrders.forEach((order, index) => {

        const realOrderNumber =
            user.orders.length - index;

        const orderNumber =
            `7770(${String(
                realOrderNumber
            ).padStart(3, "0")})`;

        const orderCard =
            document.createElement("div");

        orderCard.classList.add("order-card");

        const orderDate =
            new Date(order.createdAt)
            .toLocaleDateString();

        orderCard.innerHTML = `

            <div class="order-header">

                <div class="order-number">
                    ORDER ${orderNumber}
                </div>

                <div class="order-date">
                    ${orderDate}
                </div>

                <div class="order-total">
                    TOTAL $${order.total}
                </div>

            </div>
        `;

        
        orderCard.addEventListener("click", () => {

            renderSelectedOrder(order);
        });

        ordersContainer.appendChild(orderCard);
    });

    
    renderSelectedOrder(
        reversedOrders[0]
    );
}

const selectedOrderItems =
    document.getElementById(
        "selectedOrderItems"
    );

    function renderSelectedOrder(order) {

    selectedOrderItems.innerHTML = "";

    order.items.forEach(item => {

        const div =
            document.createElement("div");

        div.classList.add(
            "selected-order-item"
        );

        div.innerHTML = `

            <img src="${item.image}">

            <div class="selected-order-info">

                <h2>${item.name}</h2>

                <p>SIZE ${item.size}</p>

                <p>PRICE ${item.price}</p>

            </div>
        `;

        selectedOrderItems.appendChild(div);
    });
}