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
