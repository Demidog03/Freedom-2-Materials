// COMMON JS
const {user, sayHello} = require('./data')

function showData(data) {
    console.log(data)
}

showData(user)
sayHello()
console.log('Серик')

// ES6 MODULES
// // import sayHello from './data.js' // export default
// import {user, user2, sayHello} from './data.js' // export

// function showData(data) {
//     console.log(data)
// }

// showData(user)
// sayHello()
