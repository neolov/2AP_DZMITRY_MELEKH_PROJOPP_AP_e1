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