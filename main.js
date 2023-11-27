
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


  