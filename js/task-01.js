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