import React, { useState, useRef, useReducer } from 'react';

import './styles.css';

interface Props{
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e : React.FormEvent) => void
}

function InputField({todo,setTodo,handleAdd} : Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();}}>
            <input type="text" ref={inputRef} value={todo} onChange={(e) => setTodo(e.target.value)} className='input__box' placeholder='Enter text' />
            <button className='input_submit' type="submit">Go</button> 
        </form>
    );
}

export default InputField;