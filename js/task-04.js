const refs = {
    counterValue: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};



refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);


function onDecrementBtn() {
    refs.counterValue.textContent = Number(refs.counterValue.textContent) - 1; 
}

function onIncrementBtn() {
    refs.counterValue.textContent = Number(refs.counterValue.textContent) + 1; 
}