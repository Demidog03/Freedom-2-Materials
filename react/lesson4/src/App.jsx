import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TodoList from './components/TodoList';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster />
      <TodoList />
    </>
  )
}

export default App
