import { JSX, useState } from 'react'

import { Todos } from './components/Todos'


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

  const handleRemove = (id: string) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos 
        onRemoveTodo={handleRemove}
        todos={todos}/>
    </div>
  )
}

export default App
