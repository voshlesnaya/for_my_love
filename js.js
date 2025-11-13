const heart = document.getElementById('heart');
const letter = document.getElementById('letter');
const memesLink = document.getElementById('memesScreen')
memesLink.style.display = 'none'; 

heart.addEventListener('click', () => {
  heart.style.display = 'none';
  letter.style.display = 'flex';

  const lines = document.querySelectorAll('.line');
  lines.forEach((line, index) => {
    line.style.animationDelay = `${index * 1.2 + 0.3}s`;
  });

  setTimeout(() => {
    memesLink.style.display = 'block';
  }, 13000);
});

     const createHearts = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart-fall');
      heart.innerText = ['💗','💕','💖','💞'][Math.floor(Math.random()*4)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = 16 + Math.random() * 14 + 'px';
      heart.style.animationDuration = 5 + Math.random() * 3 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    };

    setInterval(createHearts, 300);
    const createImage = () => {
  const weImg = document.createElement('div');
  weImg.classList.add('image-fall');
  const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 
 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg'];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  weImg.style.backgroundImage = `url(${randomImage})`;
  weImg.style.left = Math.random() * 100 + 'vw';
  weImg.style.width = 100 + Math.random() * 20 + 'px';
  weImg.style.height = weImg.style.width;
  weImg.style.animationDuration = 10 + Math.random() * 3 + 's';
  
  document.body.appendChild(weImg);
  
  setTimeout(() => weImg.remove(), 7000);
};

setInterval(createImage, 400);
