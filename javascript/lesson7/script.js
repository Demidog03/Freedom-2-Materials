// BOM - BROWSER OBJECT MODEL

// LOCATION
// const isReloadAvailable = true
// if(!isReloadAvailable) {
//     // isReloadAvailable -> isReloadAvailabe === true
//     // !isReloadAvailable -> isReloadAvailabe === false
//     location.reload()
// }
// console.log(location.pathname)

// navigator
// setTimeout(async()=>console.log(
//     await window.navigator.clipboard.readText()), 3000)
// console.log(navigator.geolocation.getCurrentPosition((success) => console.log(success)))
// console.log(navigator)


// history
// console.log(history.state)
// history.back()
// console.log(history)

// class Student {
//     name = ''
//     constructor(name) {
//         this.name = name
//     }
//     getName(){
//         console.log(this.name)
//     }
// }

// const student1 = new Student('Sabit')

// console.log(student1)


// SCREEN
// console.log(screen)


// DOM - DOCUMENT OBJECT MODEL
// console.log(document.body) // МАССИВ ВСЕХ ДОЧЕРНИХ ЭЛЕМЕНТОВ

// 1
// const element1 = document.querySelector('a')
// element1.href = 'https://youtube.com'
// console.log(element1)


// 2
// const elements = document.querySelectorAll('a')
// console.log(elements)

// elements.forEach(element => {
//     element.href = 'https://hh.kz/'
// })

// const titleElement = document.querySelector('#title')
// console.log(titleElement)

// const paragraph = document.querySelector('#paragraphText')
// console.log(paragraph)



// 3
// const paragraph = document.getElementById('paragraphText')
// console.log(paragraph.innerHTML = '<b>ШКОЛА</b>')
// console.log(paragraph.innerText)

// ЗАДАНИЕ 2
// const listElement = document.querySelector('#list')
// const listElementItems = [...listElement.children]
// console.log(listElementItems)

// listElementItems.forEach((item, index) => {
//     item.innerText = index
//     item.remove()
// })


// ЗАДАНИЕ 3
// const forRemoveElements = document.querySelectorAll('.forRemove')
// console.log(forRemoveElements)
// forRemoveElements.forEach(element => {
//     element.remove()
// })


// СОЗДАНИЕ ЭЛЕМЕНТОВ DOM
// console.log(document.body)

// const titleElement = document.createElement('h1')
// titleElement.innerText = "MyFreedom Academy"

// const linkElement = document.createElement('a')
// linkElement.innerText = 'ПЕРЕЙТИ'
// linkElement.href = 'https://myfreedom.by/'

// // document.body.appendChild(titleElement)
// // document.body.appendChild(linkElement)
// document.body.append(titleElement, linkElement) // ДОБАВИТЬ НЕСКОЛЬКО ЭЛЕМЕНТОВ


// const containerElement = document.querySelector('#container')
// containerElement.append(titleElement, linkElement)


// СТИЛИЗАЦИЯ DOM
// console.log(document.body.style.backgroundColor = 'red')

// const containerElement = document.querySelector('#container')
// // containerElement.style.height = '500px'
// // containerElement.style.backgroundColor = 'green'
// containerElement.style.cssText = 'height: 500px; background-color: blue;'


// ЗАДАНИЕ 4
// const paragraphElement = document.createElement('p')
// paragraphElement.innerText = 'КАКОЙ ТО ТЕКСТ'
// paragraphElement.style.fontSize = '36px'
// paragraphElement.style.fontWeight = 'bold'
// paragraphElement.style.cssText = `
//     font-size: 36px;
//     font-weight: bold;
// `;
// document.body.appendChild(paragraphElement)


// ЗАДАНИЕ 5
// function createTag(tagName, colorName, content) {
//     const element = document.createElement(tagName) // document.createElement('p')
//     element.style.color = colorName // element.style.color = 'red'
//     element.innerHTML = content // element.innerHTML = 'ПОКА САБИТ'
//     return element
// }

// const element1 = createTag('p', 'red', 'ПОКА САБИТ')
// const element2 = createTag('h1', 'blue', 'ПРИВЕТ МАДИНА')
// const element3 = createTag('button', 'pink', 'НАЖМИ')

// console.log(element1, element2, element3)
// document.body.append(element1, element2, element3)


// ЗАДАНИЕ 7
// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true},
//     {name: 'Дина', order: true}
// ]

// const liElements = clients.map(client => {
//     const liELement = document.createElement('li')
//     liELement.innerText = `Клиент ${client.name} ${client.order ? 'оплатил/a' : 'отменил/a'} заказ`
//     return liELement
// })

// const ulElement = document.createElement('ul')
// ulElement.append(...liElements)

// document.body.appendChild(ulElement)


// КЛАССЫ В JS

// const isSubscribed = true
// const buttonElement = document.querySelector('.button1')
// if(!isSubscribed) {
//     buttonElement.innerText = 'ПОДПИСАТЬСЯ'
//     buttonElement.classList.add('subscribed')
// }
// else {
//     buttonElement.innerText = 'ОТПИСАТЬСЯ'
//     buttonElement.classList.add('unsubscribed')
// }