const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 200;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event)=>{
   if(!event.target.classList.contains("booked") && !event.target.classList.contains("info")) {
      event.target.classList.toggle("active");
      let totalSeats = (schemeSvg.querySelectorAll('.active').length - 1);
      totalPrice = totalSeats * cost;
      totalPriceTag.textContent = totalPrice;
   
   }
});

menuButton.addEventListener('click', () => {
   console.log('gjch');
   menu.classList.toggle("is-open");
});