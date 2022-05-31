import React, { useReducer } from 'react';
import SingleTodo from './SingleTodo';
import { Todo } from './model';
import { Droppable } from 'react-beautiful-dnd';
interface Props {
    todos: Todo[],
    dispatch: any,
    completedTodos : Todo[],
    completedDispatch : any
}

const TodoList: React.FC<Props> = ({ todos, dispatch, completedTodos, completedDispatch }) => {
    return (
        <div className='container'>
            <Droppable droppableId='TodosList'>
                {
                    (provided, snapshot) => (
                        <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='todos__heading'>
                                Active Tasks
                            </span>
                        {todos.map((todo, index) =>
                            <SingleTodo index={index} todo={todo} key={todo.id} todos={todos} dispatch={dispatch} />
                        )}
                        {provided.placeholder}
                    </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided, snapshot) => (
                        <div className={`todos remove ${snapshot.isDraggingOver? 'dragcomplete': ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className='todos__heading'>
                                Completed Tasks
                            </span>
                        {completedTodos?.map((todo,index) =>
                            <SingleTodo index={index} todo={todo} key={todo.id} todos={completedTodos} dispatch={completedDispatch} />
                        )}
                        {provided.placeholder}
                    </div>
                    )
                }
            </Droppable>
        </div>
    );
}

export default TodoList;