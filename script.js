document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.hover-sound');
    const audio = document.getElementById('hoverSound');

    button.addEventListener('mouseenter', function() {
        audio.currentTime = 0; // Reset audio to start
        audio.play().catch(e => console.error("Audio play failed:", e));
    });

    button.addEventListener('mouseleave', function() {
        audio.pause();
    });
});
