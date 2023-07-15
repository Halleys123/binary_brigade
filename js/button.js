const btn = document.querySelectorAll(
  ".content__data__servers__list__item__right__SelectBtn"
);

btn.forEach((item, indOne) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    btn.forEach((object, indTwo) => {
      if (indOne == indTwo) {
        object.classList.add(
          "content__data__servers__list__item__right__Btn--selected"
        );
      } else {
        object.classList.remove(
          "content__data__servers__list__item__right__Btn--selected"
        );
      }
    });
  });
});
