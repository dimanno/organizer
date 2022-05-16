import React, { useState, useEffect } from 'react';
import '../UI/todoPage.css';
import InputField from '../components/InputField';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces/interfaces';

declare var confirm: (alert: string) => boolean;

function TodosPage() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleAdd = ( title: string) => {
        let todo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
            // onToggle: toggleHandler,
            onRemove: removeHandler,
        }

        setTodos(prev => [todo, ...prev])   
    }

    // const toggleHandler = (id:number) => {
    //     setTodos(prev => prev.map(value => {
    //                 if (value.id === id) {
    //                     value.completed = !value.completed
    //                 }
    //                 console.log(value)
    //                 return value
    //             }
    //         )
    //     )
    // }

    const removeHandler = (id:number) => {
       
        const shoudRemove = confirm('Are You sure to remove element?')
        if (shoudRemove) {
            setTodos(prev => prev.filter(value => value.id !== id))
        }
    }


  return (
    <div className='todopage'>
        <span className='heading'>Task manager</span>
        <InputField handleAdd={handleAdd}/>
        <TodoList 
            todos={todos}
            onRemove={removeHandler}
            setTodos={setTodos}
            // onToggle={toggleHandler}
        />
    </div>
  )
}

export default TodosPage