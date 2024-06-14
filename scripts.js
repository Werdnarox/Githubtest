document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // Show initial slide
    carouselItems[currentIndex].classList.add('active');

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToCurrentIndex();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
            scrollToCurrentIndex();
        }
    });

    function scrollToCurrentIndex() {
        const itemWidth = carouselItems[currentIndex].offsetWidth;
        const scrollLeft = carouselTrack.scrollLeft;

        if (currentIndex === 0) {
            carouselTrack.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            carouselTrack.scrollTo({
                left: scrollLeft + itemWidth,
                behavior: 'smooth'
            });
        }

        // Update active class
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[currentIndex].classList.add('active');
    }
});

