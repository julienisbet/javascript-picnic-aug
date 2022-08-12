// add state to track number of items
let numberOfItems = 0;

// step 1 - grab the element from the DOM
const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const items = document.getElementById('items');
const bread = document.getElementById('bread');
// step 2 - add an event listener
soda.addEventListener('click', () => {
    if (!soda.classList.contains('picked') && numberOfItems === 3) return;
    console.log('clicking');
    // step 3 - adding the classname
    soda.classList.toggle('picked');
    // console.log(soda.classList.contains('picked'));
    // check if the item is already picked
    if (soda.classList.contains('picked')) {
        // if yes -- increment number of items
        numberOfItems = numberOfItems + 1;
    } else {
        // if no -- decrement number of items
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

cheese.addEventListener('click', () => {
    if (!cheese.classList.contains('picked') && numberOfItems === 3) return;
    cheese.classList.toggle('picked');
    if (cheese.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});

grapes.addEventListener('click', () => {
    if (!grapes.classList.contains('picked') && numberOfItems === 3) return;
    grapes.classList.toggle('picked');
    if (grapes.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});

bread.addEventListener('click', () => {
    if (!bread.classList.contains('picked') && numberOfItems === 3) return;
    bread.classList.toggle('picked');
    if (bread.classList.contains('picked')) {
        numberOfItems++;
    } else {
        numberOfItems--;
    }
    items.textContent = numberOfItems;
});
