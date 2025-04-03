document.addEventListener('DOMContentLoaded', function() {
    // Get the current review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    
    // Increment the review count
    reviewCount = parseInt(reviewCount) + 1;
    
    // Save the updated count back to localStorage
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the updated count
    document.getElementById('reviewCount').textContent = reviewCount;
    
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
}); 

document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;