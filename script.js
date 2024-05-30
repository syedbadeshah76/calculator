let history = [];

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function inputValue(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.innerText);
        addToHistory(display.innerText + ' = ' + result);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function addToHistory(entry) {
    history.push(entry);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    let historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerText = item;
        historyList.appendChild(listItem);
    });
}

function toggleHistory() {
    let historyDiv = document.getElementById('history');
    if (historyDiv.style.display === 'none' || historyDiv.style.display === '') {
        historyDiv.style.display = 'block';
    } else {
        historyDiv.style.display = 'none';
    }
}
