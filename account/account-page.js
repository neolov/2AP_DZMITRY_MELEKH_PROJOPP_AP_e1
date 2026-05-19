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