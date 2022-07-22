// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.



const refs = {
    counter: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};

let count = 0;

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);


function onDecrementBtn() {

    count -= 1;
    refs.counter.textContent = count; 
}

function onIncrementBtn() {
    count += 1;
    refs.counter.textContent = count; 
}