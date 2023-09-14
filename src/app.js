import './style.css';

const mainFrame = document.querySelector('#mainFrame');
const slides = document.querySelector('#slides');

function loadSlider() {
  const controls = document.querySelector('#controls');
  const sources = [
    // pictures file names to be imported
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

  const navLeft = document.createElement('nav');
  navLeft.classList.add('btnCarousel');
  navLeft.setAttribute('id', 'navLeft');
  navLeft.innerHTML = '<';
  const navRight = document.createElement('nav');
  navRight.classList.add('btnCarousel');
  navRight.setAttribute('id', 'navRight');
  navRight.innerHTML = '>';
  controls.prepend(navLeft);
  controls.append(navRight);

  navRight.addEventListener('click', () => {
    showNext();
  });

  navLeft.addEventListener('click', () => {
    const selectedPic = document.querySelector('.clickedPic');
    const prevPicSrc = selectedPic.previousSibling.src;
    showPhoto(prevPicSrc);
    updateSlider(prevPicSrc);
  });

  if (mainFrame.innerHTML === '') {
    const mySlides = document.querySelectorAll('.photoSlides');
    const photoSrc = mySlides[0].src;
    showPhoto(photoSrc);
    updateSlider(photoSrc);
  }
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

function showNext() {
  const selectedPic = document.querySelector('.clickedPic');
  const nextPicSrc = selectedPic.nextSibling.src;
  showPhoto(nextPicSrc);
  updateSlider(nextPicSrc);
}

function toggleClicked(picSrc) {
  toggleDots(picSrc);
  toggleSlides(picSrc);
}

function toggleSlides(picSrc) {
  const mySlides = document.querySelectorAll('.photoSlides');
  mySlides.forEach((slide) => {
    if (slide.src !== picSrc) slide.classList.remove('clickedPic');
    else slide.classList.add('clickedPic');
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

loadSlider();
