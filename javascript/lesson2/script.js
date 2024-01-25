// Тернарный оператор
// сокращенный if else

// let age = 19

// if(age >= 18) {
//     console.log('Добро пожаловать!');
// }
// else {
//     console.log('Вы слишком юны')
// }

// let age = 10
// let result = (age >= 18) ? 'Добро пожаловать!' : 'Вы слишком юны'
// console.log(result);

// console.log((age >= 18) ? 'Добро пожаловать!' : 'Вы слишком юны');
// age >= 18 ? console.log('Добро пожаловать!') : console.log('Вы слишком юны')


// 2 задача
// const country = 'Sweden';
// let access;
// if (country === 'Sweden') {
//     access = true;
// } else{
//     access = false;
// }

// let access = (country === 'Sweden') ? true : false


// ЦИКЛЫ
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')
// console.log('Привет')

// FOR (цикл)
// for(let i = 0; i < 10; i++) { // 10 итерации
//     console.log('Привет')
// }

// 2 задача
// let num1 = 10
// for(let i = 0; i < 10; i++) {
//     num1++
// }
// console.log(num1);


// 3 задача
// for(let i = 0; i <= 8; i+=2) {
//    const userAnswer = +prompt('Введите число:')
// //    if(userAnswer === 10) {
// //     console.log('Равно 10');
// //    }
// //    else {
// //     console.log('Не равно 10');
// //    }
//     console.log(userAnswer === 10 ? 'Равно 10' : 'Не равно 10')
// }

// //1-итерация -> 0
// //2-итерация -> 2
// //3-итерация -> 4
// //4-итерация -> 6
// //5-итерация -> 8


// While
// let i = 0
// while (i < 10) {
//     console.log('Привет');
//     i++
// }

//6 задание
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 4
// do {
//     alert( `number ${i}!` );
//     i++
// } while(i < 3)


// FUNCTIONS
// const myName1 = "Olzhas"
// console.log(`Привет, ${myName1}`);

// const myName2 = "Dina"
// console.log(`Привет, ${myName2}`);

// const myName3 = "Sanya"
// console.log(`Привет, ${myName3}`);

// const myName4 = "Serik"
// console.log(`Привет, ${myName4}`);

// const myName5 = "Sabit"
// console.log(`Привет, ${myName5}`);

// function sayHello(myName = 'Неизвестно', mySurname = 'Неизвестно') {
//     return `Привет, ${myName} ${mySurname}`
// } // string (не void)

// const result1 = sayHello()
// const result2 = sayHello('Dina', 'Omarova')
// const result3 = sayHello('Sanya', 'Kim')

// console.log(result1);
// console.log(result2);
// console.log(result3);


// ЗАДАНИЕ
// Калькулятор

// function calculate(num1, operator, num2) {
//     if(operator === "+") {
//         return num1 + num2
//     }
//     else if(operator === "-") {
//         return num1 - num2
//     }
//     else if(operator === "*") {
//         return num1 * num2
//     }
//     else if(operator === "/") {
//         return num1 / num2
//     }
//     else {
//         return 'Оператор не доступен!'
//     }
// }

// const result = calculate(5, "dfsifhdsuvfjdvhgfvdh", 9)
// console.log(result)


// 8 задание
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function generateRGBColor(num1, num2, num3) {
//     return `rgb(${num1}, ${num2}, ${num3})`
// }

// setInterval(() => {
//     const randomNum1 = getRandomInteger(0, 255)
//     const randomNum2 = getRandomInteger(0, 255)
//     const randomNum3 = getRandomInteger(0, 255)
//     const result1 = generateRGBColor(randomNum1, randomNum2, randomNum3)
//     document.body.style.backgroundColor = result1
// }, 300)

function callToLesson(studentName, date, time) {
    console.log(`Добрый день, ${studentName}. ${date} в ${time} запланирован урок. Прошу присоединиться в указанное время.`)
}

callToLesson('Жанна', '21.01.2024', '19:00')

function findStudentsNameCount(students, name) { // void, 
    let count = 0
    for (const student of students) {
        if(student === name) {
            count++
        }
    }
    return count
}

const result = findStudentsNameCount(['Сабит', 'Саят', 'Гульнар', 'Жанна', 'Гульмира', 'Жанна', 'Сабит'], 'Сабит')
console.log(result)