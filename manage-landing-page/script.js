// Scroll To Top On Load

window.onunload = function () {
  window.scrollTo(0, 0)
}

// Carousel Slider

$(document).ready(function () {

  $(".owl-carousel").owlCarousel();

});

$(".owl-carousel").owlCarousel({

  //Basic Speeds
  slideSpeed: 200,
  paginationSpeed: 800,

  //Autoplay
  autoPlay: false,
  goToFirst: true,
  goToFirstSpeed: 1000,

  // Navigation
  navigation: true,
  navigationText: ["<", ">"],
  pagination: true,
  paginationNumbers: false,

  // Responsive
  responsive: true,
  items: 2.5,
  itemsDesktop: [1199, 2.5],
  itemsDesktopSmall: [980, 2],
  itemsTablet: [768, 1],
  itemsMobile: [375, 1]

})

// Email validation

function validateEmail(email) {
  var input = document.getElementById("email")
  var err_msg = document.querySelector(".email_error")
  var regex = /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(regex)) {
    input.style.color = ""
    err_msg.style.display = "none"
    input.style.outline = "none"
    return true
  }
  else {
    input.style.color = "red"
    err_msg.style.display = "block"
    input.style.outline = "1px solid red"
    return false
  }
}


// Show/Hide Menu

const overlay = document.getElementById("menu_overlay")
const links = document.getElementById("links")
const menu = document.getElementById("menu")

function toggleMenu() {
  links.classList.toggle("responsive")
  menu.classList.toggle("close")
  overlay.classList.toggle("ovl")
}