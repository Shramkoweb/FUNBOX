var card = document.querySelectorAll(".catalog__card");

if (card.length > 0) {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      card[i].classList.toggle("catalog__card--selected");
    })
  };
};
