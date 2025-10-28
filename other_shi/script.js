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

    document.getElementById("send-feedback-btn").addEventListener("click", function() {
        document.getElementById("feedback-form").style.display = "block";
    });

    
    document.getElementById("feedback-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = encodeURIComponent(document.getElementById("user_name").value);
        const email = encodeURIComponent(document.getElementById("user_email").value);
        const message = encodeURIComponent(document.getElementById("message").value);

        const subject = encodeURIComponent("Feedback from " + name);
        const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        window.location.href = `mailto:neolov97@gmail.com?subject=${subject}&body=${body}`;
    });

