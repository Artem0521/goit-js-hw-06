
const inputChange = document.querySelector('input#font-size-control');
const textAbra = document.querySelector('span#text');

inputChange.addEventListener('change', event => {
    textAbra.style.fontSize = `${event.currentTarget.value}px`;
})


