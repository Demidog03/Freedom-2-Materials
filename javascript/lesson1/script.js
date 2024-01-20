// console.log("Первый урок по JS MyFreedom!");
// console - обьект, log - метод(функция);

// olzhas.teach()
// stundents.learn()

// console.log(console);



//** СОЗДАНИЕ ПЕРЕМЕННОЙ */
// let myName = "Olzhas";
// console.log(myName);
// let - обьявлять переменную (decleration) (создать)
// name - название переменной
// = - присваивание значении (initialized)

// camelCase - myName
// python - my_name



/** ПОРЯДОК ВЫПОЛНЕНИЯ КОДА (АЛГОРИТМ) */
// let myName = "Olzhas";
// console.log(myName);



/** UNDEFINED (НЕОПРЕДЕЛЕННОСТЬ) */
// let myName;
// console.log(myName);



/** CONST и LET */
// let myName;
// myName = "Olzhas";
// console.log(myName);
// myName = "Sabit";

// const mySurname = "Otep";
// console.log(mySurname);



/** ТИПЫ ДАННЫХ JS */
// ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
// 1 - STRING (строка, текст)
// const text1 = "Some text"
// const text2 = 'Some text'
// const text3 = `Some text`

// 2 - NUMBER (число)
// const num1 = 5
// const num2 = 1000
// const num3 = 0.5

// 3 - BOOLEAN (булевое, правда или ложь)
// const isSerikIsSmart = true
// const isSerikIsNotSmart = false


// 4 - UNDEFINED
// let someUndefinedVariable;

// 5 - BIG INT
// const bigInt = 19241924124n;
// console.log(typeof 5);
// console.log(typeof bigInt);

// 6 - SYMBOL
// const someSymbol = Symbol('hello')
// console.log(someSymbol)


// НЕ ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
// 1 - OBJECT (обьект)
// const name = "Olzhas"
// const surname = "Otep"
// const age = 20

// const user = {
//     name: "Olzhas",
//     surname: "Otep",
//     age: 20,
//     sayHello: () => {console.log('hello')}
// }
// console.log(user);

// // console.log(user.sayHello());

// // 1.1 - ARRAY (массив, список)
// const students = ['Sabit', 'Gulzhan', 'Serik']
// console.log(students);

// 2 - NULL (обьект)
// const name1 = undefined; //я скорее всего буду что то хранить, но не знаю что
// const name2 = null; //Я НЕ БУДУ НИЧЕГО ХРАНИТЬ



/** РАБОТА С БРАУЗЕРОМ */
// ALERT (-)
// alert('Всем привет!')

// PROMPT (string)
// const age = prompt('Ваш возраст?')
// console.log(+age);
// console.log(20);

// CONFIRM (boolean)
// const isStudent = confirm('Вы студент?')
// console.log(isStudent);



/** ОПЕРАТОРЫ */
// АРИФМЕТИЧЕСКИЕ
// +, -, /, *, %

// // "+"
// console.log('5' + 10);
// console.log('Olzhas' + ' ' + 'Otep');

// // "-"
// console.log(10 - '5');
// console.log('Olzhas' - 'Otep');

// // "/"
// console.log(5 / 2)
// console.log(5 / 0)

// // "*"
// console.log(5 * 2)
// console.log(5 * 0)

// // "%" - модуль (остаток)
// console.log(10 % 5)


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (boolean)
// "=="
// console.log(7 == 5); //false

// // ">=", "<="
// console.log(5 >= 5); //true

// // ">", "<"
// console.log(5 > 5); //false

// // "!="
// console.log(5 != 5) //false

// // "===", "!==" - ВСЕГДА ПИСАТЬ
// console.log(5 === '5');
// console.log(undefined == null)
// console.log(0 == false)
// console.log(0 != undefined)

// // 0, false, null, undefined, '' - falsy values


/**Сложение с присваиванием (+=) */
// let num = 5
// num = num + 5 //num = 5 + 5 = 10 -> num += 5
// console.log(num);


