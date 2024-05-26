const header = document.querySelector('header');
const headerCarousel = document.querySelector('#header-carousel');
const navToggled = document.querySelector('.navbar .navbar-collapse');
const aboutSection = document.querySelector('#about');
const playlistsSection = document.querySelector('#playlists');
const newsSection = document.querySelector('#news');
const divider = document.querySelector('.dividing-section');

const homeButtons = Array.from(document.querySelectorAll('.nav-item.home'));
const aboutButtons = Array.from(document.querySelectorAll('.nav-item.about'));
const playlistButtons = Array.from(document.querySelectorAll('.nav-item.playlist'));
const newsButtons = Array.from(document.querySelectorAll('.nav-item.news'));
const merchButtons = Array.from(document.querySelectorAll('.nav-item.merch'));
const contactButtons = Array.from(document.querySelectorAll('.nav-item.contact'));

setNavScrolled();

document.onscroll = setNavScrolled;

homeButtons.forEach(btn => {
  btn.onclick = () => {
    navToggled.classList.remove('show');
    window.scrollTo(0, 0);
  };
});

aboutButtons.forEach(btn => {
  btn.onclick = () => {
    navToggled.classList.remove('show');
    window.scrollTo(0, headerCarousel.clientHeight);
  };
});

playlistButtons.forEach(btn => {
  btn.onclick = () => {
    navToggled.classList.remove('show');
    window.scrollTo(
      0,
      headerCarousel.clientHeight +
        aboutSection.clientHeight +
        divider.clientHeight +
        header.clientHeight,
    );
  };
});

newsButtons.forEach(btn => {
  btn.onclick = () => {
    navToggled.classList.remove('show');
    window.scrollTo(
      0,
      headerCarousel.clientHeight +
        divider.clientHeight +
        aboutSection.clientHeight +
        playlistsSection.clientHeight +
        divider.clientHeight,
    );
  };
});

contactButtons.forEach(btn => {
  btn.onclick = () => {
    navToggled.classList.remove('show');
    window.scrollTo(
      0,
      headerCarousel.clientHeight +
        divider.clientHeight +
        aboutSection.clientHeight +
        playlistsSection.clientHeight +
        divider.clientHeight +
        divider.clientHeight +
        newsSection.clientHeight,
    );
  };
});

function setNavScrolled() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 15) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
}
