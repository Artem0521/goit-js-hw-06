const onIncrementBtnClick = document.querySelector('[data-action = increment]');
const onDecremetnBtnClick = document.querySelector('[data-action = decrement]');

const counterValue = document.querySelector('#value');
counterValue.value = 0;
onIncrementBtnClick.addEventListener('click', () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
});

onDecremetnBtnClick.addEventListener('click', () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
});

console.log(counterValue.value);



