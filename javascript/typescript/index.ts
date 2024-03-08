// let num: number | null
// num = null

// type NumberOrString = number | string
// let id: NumberOrString
// id = '10'

// interface Student {
//     id: number
//     name: string
//     age: number
//     gender: 'Male' | 'Female'
//     email?: string
//     showInfo: VoidFunction
// }

// const student1: Student = {
//     id: 5,
//     age: 22,
//     gender: "Male",
//     name: 'Alexandr',
//     showInfo() {
//         console.log('fds')
//     }
// }

// function sayHello(name: string): void {
//     console.log(`Привет, ${name}`)
// }

// sayHello('Серик')

// function sum(num1: number, num2: number): number {
//     return num1 + num2
// }
// sum(5, 2)


// const students: Student[] = [
//     {
//         age: 12,
//         id: 3,
//         gender: "Female",
//         name: 'fdsfds',
//         showInfo: () => {},
//     }
// ]

class Logo {
    imgUrl: string // public imgUrl: string
    top: number = 0
    private left: number = 0;
    width: number = 200;
    height: number = 200;
    element: HTMLImageElement | null = null;

    constructor(url: string) {
      this.imgUrl = url;
    }
  
    init() {
      // метод должен создать тег img
      const img = document.createElement('img')
      // вложить в него src картинки (this.imgUrl)
      img.src = this.imgUrl
      // и записать в this.html
      this.element = img
      // + дергаем render
      this.render()
      // + странице должен залится фон черным
      document.body.style.backgroundColor = 'black'
    }
    
    render() {
    if(this.element) {
        // метод должен отрисовать изображение (this.element) на странице
      document.body.appendChild(this.element)
      // применить фиксированное позиционирование
      this.element.style.position = 'fixed'
      // использовать this.top и this.left для указания позиции
      this.element.style.top = `${this.top}px`
      // img {
      //    top: 0
      // }
      this.element.style.left = `${this.left}px`
      // использовать this.width для указания ширины
      this.element.width = this.width
      // использовать this.height для указания высоту
      this.element.height = this.height
      // object-fit: cover
      this.element.style.objectFit = 'cover'
      // округляем this.element
      this.element.style.borderRadius = '50%'
      }
    }
  
    moveUp() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      this.top -= 20
      // + дергаем render
      this.render()
    }
    moveDown() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      this.top += 20
      // + дергаем render
      this.render()
    }
    moveLeft() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      this.left -= 20
      // + дергаем render
      this.render()
    }
    moveRight() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      this.left += 20
      // + дергаем render
    }
  }

const logo1 = new Logo('https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg')
const logo2 = new Logo('https://trikky.ru/wp-content/blogs.dir/1/files/2020/04/22/1564314090_3.jpg')
logo1.init()
console.log(logo1.render());



abstract class PersonAbstract { // комбо класс + интерфейс
    name: string = 'Serik'
    abstract display(): void
}

interface PersonInterface {
    name: string
    display(): void
}


class PersonClass {
    name: string;
    constructor(name: string) {
        this.name = name
    }

    display(): void {
        console.log('fdsfds')
    }
}

class Student extends PersonAbstract {
    display(): void {
        console.log('I am student')
    }
    sayHi(): void {

    }
}

class Employee extends PersonClass {

}

const student1 = new Student('Serik')
const employee1 = new Employee('Dina')
console.log(student1);
console.log(employee1);

