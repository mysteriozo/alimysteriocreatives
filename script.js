document.addEventListener("DOMContentLoaded", function() {
    const text = "Ali Mysterio Creatives Design";
    let index = 0;
    const typingSpeed = 150; // Speed of typing effect (milliseconds)
    
    function typeText() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }
    
    typeText(); // Start the typing effect
});
