// アコーディオン
const menu = document.querySelectorAll('.js-menus');
function toggle(){
  const content = this.nextElementSibling;
  this.classList.toggle('is-active');
  content.classList.toggle("is-open");
};
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}

// モーダル
const btn = document.querySelector('#btn');
const modal = document.querySelector('#modal');

btn.addEventListener('click', function(){
  modal.style.display = 'block';
})

// モーダル閉じ
const closeBtn = document.querySelector('#js-modal-closeBtn');
closeBtn.addEventListener('click', function(){
  modal.style.display = 'none'
});

// スクロール
const PageTopBtn = document.querySelector('#js-scroll-top');
PageTopBtn.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// https://developer.mozilla.org/ja/docs/Web/API/Window/scroll

