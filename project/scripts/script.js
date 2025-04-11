document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu");
    const nav = document.querySelector(".main-nav");
    
    menuButton.addEventListener("click", function() {
        nav.classList.toggle("hidden");
        menuButton.classList.toggle("open");
    });

    // Interactive Gallery
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lastViewedInfo = document.getElementById("lastViewedInfo");
    const zoomLevel = 1.1; // Zoom level on mouse hover

    // Array with image information
    const galleryInfo = [
        { title: "Neo Química Arena", year: "2024" },
        { title: "Libertadores Final", year: "2012" },
        { title: "Mundial", year: "2012" },
        { title: "Stadium", year: "2024" },
        { title: "Fiel Torcida", year: "2023" },
        { title: "Current Squad", year: "2025" }
    ];

    galleryItems.forEach((item, index) => {
        // Zoom effect on mouse hover
        item.addEventListener("mouseenter", () => {
            const img = item.querySelector("img");
            img.style.transition = "transform 0.3s ease";
            img.style.transform = `scale(${zoomLevel})`;
        });

        item.addEventListener("mouseleave", () => {
            const img = item.querySelector("img");
            img.style.transform = "scale(1)";
        });

        // Update last viewed image
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            const caption = item.querySelector(".caption").textContent;
            const info = galleryInfo[index];
            
            // Save to localStorage
            localStorage.setItem("lastViewedImage", index);
            localStorage.setItem("lastViewedCaption", caption);
            
            // Update "Last Viewed" section
            updateLastViewed(imgSrc, caption, info);
        });
    });

    // Function to update "Last Viewed" section
    function updateLastViewed(imgSrc, caption, info) {
        const html = `
            <div class="last-viewed-content">
                <img src="${imgSrc}" alt="${caption}" style="max-width: 200px;">
                <div class="last-viewed-details">
                    <p class="caption">${caption}</p>
                    <p class="info">${info.title} (${info.year})</p>
                </div>
            </div>
        `;
        lastViewedInfo.innerHTML = html;
    }

    // Load last viewed image when page loads
    const lastIndex = localStorage.getItem("lastViewedImage");
    if (lastIndex !== null) {
        const item = galleryItems[lastIndex];
        const imgSrc = item.querySelector("img").src;
        const caption = item.querySelector(".caption").textContent;
        const info = galleryInfo[lastIndex];
        updateLastViewed(imgSrc, caption, info);
    }

    // Add extra information on mouse hover
    galleryItems.forEach((item, index) => {
        const caption = item.querySelector(".caption");
        const originalText = caption.textContent;

        item.addEventListener("mouseenter", () => {
            caption.textContent = showInfo(index);
        });

        item.addEventListener("mouseleave", () => {
            caption.textContent = originalText;
        });
    });

    // Function to show detailed information about gallery items
    function showInfo(index) {
        const info = galleryInfo[index];
        return `${info.title} - ${info.year}`;
    }
});


