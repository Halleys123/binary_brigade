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
              "content__data__options__item__data__list__item__right__btn--selected"
            );
            object.parentElement.parentElement.classList.add(
              "content__data__options__item__data__list__item--selected"
            );
          } else {
            object.classList.remove(
              "content__data__options__item__data__list__item__right__btn--selected"
            );
            object.parentElement.parentElement.classList.remove(
              "content__data__options__item__data__list__item--selected"
            );
          }
        });
      });
    });
  }
}
const allBtns = document.querySelectorAll(
  ".content__data__options__item__data__list__item__right__btn"
);

const btnsRam = document.querySelectorAll(".ram__btn");
const btnGpu = document.querySelectorAll(".gpu__btn");
const btnCPU = document.querySelectorAll(".cpu__btn");

const btnSelectRam = new BtnSelect(btnsRam);
const btnSelectGpu = new BtnSelect(btnGpu);
const btnSelectCPU = new BtnSelect(btnCPU);

btnSelectRam.select();
btnSelectGpu.select();
btnSelectCPU.select();

allBtns.forEach((item) => {
  if (
    item.classList.contains(
      "content__data__options__item__data__list__item__right__btn--selected"
    )
  ) {
    item.parentElement.parentElement.classList.add(
      "content__data__options__item__data__list__item--selected"
    );
  }
});
