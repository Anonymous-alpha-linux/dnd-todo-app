export type TSetTodoAction = {
    type: 'SET_TODO_LIST',
    payload: {
        newTodoList: any[]
    }
}

export type TWatchSetTodoAction = {
    type: 'WATCH_SET_TODO_LIST'
}

export type TAddTodoAction = {
    type: 'ADD_NEW_TODO',
    payload: {
        newTodoList: any[]
    }
}

export type TUpdateTodoAction = {
    type: 'UPDATE_TODO',
    payload: {
        newTodoList: any[]
    }
}

export type TRemoveTodoAction = {
    type: 'REMOVE_TODO',
    payload: {
        newTodoList: any[]
    }
}

export type TClearTodoAction = {
    type: 'CLEAR_TODO',
    payload: {
        newTodoList: any[]
    }
}


function setTodoListLocal(newTodoList: any[]):TSetTodoAction {
    return {
        type : 'SET_TODO_LIST', 
        payload: {
            newTodoList: newTodoList
        }
    }
}

function setTodoListWatch(): TWatchSetTodoAction {
    return {
        type: "WATCH_SET_TODO_LIST"
    }
}

export {setTodoListLocal, setTodoListWatch}