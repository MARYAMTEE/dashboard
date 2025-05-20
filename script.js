const openMenuBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("nav");

openMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});