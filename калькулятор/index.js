let display = document.querySelector('.window');

let btn = Array.from(document.querySelectorAll('.btn'));


btn.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '0';
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            case '%':
                passedText = display.innerText + '/100';
                display.innerText = eval(passedText);
                break;
            case '+/-':
                display.innerText = '-';
                break;
            default:
                if (display.innerText === '0' && e.target.innerText !== '.') {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});