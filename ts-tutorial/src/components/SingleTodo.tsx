import React, { useState, useRef, useEffect } from 'react';
import { Todo } from './model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';
type Props = {
    index : number,
    todo: Todo,
    todos: Todo[],
    dispatch: any
}

function SingleTodo({ index, todo, todos, dispatch}: Props) {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const handleDone = (id: number) => {
        dispatch({ type: 'done', payload: id })
    }

    const handleDelete = (id: number) => {
        dispatch({ type: 'remove', payload: id });
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        dispatch({ type: 'edit', payload: { id, edit: editTodo } })
        setEdit(false);
    }

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided, snapshot) => (
                    <form className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`} onSubmit={(e) => handleEdit(e, todo.id)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        {edit ? <input ref={inputRef} className="todos__single--text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /> : (!todo.isDone ? <span className='todos__single--text'>{todo.todo}</span> :
                            <s className='todos__single--text'>{todo.todo}</s>)}
                        <div>
                            <span className='icon' onClick={() => {
                                if (!todo.isDone)
                                    setEdit(!edit)
                            }}>
                                <AiFillEdit />
                            </span>
                            <span className='icon' onClick={() => handleDelete(todo.id)}>
                                <AiFillDelete />
                            </span>
                            <span className='icon' onClick={() => handleDone(todo.id)}>
                                <MdDone />
                            </span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    );
}

export default SingleTodo;