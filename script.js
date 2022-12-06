let navigation = document.getElementById("nav-ul");
let burgerbar = document.getElementById("burger-bar");

burgerbar.addEventListener('click', function(){
    navigation.classList.toggle('navActive')
})