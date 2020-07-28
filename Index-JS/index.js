//move pictures
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//     showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = x.length };
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex - 1].style.display = "block";
// }

// function showDivs(n) {
//     var i ;
//     var x = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     if (n > x.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" w3-white", "");
//     }
//     x[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " w3-white";
// }

// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 5000);
// }


// var myIndex = 0;
// (function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 5000);
// })();


// var images = [
//     "../images/hotel2.png",
//     "../images/hotel1.png",
//     "../images/hotel3.png"
// ]

// var i = 0;
// setInterval(function () {
//     let imageHead = document.querySelector("#slides");
//     imageHead.style.backgroundImage = "url(" + images[i] + ")";
//     i = i + 1;
//     if (i == images.length) {
//         i = 0;
//     }
// }, 2000);