"use strict";

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

let data = [
  {
    id: 1,
    imageUrl: "images/slide4.jpg",
    title: "SOFA",
  },
  
  {
    id: 2,
    imageUrl: "images/slide1.jpg",
    title: "Work Media",
  },
  {
    id: 3,
    imageUrl: "images/slide2.jpg",
    title: "Abstract",
  },
  {
    id: 4,
    imageUrl: "images/slide3.jpg",
    title: "Architect",
  },
  {
    id: 5,
    imageUrl: "images/slide.jpg",
    title: "DDDone",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;
let activedot = document.getElementsByClassName("dots");


function DivTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}


function Imgtag(item) {
  const tagImage = document.createElement("div");
  tagImage.style.backgroundImage = `url(${item.imageUrl})`;
  tagImage.classList.add("bg-image");

  return tagImage;
}

function Titletag(item) {
  const tagTitle = document.createElement("h3");
  tagTitle.textContent = item.title;
  tagTitle.classList.add("slider-title");

  return tagTitle;
}

function dotTags() {
  const dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");

  data.forEach((element) => {
    const dot = document.createElement("div");
    dot.classList.add("dots");
    dot.setAttribute("data-id", element.id-1);
    dotsParent.appendChild(dot);
    dot.addEventListener("click", function(event){
      const number = event.target.getAttribute("data-id");
      sliderIndex = number;
      slide();

    })
  });

  return dotsParent;
}

function slide() {
  sliderContent.innerHTML = " ";
  const slideItem = DivTag(data[sliderIndex]);
  const imgTag = Imgtag(data[sliderIndex]);
  const titleTag = Titletag(data[sliderIndex]);
  const dotsElement = dotTags();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleTag);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dotsElement);

  activedot[sliderIndex].classList.add("activeDot");
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex++;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

slide();

// api


