const student = {
    name: 'Serik',
    age: 26,
    email: 'serik@gmail.com',
    work: {
        title: 'MyFreedom',
        post: 'Frontend Mentor'
    }
}

// const studentClone = {
//     name: 'Serik', // поменялось
//     age: 26, // поменялось
//     email: 'serik@gmail.com', // поменялось
//     work: #54353453 // не меняется
// }

// const studentName = student.name
// const studentAge = student.age
// const studentEmail = student.email

// console.log(studentName)
// console.log(studentAge)
// console.log(studentEmail)

//Диструктуризация объект
// const {name: firstName, age: studentAge, email: studentEmail, work} = student //name: name -> name
// console.log(firstName)
// console.log(studentAge)
// console.log(studentEmail)

// const {post, title: workTitle} = work
// console.log(workTitle)
// console.log(post)


// Диструктуризация массива
// const emails = ['madina@gmail.com', 'dina@mail.ru', 'gulmira@gmail.com']
// const [first, second, third] = emails
// console.log(first)
// console.log(second)
// console.log(third)


// SPREAD OPERATOR
// КЛОНИРОВТЬ МОЖНО, ЕСЛИ ОБЬЕКТ ПРОСТОЙ
// const studentClone = {...student} // НЕ ЛУЧШАЯ ИДЕЯ -> вот так лучше JSON.stringify(student)
// studentClone.age = 15
// studentClone.work.title = 'Documentolog'

// console.log('Student: ', student)
// console.log('Student Clone: ', studentClone)


// ПРИМЕР С ФУНКЦИЕЙ
// const job = {
//     companyName: 'MyFreedom',
//     post: 'Frontend Mentor',
//     salary: '2000$'
// }

// const job = ['MyFreedom', 'Frontend Mentor', '2000$'] // порядок важен

// function showJobInfo(companyName, post, salary) {
//     console.log(`You work at ${companyName}`)
//     console.log(`Your post is ${post}`)
//     console.log(`Your monthly salary is ${salary}`)
// }

// // const {companyName, post, salary} = job
// showJobInfo(...job) // showJobInfo('MyFreedom', 'Frontend Mentor', '2000$')


// SPREAD ARRAY
// const products = [
//     {
//         name: 'Banana',
//         price: 200
//     },
//     {
//         name: 'Milk',
//         price: 350
//     },
//     {
//         name: 'Rollton куриный',
//         price: 450
//     },
// ]

// const productsClone = JSON.parse(JSON.stringify(products))
// productsClone[0].price = 300

// console.log('Products', products)
// console.log('Products Clone', productsClone)


// ЗАДАНИЕ 1
const names = ['Ali', 'Medeu', 'Sayat', 'Gulzhan', 'Gulnar']

let [firstName, secondName, ...otherNames] = names

console.log(firstName)
console.log(secondName)
otherNames.forEach(name => {
    console.log(name)
})
