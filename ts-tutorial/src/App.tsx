import React, { useState, useReducer } from 'react';
import TodoReducer from './Reducer/TodoReducer';
import './App.css';
import InputField from './components/InputField';
import CompletedTodoReducer from './Reducer/CompletedTodoReducer';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [completedTodos, completedDispatch] = useReducer(CompletedTodoReducer, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo)
      dispatch({ type: 'add', payload: todo })
    setTodo('');
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index))
      return;

    let add, active = todos, complete = completedTodos;

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1)
    }

    if (destination.droppableId === 'TodosList')
      active.splice(destination.index, 0, add);
    else
      complete.splice(destination.index, 0, add);

    console.log(active, complete);
    completedDispatch({ type: 'dnd', payload: complete });
    dispatch({ type: 'dnd', payload: active });
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoList todos={todos} dispatch={dispatch} completedTodos={completedTodos} completedDispatch={completedDispatch} />
      </DragDropContext>
    </div>
  );
}

export default App;
