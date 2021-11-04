//mobile navigation

const burgerButton = document.querySelector(".burger");
const ul = document.querySelector("ul");

const menuTrigger = () => {
    ul.classList.toggle("active");
};

burgerButton.addEventListener("click", menuTrigger);

//testimonial slider

const testimonials = document.querySelectorAll('.testimonial')
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

//interface
const time = 4000;
let activeIndex = 0;

//function responsible for changing testimonials. Backwards and forward instructions included
const changeTestimonial = (direction) => {
    testimonials.forEach(testimonial => {
        testimonial === testimonials[activeIndex] ? testimonial.classList.add('active') : testimonial.classList.remove('active')
    })
    switch (direction) {
        case 'forward':
            if (activeIndex === testimonials.length-1) {
                activeIndex = 0
            } else {
                activeIndex++;
            }
            break;
        case 'backwards':
            if (activeIndex === 0) {
                activeIndex = testimonials.length - 1;
            } else {
                activeIndex--;
            }
            break;
        default:
            return
    }
}

let testimonialInterval = setInterval(() => changeTestimonial('forward'), time)

const arrowHandler =(direction) => {
    changeTestimonial(direction)
    clearInterval(testimonialInterval);
    setTimeout(() => {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(()=>changeTestimonial('forward'), time)
    }, time)
}

leftArrow.addEventListener('click', ()=> arrowHandler('backwards') )
rightArrow.addEventListener('click', ()=> arrowHandler('forward') )





