const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// const helloBtn = document.querySelector('#helloBtn')
// const helloBtn = document.getElementById('helloBtn')
// console.log(helloBtn)

// ФУНКЦИОНАЛЬНОСТЬ
// EVENTS (события)
// helloBtn.onclick = () => {  // null (observable)
//     alert('ПРИВЕТ')
// }

// helloBtn.onclick = () => {
//     console.log('ПРИВЕТ')
// }

// ПРИ КАКОМ ТО СОБЫТИИ ПРОСИХОДИТ КАКАЯ ТО ФУНКЦИЯ

// eventListener
// helloBtn.addEventListener('click', (event) => {
//     console.log(event.target)
//     alert('ПРИВЕТ')
// })

// 1 - Событие
// 2 - Функция


// const inputEmail = document.querySelector('#email')
// const emailOutputElement = document.querySelector('#emailOutput')
// inputEmail.addEventListener('keyup', (event) => {
//     emailOutputElement.innerText = event.target.value
// })


// Задание 1
// const textInput = document.querySelector('#textInput')
// const listElement = document.querySelector('#list')

// textInput.addEventListener('keyup', (event) => {
//     if(event.code === 'Enter') {
//         const liELement = document.createElement('li')
//         liELement.innerText = event.target.value // textInput.value
//         listElement.appendChild(liELement)

//         textInput.value = ''
//     }
// })


// Задание 2
const users = [
    {
        email: 'olzhas@gmail.com',
        password: 'qwerty123'
    },
    {
        email: 'ali@gmail.com',
        password: 'ali777'
    },
    {
        email: 'sayat@gmail.com',
        password: 'sayat555'
    },
]

const loginForm = document.querySelector('#loginForm')
const emailInput = document.querySelector('#emailInput')
const passwordInput = document.querySelector('#passwordInput')
const showPasswordIcon = document.querySelector('#showPasswordIcon')
const errorSpan = document.querySelector('#errorSpan')

let isValidEmail = false

function login(email, password) {
    for (const user of users) {
        if(user.email !== email) {
            return 'Пользователь не найден!'
        }
        if(user.password !== password) {
            return 'Пароль пользователя не совпадает!'
        }
        return 'Вы авторизовались!'
    }
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault() // предотвращает дефолтное поведение
    if(!isValidEmail) {
        errorSpan.innerText = 'Невалидный email'
    }
    else {
        errorSpan.innerText = ''
        const result = login(emailInput.value, passwordInput.value)
        alert(result)
    }
})

showPasswordIcon.addEventListener('click', () => {
    if(passwordInput.type === 'password'){
        passwordInput.type ='text'
        showPasswordIcon.src = './images/view.png'
    }
    else {
        passwordInput.type ='password'
        showPasswordIcon.src = './images/hide.png'
    }
})

emailInput.addEventListener('change', () => {
    if(EMAIL_REGEX.test(emailInput.value)) {
        isValidEmail = true
    }
    else {
        isValidEmail = false
    }
})