document.querySelectorAll(".options").forEach(option => {
    option.addEventListener("click", () => {
        
        let submenu = option.nextElementSibling;

        
        document.querySelectorAll(".sub-menu").forEach(menu => {
            if (menu !== submenu) {
                menu.style.display = "none";
            }
        });

        
        if (submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
    });
});

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


document.getElementById("send-feedback-btn").addEventListener("click", function () {
    const form = document.getElementById("feedback-form");
    form.style.display = "block";
});



document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_9g5or3p", "template_wyo5vag", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(() => {
        alert("Message sent!");
        document.getElementById("feedback-form").reset();
        document.getElementById("feedback-form").style.display = "none";
    })
    .catch((err) => {
        console.log(err);
        alert("Error sending message");
    });
});
