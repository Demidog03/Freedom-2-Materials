const user = {
    id: 5,
    firstName: 'Serik',
    lastName: 'Serikov',
    email: 'serik@gmail.com'
}

const user2 = {
    id: 6,
    firstName: 'user2',
    lastName: 'user2',
    email: 'user2@gmail.com'
}

function sayHello() {
    console.log('Hello!');
}
console.log('аыавыаы')

// COMMON JS
// module.exports = user // игнорируется
// module.exports = user2
module.exports = {user, user2, sayHello} // {user: user, user2: user2}

// ES6 MODULES
// export default {user, user2, sayHello}
// const allExportData = {
//     user, 
//     user2,
//     sayHello
// }

// export default allExportData

