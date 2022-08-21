const searchEl = document.querySelector('.search');
const searchInputEl =  document.querySelector('.search input');

searchEl.addEventListener('click', function() {
  //logic..

  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add();
  searchInputEl.setAttribute('placeholder' , '통합검색');
});

earchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder' , '통합검색');
});



