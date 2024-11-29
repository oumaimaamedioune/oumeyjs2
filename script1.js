// Function to handle mouseover and keyboard focus
function highlightImage(event) {
    event.target.style.border = "2px solid blue";
}

// Function to handle mouseout and keyboard blur
function removeHighlight(event) {
    event.target.style.border = "none";
}

// Add event listeners to images
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('mouseover', highlightImage);
    image.addEventListener('mouseout', removeHighlight);
    image.addEventListener('focus', highlightImage);
    image.addEventListener('blur', removeHighlight);
    image.tabIndex = 0; // Make images focusable
});