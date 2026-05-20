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



const loginTab =
    document.getElementById("loginTab");

const registerTab =
    document.getElementById("registerTab");

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");



if (loginTab && registerTab) {

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
}



const registerBtn =
    document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener(
        "click",
        async () => {

            const name =
                document.getElementById("registerName").value;

            const email =
                document.getElementById("registerEmail").value;

            const password =
                document.getElementById("registerPassword").value;

            if (password.length < 8) {

                alert(
                    "Password must be at least 8 characters"
                );

                return;
            }

            const response = await fetch("/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data =
                await response.json();

            if (!response.ok) {

                alert(data.message);

                return;
            }

            
            localStorage.setItem(
                "currentUser",
                JSON.stringify(data.user)
            );

            
            window.location.href =
                "/account/account.html";
        }
    );
}



const loginBtn =
    document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        async () => {

            const email =
                document.getElementById("loginEmail").value;

            const password =
                document.getElementById("loginPassword").value;

            const response = await fetch("/login", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            });

            const user =
                await response.json();

            if (!response.ok) {

                alert(user.message);

                return;
            }

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            window.location.href =
                "/account/account.html";
        }
    );
}