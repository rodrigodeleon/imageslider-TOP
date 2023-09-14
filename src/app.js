import './style.css';

const mainFrame = document.querySelector('#mainFrame');
const slides = document.querySelector('#slides');

function loadPictures() {
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
    const photo = require(`./pictures/${picture}`);
    const myImg = document.createElement('img');
    myImg.classList.add('photoSlides');
    myImg.setAttribute('src', photo);
    myImg.addEventListener('click', (e) => showPhoto(e.target.src));
    slides.appendChild(myImg);

    const controls = document.querySelector('#controls');
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('id', photo);
    controls.appendChild(dot);

    if (mainFrame.innerHTML === '') showPhoto(photo);
  });
}
function showPhoto(photoid) {
  const myImg = document.createElement('img');
  myImg.src = photoid;
  myImg.classList.add('photoMain');
  mainFrame.innerHTML = '';
  mainFrame.append(myImg);
}

function createCarousel() {
  const left = document.querySelector('#left');
  const right = document.querySelector('#right');
  left.addEventListener('click', () => console.log('left'));
  right.addEventListener('click', () => console.log('right'));
}
createCarousel();
loadPictures();
