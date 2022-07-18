const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');


const ingredientsListItems =
  ingredients.map(ingredient => {
    const li = document.createElement('li');

    li.classList.add('item');
  
    li.textContent = ingredient;

    return li;
   
  });

ingredientsList.append(...ingredientsListItems);


  

  