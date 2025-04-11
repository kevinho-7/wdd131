document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector('.contact-form form');
    
    // Request notification permission when the page loads
    if ("Notification" in window) {
        Notification.requestPermission();
    }

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        // Check if form is valid
        if (form.checkValidity()) {
            // Show browser notification
            showNotification('Message Sent', 'Your message has been sent successfully!');
            
            // Reset form
            form.reset();
        }
    });

    // Function to show browser notification
    function showNotification(title, message) {
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                new Notification(title, {
                    body: message,
                    icon: "../images/corinthians.png"  // Using the Corinthians logo as notification icon
                });
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new Notification(title, {
                            body: message,
                            icon: "../images/corinthians.png"
                        });
                    }
                });
            }
        }
    }
}); 