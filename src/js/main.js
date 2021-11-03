//mobile navigation

const burgerButton = document.querySelector(".burger");
const ul = document.querySelector("ul");

const menuTrigger = () => {
    ul.classList.toggle("active");
};

burgerButton.addEventListener("click", menuTrigger);

//testimonial slider

const testimonials = document.querySelectorAll('.testimonial')

//initial setup
const time = 2000;
let activeIndex = 0;

const changeTestimonial = ()=>{

testimonials.forEach(testimonial =>{
    testimonial === testimonials[activeIndex] ? testimonial.classList.add('active') : testimonial.classList.remove('active')
})
    activeIndex++;
  if(activeIndex=== testimonials.length){
      activeIndex= 0
  }
}

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

//@handling buttons to dynamicly change testimonials and clear and setInterval

leftArrow.addEventListener('click',()=>{
    console.log('kliknięto w lewy przycisk');
})

rightArrow.addEventListener('click',()=>{
    activeIndex++;
    if(activeIndex=== testimonials.length){
        activeIndex= 0
    }
})

setInterval(changeTestimonial, time)



