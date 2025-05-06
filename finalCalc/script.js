function addNumbers(num) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} + ${i} = ${num + i}<br>`;
    }
    return result;
}

function subtractNumbers(num) {
    let result = '';
    let i = 1;
    while (i <= 10) {
        result += `${num} - ${i} = ${num - i}<br>`;
        i++;
    }
    return result;
}

function multiplyNumbers(num) {
    let result = '';
    let i = 1;
    do {
        result += `${num} * ${i} = ${num * i}<br>`;
        i++;
    } while (i <= 10);
    return result;
}

function divideNumbers(num) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} ÷ ${i} = ${(num / i).toFixed(2)}<br>`;
    }
    return result;
}

function performCalculations() {
    const numInput = document.getElementById('num').value;
    const num = parseFloat(numInput);

    if (isNaN(num)) {
        alert('Please enter a valid number');
        return;
    }

    document.getElementById('addition').innerHTML = `Addition: <br>${addNumbers(num)}`;
    document.getElementById('subtraction').innerHTML = `Subtraction: <br>${subtractNumbers(num)}`;
    document.getElementById('multiplication').innerHTML = `Multiplication: <br>${multiplyNumbers(num)}`;
    document.getElementById('division').innerHTML = `Division: <br>${divideNumbers(num)}`;
}


document.getElementById('calculateBtn').addEventListener('click', performCalculations);

