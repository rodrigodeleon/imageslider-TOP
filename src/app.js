import './style.css';
import pic1 from './pictures/pic1.jpg';

// const path = require('path');
// const fs = require('fs');

// const directoryPath = path.join(__dirname, 'pictures');
// fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     files.forEach(function (file) {
//         console.log(file.pa);
//     });
// });

const content = document.querySelector('#content');
const mainFrame = document.querySelector('#mainFrame');
const slides = document.querySelector('#slides');
function loadContent() {
  const sources = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg'];
  sources.forEach((picture) => {
    const photo = require(`./pictures/${picture}`);
    const myImg = document.createElement('img');
    myImg.setAttribute('src', photo);
    slides.appendChild(myImg);
  });
}
loadContent();
function createCarousel() {}

function loadToMain() {}
