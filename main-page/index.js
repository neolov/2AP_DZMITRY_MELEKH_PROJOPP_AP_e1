

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

window.addEventListener("DOMContentLoaded", () => {
    const savedRegion = localStorage.getItem("region");
    if (savedRegion) {
        const infoLink = document.querySelector(".submenu a[href*='region']");
        if (infoLink) infoLink.textContent = `Region: ${savedRegion}`;
    }
});

