// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const list = document.querySelector('#categories');
const listItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${list.children.length}`);

listItems.forEach(listItem => {
    console.log(`${ listItem.querySelector('h2').textContent}: ${listItem.querySelectorAll('li').length}`)
}
)