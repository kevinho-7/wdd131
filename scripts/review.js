document.addEventListener('DOMContentLoaded', function() {
    
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    
    reviewCount = parseInt(reviewCount) + 1;
    
    localStorage.setItem('reviewCount', reviewCount);
    
    document.getElementById('reviewCount').textContent = reviewCount;
}); 

document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;