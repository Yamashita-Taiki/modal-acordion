// const menu = document.querySelectorAll('js-menu');
// function toggle(){
//   const content = this.nextElementSibling;
//   this.classList.toggle('is-active');
//   content.classList.toggle("is-open");
// };
// for (let i = 0; i < menu.length; i++) {
//   menu[i].addEventListener("click", toggle);
// }
var btn = document.getElementById('btn');
var modal = document.getElementById('modal');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
}

var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
})