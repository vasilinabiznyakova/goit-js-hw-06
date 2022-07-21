// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.



const refs = {
    counter: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};


refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);


function onDecrementBtn() {
    refs.counter.textContent = Number(refs.counter.textContent) - 1; 
}

function onIncrementBtn() {
    refs.counter.textContent = Number(refs.counter.textContent) + 1; 
}