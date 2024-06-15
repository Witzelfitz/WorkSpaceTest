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
    const sections = ['main > section:nth-of-type(1)', 'main > section:nth-of-type(2)'];
    sections.forEach(function(section) {
        const header = document.querySelector(section + ' > header');
        if (header) {
            header.addEventListener('click', function() {
                toggleSection(section);
            });
        }
    });
});
