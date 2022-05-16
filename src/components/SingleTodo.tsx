import '../UI/todoSingle.css'
import { ITodo } from '../interfaces/interfaces';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { MdDownloadDone} from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useInput } from '../hooks/inputhook';

export type TodoProps = {
    setTodos: any,
    todos: ITodo[],
    index: number,

}

const SingleTodo = (props: ITodo & TodoProps) => {
    const {id, title, completed, onRemove, todos, setTodos} = props;

    const [edit, setEdit] = useState<boolean>(false);
    const editText = useInput(title);

    const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);


    const handleDone = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo
             )
        )
    }

    const handleDelete = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    const handleEdit = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        if (!edit && !completed) {
            setEdit(!edit)   
        }   
    }
    
    const onEdit = (event: React.FormEvent<HTMLFormElement>,  id: number)=>{
        event.preventDefault();
        setTodos(
            todos.map(todo => (todo.id === id ? { ...todo, title: editText.value } : todo ))
        );
        setEdit(false);
    }

  return (
    <form 
        className={'todo_single'}
        onSubmit={(e)=>onEdit(e, id)}
    >   
        {edit ? (
            <input
              {...editText.bind}
              className="todo_single--text"
              ref={inputRef}
            />
           ) : completed ? (
                <s className='todo_single--text comleted'> {title}</s>
            ):(
               <span className='todo_single--text'> {title}</span>
            )
        }

        <div>
            <span className="icon" onClick={(e)=>{handleEdit(e, id)}}>
               <AiFillEdit/> 
            </span>
            <span className="icon" onClick={(e)=>{handleDelete(e, id)}}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={(e)=>{handleDone(e, id)}}>
                <MdDownloadDone/>
            </span>
        </div>
        
    </form>
  )
}

export default SingleTodo;
