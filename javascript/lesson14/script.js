


// const promise = new Promise((resolve, reject) => {
//     resolve('Промис')
// })

// console.log('Привет') // Первый console log
// setTimeout(() => { // Сет таймаут - МИКРОТАСК
//     for(let i = 0; i < 10000; i++) {
//         console.log('Таймаут')
//     }
// }, 0)
// promise.then(value => console.log(value)) // Промис - МАКРОТАСК
// console.log('Пока') // Второй console log


// const button = document.getElementById('button')
// button.addEventListener('click', () => {
//     console.log('Нажал')
// })
// setTimeout(() => {
//     console.log('Привет')
// }, 1000)



// const button = document.getElementById('button')
// for(let i = 0; i < 10000; i++) {
//     console.log('hello');
// }
// button.style.backgroundColor = 'red'



// fetchData()
// let isLoading = false

// async function fetchData() {
//     try {
//         const res = fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'GET'
//         })
//         console.log(res)
//     } catch (err) {

//     }
//     finally {

//     }
// }



// const button = document.getElementById('button')
// const helloInterval = setInterval(() => {
//     console.log('Hello')
// }, 1000)

// button.onclick = () => {
//     clearInterval(helloInterval)
// }


// API (Интерфейс программирования приложения) - готовый чужой код либо готовые чужие данные

// request - всегда отправка запроса (GET - не запрос, вид запроса)
// response - всегда получаем запрос
// const request = new XMLHttpRequest()

// const body = JSON.stringify({
//     title: 'Sanya',
//     body: 'Horosh',
//     userId: 666,
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// request.send() // без тела
// request.onload = () => {
//     const res = request.response // JSON => "[{}]"
//     console.log(JSON.parse(res));
// }
// request.onerror = () => {
//     console.log(request)
// }


// METHOD
// GET - получение данных (либо передача данных в открытом виде) (от сервера к клиенту)
// POST - отправка данных (от клиента к серверу) (сохранение)
// DELETE - удаление данных
// PUT - изменение данных (обновление)
// PATCH - изменение данных (обновление) (partial)

// BODY - тело запроса (ваши данные которые вы отправляете на сервер)
// body = JSON.stringify({
//     email: 'fdsfsd@gmail.com',
//     password: 'dsfdsfsd234342'
// })

// ЗАДАЧА 1
// let number = 0
// const numberLogInterval = setInterval(function() {
//     number++ // 6
//     if(number > 5) { // 6 > 5
//         clearInterval(numberLogInterval) // не останавливает функцию интервала сразу, а останавливает следующий запуск интервала
//         return
//     }
//     console.log(`Сообщение номер ${number}`)
// }, 2000)

// // Сообщение номер 1
// // Сообщение номер 2
// // Сообщение номер 3
// // Сообщение номер 4
// // Сообщение номер 5




// ЗАДАЧА 2
// const hoursSpan = document.getElementById('hoursSpan')
// const minutesSpan = document.getElementById('minutesSpan')
// const secondsSpan = document.getElementById('secondsSpan')

// setInterval(() => {
//     const date = new Date()
//     const hours = date.getHours()
//     const minutes = date.getMinutes()
//     const seconds = date.getSeconds()

//     hoursSpan.innerText = hours
//     minutesSpan.innerText = minutes
//     secondsSpan.innerText = seconds
// }, 1000)




// ЗАДАЧА 3
// const titleElement = document.getElementById('titleElement')
// // https://jsonplaceholder.typicode.com/todos/1
// const request = new XMLHttpRequest()
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// request.send()
// request.onload = () => {
//     const data = JSON.parse(request.response)
//     titleElement.innerText = data.title
//     // console.log(request.status);
// }


// ЗАДАЧА 4
// const listElement = document.getElementById('listElement')
// const request = new XMLHttpRequest()
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
// request.send()
// request.onload = () => {
//     const data = JSON.parse(request.response).slice(0, 20)
//     data.forEach(element => {
//         const liElement = document.createElement('li')
//         liElement.innerText = element.title // <li>fsfdsfds<li>
//         listElement.appendChild(liElement)
//     });
// }
// request.onload = () => {
//     const data = JSON.parse(request.response).slice(0, 20)
//     const titles = data.map(element => element.title)
//     const liElements = titles.map(title => {
//         const liElement = document.createElement('li')
//         liElement.innerText = title
//         return liElement
//     })

//     listElement.innerText = ""
//     listElement.append(...liElements)
// }