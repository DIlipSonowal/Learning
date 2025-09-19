import _ from 'lodash';
document.getElementById("addItem").addEventListener('click', ()=> {
    const ul = document.getElementById('shoppingList');

    const listItem = ["Apple", "Banana", "Orange", "Mango"];

    _.forEach(listItem, (element) => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
})