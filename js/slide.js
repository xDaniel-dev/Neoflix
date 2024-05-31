
const initSlider = () => {
    const imageList = document.querySelector('.slider-wrappe');
    const slideButtons = document.querySelectorAll('.slider');
    const sliderScrollBar = document.querySelector('.slider-scrollbar');
    const sliderThumb = sliderScrollBar.querySelector('.scrollbar-thumb');
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    sliderThumb.addEventListener('mousedown', (event) => {
        const startX = event.clientX;
        const thumbPosition = sliderThumb.offsetLeft;

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            let newThumbPosition = thumbPosition + deltaX;

           
            newThumbPosition = Math.max(0, Math.min(newThumbPosition, sliderScrollBar.clientWidth - sliderThumb.offsetWidth));
            
            sliderThumb.style.left = `${newThumbPosition}px`;

            
            const scrollRatio = newThumbPosition / (sliderScrollBar.clientWidth - sliderThumb.offsetWidth);
            imageList.scrollLeft = scrollRatio * maxScrollLeft;
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === 'before-slide' ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });

    const updateScrollThumb = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - sliderThumb.offsetWidth);
        sliderThumb.style.left = `${thumbPosition}px`;
    };

    const handleSlider = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    };

    imageList.addEventListener('scroll', () => {
        handleSlider();
        updateScrollThumb();
    });

    handleSlider();
    updateScrollThumb();
};

window.addEventListener('load', initSlider);
