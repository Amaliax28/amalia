$(document).ready(function () {
    $("#sidebar-toggle").click(function () {
        $("#sidebar").toggleClass("collapsed");
    });

    const textElement = document.getElementById("typing-effect");
    const textArray = [
        "Gomen Gomen",
        "Typing Effect with Random Backspace...",
        "This is a cool animation, isn't it?",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = textArray[textIndex];
        const visibleText = currentText.slice(0, charIndex);

        textElement.textContent = visibleText;

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        // Randomize the backspacing
        if (!isDeleting && Math.random() > 0.9 && charIndex > 5) {
            isDeleting = true;
        }

        // If deleting finishes
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        // Typing and deleting speeds
        const typingSpeed = isDeleting ? 50 : 100;
        const randomPause = Math.random() * 200;

        setTimeout(typeEffect, typingSpeed + randomPause);
    }

    typeEffect();
});