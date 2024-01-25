// function sayHB(personName) {
//     console.log(`С днем рождения, ${personName}!`)
// }

// sayHB = 'ПРИВЕТ'

// sayHB('Madina')


// // СТРЕЛОЧНАЯ ФУНКЦИЯ
// const sayHB = personName => `С днем рождения, ${personName}!`

// const sayHB = (personName) => {
//     return `С днем рождения, ${personName}!`
// }

// //sayHB = 'ПРИВЕТ' -> ОШИБКА

// console.log(sayHB('Madina'))

// АНОНИМАНАЯ ФУНКЦИЯ
// const sayHB = function(personName) {
//     console.log(`С днем рождения, ${personName}!`)
// }

// const sayHB = (personName) => {
//     console.log(`С днем рождения, ${personName}!`)
// }

// function sayHB(personName) {
//     console.log(`С днем рождения, ${personName}!`)
// }



// ЗАДАНИЕ1
// function sum1(num1, num2) {
//     if(num1 === undefined || num2 === undefined) {
//         return 'введите два параметра'
//     }
//     if(typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return 'введенные данные не являются числами'
//     }
//     return num1 + num2
// }

// console.log(sum1('dsdss', 2))

// const sum2 = function(num1, num2) {
//     return num1 + num2
// }

// const sum3 = (num1, num2) => num1 + num2


// FOR EACH, MAP
const programmingLanguages = ['Javascript', 'PHP', 'Python', 'Java', 'Delphi', 'Pascal', 'Assembly', 'C#', 'C++']

//callback function - функция которая является параметром другой функции
// НЕЛЬЗЯ ОСТАНОВИТЬ
programmingLanguages.forEach((value, index) => {
    console.log(value);
})

// MAP
const programmingLanguagesCopy = programmingLanguages.map((value, index) => {
    return value
})

const users = [
    {
        name: 'Sabit',
        email: 'sabit@gmail.com',
        telephone: 87070331546
    },
    {
        name: 'Serik',
        email: 'serik@gmail.com',
        telephone: 49161313
    },
    {
        name: 'Sanya',
        email: 'sanya@gmail.com',
        telephone: 49741121
    }
]

const usersTelephoneNumbers = users.map((value) => {
    return {
        name: value.name,
        number: value.telephone
    }
})


console.log(usersTelephoneNumbers)
