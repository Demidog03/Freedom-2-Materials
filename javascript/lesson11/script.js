// let username = 'Dina'
// localStorage.setItem('username', username) // username: 'Dina'
// console.log(username)

// const localStrorageUsername = localStorage.getItem('username')
// const isLoggedIn = localStorage.getItem('isLoggedIn')

// isLoggedIn === 'true' ? console.log(true) : console.log(false)

// console.log(true)

// null, undefined, 0, false, ''

// sessionStorage.setItem('welcomeText', 'Всем доброго дня!')

// localStorage - можно хранить данные почти ВЕЧНО (пока не очистим кеш или не удалим браузер)
// sessionStorage - можно хранить до тех пор пока НЕ ЗАКРОЕМ ВКЛАДКУ (при обновлении страницы данные остаются)


// PRACTICE - TODO APP

// 1. БЕЗ LOCALSTORAGE
// const todoCreateExecutorInput = document.querySelector('#todoCreateExecutorInput');
// const todoCreateTitleInput = document.querySelector('#todoCreateTitleInput');
// const todoCreateSubmitBtn = document.querySelector('#todoCreateSubmitBtn')
// const todoTaskTbody = document.querySelector('#todoTaskTbody')

// todoCreateSubmitBtn.addEventListener('click', () => {
//     todoTasks.push({
//         id: todoTasks.length + 1,
//         executor: todoCreateExecutorInput.value,
//         taskTitle: todoCreateTitleInput.value,
//         status: 'План'
//     })
//     renderTable()
//     console.log(todoTasks)
// })

// const todoTasks = [
//     {
//         id: 1,
//         executor: 'Sabit',
//         taskTitle: 'Написать авторизацию на Реакте',
//         status: 'В работе'
//     },
//     {
//         id: 2,
//         executor: 'Gulzhan',
//         taskTitle: 'Написать авторизацию на Ангуляр',
//         status: 'План'
//     },
//     {
//         id: 3,
//         executor: 'Ali',
//         taskTitle: 'Проверить на баги страницу с оплатой',
//         status: 'Выполнено'
//     }
// ]

// renderTable()

// function renderTable() {
//     todoTaskTbody.innerHTML = ""

//     const todoTaskElements = todoTasks.map(task => {
//         const tr = document.createElement('tr') // <tr></tr>
    
//         const idElement = document.createElement('th') // <th></th>
//         idElement.scope = 'row' // <th scope="row"></th>
//         idElement.innerText = task.id // <th scope="row">1</th>
    
//         const executorElement = document.createElement('td') // <td></td>
//         executorElement.innerText = task.executor // <td>Sabit</td>
    
//         const taskTitleElement = document.createElement('td') // <td></td>
//         taskTitleElement.innerText = task.taskTitle // <td>Написать авторизацию на Реакте</td>
    
//         const statusElement = document.createElement('td') // <td></td>
//         statusElement.innerText = task.status // <td>В работе</td>
    
//         tr.append(idElement, executorElement, taskTitleElement, statusElement)
//         // <tr>
//         //     <th scope="row">1</th>
//         //     <td>Sabit</td>
//         //     <td>Написать авторизацию на Реакте</td>
//         //     <td>В работе</td>
//         // </tr>
//         return tr
//     })
    
//     todoTaskTbody.append(...todoTaskElements)
// }


// 1. С LOCALSTORAGE
const todoCreateExecutorInput = document.querySelector('#todoCreateExecutorInput');
const todoCreateTitleInput = document.querySelector('#todoCreateTitleInput');
const todoCreateSubmitBtn = document.querySelector('#todoCreateSubmitBtn')
const todoTaskTbody = document.querySelector('#todoTaskTbody')
const statusDropdownTemplate = document.querySelector('#statusDropdownTemplate')

todoCreateSubmitBtn.addEventListener('click', () => {
    todoTasks.push({
        id: todoTasks.length + 1,
        executor: todoCreateExecutorInput.value,
        taskTitle: todoCreateTitleInput.value,
        status: 'План'
    })
    localStorage.setItem('todoTasks', JSON.stringify(todoTasks))
    renderTable()
})

const todoTasks = JSON.parse(localStorage.getItem('todoTasks'))
console.log(todoTasks)

// localStorage.setItem('todoTasks', JSON.stringify(todoTasks)) - НЕ НУЖНО ПОКА

renderTable()

function renderTable() {
    todoTaskTbody.innerHTML = ""

    const todoTaskElements = todoTasks.map(task => {
        const tr = document.createElement('tr') 
    
        // Добавление id задачи
        const idElement = document.createElement('th') 
        idElement.scope = 'row' 
        idElement.innerText = task.id 
    
        // Добавление исполнителя задачи
        const executorElement = document.createElement('td') 
        executorElement.innerText = task.executor 
    
        // Добавление названия задачи
        const taskTitleElement = document.createElement('td')
        taskTitleElement.innerText = task.taskTitle 
    
        // Добавление кнопки статуса
        const statusDropdownClone = statusDropdownTemplate.content.cloneNode(true);
        const dropdownBtn = statusDropdownClone.querySelector('#dropdownBtn')
        dropdownBtn.innerText = task.status 
        
        
        //Изменение цвета кнопку по статусам
        if(task.status === 'План') {
            dropdownBtn.className = "btn btn-secondary dropdown-toggle"
        }
        else if(task.status === 'В работе') {
            dropdownBtn.className = "btn btn-primary dropdown-toggle"
        }
        else if(task.status === 'Тестирование') {
            dropdownBtn.className = "btn btn-info dropdown-toggle"
        }
        else if(task.status === 'Выполнено') {
            dropdownBtn.className = "btn btn-success dropdown-toggle"
        }

        // Добавление click событий
        const planBtn = statusDropdownClone.querySelector('#planBtn')
        const inWorkBtn = statusDropdownClone.querySelector('#inWorkBtn')
        const testBtn = statusDropdownClone.querySelector('#testBtn')
        const doneBtn = statusDropdownClone.querySelector('#doneBtn')

        planBtn.onclick = () => setClickEventToStatus(task, 'План')
        inWorkBtn.onclick = () => setClickEventToStatus(task, 'В работе')
        testBtn.onclick = () =>  setClickEventToStatus(task, 'Тестирование')
        doneBtn.onclick = () => setClickEventToStatus(task, 'Выполнено')

        // DRY - Don`t Repeat Yourself
    
        tr.append(idElement, executorElement, taskTitleElement, statusDropdownClone)

        return tr
    })
    
    function setClickEventToStatus(task, newStatus) {
        task.status = newStatus // [#ddfhhdhd].status = 'План'
        localStorage.setItem('todoTasks', JSON.stringify(todoTasks))
        renderTable()
    }

    todoTaskTbody.append(...todoTaskElements)
}
