document.addEventListener("DOMContentLoaded", function() {
    const createCircleButton = document.getElementById("CircleButton");
    const circlesContainer = document.getElementById("circlesContainer");
    createCircleButton.addEventListener("click", function() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circlesContainer.appendChild(circle); 
});
});