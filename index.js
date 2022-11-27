let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let textslides = document.getElementsByClassName("textslides")

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";


    if (n > textslides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = textslides.length }
    for (i = 0; i < textslides.length; i++) {
        textslides[i].style.display = "none";
    }

    textslides[slideIndex - 1].style.display = "block";

}



function show_border(li) {
    $(li).children().css("width", "20px")

}
function hide_border(li) {
    $(li).children().css("width", "0px")

}
function colorgray(target) {
    $(target).children("svg").children("path").css("fill", "hsl(0, 0%, 63%)")
}
function colorblack(target_1) {

    $(target_1).children("svg").children("path").css("fill", "hsl(0, 0%, 0%)")
}

$(".icon_hamburger").click(function () {

    $(".navbar_list").show()
})



$(".close_button").click(function () {

    $(".navbar_list").hide()
})