let navigation = document.getElementById("nav-ul");
let burgerbar = document.getElementById("burger-bar");

burgerbar.addEventListener('click', function(){
    navigation.classList.toggle('navActive')
})

// sticky header

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }




function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    if (input.value.match(validRegex)) {
      document.form1.text1.focus();
      return true;
    } else {  
      alert("Invalid email address!");  
      document.form1.text1.focus();  
      return false;  
    }  
  }


//   slider

// const buttons = document.querySelectorAll("[data-slide-direction]");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.slideDirection === "next" ? 1 : -1;
//     changeSlide(offset);
//   });
// });

// const changeSlide = (offset) => {
//   const slides = document.querySelector(".slides");
//   const activeSlide = slides.querySelector("[data-active-slide]");
//   let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//   newIndex =
//     newIndex < 0
//       ? slides.children.length - 1
//       : newIndex === slides.children.length
//       ? 0
//       : newIndex;
//   slides.children[newIndex].dataset.activeSlide = true;
//   delete activeSlide.dataset.activeSlide;

//   const circles = document.querySelector(".slides-circles");
//   const activeCircle = circles.querySelector("[data-active-slide]");
//   circles.children[newIndex].dataset.activeSlide = true;
//   delete activeCircle.dataset.activeSlide;
// };

// setInterval(changeSlide.bind(null, 1), 6000);
