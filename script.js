
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
function closeBtn() {
  document.getElementById("btnClose").style.display = "none";
  document.getElementById("btnOpen").style.display = "block";
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("ul").style.display = "none";

}
function openBtn() {

  document.getElementById("btnClose").style.display = "block";
  document.getElementById("btnOpen").style.display = "none";
  document.querySelector(".overlay").style.display = "flex";
  document.querySelector("ul").style.display = "flex";
}

function refreshPage() {
  window.location.reload();
}
let counter = 0;
const countVariation = document.querySelector(".plus_minus");
const counterMinus = document.querySelector(".minus_image");
const counterPlus = document.querySelector(".plus_image");
const cartBtn = document.querySelector(".cart_btn");
const cartItem = document.querySelector(".cartItems");
const itemAmount = document.querySelector(".priceCalucation");
const clearDiv = document.querySelector(".price-container");
const myButton = document.querySelector(".myBtn");
const emptyIcon = document.querySelector(".icon");
const emptySneaker = document.querySelector(".sneaker-photo");
const emptyText = document.querySelector(".replaceText");
const emptyCart = document.querySelector(".cart");
const lineWidth = document.querySelector('.header_container');

counterMinus.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    updateCounterValue();
  }
})

counterPlus.addEventListener("click", function () {
  counter++
  updateCounterValue();
})

function updateCounterValue() {
  countVariation.innerHTML = counter;
}

cartBtn.addEventListener("click", function () {
  cartItem.innerHTML = counter;
})

const getElemnt = document.querySelector(".cart");
getElemnt.addEventListener("click", function () {
  if (counter > 0) {
    document.querySelector(".container").style.display = "flex"
    const calculatedAmount = counter * 125;
    itemAmount.innerHTML = `${counter} * $125 <span style="color: black; padding-left: 1rem; font-weight: 700;">$<strong>${calculatedAmount}</strong></span>`;
    emptyIcon.style.display = 'black';
    emptySneaker.style.display = "black"
    lineWidth.style.width = "70%"
    emptyIcon.addEventListener("click", function () {
      clearDiv.innerHTML = "";
      emptyText.innerHTML = '<p style="font-size: 1rem; color: black; padding-top: 4rem; margin-right: 2rem; cursor: pointer; font-weight:700;">Your cart is empty</p>';
      myButton.remove();
      setInterval(refreshPage, 1000);
    })
  } else {
    document.querySelector(".container").style.display = "black"
    emptyIcon.innerHTML = '';
    emptySneaker.innerHTML = ""
    emptyText.innerHTML = '<p style="font-size: 1rem; color: black; padding-top: 4rem; margin-right: 2rem; cursor: pointer; font-weight:700;">Your cart is empty</p>';
    myButton.remove();
  }

})
