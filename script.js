const input = document.getElementById('input');
const btn = document.getElementById('btn');
const res = document.querySelector('.res');
let ToDoList = [];
btn.addEventListener('click', addPoint);
function addPoint(){
    let value = input.value;
    ToDoList.push(value);
    document.getElementById('input').value = null;
    show();
}
function show(){
    let value = '';
    for(const elements of ToDoList){
        value = elements;
    }
    res.innerHTML += `
        <li>${value}</li>
    `;
    console.log(1);
}