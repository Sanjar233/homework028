let openModalBtn = document.querySelector('.js-open-modal')
let modal = document.getElementsByTagName('div')[1]
let closeModalBtn = document.querySelector('.js-close-modal')
let modalBackground = document.querySelector('.modal-backdrop')
openModalBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("open");
  
});
closeModalBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("open");

});
modalBackground.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("open");
});