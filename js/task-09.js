function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const btnChangeColor = document.querySelector('button.change-color');
const body = document.querySelector('body');
const bgrColor = document.querySelector('span.color');

btnChangeColor.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  bgrColor.textContent = color;
})
