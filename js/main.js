//Nav Underline
var about = document.getElementById("about");
var reviews = document.getElementById("reviews");
var samples = document.getElementById("samples");
var authors = document.getElementById("authors");
var aboutTitle = document.getElementById("about-title");

function inView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var activeChange;
  //if (scrollPosition > (about.getBoundingClientRect().top + scrollY + about.clientHeight + 375)) {
  if (about.getBoundingClientRect().top <= 70) {
    activeChange = document.getElementById("about-link");
  } else {
    deactivate();
  }
  if (reviews.getBoundingClientRect().top <= 70) {
    activeChange = document.getElementById("reviews-link");
  }
  if (samples.getBoundingClientRect().top <= 70) {
    activeChange = document.getElementById("samples-link");
  }
  if (authors.getBoundingClientRect().top <= 4) {
    activeChange = document.getElementById("authors-link");
  }
  if (activeChange) {
    if (!activeChange.classList.contains("active")) {
      deactivate();
      activeChange.classList.add("active"); 
    }
  }
}

function deactivate() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
  });
}
// end nav underline

// mobile nav
function main(){
  var mobileMenu = document.getElementById("mobile-navigation");
  document.getElementById("burg").onclick = function() {
    mobileMenu.classList.toggle("open");
  };
  document.getElementById("order-book").onclick = function() {
    document.getElementById("order-book").classList.toggle("open");
  };
}

function menuDisplay(state, items){
  if(state=="show"){
    for(var i=1; i<items.length; i++){
      items[i].classList.add("show");
    }
  } else {
    for(var i=1; i<items.length; i++){
      items[i].classList.remove("show");
    }
  }
}

window.onload = function(){
  main();
}
// end mobile nav

// scroll nav animation
var sliderButtons = document.querySelector(".order-wrap");

(function(){
  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

var mediaQuery = window.matchMedia("(min-width: 65rem)");
var mobileMediaQuery = window.matchMedia("(min-width: 48rem)");
var mobileBook = document.querySelector(".mobile-book");
var sliderButtonsDiv = document.querySelector(".order-wrap > div");

window.addEventListener("optimizedScroll", function(){
  if (mediaQuery.matches) {
    if (window.pageYOffset >= 508) {
      let sliderXOffset = sliderButtonsDiv.offsetLeft + ((window.innerWidth - 960) / 2) - 50;
      sliderXOffset = sliderButtonsDiv.getBoundingClientRect().left - 50;
      let sliderYOffset = window.pageYOffset - 316;
      if (!sliderButtonsDiv.classList.contains("move")) {
        sliderButtonsDiv.classList.add("move");
        sliderButtonsDiv.style.transform = `translate(${sliderXOffset}px, ${sliderYOffset}px)`;
      } else if (!sliderButtonsDiv.classList.contains("activate")){
        sliderButtonsDiv.classList.add("activate");
      } else {
        if (sliderButtonsDiv.style.transform != "") {
          sliderButtonsDiv.style.transform = "";
        }
      }
    } else if (sliderButtonsDiv.classList.contains("move")) {
      let sliderXOffset = sliderButtonsDiv.offsetLeft + ((window.innerWidth - 960) / 2) - 50;
      sliderXOffset = sliderButtonsDiv.getBoundingClientRect().left - 50;
      //sliderButtonsDiv.style.transform = `translate(${sliderXOffset}px, ${192}px)`;
      sliderButtonsDiv.classList.remove("activate");
      sliderButtonsDiv.classList.remove("move");
      //setTimeout(function(){
        //sliderButtonsDiv.classList.remove("activate");
        //sliderButtonsDiv.classList.remove("move");
      //}, 500);
    }
  }
  if (!mobileMediaQuery.matches) {
    var bookScale = window.pageYOffset * 0.0025;
    if (bookScale < 0.5) {
      mobileBook.style.transform = `scale(${1 + bookScale})`;
      //mobileBook.style.marginTop = `${150 * bookScale}px`;
      mobileBook.style.marginBottom = `${150 * bookScale}px`;
    } else if (mobileBook.style.transform != "scale(1.5)") {
      mobileBook.style.transform = "scale(1.5)";
      //mobileBook.style.marginTop = "71.625px";
      mobileBook.style.marginBottom = "71.625px";
    }
  } else {
    if (mobileBook.style.transform) {
      mobileBook.style.transform = "";
    }
    /*
    if (mobileBook.style.marginTop) {
      mobileBook.style.marginTop = "";
    }
    */
    if (mobileBook.style.marginBottom) {
      mobileBook.style.marginBottom = "";
    }
  }
})
// end scroll nav animation

// swiper
document.addEventListener('scroll', inView);

var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 12,
    loop: false,
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
    },
});
// end swiper





(function () {
  // read more 
  document.addEventListener('click', function (e) {
    if (!e.target.matches('.readmore-link')) return;
    e.preventDefault();
    var isExpanded = e.target.classList.contains("expand");
    var expanded = document.querySelectorAll(".readmore.expand");
    for (const el of expanded) {
      el.classList.remove("expand");
    }
    var expanded_links = document.querySelectorAll(".readmore-link.expand");
    for (const el of expanded_links) {
      el.classList.remove("expand");
    }
    e.target.parentElement.parentElement.classList.toggle("xpnd");
    if (!isExpanded){
      e.target.parentElement.classList.add("expand");
      e.target.classList.add("expand");
    } 
  }, false);
  // end read more
  // view more
  document.getElementById("viewmoresamples").onclick = function() {
    document.getElementById("readmoresamples").classList.toggle("viewmore");
    document.getElementById("viewmoresamples").classList.toggle("expanded");
  };
  // end view more
})();