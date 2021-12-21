let tokens = '';

const textarea = document.getElementById('textarea');
const result = document.getElementById('result');
const popup = document.getElementById('popup');

textarea.focus();

function parse() {
    const data = textarea.value || textarea.innerHTML || textarea.textContent;
    tokens = data.split('\n').map((user) => user.split(':').find(part => part[0] === 'O' && part.length > 20));
    result.value = tokens.join('\r\n');

    copy();
}

function copy() {
    if (tokens) {
        navigator.clipboard.writeText(tokens.join('\r\n'));

        popup.classList.add('popup-visible');
        setTimeout(() => {
            popup.classList.remove('popup-visible')
        }, 2000);
    }
}
