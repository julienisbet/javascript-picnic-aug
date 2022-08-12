// step 1 - grab the element from the DOM
const soda = document.getElementById('soda');

// step 2 - add an event listener
soda.addEventListener('click', () => {
    console.log('clicking');
    // step 3 - adding the classname
    soda.classList.add('picked');
});
