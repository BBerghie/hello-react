import { JSX, useState } from 'react'

import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType} from './types'


const mockTodos = [
  {
    id: '0',
    title: 'Todo 0',
    completed: false
  },
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: true
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({id}: TodoId) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted=({id, completed}: Pick<TodoType, 'id'|'completed'>): void =>{
    const newTodos =  todos.map(todo => {
      console.log(`Se ha lanzado la función handle completed con el id ${id} y el estado ${completed}`);
       if (todo.id===id){
        todo.completed==true?todo.completed=false:todo.completed=true
       }
       return todo
    })

      setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}/>
    </div>
  )
}

export default App
