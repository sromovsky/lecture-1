function log(value) {
    const wrapper = document.getElementById('terminal-wrapper');

    const log = document.createElement('div');
    log.innerText = value;

    wrapper.appendChild(log);
}