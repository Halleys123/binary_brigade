const leftItem = document.querySelectorAll(".left__item");

leftItem.forEach((item, indOne) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    leftItem.forEach((object, indTwo) => {
      if (indOne == indTwo) {
        object.classList.add("left__item--selected");
        object.classList.remove("left__item--unselected");
      } else {
        object.classList.remove("left__item--selected");
        object.classList.add("left__item--unselected");
      }
    });
  });
});
