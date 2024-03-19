// COMMON JS
// const {user, sayHello} = require('./data')

// function showData(data) {
//     console.log(data)
// }

// showData(user)
// sayHello()
// console.log('Серик')

// ES6 MODULES
// import sayHello from './data.js' // export default
import {sayHello} from './data.js' // export
import {user, user2} from './ts/data.ts'

function showData(data) {
    console.log(data)
}

showData(user)
sayHello()
