//METADATA!!!!!

// function postdetail() {
//   document.title = document.getElementsByTagName("h5")[0].innerHTML;

//   //create og title
//   const posttitle = document.createElement('meta');
//   posttitle.setAttribute('property', 'og:title');
//   posttitle.setAttribute('content', document.title);
//   document.getElementsByTagName('head')[0].appendChild(posttitle);

//   //create og description
//   const postdesc = document.createElement('meta');
//   postdesc.setAttribute('property', 'og:description');
//   postdesc.setAttribute('content', document.getElementsByTagName("p")[0].innerHTML);
//   document.getElementsByTagName('head')[0].appendChild(postdesc);

//   //create og img
//   const postimg = document.createElement('meta');
//   postimg.setAttribute('property', 'og:image');
//   postimg.setAttribute('content', document.getElementsByTagName("img")[1].currentSrc);
//   document.getElementsByTagName('head')[0].appendChild(postimg);
// }

//SLIDER!!!!

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
    if (slides.length>0) {
      if (n > slides.length) {
        slideIndex = 1
      }    
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      
      slides[slideIndex-1].style.display = "block";
    }
}

//COLLAPSIBLE!!!!
function expandAll(){
  $(".collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});
}

function collapseAll(){
  $(".collapsible-header").removeClass(function(){
      return "active";
  });
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
}

//PAGESETTING!!!!
function next(){
  arr = document.getElementsByClassName('posts-div').length;
  for (i=6; i<arr; i++) {
    document.getElementsByClassName('posts-div')[i].style.display = "block";
  }
  document.getElementById('prev').className = 'waves-effect';
  document.getElementById('next').className = 'disabled';
  for (i=0; i<6; i++) {
    document.getElementsByClassName('posts-div')[i].style.display = "none";
  }
}

function prev(){
  arr = document.getElementsByClassName('posts-div').length;
  for (i=6; i<arr; i++) {
    document.getElementsByClassName('posts-div')[i].style.display = "none";
  }
  document.getElementById('prev').className = 'disabled';
  document.getElementById('next').className = 'waves-effect';
  arr = document.getElementsByClassName('posts-div').length;
  for (i=0; i<6; i++) {
    document.getElementsByClassName('posts-div')[i].style.display = "block";
  }
}