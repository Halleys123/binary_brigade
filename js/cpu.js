class BtnSelect {
  constructor(btns) {
    this.btns = btns;
  }
  select() {
    this.btns.forEach((item, indOne) => {
      item.addEventListener("click", (e) => {
        this.btns.forEach((object, indTwo) => {
          if (indOne == indTwo) {
            object.classList.add(
              "content__body__itemCont__item__data__list__item__right__btn--selected"
            );
            object.parentElement.parentElement.classList.add(
              "content__body__itemCont__item__data__list__item--selected"
            );
          } else {
            object.classList.remove(
              "content__body__itemCont__item__data__list__item__right__btn--selected"
            );
            object.parentElement.parentElement.classList.remove(
              "content__body__itemCont__item__data__list__item--selected"
            );
          }
        });
      });
    });
  }
}
const allBtns = document.querySelectorAll(".cpu__btns");
allBtns.forEach((item) => {
  if (
    item.classList.contains(
      "content__body__itemCont__item__data__list__item__right__btn--selected"
    )
  ) {
    item.parentElement.parentElement.classList.add(
      "content__body__itemCont__item__data__list__item--selected"
    );
  }
});
const btnCPU = document.querySelectorAll(".cpu__btns");
const btnSelectCPU = new BtnSelect(btnCPU);
btnSelectCPU.select();
