var elAddUpNewFruit__btn = document.querySelector(".add-up-new-fruit__btn");
var elAddNewFruit__input = document.querySelector(".add-new-fruit_input");
var elAddDownNewFruit__btn = document.querySelector(".add-down-new-fruit__btn");
var elRemoveFruit__input = document.querySelector(".remove-fruit__input");
var elRemoveFruit__btn = document.querySelector(".remove-fruit__btn");

var elFruites__list = document.querySelector(".fruites__list");

var fruits__collection__array = [];


// adding new fruit

elAddUpNewFruit__btn.addEventListener("click", function () {
  if(fruits__collection__array.indexOf(elAddNewFruit__input.value.trim()) < 0 && elAddNewFruit__input.value.trim())
  {
    fruits__collection__array.unshift(elAddNewFruit__input.value);
    elFruites__list.innerHTML="";
    for (var i=0;i<fruits__collection__array.length;i++){
      elFruites__list.innerHTML += "<li class=\"fruites__item\"><p class=\"fruites__name\">"+fruits__collection__array[i]+"</p></li>";
    }
  }
});
elAddDownNewFruit__btn.addEventListener("click", function () {
  if (fruits__collection__array.indexOf(elAddNewFruit__input.value.trim()) < 0 && elAddNewFruit__input.value.trim()) {
    fruits__collection__array.push(elAddNewFruit__input.value);
    elFruites__list.innerHTML = "";
    for (var i = 0; i < fruits__collection__array.length; i++) {
      elFruites__list.innerHTML += "<li class=\"fruites__item\"><p class=\"fruites__name\">" + fruits__collection__array[i] + "</p></li>";
    }
  }
});

// removing fruit

elRemoveFruit__btn.addEventListener("click", function () {
  if(elRemoveFruit__input.value.trim()) {
    elFruites__list.innerHTML = "";
    fruits__collection__array.splice(parseInt(elRemoveFruit__input.value.trim(), 10)-1, 1);
    for (var i = 0; i < fruits__collection__array.length; i++) {
      elFruites__list.innerHTML += "<li class=\"fruites__item\"><p class=\"fruites__name\">" + fruits__collection__array[i] + "</p></li>";
    }
  }
});