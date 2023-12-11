function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('res').value;
    console.log(num1);
    var num2 = eval(num1);
    console.log(num2);
    document.getElementById('res').value = num2;
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
} 
function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
}