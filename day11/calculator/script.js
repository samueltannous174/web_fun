let first = '';
let symbol = '';
let current = '';


function press(value) { 
if (value === '.' && current.includes('.')) return;
current += value;
updateDisplay(current);
}

function setOp(op) {
if (current === '') return;
symbol = op;
first = current;
current = '';
}

function clr() {
current = '';
symbol = '';
first = '';
updateDisplay('0');
}

function calculate() {
if (symbol === '' || current === '') return;
let result = eval(`${parseFloat(first)} ${symbol} ${parseFloat(current)}`);
updateDisplay(result);
current = result.toString();
symbol = '';
first = '';
}


function updateDisplay(value) {document.getElementById('display').textContent = value;}
