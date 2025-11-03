function insert(num) {
    document.getElementById('result').value += num;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
    let result = document.getElementById('result').value;
    let answer = eval(result);
    document.getElementById('result').value = answer;
}
