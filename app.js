// add state to track number of items
let numberOfItems = 0;

// step 1 - grab the element from the DOM
const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const items = document.getElementById('items');
// step 2 - add an event listener
soda.addEventListener('click', () => {
    if (numberOfItems === 3) return;
    console.log('clicking');
    // step 3 - adding the classname
    soda.classList.toggle('picked');
    console.log(soda.classList.contains('picked'));
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
    cheese.classList.toggle('picked');
    if (cheese.classList.contains('picked')) {
        numberOfItems = numberOfItems + 1;
    } else {
        numberOfItems = numberOfItems - 1;
    }
    items.textContent = numberOfItems;
});
