const passwordBox = document.querySelector('#password');
const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('#copy-btn');
const slider = document.querySelector('#myRange');
const sliderValue = document.querySelector('#value');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#%^&*()_+~|}{[]></-=';
const allChars = upperCase + lowerCase + number + symbol;

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
sliderValue.textContent = Math.floor(slider.value);

slider.oninput = function() {
    sliderValue.textContent = Math.floor(this.value);
}

function generatePassword() {
    let length = Math.floor(slider.value);
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
}