function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 
const boodyElement = document.body;
const colorChange = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  boodyElement.style.backgroundColor = randomColor;
  colorChange.textContent = randomColor;

});

