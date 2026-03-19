import '../scss/style.scss';

hljs.highlightElement(document.querySelector('pre code'));

const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu ul');
const body = document.body;

mobileMenu.addEventListener('click', () => {
  body.classList.add('scroll-hiden');
  menu.classList.add('mobile');
  if (menu.classList.contains('mobile')) {
    mobileMenu.classList.toggle('close');
  }

  if (!mobileMenu.classList.contains('close')) {
    body.classList.remove('scroll-hiden');
    menu.classList.remove('mobile');
  }
});

menuList.addEventListener('click', () => {
  body.classList.remove('scroll-hiden');
  menu.classList.remove('mobile');
  mobileMenu.classList.remove('close');
});