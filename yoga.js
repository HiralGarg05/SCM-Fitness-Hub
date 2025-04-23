        // JavaScript for lightbox functionality
        const images = document.querySelectorAll('.lightbox-img');
        const modal = document.getElementById('lightbox-modal');
        const modalImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.close-btn');

        images.forEach(image => {
            image.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImg.src = image.src;
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside of the image
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });