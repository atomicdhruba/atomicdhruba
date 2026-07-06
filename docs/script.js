// Typing Effect
const textArray = [
    "Building AI-Powered Tools for YouTube",
    "Turning Ideas into Code ✨",
    "Automate the boring stuff"
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

const typedTextSpan = document.getElementById("typing-text");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Scroll Reveal Interaction
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        var elementVisible = 50;

        // Add active if it's within the viewport (with a small buffer)
        // Remove active if it scrolls out of view (either top or bottom)
        if (elementTop < windowHeight - elementVisible && elementBottom > elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger once on load

// Mobile device detection to add a specific class to the body for targeting
// only the mobile device without breaking the fixed 1200px viewport for the rest of the site.
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add("mobile-device");
}
