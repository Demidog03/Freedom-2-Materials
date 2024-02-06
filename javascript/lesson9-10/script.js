// var num1; hoisting - всплытие
// function sayHi() {} hoisting - всплытие

// function showNumber() { //block (тело)
//     num1 = 5; // block-scoped variable
//     console.log(num1)
// }

// showNumber()
// console.log(num1)


// VAR - не block-scoped
// console.log(num)

// if(true) {
//     var num = 5
// }


// FUNCTION HOISTING
// sayHi()

// function sayHi() {
//     console.log('hi')
// }


// public private

// const user = {
//     getAge: () => {},
//     private changeAge: () => {}
// }

// console.log(user.changeAge())



// ЗАМЫКАНИЕ
// function increaseNumberFunctionCreator() { //генератор функции - чертеж
//    let num1 = 10 // замыкается

//    function innerFunction() {
//      num1++
//      return num1 //return 11
//    }

//    return innerFunction //return innerFunction
// }

// const increaseNumber1 = increaseNumberFunctionCreator() //функцию - результат
// console.log(increaseNumber1()) //11 //num1
// console.log(increaseNumber1()) //12
// console.log(increaseNumber1()) //13

// const increaseNumber2 = increaseNumberFunctionCreator()
// console.log(increaseNumber2()) //11 //num1
// console.log(increaseNumber2()) //12


// ПРИМЕР
// function makeAdder(num1) { //функция конструктор
//     function addNumber(num2) {
//         return num1 + num2
//     }
//     return addNumber
// }

// const addFive = makeAdder(5)
// const addTwo = makeAdder(2)
// console.log(addFive(2))
// console.log(addFive(4))


// function studentCreator(studentName) { // функция конструктор (класс)
//     let name = studentName

//     function checkIfNameExist(newName) {
//         if(name === newName) {
//             return true
//         }
//         else {
//             return false
//         }
//     }

//     return {
//         showName: () => {
//             console.log(name)
//         },
//         changeName: (newName) => {
//             if(checkIfNameExist(newName)) {
//                 console.warn('Имя уже задано')
//             }
//             else {
//                 name = newName
//                 console.log(`Имя изменено на ${newName}`)
//             }
//         },
//     }
// }

// const student1 = studentCreator('Sanya')
// student1.showName()
// student1.changeName('Sasha')
// student1.showName()

// const student2 = studentCreator('Madina')
// student2.changeName('Madina')


// Функция-генератор !== Генератор функции


// МОДАЛКА
const openModalBtn = document.querySelector('#openModalBtn')
const modalWrapper = document.querySelector('#modalWrapper')
const modalCloseIcon = document.querySelector('#modalCloseIcon')
const modal = document.querySelector('#modal')

openModalBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('hidden')
})

modalCloseIcon.addEventListener('click', () => {
    modalWrapper.classList.add('hidden')
})

modalWrapper.addEventListener('click', () => {
    modalWrapper.classList.add('hidden')
})

modal.addEventListener('click', (event) => {
    event.stopPropagation()
})