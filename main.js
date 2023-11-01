

$(document).ready(function () {
    $(".humberger i").click(function () {
        $(this).toggleClass("fa-times");
        $(".menu").toggleClass("active");
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

  $(document).ready(function () {
    $(".work_filter").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $(".work_image").show();
      } else {
        $(".work_image")
          .not("." + value)
          .hide();
        $(".work_image")
          .filter("." + value)
          .show();
      }
    });
  });