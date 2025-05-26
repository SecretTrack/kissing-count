const kissImages = [
  'scr/assets/kissing1.png',
  'scr/assets/kissing2.png'
];

let kissCount = 0;
let currentImageIndex = 0;

function addKiss(button) {
  kissCount++;
  
  button.classList.remove('pulse');
  void button.offsetWidth; // trigger reflow
  button.classList.add('pulse');

  const kissCountElement = document.getElementById('kissCount');
  kissCountElement.textContent = `Você recebeu ${kissCount} beijo${kissCount > 1 ? 's' : ''}!`;

  const kissImg = document.getElementById('kissImg');
  
  const flickerImageIndex = (currentImageIndex + 1) % kissImages.length;
  kissImg.src = kissImages[flickerImageIndex];
  
  setTimeout(() => {
    kissImg.src = kissImages[currentImageIndex];
  }, 150);
}
