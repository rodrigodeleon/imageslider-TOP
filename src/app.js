import './style.css';

const mainFrame = document.querySelector('#mainFrame');
const slides = document.querySelector('#slides');

function loadPictures() {
  const controls = document.querySelector('#controls');
  const sources = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
    'pic6.jpg',
  ];
  sources.forEach((picture) => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const photoSrc = require(`./pictures/${picture}`);
    const myImg = document.createElement('img');
    myImg.classList.add('photoSlides');
    myImg.setAttribute('src', photoSrc);

    slides.appendChild(myImg);

    if (mainFrame.innerHTML === '') {
      showPhoto(photoSrc);
    }

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('id', myImg.src);
    controls.appendChild(dot);

    dot.addEventListener('click', (e) => {
      updateSlider(e.target.id);
    });

    myImg.addEventListener('click', (e) => {
      updateSlider(e.target.src);
    });
  });
}

function updateSlider(picSrc) {
  showPhoto(picSrc);
  toggleClicked(picSrc);
}

function showPhoto(picSrc) {
  const myImg = document.createElement('img');
  myImg.src = picSrc;
  myImg.classList.add('photoMain');
  mainFrame.innerHTML = '';
  mainFrame.append(myImg);
}

function toggleClicked(picSrc) {
  toggleDots(picSrc);
  toggleSlides(picSrc);
}

function toggleSlides(picSrc) {
  const mySlides = document.querySelectorAll('.photoSlides');
  mySlides.forEach((slide) => {
    if (slide.src !== picSrc) slide.classList.remove('clickedPic');
    else slide.classList.toggle('clickedPic');
  });
}
function toggleDots(dotSrc) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((element) => {
    element.classList.remove('clickedDot');
  });
  const myDot = document.getElementById(dotSrc);
  myDot.classList.toggle('clickedDot');
}

function createCarousel() {
  const left = document.querySelector('#left');
  const right = document.querySelector('#right');
  left.addEventListener('click', () => console.log('left'));
  right.addEventListener('click', () => console.log('right'));
}
// createCarousel();
loadPictures();
