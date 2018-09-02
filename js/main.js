var buttonToTop = document.querySelector(".btn-top");
var navBar = document.querySelector(".section-header__nav-bar");
var buttonFadeTreshold = 20;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > buttonFadeTreshold || document.documentElement.scrollTop > buttonFadeTreshold) {
    buttonToTop.style.visibility = "visible";
    buttonToTop.style.opacity = "0.5";
    // navBar.style.top = "-200";
    // navBar.style.zindex = "20";
    // setTimeout(function(){
    //   navBar.style.position = "fixed";
    //   navBar.style.top = "0";
    // }, 300);
  }
  else
  {
    buttonToTop.style.opacity = "0";
    setTimeout(function(){ buttonToTop.style.visibility = "hidden"; }, 300);
  }
}

// Scroll to a certain element
function scrollToElement(targetElement) {
  document.querySelector(targetElement).scrollIntoView({
  behavior: 'smooth'
  });
}

// Scroll to top
function scrollToTop() {
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
