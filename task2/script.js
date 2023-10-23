const consoleLog2 = document.querySelector('#consoleLog2');

consoleLog2.addEventListener('click', () => {
     alert('Служит для вывода информации в консоль');
})

const alert2 = document.querySelector('#alert2');

alert2.addEventListener('click', () => {
     alert('Служит для вывода предупреждающего модального окна с некоторым сообщением и кнопкой «ОК»');
})

const prompt2 = document.querySelector('#prompt2');

prompt2.addEventListener('click', () => {
     alert('Служит для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
})