// JavaScript to open the lightbox
function openLightbox(imageSrc, captionText) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightboxImage");
    var caption = document.getElementById("lightboxCaption");

    lightbox.style.display = "flex"; // Show the lightbox
    lightboxImage.src = imageSrc;   // Set image source
    caption.innerHTML = captionText; // Set caption text
}

// Close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}

// Add click event listeners to the program images to trigger the lightbox
document.querySelectorAll('.program-img').forEach(image => {
    image.addEventListener('click', function() {
        var imageSrc = this.src;
        var captionText = this.getAttribute('data-title');
        openLightbox(imageSrc, captionText);
    });
});
