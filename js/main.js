let index = [1,1];
let slideId = ["slide1", "slide2"]

showSlide(1, 0);
showSlide(1, 1);

function plusSlide(n, no) {
  showSlide(index[no] += n, no);
}

function showSlide(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {index[no] = 1}    
  if (n < 1) {index[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[index[no]-1].style.display = "block";  
}