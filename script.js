const openMenuBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("nav");
const closeMenuBtn = document.querySelector("#cancelSidebar");
const closeSideBar = document.querySelectorAll(".menu .menu-item");

// Toggle visibility
openMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});

//Close sidebar
closeMenuBtn.addEventListener("click", () => openMenuBtn.click());

//Close side bar when any nav item is clicked
closeSideBar.forEach(link => {
	link.addEventListener("click", () => openMenuBtn.click());
});