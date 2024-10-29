
    // Create audio element for hover sound
    const hoverSound = new Audio();
    hoverSound.src = './sounds/hover-sound.wav';
    hoverSound.volume = 0.2;

    document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
});
