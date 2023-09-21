var swiper = new Swiper(".slide_content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlides: true, // Use 'centerSlides' instead of 'centerSlide'
    fadeEffect: {
        crossFade: true, // Use 'crossFade' instead of 'fade'
    },
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

const formInputs = document.querySelectorAll(".form_input");
formInputs.forEach((formInputs)=>{
let thisLable = formInputs.nextElementSibling;

formInputs.addEventListener("focus",()=>{
    thisLable.classList.add("active");
});

formInputs.addEventListener("blur",()=>{
    if(formInputs.value===""){
        thisLable.classList.remove("active");
    }   
    
});

});
