import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Badge from 'react-bootstrap/Badge'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import classes from './TodoList.module.css'
import { toast } from 'react-hot-toast'
import { ArrowLeftRight, Check2, X } from 'react-bootstrap-icons';

// если переменная ссылается на состояние то при изменении состояния он тоже меняется

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    const [filteredTodoList, setFilteredTodoList] = useState([])
    const [todoListLoading, setTodoListLoading] = useState(false)
    const [statusFilter, setStatusFilter] = useState('Статус')

    const todoListElements = (statusFilter === 'Статус' ? todoList : filteredTodoList).map(todo => (
        <ListGroup.Item key={todo.id} as="li" className={classes.listItem}>
            <p>{todo.title}</p>
            <div className={classes.rightWrapper}>
                {todo.completed
                    ? <Badge bg="success">Выполнено</Badge>
                    : <Badge bg="secondary">В работе</Badge>
                }
                <Button
                    className={classes.deleteBtn}
                    variant="outline-danger"
                    size="sm"
                    onClick={() => deleteTodo(todo.id)}
                >
                    <X />
                </Button>
                {todo.completed
                    ? <Button
                        className={classes.deleteBtn}
                        variant="outline-warning"
                        size="sm"
                        onClick={() => uncompletedTodo(todo.id)}
                    >
                        <ArrowLeftRight />
                    </Button>
                    : <Button
                        className={classes.deleteBtn}
                        variant="outline-success"
                        size="sm"
                        onClick={() => completeTodo(todo.id)}
                    >
                        <Check2 />
                    </Button>
                }
            </div>
        </ListGroup.Item>
    ))

    function deleteTodo(deleteItemId) {
        setTodoList(todoList.filter(todo => todo.id !== deleteItemId))
    }

    function completeTodo(completeItemId) {
        setTodoList(todoList.map(todo => {
            if (todo.id === completeItemId) {
                todo.completed = true
            }
            return todo
        }))
    }

    function uncompletedTodo(uncompleteItemId) {
        setTodoList(todoList.map(todo => {
            if (todo.id === uncompleteItemId) {
                todo.completed = false
            }
            return todo
        }))
    }

    async function getTodos() {
        try {
            setTodoListLoading(true) // началась отправка запроса (список загружается)
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: 10
                }
            })
            setTodoList(response.data)
            toast.success('Задачи загружены успешно!')
        } catch (err) {
            console.log(err);
            toast.error('Ошибка загрузки списка!')
        } finally {
            setTodoListLoading(false) // запрос обработан (неважно как)
        }
    }

    useEffect(() => {
        getTodos()
    }, []) // mount

    useEffect(() => { // вызывается когда todoList меняется
        console.log('todoList: ', todoList)
    }, [todoList])

    useEffect(() => { // вызывается когда todoList меняется
        console.log('loading: ', todoListLoading)
    }, [todoListLoading])

    // useEffect(() => { // вызывается при любых изменениях (рендерах)
    //     console.log(todoList)
    // })

    // console.log(todoList) // вызывается при любых изменениях (рендерах)

    if (todoListLoading) {
        return (
            <div className={classes.container}>
                <Spinner animation="border" variant="info" />
            </div>
        )
    }

    function chooseStatusFilter(filterName) {
        setStatusFilter(filterName)
        if (filterName === 'В работе') {
            const filteredTodoList = todoList.filter(todo => !todo.completed)
            setFilteredTodoList(filteredTodoList)
        }
        else if (filterName === 'Выполнено') {
            const filteredTodoList = todoList.filter(todo => todo.completed)
            setFilteredTodoList(filteredTodoList)
        }
    }

    return (
        <div className={classes.container}>
            <div>
                <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {statusFilter}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => chooseStatusFilter('В работе')}>В работе</Dropdown.Item>
                        <Dropdown.Item onClick={() => chooseStatusFilter('Выполнено')}>Выполнено</Dropdown.Item>
                        <Dropdown.Item onClick={() => chooseStatusFilter('Статус')}>Все</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {todoListElements.length === 0
                ? <h2>Нет данных</h2>
                : <ListGroup as="ol" numbered>
                    {todoListElements}
                </ListGroup>
            }
        </div>
    );
}

export default TodoList;
