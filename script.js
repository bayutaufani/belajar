document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });
    
    // Responsive Promo Slider
    const promoSlider = () => {
        const promoItems = document.querySelectorAll('.promo-item');
        let current = 0;
        
        function showItem(index) {
            promoItems.forEach(item => item.classList.remove('active'));
            promoItems[index].classList.add('active');
        }
        
        function nextItem() {
            current = (current + 1) % promoItems.length;
            showItem(current);
        }
        
        // Auto-rotate every 3 seconds
        let sliderInterval = setInterval(nextItem, 3000);
        
        // Pause on hover
        const sliderContainer = document.querySelector('.promo-slider');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(sliderInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            sliderInterval = setInterval(nextItem, 3000);
        });
    };
    
    promoSlider();
    
    // Touch-friendly Client Logo Slider
    const clientSlider = document.querySelector('.client-slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    clientSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - clientSlider.offsetLeft;
        scrollLeft = clientSlider.scrollLeft;
    });
    
    clientSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    clientSlider.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    clientSlider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - clientSlider.offsetLeft;
        const walk = (x - startX) * 2;
        clientSlider.scrollLeft = scrollLeft - walk;
    });
    
    // Touch support for mobile
    clientSlider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - clientSlider.offsetLeft;
        scrollLeft = clientSlider.scrollLeft;
    });
    
    clientSlider.addEventListener('touchend', () => {
        isDown = false;
    });
    
    clientSlider.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - clientSlider.offsetLeft;
        const walk = (x - startX) * 2;
        clientSlider.scrollLeft = scrollLeft - walk;
    });
});
