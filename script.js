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