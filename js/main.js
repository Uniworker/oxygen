let cssmenu = document.querySelector('.menu')
document.addEventListener('click', (e) => {
  e.stopPropagation()
  if (e.target.classList.contains('menu__icon') && e.target.className.indexOf('active') == -1) {
      e.target.classList.add('active')
      cssmenu.style.display = 'block'
  } else {
    document.querySelector('.menu__icon').classList.remove('active')
    cssmenu.style.display = 'none'
  }
})

const swiper = new Swiper( '.swiper', {
  autoHeight: true,
  initialSlide: 1,
  grabCursor: true,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  }
  }
)