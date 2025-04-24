document.addEventListener('DOMContentLoaded', function() {
    // Promo Slider
    const promoItems = document.querySelectorAll('.promo-item');
    let currentItem = 0;
    
    function showNextPromo() {
        promoItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % promoItems.length;
        promoItems[currentItem].classList.add('active');
    }
    
    // Change promo every 3 seconds
    setInterval(showNextPromo, 3000);
    
    // Client logo slider auto-scroll
    const clientSlider = document.querySelector('.client-slider');
    let scrollAmount = 0;
    const scrollStep = 150;
    const scrollDelay = 2000;
    
    function autoScrollClients() {
        scrollAmount += scrollStep;
        if (scrollAmount >= clientSlider.scrollWidth - clientSlider.clientWidth) {
            scrollAmount = 0;
        }
        clientSlider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    
    setInterval(autoScrollClients, scrollDelay);
});