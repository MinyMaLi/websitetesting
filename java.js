// Create audio element for hover sound
const hoverSound = new Audio();
hoverSound.src = './sounds/hover_button.wav'; // Hover sound
hoverSound.volume = 0.2; // Adjust volume (0.0 to 1.0)

// Add hover sound to all nav links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; // Reset sound to start
            hoverSound.play();
        });
    });
});

