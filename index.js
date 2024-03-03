let value = document.getElementById('num').innerHTML;
value = Number(value);
console.log(value);

document.getElementById('dec-btn').onclick = Decrease;
document.getElementById('res-btn').onclick = Reset;
document.getElementById('inc-btn').onclick = Increase;

function Decrease() {
    value--;
    document.getElementById('num').innerHTML = value;
}

function Reset() {
    value = 0;
    document.getElementById('num').innerHTML = value;
}

function Increase() {
    value++;
    document.getElementById('num').innerHTML = value;
}