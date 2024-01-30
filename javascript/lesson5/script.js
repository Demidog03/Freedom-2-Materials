// const helloText = 'Привет, добро пожаловать на урок, Привет'
// console.log(helloText.length); //кол-во символов в тексте

// const helloTextSplitted = helloText.split(' ') // разделить строку на массив
// console.log(helloTextSplitted[helloTextSplitted.length - 1])

// console.log(helloText.slice(14, 24)) // slice - вырезать (не влючая, включая)
// console.log(helloText.slice(14)) // если не будет конечного индекса вырезает от начального до конца
// console.log()

// console.log(helloText.charAt(5)) // находит символ в каком то индексе
// console.log(helloText.indexOf('п')) // находит индекс символа (только первый встречный)
// console.log(helloText.replace('Привет', 'Пока')) // заменяет первое найденно символы
// console.log(helloText.replaceAll(' ', '_')) // заменяет все найденные символы

// console.log(helloText.toLowerCase()) // перевести текст на нижний регистр
// console.log(helloText.toUpperCase()) // перевести текст на верхний регистр

// console.log(helloText.includes('урок')) // дает понять есть ли символы в тексте (boolean)

// const text1 = 'Пока'
// const text2 = 'Саня'
// console.log(text1 + ' ' + text2)
// console.log(text1.concat(' ', text2))

// привет
// Привет


// ЗАДАНИЕ 1
// const ucFirst = (str) => {
//     const firstLetter = str[0]
//     // const firstLetter = str.charAt(0)
//     // const firstLetter = str.slice(0, 1)
//     // const firstLetter = str.substring(0, 1)

//     const firstLetterUppercase = firstLetter.toUpperCase()

//     const stringSlice = str.slice(1)

//     const result = firstLetterUppercase + stringSlice
// }


// const ucFirst = (str) => str[0].toUpperCase() + str.slice(1)

// ucFirst('jbibjhbhbihb')


// ЗАДАНИЕ 2
// 'Добрый вечер, Серик XXX ок'
// 'Добрый вечер, Серик xxx ок'
// 'Добрый вечер, Серик XxX ок'
// 'Добрый вечер, Серик xxX ок'

// function checkSpam(str) {  
//     const strLowercase = str.toLowerCase() //BADword => badword
//     return strLowercase.includes('badword') || strLowercase.includes('xxx')
// }

// const checkSpam = (str) => str.toLowerCase().includes('badword') || str.toLowerCase().includes('xxx')

// console.log(checkSpam('Добрый вечер, Серик BADword ок'))


// МЕТОДЫ МАССИВОВ
const arrayOfStrings = ['Серик', 'Сабит', 'Саня']
// console.log(arrayOfStrings)
// console.log(arrayOfStrings.join(', ')) // обьединение элементов массива в строку

// console.log(arrayOfStrings.slice(0, 2)) // Не меняет массив (иммутабельность) immutable
// console.log(arrayOfStrings.splice(0, 2)) // Меняет массив (мутабельность) mutable

// arrayOfStrings.push('Мадина') // добавляет в конец новый элемент
// console.log(arrayOfStrings)

// arrayOfStrings.pop() // удаляет последний элемент
// console.log(arrayOfStrings)

// arrayOfStrings.unshift('Дина') // добавление в начало массива
// console.log(arrayOfStrings)

// arrayOfStrings.shift() // удаляет первый элемент
// console.log(arrayOfStrings)

// arrayOfStrings.reverse()
// console.log(arrayOfStrings) // реверсирует (зеркали) массив


// ЗАДАНИЕ 10
// const str = 'Дом'

// const reverseString1 = (str) => {
//     let strReverse = ''
//     for(let i = str.length - 1; i >= 0; i--) { // обратный цикл
//         strReverse += str[i] // 'я' + 'н' = 'ян'
//     }
//     return strReverse
// }

// console.log(reverseString1(str))


// const reverseString2 = (str) => {
//     const strArray = str.split('')
//     const reversedStrArray = strArray.reverse()
//     const reversedStr = reversedStrArray.join('')
//     return reversedStr
// }

// console.log(reverseString2(str))


// ЗАДАНИЕ 11
// const stations = [

//     'MAN675847583748sjt567654;Manchester Piccadilly',
    
//     'GNF576746573fhdg4737dh4;Greenfield',
    
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
//     'SYB4f65hf75f736463;Stalybridge',
    
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    
// ];

// //1
// for (const station of stations) {
//     const code = station.slice(0, 3)
//     const stationName = station.split(';')[1]
//     console.log(`${code}: ${stationName}`);
// }

// //2
// for (const station of stations) {
//     const code = station.slice(0, 3)
//     const indexOfSemiColon = station.indexOf(';')
//     const stationName = station.slice(indexOfSemiColon+1)
//     console.log(`${code}: ${stationName}`);
// }



// FILTER
// const students = ['Sabit', 'Serik', 'Sanya', 'Olzhas', 'Madina']
// const studentsWithoutMadina = students.filter((student) => {
//     if(student === 'Sanya' || student === 'Madina') {
//         return false
//     }
//     return true
// })

// console.log(studentsWithoutMadina)


// ЗАДАНИЕ 15
// const filterArrayByStringLength = (arr) => {
//     const filteredArr = arr.filter((element) => element.length <= 3) // element.length <= 3 ----> return true
//     return filteredArr
// }

// console.log(filterArrayByStringLength(['yes', 'hello', 'no', 'easycode', 'what']))



