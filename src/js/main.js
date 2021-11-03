//mobile navigation

const burgerButton = document.querySelector(".burger");
const ul = document.querySelector("ul");

const menuTrigger = () => {
    ul.classList.toggle("active");
};

burgerButton.addEventListener("click", menuTrigger);

//testimonial slider

const testimonials = document.querySelectorAll('.testimonial')

const time = 3000;
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




setInterval(changeTestimonial, time)



