import React, { useRef, useState } from 'react'
import '../UI/inputField.css';
// import { ITodo } from '../interfaces/interfaces';

interface IInputFieldProps {
    // todo: string;
    // setTodo: React.Dispatch<React.SetStateAction<string>>;
    onAdd(title: string): void;
}

const InputField: React.FC<IInputFieldProps> = ({onAdd}) => {

    const [todo, setTodo] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null)

    // const keyPressHandler = (e: React.KeyboardEvent) => {
    //     if (e.key === 'Enter') {
    //         console.log(inputRef.current!.value) // ! для того щоб переконати JS, що value не буде null. оскільки ми null - початкове значення
    //         // onAdd(inputRef.current!.value)
    //         inputRef.current!.value = ''; // для очищеття введеного значення після натискання Enter
    //         // console.log(title)
    //         // setTitle('') // для очищеття введеного значення після натискання Enter
    //     }
    // }
  
    const onClickAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            // setTodo([...todo, {id: Date.now(), todo, completed: false}]);
            onAdd(inputRef.current!.value);
            setTodo('');
        }
    }

    const handleInputChange = (e: any) => setTodo(e.target.value);

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
            value={todo}
            onChange={handleInputChange}
            // onKeyPress={keyPressHandler}
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