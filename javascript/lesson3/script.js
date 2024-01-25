// ПОВТОРЕНИЕ
// const n = 200  //&& ||

// function checkInterval(num, min, max) {
//     return (num >= min && num <= max) ? true : false
// }

// checkInterval(10, 0, 50) //true
// console.log(checkInterval(10, 0, 50)) //console.log(true)

// const redFigure = {
//     color: 'red',
//     form: 'square'
// }

// const user = { //user = object
//     firstName: 'Sabit', //firstName = key, field, property (свойство, поле, ключ). 'Sabit' = value (значение)
//     lastName: 'Kabidulayev',
//     age: 25,
//     password: 'sfno3o4235#gfdgdan$##',
//     role: 'USER',
//     contactInfo: {
//         phoneNumber: {
//             homeNumber: 548798,
//             telephoneNumber: 87076569991
//         },
//         email: 'sabit777@gmail.com',
//     }
// }

// console.log(user.contactInfo.phoneNumber.telephoneNumber)

// console.log(redFigure)
// redFigure.size = 25
// console.log(redFigure)


// СОЗДАТЬ КОПИЮ - ОШИБКА (ТАК НЕЛЬЗЯ)
// const student = {
//     username: 'Zhanna24',
//     password: 'fdfdsfds241',
// } // #6214

// const studentCopy = student // #6214
// studentCopy.email = 'zhanna24@gmail.com'
// student.age = 20

// console.log(student)
// console.log(studentCopy)


// СОЗДАТЬ КОПИЮ - ПРАВИЛЬНО
// const student = {
//     username: 'Zhanna24',
//     password: 'fdfdsfds241',
//     age: 25,
//     isTeen: true
// } // #6214

// const studentCopyJSON = JSON.stringify(student)
// const studentCopyObject = JSON.parse(studentCopyJSON) // #4363
// studentCopyObject.email = 'zhanna@gmail.com'

// console.log(student)
// console.log(studentCopyObject)

// // JSON - обьект который превратился в string
// // "{
// //     "username": "Zhanna24",
// //     "password": "fdfdsfds241",
// //     "age": 25
// // }"


// МЕТОДЫ
// const pc = {
//     cpu: 'intel i5-9300h',
//     gpu: 'gtx 1650',
//     ram: '16gb',
//     sayHello: function() { // анонимная функция
//         console.log('Hello')
//     }
// }

// console.log(pc)
// console.log(pc.hasOwnProperty('gpu'));
// console.log(pc)

// pc.sayHello() // метод
// sayHello() // функция


// FOR-IN
// for(let i = 0; i < 10; i++) {

// }

// const student = {
//     name: 'Sanya',
//     email: 'sanya@gmail.com',
//     age: 15,
//     password: 'qwety123!',
//     contact: {
//         telephone: 34234234,
//         homeNumber: 43242
//     }
// }

// console.log(student.name)
// console.log(student.email)
// console.log(student.age)
// console.log(student.password)

// console.log(student.name) // 1 способ
// console.log(student['name']) // 2 способ

// for (const studentKey in student) {
//     console.log(student[studentKey]) // student['name']
// }


// ЗАДАНИЕ 2
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000,
//     Ali: 10000
// }

// for (const key in engineers) {
//     console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`)
// }


// МАССИВЫ
// const student = {
//     'name': 'fdsfds',
//     'age': 15,
//     'email': 'fdsfds'
// }

// const studentNames = ['Ali', 'Zhanna', 'Madina', 'Sabit', [14, 15, 12]]
// studentNames[5] = "John"
// // //console.log(studentNames.length); // 5

// for(let i = 0; i < studentNames.length; i++) { // 0 - 4
//     console.log(studentNames[i])
// }

// // // i <= studentNames.length - 1 // i <= 5-1 => i <= 4
// // // i <  studentNames.length // i < 5 ----- i <= 4

// console.log(studentNames)
// for (const value of studentNames) {
//     console.log(value);
// } // значение - НЕ РАБОТАЕТ ДЛЯ ОБЬЕКТОВ

// for (const index in studentNames) {
//     console.log(index)
// } // поле (индекс)


// ЗАДАНИЕ 3
// const fruits = ['apple', 'grape', 'ananas', 'banana', 'pear', 'Sanya']

// for(let i = 1; i < fruits.length; i+=2) { // 1, 3, 5, 7, 
//     console.log(fruits[i]);
// } 

// ЗАДАНИЕ 4
// const numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// for (const index in numbers) {
//     console.log(`Индексу ${index} соответствует число ${numbers[index]}`)
// }


// МАССИВ ОБЬЕКТОВ
// const fruit1 = {
//     name: 'apple',
//     price: 100
// }

// const fruit2 = {
//     name: 'banana',
//     price: 200
// }

// const fruits = [
//     {
//         name: 'apple',
//         price: 100
//     },
//     {
//         name: 'banana',
//         price: 200
//     },
//     {
//         name: 'pear',
//         price: 150
//     },
//     {
//         name: 'grape',
//         price: 120
//     },
//     {
//         name: 'ananas',
//         price: 300
//     }
// ]

// console.log(fruits);


// 5 ЗАДАНИЕ
// const questions = [
//     {
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     },
//     {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }
// ];

// console.log(questions);

// for (const value of questions) {
//     value.userAnswer = null
// }


//ЗАДАНИЕ 6
const numbers = [42, 65, 49, 68, 56, 50, 70, 42, 51, 35, 58, 63, 40, 70] // length = 14, last index = 13

// 1
// for (const number of numbers) {
//     console.log(number);
// }

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]) //numbers[13]
// }


//2
// let sum = 0
// for (const number of numbers) {
//     sum += number
//     console.log(sum);
// }

// console.log('Сумма все чисел в массиве: ' + sum)


//3
// let sum = 0
// for (const number of numbers) {
//     if(number % 2 === 0) {
//         sum += number
//     }
// }

// console.log('Сумма все чисел в массиве: ' + sum)


//4
// function max(arrayOfNumber) {
//     let maxResult = arrayOfNumber[0] 
//     for (const number of arrayOfNumber) { 
//         if(typeof number !== 'number') {
//             return `Array contains not number element: ${number}`
//         }
//         if(number > maxResult) {
//             maxResult = number
//         }
//     }
//     return maxResult
// }

// console.log(max(numbers))

// console.log('Наибольшее число в массиве: ' + max)

// const max = Math.max(...numbers)
// console.log(max);


//5
// const maxResult = {
//     value: numbers[0],
//     index: []
// }

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] === maxResult.value) {
//         maxResult.index.push(i)
//     }
//     else if(numbers[i] > maxResult.value) {
//         maxResult.value = numbers[i]
//         maxResult.index = [i]
//     }
// }
// console.log(maxResult)


// let maxNumber = numbers[0]
// let maxIndexes = []

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] === maxNumber) {
//         maxIndexes.push(i) //[6, 13]
//     }
//     else if(numbers[i] > maxNumber) {
//         maxNumber = numbers[i] // number[6] = 70
//         maxIndexes = [i] // [6]
//     }
// }

// console.log(maxNumber)
// console.log(maxIndexes)



