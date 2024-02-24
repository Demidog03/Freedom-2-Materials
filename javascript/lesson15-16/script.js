// console.log('Отправка запроса...');
// setTimeout(() => {
//     console.log('Подготовка ответа(данных)...');
//     const response = {
//         status: 400,
//         method: 'GET',
//         data: {
//             id: 4,
//             firstName: 'Medeu',
//             lastName: 'Arysh',
//             email: 'medeu@gmail.com'
//         }
//     }

//     setTimeout(() => {
//         response.data.age = 25
//         console.log('Ответ получен!');
//         if(response.status === 400) {
//             console.log('Ошибка!');
//             return
//         }
//         console.log(response);
//     }, 2000)
// }, 2000)


// ПРОМИСЫ
// const promise = new Promise((resolve, reject) => { // Обещание (выполнить, отвергнуть\отклонить)
//     console.log('Отправка запроса...');
//     setTimeout(() => {
//         console.log('Подготовка ответа(данных)...');
//         const response = {
//             status: 400,
//             method: 'GET',
//             data: {
//                 id: 4,
//                 firstName: 'Medeu',
//                 lastName: 'Arysh',
//                 email: 'medeu@gmail.com'
//             }
//         }
//         if(response.status === 400) {
//             reject('Ошибка! Запрос не удался!')
//         } 
//         resolve(response) // мы выполняем промис (return response)
//     }, 2000)
// })

// promise.then(response => { // после того как обещание выполнилось
//     setTimeout(() => {
//         response.data.age = 25
//         console.log('Ответ получен!');
//         console.log(response);
//     }, 2000)
// }).catch((error) => {
//     alert(error)
// })

// const loadingText = document.getElementById('loadingText')

// let username = ''

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         username = 'Madina'
//         if(username === 'Madina') {
//             reject('Ошибка! Имя Мадина не доступима!')
//         }
//         resolve(username)
//     }, 2000)
// })

// promise.then(response => { // response => 'Olzhas'
//     const h1 = document.createElement('h1')
//     h1.style.color = 'blue'
//     h1.innerText = response
//     document.body.appendChild(h1)
// }).catch(error => {
//     const h1 = document.createElement('h1')
//     h1.style.color = 'red'
//     h1.innerText = error
//     document.body.appendChild(h1)
// }).finally(() => {
//     loadingText.style.display = 'none'
// })

// const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
// }) // Возвращает Promise

// fetchPosts.then(response => { 
//     return response.json() // return Promise
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     alert('Ошибка при получении постов!');
// })


// АСИНХРОННАЯ ФУНКЦИЯ
// const loadingText = document.getElementById('loadingText')

// async function fetchPosts() {
//     try { // try-catch block
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: true,
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//             },
//         }) // подожди пока fetch закончит работу
//         const data = await response.json()
//         console.log(data);
//     } catch (err) {
//         err = {
//             status: 500,
//             message: 'Ошибка при создании постов!'
//         }
//         alert(err.message);
//     } finally {
//         loadingText.style.display = 'none'
//     }
// }

// fetchPosts()



// ЗАДАЧА 1
const countryCardTemplate = document.getElementById('countryCardTemplate')
const cardsContainer = document.getElementById('cardsContainer')
const spinner = document.getElementById('spinner')

async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all', {
            method: 'GET'
        })
        const countries = await response.json()
        const cardCountries = countries.map(county => {
            return {
                name: county.name.official,
                flag: county.flags.png,
                capital: Array.isArray(county.capital) ? county.capital[0] : 'No capital' // Была ошибка когда capital был undefined => undefined[0]
            }
        })
        console.log(cardCountries);
        cardCountries.forEach(county => {
            const cardTemplateClone = countryCardTemplate.content.cloneNode(true);
    
            const newCard = cardTemplateClone.getElementById('countryCard')
    
            const newCardImg = cardTemplateClone.getElementById('countyImg')
            newCardImg.src = county.flag
    
            cardsContainer.append(newCard)
        })
    } catch (err) {
        alert(err)
    }
    finally {
        spinner.style.display = 'none'
    }
}

fetchCountries()