// // КОНСТРУКТОР ФУНКЦИИ - завод для создания функции
// const sayMessageCreator = (template) => {
//     return (name) => {
//         console.log(template + ', ' + name)
//     }
// }

// const sayHello = sayMessageCreator('Привет')
// sayHello('Дина')
// sayHello('Мадина')

// const sayBye = sayMessageCreator('Пока')
// sayBye('Александр')

// // завод для создании обьектов
// // ФУНКЦИЯ-КОНСТРУКТОР (обьектов)
// const frontender = {
//     name: 'Али',
//     code: () => {
//         console.log('Пишу код')
//     }
// }

// const backender = {
//     name: 'Сабит',
//     code() {
//         console.log('Пишу код')
//     }
// }

// frontender.code()
// backender.code()

// // function log() { // function

// // }

// // console.log() // method


// function FrontenderFunction(name) {
//     // this = {}
//     this.name = name
//     this.code = () => {
//         console.log('Пишу фронт')
//     }
//     this.showInfo = function() {
//         console.log(`Имя: ${this.name}, Должность: Frontender`)
//     }
//     // return this
// }


// const frontender1 = new FrontenderFunction('Али')
// const frontender2 = new FrontenderFunction('Серик')
// const frontender3 = new FrontenderFunction('Дина')

// console.log(frontender1, frontender2, frontender3);

// frontender1.name = 'Сабит'
// frontender1.showInfo()

// const POSITION = {
//     DEVELOPER: 'Разработчик',
//     FRONTEND: 'Фронтенд Разработчик',
//     BACKEND: 'Бэкенд Разработчик',
//     QA: 'QA'
// }

// const CODENAME = {
//     code: 'код',
//     front: 'фронт',
//     back: 'бэк',
// }

// class Developer {
//     position = POSITION.DEVELOPER
//     codeName = CODENAME.code
 
//     constructor(name) {
//         this.name = name
//     }
//     code() {
//         console.log(`Пишу ${this.codeName}`)
//     }
//     showInfo() {
//         console.log(`Имя: ${this.name}, Должность: ${this.position}`) // Должность: Frontend Developer
//     }
// }

// class FrontenderDeveloper extends Developer {
//     position = POSITION.FRONTEND
//     codeName = CODENAME.front
// }

// class BackenderDeveloper extends Developer {
//     position = POSITION.BACKEND
//     codeName = CODENAME.back
// }

// class QAEngineers extends Developer {
//     position = POSITION.QA
//     codeName = null
//     code() {
//         console.log('Я тестирую');
//     }
// }

// const developer = new Developer('Али')
// const frontendDeveloper = new FrontenderDeveloper('Саша')
// const backendDeveloper = new BackenderDeveloper('Сабит')
// const qaDeveloper = new QAEngineers('Дина')

// console.log(developer)
// console.log(frontendDeveloper)
// console.log(backendDeveloper)
// console.log(qaDeveloper)

// frontendDeveloper.code()
// qaDeveloper.code()



// ЗАДАНИЕ 1
// function Car(model) {
//     this.model = model
//     this.showModel = () => {
//         console.log('Модель машины: ' + this.model)
//     }
// }

// const car1 = new Car('Toyota')
// const car2 = new Car('BMW')
// const car3 = new Car('Volkswagen')

// car1.showModel()
// car2.showModel()
// car3.showModel()



// ЗАДАНИЕ 2
// function Shop(title, address) {
//     this.title = title
//     this.address = address
// }

// const shop1 = new Shop('Магнум', 'Улица Керей-Жанибек')
// const shop2 = new Shop('Спортмастер', 'Улица Кабанбай батыр')

// const shops = [shop1, shop2]
// console.log(shops);

// const shopAddresses = shops.map(shop => shop.address)
// console.log(shopAddresses);


// ЗАДАНИЕ 3
const promptNum1 = +prompt('Введите первое число: ')
const promptNum2 = +prompt('Введите второе число: ')

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    sum() {
        console.log(this.num1 + this.num2)
    }
    mul() {
        console.log(this.num1 * this.num2)
    }
}

const calculator1 = new Calculator(promptNum1, promptNum2)
calculator1.sum()
calculator1.mul()