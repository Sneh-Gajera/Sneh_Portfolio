
// mobile responsive
$(document).ready(function () {
    $(".humberger i").click(function () {
        $(this).toggleClass("fa-times");
        $(".menu").toggleClass("active");
    })
})

//   active menu 
$(document).ready(function(){
  $(".menu a").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
  })
})

//sticky navbar

window.addEventListener('scroll', function() {
    let nav = document.querySelector('.header');
    nav.classList.toggle('sticky', window.scrollY > 50);
  });


var typed = new Typed(".element", {
    strings: ["Front-End Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  