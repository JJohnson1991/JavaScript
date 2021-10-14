const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', () =>{
    const enterValue = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = enterValue;
    list.appendChild(listItem);
    input.value ="";
});