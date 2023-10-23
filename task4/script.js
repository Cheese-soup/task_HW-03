const userTextField = document.querySelector('a');
userTextField.onclick = function() {
    const userText = prompt('Введите текст:', '');
    console.log(userText);
userTextField.textContent = userText;
console.log('Текст в a изменён на', userText);
}
