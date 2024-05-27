import { actionTypes } from "../actionTypes";
import { TAction } from "../actions";

export type TTodoState = {
    todoList: any[]
};

const initialTodoState: TTodoState = {
    todoList: []
}

const todoReducer = (state: TTodoState = initialTodoState, action: TAction) => {
    switch (action.type) {
        case actionTypes.SET_TODO_LIST:
            const newTodoList = action.payload.newTodoList
            
            return {...state, todoList: newTodoList};
    
        default:
            break;
    }
    return state;
}

export {todoReducer}