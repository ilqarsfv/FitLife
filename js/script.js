$(".header__dropdown-button").click(() => {
    $("#mobile_nav").toggleClass("active")
    $(".dropdown_overlay").toggleClass("active")
})


$(".active_lang").click((e)=> {
    e.preventDefault()
    $(".active_lang .fa-chevron-down").toggleClass("active")
    $("#languages ul li ul").toggleClass("active")
})