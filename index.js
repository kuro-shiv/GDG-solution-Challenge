// Function for the "Learn More" button in the MVP section
function showMessage() {
    alert("EduAccess MVP includes AI-based learning, offline support, and engagement tracking.");
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });
});
