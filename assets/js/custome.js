const initSlider = () => {

    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;

            // Calculate the amount to scroll (2 images at a time)
            const imageWidth = imageList.querySelector('.image-item').offsetWidth + 10; // Adjust for the gap
            const scrollAmount = imageWidth * 2 * direction; 

            // Scroll the image list
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Add scroll event listener to update scrollbar thumb and slide buttons
    imageList.addEventListener("scroll", () => {
        // updateScrollThumbPosition();
        handleSlideButtons();
    });
}

// Initialize slider on window load and resize
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
