$(document).ready(function(){
    $('#slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        navContainer: "#slider_navigation",
        responsive:{
            0:{
                items:1
            }
        }
    })
    
    
    $('#programs .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsData: true,
        responsive:{
            0:{
                items:1
            }
        }
    })
    
    $('#right_result .owl-one').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin:10,
        nav:false,
        dots: false,
        smartSpeed: 400,
        responsive:{
            0:{
                items:1
            },
            998:{
                items:3
            }
        }
    })
    $('#right_result .owl-two').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 2300,
        margin:10,
        nav:false,
        dots: false,
        smartSpeed: 400,
        responsive:{
            0:{
                items:1
            },
            998:{
                items:3
            }
        }
    })

})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 50,
    grabCursor: true,
    // centeredSlides: true,        
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction'
    },

    // Navigation arrows
    navigation: {
        
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // breakpoints

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1.3,
            spaceBetween: 30
        },
}
    });


