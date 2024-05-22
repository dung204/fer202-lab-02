const header = document.querySelector('header');
const carousel = document.querySelector('.carousel');

const homeBtn = document.querySelector('.nav-item.home');
const aboutBtn = document.querySelector('.nav-item.about');
const playlistBtn = document.querySelector('.nav-item.playlist');
const merchBtn = document.querySelector('.nav-item.merch');
const contactBtn = document.querySelector('.nav-item.contact');

setNavScrolled();

document.onscroll = setNavScrolled;

homeBtn.onclick = () => {
  window.scrollTo(0, 0);
};

aboutBtn.onclick = () => {
  window.scrollTo(0, carousel.clientHeight - header.clientHeight);
};

function setNavScrolled() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 15) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
}
