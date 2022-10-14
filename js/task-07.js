
// const inputChange = document.querySelector('input#font-size-control');
// const textAbra = document.querySelector('span#text');

// inputChange.addEventListener('change', event => {
//     textAbra.style.fontSize = `${event.target.value}px`;
// })


const inputCh = document.querySelector('input#font-size-control')
const abra = document.querySelector('span#text')

inputCh.addEventListener('input', e => {
    abra.style.fontSize = `${e.target.value }px`
})

