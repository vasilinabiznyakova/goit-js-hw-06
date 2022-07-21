// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const list = document.querySelector('#categories');

const listItems = list.children;


console.log(`Number of categories: ${listItems.length}`);



const listItemsArray = [...listItems];


listItemsArray.map(el => {

    const categoryListTitle = el.firstElementChild.textContent;

    console.log(`Category: ${categoryListTitle}`);

    const categoryListItems = el.lastElementChild.children;

    console.log(`Elements: ${categoryListItems.length}`);
}
    )