function goBack() {
    window.history.back()
  }

  //move pictures
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


function aboutUsText() {
  let div = document.querySelector('#extra');
  let btn = document.querySelectorAll('.button')[0];

  if (div.style.display === 'block') {
    btn.textContent = 'More';
    div.style.display = 'none';
  } else {
    btn.textContent = 'Less';
    div.style.display = 'block';
  }
}