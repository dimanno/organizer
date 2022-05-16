import React from 'react';
import { ITodo } from '../interfaces/interfaces';
import '../UI/todoList.css';
import SingleTodo from './SingleTodo';

export type todoListProps = {
  todos: Array<ITodo>
  // onToggle: (id:number) => void,
  onRemove: (id:number) => void,
  // onDone: (e: React.MouseEvent, id:number) => void,
  setTodos: any
}

const TodoList: React.FC<todoListProps> = ({todos, onRemove, setTodos }) => {
  if(todos.length===0) {
return <h2>Task list is empty</h2>
  }
  return (
    <div className='todos'>
        {todos.map((todo, index) => (
          <SingleTodo
          {...todo}
          onRemove={onRemove}
          // onDone={onDone}
            todos={todos} 
            setTodos={setTodos}
            index={index}
            key={todo.id}         />
        ))}
    </div>
  )
}

export default TodoList