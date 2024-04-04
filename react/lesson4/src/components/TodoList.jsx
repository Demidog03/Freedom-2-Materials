import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Badge from 'react-bootstrap/Badge'
import classes from './TodoList.module.css'
import { toast } from 'react-hot-toast'
import { ArrowLeftRight, Check2, X } from 'react-bootstrap-icons';

// если переменная ссылается на состояние то при изменении состояния он тоже меняется

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    const [todoListLoading, setTodoListLoading] = useState(false)
    const todoListElements = todoList.map(todo => (
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

    return (
        <div className={classes.container}>
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
