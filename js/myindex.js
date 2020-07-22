// const homeLoans = document.querySelector("#home");
const hero = document.getElementsByTagName(".hero");

// let newElement = document.createElement('session');
// newElement.innerHTML =`{<div class="hero-title">
// <h1>Digital Mortgage <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience</h1>
// <h3>pre-qualify or apply for<br>mortgage in minutes.</h3>
// <a href="#" class="getStarted">Get started</a>
// </div><img src="/css/img/housegreen3.jpg" alt="house image" class="house-img">}`;

// hero[0].innerHTML = "<p>fbwqivb;enbRNBOANB</p>";
(function () {
  "use strict";
  function greet() {
    var newElement = document.createElement("div");
    newElement.innerHTML = `<div class="hero-title">
    <h1>Digital Mortgage <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Experience</h1>
    <h3>pre-qualify or apply for<br>mortgage in minutes.</h3>
    <a href="#" class="getStarted">Get started</a>
  </div>
    <img src="/css/img/housegreen3.jpg" alt="house image" class="house-img">`;

    var list = document.getElementById("hero");
    list.appendChild(newElement);
  }
  //   list.removeChild(newElement);
  //   console.log(newElement);
})();

/* 
 document.querySelector("#home").addEventListener("click", (e) =>{
//  console.log('home was clicked')
 e.target.replace.innerHTML = 
 });
 */
// document.getElementById('eventClick').addEventListener('click',function(){ alert('Dario');});
/* const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title').addEventListener('toggle', (e) =>{
   // console.log(heroTitle);
   

})
 */

document.querySelector("#home").addEventListener("click", () => {
  greet();
});

const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", menuTog);
menuClose.addEventListener("click", menuTog);

function menuTog(e) {
  nav.classList.toggle("active");
};



setInterval(()=> {
  document.getElementsByTagName('progress')[0].value = 
  document.getElementsByTagName('progress')[0].value + 1
  if(document.getElementsByTagName('progress')[0].value === 10){
   document.getElementsByTagName('progress')[0].value = 1
  }
}, 250);