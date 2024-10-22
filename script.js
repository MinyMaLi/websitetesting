document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.hover-sound');
    const audio = document.getElementById('hoverSound');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            audio.currentTime = 0; // Reset audio to start
            audio.play().catch(e => console.error("Audio play failed:", e));
        });

        button.addEventListener('mouseleave', function() {
            audio.pause();
            audio.currentTime = 0; // Reset audio to start
        });
    });
});
