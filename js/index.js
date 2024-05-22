const header = document.querySelector('header');
const headerCarousel = document.querySelector('#header-carousel');
const aboutSection = document.querySelector('#about');
const playlistsSection = document.querySelector('#playlists');
const divider = document.querySelector('.dividing-section');

const homeBtn = document.querySelector('.nav-item.home');
const aboutBtn = document.querySelector('.nav-item.about');
const playlistBtn = document.querySelector('.nav-item.playlist');
const newsBtn = document.querySelector('.nav-item.news');
const merchBtn = document.querySelector('.nav-item.merch');
const contactBtn = document.querySelector('.nav-item.contact');

setNavScrolled();

document.onscroll = setNavScrolled;

homeBtn.onclick = () => {
  window.scrollTo(0, 0);
};

aboutBtn.onclick = () => {
  window.scrollTo(0, headerCarousel.clientHeight - header.clientHeight);
};

playlistBtn.onclick = () => {
  // get the height + margin + padding of about section

  window.scrollTo(
    0,
    headerCarousel.clientHeight + divider.clientHeight + aboutSection.clientHeight,
  );
};

newsBtn.onclick = () => {
  // get the height + margin + padding of about section
  window.scrollTo(
    0,
    headerCarousel.clientHeight +
      divider.clientHeight +
      aboutSection.clientHeight +
      playlistsSection.clientHeight +
      divider.clientHeight,
  );
};

function setNavScrolled() {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 15) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
}