/** КОНКАТЕНАЦИЯ СТРОК ('строка' + 'строка) */
// console.log('Otep' + ' ' + "Olzhas");
// const name = "Sabit"
// console.log('Hello, ' + name + "!")
// console.log(`Hello, ${name}!`)

// console.log(`\t\t\t\t\tПривет,\n 'Жанна"`);
// console.log("ПРИВЕТ, \"САША\"");



/** ОПЕРАТОРЫ "И" или "ИЛИ" */
// && - И
// console.log(true && true) //true
// console.log(false && true) //false
// console.log(true && false) //false
// console.log(false && false) //false

// || - или
// console.log(true || true) //true
// console.log(false || true) //true
// console.log(true || false) //true
// console.log(false || false) //false



/** IF ELSE (условия) */
// let num1 = 7
// let num2 = 7

// if(num1 > num2) { //if(false) -> НИЧЕ НЕ БУДЕТ РАБОТАТЬ
//     console.log(`${num1} БОЛЬШЕ ${num2}`);
// }
// else if(num1 < num2) {
//     console.log(`${num1} МЕНЬШЕ ${num2}`);
// }
// else {
//     console.log('ЧИСЛА РАВНЫ');
// }




// 1 ЗАДАЧА
// const userName = prompt('Напишите ваше имя')
// alert(`Привет, ${userName}!`)


// 2 ЗАДАЧА
// const number = prompt('Введите число')
// const exponent = prompt('В какую степень вывести число?')
// console.log(number ** exponent);

// 5 * 2 = 10
// 5 ** 2 = 25


// 3 ЗАДАЧА
// const userCountry = prompt('Ваше гражданство?')
// if(userCountry === 'Казахстан'
//     || userCountry === 'Kazakhstan' 
//     || userCountry === 'КАЗАХСТАН' 
//     || userCountry === 'Қазақстан') {
//     alert("Вы резидент Казахстана!");
// }
// else {
//     alert("Вы не резидент Казахстана!");
// }

// 4 ЗАДАЧА
// const userAge = Number(prompt('Сколько вам полных лет?'))
// console.log(userAge);
// if (Number.isNaN(userAge)) {
//     alert('Введите пожалуйста число')
// }
// else if(userAge < 0 || userAge > 140) {
//     alert('Вы издеваетесь?')
// }
// else if(userAge >= 21) {
//     alert('Вам можно пить алкоголь!')
// }
// else if(userCountry === 'Казахстан'
// || userCountry === 'Kazakhstan' 
// || userCountry === 'КАЗАХСТАН' 
// || userCountry === 'Қазақстан') {
//     alert("Вам можно пить алкоголь!")
// }
// else {
//     alert('Вам нельзя пить алкоголь!')
// }


// 5 ЗАДАЧА
// const userAge = prompt('Ваш возраст:')
// if(userAge <= 0 || userAge >= 25) { // ЕСЛИ ИНТЕРВАЛ - &&
//     alert('Вы не подросток!')
// }
// else {
//     alert('Вы подросток!')
// }


// 4 задача
// let text = 'some text'

// if(text === 'some text') { //'some text' === 'some text'
//     text = 'another text'
// }
// else {
//     text = 'some text'
// }

// console.log(text)

// 5 задача
// let num1 = -3

// if(num1 === 0) {
//     num1 = 1
// }
// else if(num1 < 0) {
//     num1 = 'less then zero'
// }
// else if (num1 > 0) {
//     num1 *= 10 // num1 = num1 * 10
// }

// console.log(num1)

// 6 задача
// const answer = +prompt('Введите число:')
// let result

// if(answer < 5) {
//     result = 0
// }
// else if(answer > 5) {
//     result = 1
// }
// console.log(result);


// 7 задача
const num1 = +prompt('Введите первое число:')
const num2 = +prompt('Введите второе число:')

if(num1 > num2) {
    console.log(`Наибольшее число: ${num1}`);
}
else if(num1 < num2) {
    console.log(`Наибольшее число: ${num2}`)
}
else {
    console.log('Числа равны')
}


// java
// string text = "some text"
// int num1 = 4