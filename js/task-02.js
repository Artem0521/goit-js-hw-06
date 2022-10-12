const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = 'Potatoes';

  const listItem1 = document.createElement('li');
  listItem1.classList.add('item');
  listItem1.textContent = 'Mushrooms';

  const listItem2 = document.createElement('li');
  listItem2.classList.add('item');
  listItem2.textContent = 'Garlic';

  const listItem3 = document.createElement('li');
  listItem3.classList.add('item');
  listItem3.textContent = 'Tomatos';

  const listItem4 = document.createElement('li');
  listItem4.classList.add('item');
  listItem4.textContent = 'Herbs';

  const listItem5 = document.createElement('li');
  listItem5.classList.add('item');
  listItem5.textContent = 'Condiments';


const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(listItem, listItem1, listItem2, listItem3, listItem4, listItem5);

console.log(ingredientsList);

