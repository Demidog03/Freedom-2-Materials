// ГЕНЕРАТОРЫ
// function getAge() {
//     return 20
//     console.log('КОД ПОСЛЕ return');
// }

// console.log(getAge())

function* getAge() {
    yield 20
    console.log('КОД ПОСЛЕ return');
    yield 15
    yield 50
}

const generator = getAge()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())