let display = document.getElementById('result-wrapper');
let dotCount = 0;

function getNumber(x) {
    display.value += x;
}

function getDot(x) {
    if (display.value === '' || '+-*/'.includes(display.value.slice(-1))) {
        display.value += '0' + x;
        dotCount++;
    } else if (dotCount === 0) {
        display.value += x;
        dotCount++;
    }
}

function getOperator(x) {
    if (display.value === '' && x === '-') {
        display.value = x;
    } else if ('+-*/'.includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1) + x;
    } else {
        display.value += x;
    }
    dotCount = 0;
}

function getFunction(func) {
    if (display.value === '') {
        return;
    }

    try {
        let result;

        if (func === 'sqrt') {
            result = Math.sqrt(eval(display.value));
        } else if (func === 'sin') {
            result = Math.sin(eval(display.value));
        } else if (func === 'cos') {
            result = Math.cos(eval(display.value));
        } else if (func === 'tan') {
            result = Math.tan(eval(display.value));
        }

        display.value = result;
        dotCount = display.value.includes('.') ? 1 : 0;
    } catch (error) {
        display.value = 'Error';
    }
}

function reset() {
    display.value = '';
    dotCount = 0;
}

function calculate() {
    let numberStr = display.value.replace(/x/g, '*');
    try {
        let result = eval(numberStr);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
    dotCount = display.value.includes('.') ? 1 : 0;
}
