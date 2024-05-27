import { TAddTodoAction, TClearTodoAction, TRemoveTodoAction, TSetTodoAction, TUpdateTodoAction } from "./todo";

export type TAction = TSetTodoAction 
| TAddTodoAction 
| TUpdateTodoAction 
| TRemoveTodoAction 
| TClearTodoAction