ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
        center: [34.8697395, -111.7609896], // Седона
        zoom: 15
        });
}

var form = document.querySelector(".search-hotel-form");
var ShowForm = document.querySelector(".serch-hotel-label");

var AdultCount = form.querySelector(".adult-count");
var ChildCount = form.querySelector(".child-count");

var MinusAdult = form.querySelector(".minus-adult");
var PlusAdult = form.querySelector(".plus-adult");
var MinusChild = form.querySelector(".minus-child");
var PlusChild = form.querySelector(".plus-child");

ShowForm.addEventListener("click", function(event) {
  event.preventDefault();
  if (form.classList.contains("search-hotel-show")) {
      form.classList.remove("search-hotel-show");
    }
    else {
      form.classList.add("search-hotel-show");
    }
});

MinusAdult.addEventListener("click", function(event) {
  event.preventDefault();
  if (Number(AdultCount.value) > 0) {
    AdultCount.value = Number(AdultCount.value) - 1
  }
});

PlusAdult.addEventListener("click", function(event) {
  event.preventDefault();
  AdultCount.value = Number(AdultCount.value) + 1
});

MinusChild.addEventListener("click", function(event) {
  event.preventDefault();
  if (Number(ChildCount.value) > 0) {
    ChildCount.value = Number(ChildCount.value) - 1
  }
});

PlusChild.addEventListener("click", function(event) {
  event.preventDefault();
  ChildCount.value = Number(ChildCount.value) + 1
});
