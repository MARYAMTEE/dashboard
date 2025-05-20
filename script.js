const openMenuBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("nav");
const closeMenuBtn = document.querySelector("#cancelSidebar")

// Toggle visibility
openMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});

//Close sidebar
closeMenuBtn.addEventListener("click", () => openMenuBtn.click());