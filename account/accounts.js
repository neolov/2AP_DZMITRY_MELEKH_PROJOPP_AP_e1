

document.querySelectorAll(".menu-category").forEach(categoryItem => {
    categoryItem.addEventListener("click", () => {

        const currentSubmenu = categoryItem.nextElementSibling;

        
        document.querySelectorAll(".submenu").forEach(otherMenu => {
            if (otherMenu !== currentSubmenu) {
                otherMenu.style.display = "none";
            }
        });

       
        if (currentSubmenu) {
            const isOpen = currentSubmenu.style.display === "block";
            currentSubmenu.style.display = isOpen ? "none" : "block";
        }
    });
});

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const accountPage = document.getElementById("accountPage");

loginTab.addEventListener("click", () => {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";

    loginTab.classList.add("active-tab");
    registerTab.classList.remove("active-tab");
});

registerTab.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";

    registerTab.classList.add("active-tab");
    loginTab.classList.remove("active-tab");
});

document.getElementById("registerBtn").addEventListener("click", () => {

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if (!email || !password || !name) {
        alert("Fill all fields");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("User already exists");
        return;
    }

    users.push({
        name,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully");

    loginForm.style.display = "flex";
    registerForm.style.display = "none";
});

document.getElementById("loginBtn").addEventListener("click", () => {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
        alert("Invalid credentials");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    showAccount(user);
});

function showAccount(user) {

    loginForm.style.display = "none";
    registerForm.style.display = "none";

    document.querySelector(".account-tabs").style.display = "none";

    accountPage.style.display = "block";

    document.getElementById("accountEmail").textContent = user.email;
    document.getElementById("accountName").textContent = user.name;
}

document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("currentUser");

    location.reload();
});

window.addEventListener("DOMContentLoaded", () => {

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    if (currentUser) {
        showAccount(currentUser);
    }
});

