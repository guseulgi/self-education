const bgImg = [
  'chunsic1.jpeg',
  'chunsic2.jpeg',
  'corgi.jpg',
  'swan.jpg',
]

let randomImgName = bgImg[Math.floor(Math.random() * (bgImg.length))];

const img = document.createElement('img');
img.src = `img/` + randomImgName;
img.style.width = '300px';
document.body.prepend(img);