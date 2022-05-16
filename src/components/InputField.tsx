import React, { useRef } from 'react'
// import { useInput } from '../hooks/inputhook';
import '../UI/inputField.css';

interface IInputFieldProps {
    handleAdd(title: string): void;
}

const InputField: React.FC<IInputFieldProps> = ({handleAdd}) => {

    // const todo = useInput('');
    const inputRef = useRef<HTMLInputElement>(null)
  
    const onClickAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputRef.current!.value) {
            handleAdd(inputRef.current!.value);
            inputRef.current!.value=''
            // todo.clear()
        }
    }

  return (
    <form
        className='input' 
        onSubmit={(e) => {
            onClickAdd(e)
            inputRef.current!.blur()
        }}
    >
        <input 
            className='input_box'
            type='input' 
            placeholder='Enter a task'
            // {...todo.bind}
            ref={inputRef}
        >   
        </input>
        <button className='input_submit' type='submit'>
            Go
        </button>

    </form>
  )
}

export default InputField