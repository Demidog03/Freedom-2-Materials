const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const loginBtn = document.getElementById('loginBtn')
const userInfoTemplate = document.getElementById('userInfoTemplate')
const formContainer = document.getElementById('formContainer')
const spinnerContainer = document.getElementById('spinnerContainer')
const root = document.getElementById('root')

const token = localStorage.getItem('token')
fetchGetProfile(token) // запуск функции для получения профился (авто-логин)


loginBtn.addEventListener('click', () => { // кнопка логина
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    fetchLogin({
        username: usernameInput.value,
        password: passwordInput.value
    })
})

function fetchLogin({username, password}) {
    const bodyData = {
        username, // username: username
        password // password: password
    }
    spinnerContainer.style.display = 'flex' // запуск спиннера
    fetch('https://dummyjson.com/auth/login', { // запрос на логин
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.message) { // если пришла ошибка
            Toastify({
                text: data.message,
                duration: 3000,
                close: true,
                style: {
                    background: "#ff0033",
                  },
            }).showToast();
        }
        else {
            Toastify({
                text: `Welcome back, ${data.firstName} ${data.lastName}!`,
                duration: 3000,
                close: true,
                style: {
                    background: "#48a848",
                  },
            }).showToast();
            if(data.token) { // сохранение токена в localstorage
                localStorage.setItem('token', data.token)
                fetchGetProfile(data.token)
            }
        }
    })
    .catch(err => {
        Toastify({
            text: err,
            duration: 3000,
            close: true,
            style: {
                background: "#ff0033",
            },
        }).showToast();
    })
    .finally(() => {
        usernameInput.value = ""
        passwordInput.value = ""
        spinnerContainer.style.display = 'none'
    })
}

async function fetchGetProfile(token) { // функция для получения профился (авто-логин)
    try {
        spinnerContainer.style.display = 'flex' // запуск спиннера
        if(!token) {
            return
        }
        // Запрос на получение профиля (авто-логин)
        const response = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Bearer i43sfsdgdodfosdfods
            }, 
        })
        const data = await response.json()
        // Отображение профиля
        const userInfoTemplateClone = userInfoTemplate.content.cloneNode(true)

        const userInfoContainer = userInfoTemplateClone.getElementById('userInfoContainer')
        const userImageInfo = userInfoTemplateClone.getElementById('userImageInfo')
        const usernameInfo = userInfoTemplateClone.getElementById('usernameInfo')
        const jobInfo = userInfoTemplateClone.getElementById('jobInfo')
        const logoutBtn = userInfoTemplateClone.getElementById('logoutBtn')

        userImageInfo.src = data.image
        usernameInfo.innerText = data.username
        jobInfo.innerText = data.company.title

        logoutBtn.addEventListener('click', () => { // кнопка выхода
            localStorage.removeItem('token')
            root.innerHTML = ""
            root.appendChild(formContainer)
        })

        root.innerHTML = ""
        root.appendChild(userInfoContainer)
    } catch (err) {
        Toastify({
            text: err,
            duration: 3000,
            close: true,
            style: {
                background: "#ff0033",
            },
        }).showToast();
    } finally {
        spinnerContainer.style.display = 'none' // остановка спиннера
    }
}