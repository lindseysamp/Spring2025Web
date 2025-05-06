// Function to perform addition using a for loop
function addNumbers(num) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} + ${i} = ${num + i}<br>`;
    }
    return result;
}

// Function to perform subtraction using a while loop
function subtractNumbers(num) {
    let result = '';
    let i = 1;
    while (i <= 10) {
        result += `${num} - ${i} = ${num - i}<br>`;
        i++;
    }
    return result;
}

// Function to perform multiplication using a do-while loop
function multiplyNumbers(num) {
    let result = '';
    let i = 1;
    do {
        result += `${num} * ${i} = ${num * i}<br>`;
        i++;
    } while (i <= 10);
    return result;
}

// Function to perform division using a loop
function divideNumbers(num) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} ÷ ${i} = ${(num / i).toFixed(2)}<br>`;
    }
    return result;
}

// Function to handle the click event and perform all operations
function performCalculations() {
    const numInput = document.getElementById('num').value;
    const num = parseFloat(numInput); // Convert input to a float number

    // Check if the input is a valid number
    if (isNaN(num)) {
        alert('Please enter a valid number');
        return; // Exit the function if input is invalid
    }

    // Perform the calculations and update the content of the paragraphs
    document.getElementById('addition').innerHTML = `Addition: <br>${addNumbers(num)}`;
    document.getElementById('subtraction').innerHTML = `Subtraction: <br>${subtractNumbers(num)}`;
    document.getElementById('multiplication').innerHTML = `Multiplication: <br>${multiplyNumbers(num)}`;
    document.getElementById('division').innerHTML = `Division: <br>${divideNumbers(num)}`;
}

// Attach the event listener to the button dynamically
document.getElementById('calculateBtn').addEventListener('click', performCalculations);
