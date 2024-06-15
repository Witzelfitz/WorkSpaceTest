// Function to toggle the visibility of sections
function toggleSection(section) {
    const element = document.querySelector(section);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Attach click events to section headers
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['.education', '.experience', '.skills'];
    sections.forEach(function(section) {
        const header = document.querySelector(section + ' header');
        if (header) {
            header.addEventListener('click', function() {
                toggleSection(section);
            });
        }
    });
});
