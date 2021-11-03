const input = document.getElementById('input');
const btn = document.querySelector('button');
const result = document.getElementsByClassName('result')[0];
const total = document.getElementById('total');
let i = 0;
btn.addEventListener('click', (e) => {
    if(input.value.trim()){
        i++;
        console.log(input.value);
        createElement(input.value);
        input.value = '';
    }
});
function createElement(value){
    total.textContent = `Total: ${i}`;
    let li = document.createElement('li');
    let btn = document.createElement('button');
    li.textContent = value;
    btn.textContent = 'delete';
    li.className = 'li';
    btn.className = 'bttn';
    li.appendChild(btn);
    result.appendChild(li);
    btn.addEventListener('click', (e) => {
        btn.parentNode.parentNode.removeChild(btn.parentNode);
        i--;
        total.textContent = `Total: ${i}`;
    });
    total.textContent = `Total: ${i}`;
}