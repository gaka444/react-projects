import {Todo,Actions} from '../components/model';
const TodoReducer = (state:Todo[], action : Actions) => {
    switch(action.type){
        case 'add' :
            return [...state, {id: Date.now(),todo:action.payload,isDone:false}]
        case 'remove':
            return state.filter((todo) => todo.id !== action.payload)
        case 'done':
            return state.map((todo) => todo.id === action.payload ? {id:todo.id,todo:todo.todo,isDone:true} : todo)
        case 'edit':
            return state.map((todo) => todo.id === action.payload.id ? {id:todo.id,todo:action.payload.edit,isDone:todo.isDone} : todo)
        case 'dnd':
            return [...action.payload];
        default :
            return state;
    }
}

export default TodoReducer;