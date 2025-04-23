// Get the modal
var modal = document.getElementById("lightbox-modal");

// Get all the images in the gallery
var images = document.querySelectorAll(".lightbox");

// Get the image inside the modal
var modalImg = document.getElementById("lightbox-img");

// Get the close button
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Add event listener to each image to open the lightbox
images.forEach(function(image) {
    image.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "flex";
        modalImg.src = this.href;
    };
});

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when the user clicks outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
