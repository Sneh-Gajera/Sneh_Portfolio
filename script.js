$(document).ready(function () {
    $(".humberger i").click(function () {
        $(this).toggleClass("fa-times");
        $(".menu").toggleClass("active");
    })
})


// loader


//sticky navbar

window.addEventListener('scroll', function() {
    let nav = document.querySelector('.header');
    nav.classList.toggle('sticky', window.scrollY > 50);
  });


//active link

$(document).ready(function () {

    $(".menu a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})

// bottom to top btn

// $(document).ready(function () {
//     $(window).scroll(function () {
//         var x = $(document).scrollTop();
//         if (x > 250) {
//             $(".bottom_top").show();
//         }
//         else {
//             $(".bottom_top").hide();
//         }
//     });

//     $(".bottom_top").click(function () {
//         $(window).scrollTop(0);
//     })
// })


function sendmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "snehgajera81@gmail.com",
        Password: "585268E00131054A24389F59752C58BEB40B",
        To: 'psneh849@gmail.com',
        From: document.getElementById("mail").value,
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}