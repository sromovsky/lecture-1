const loggerWrapperId = 'logger-wrapper';

function log(value) {
    const loggerWrapper = document.getElementById(loggerWrapperId);

    const log = document.createElement('li');
    log.classList.add('list-group-item');
    log.innerText = value;

    loggerWrapper.appendChild(log);

    console.log(value);
}

function clearTerminal() {
    const loggerWrapper = document.getElementById(loggerWrapperId);
    loggerWrapper.innerText = '';

    console.clear();
}

function inputA() {
    return document.getElementById('input-a').value;
}

function inputB() {
    return document.getElementById('input-b').value;
}

function inputC() {
    return document.getElementById('input-c').value;
}