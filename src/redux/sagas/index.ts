import { all, call, delay, put, takeLatest } from "redux-saga/effects"
import { actionTypes } from "../actionTypes"
import {setTodoListLocal} from '../actions/todo';
import _ from "lodash";

function* setTodoListWorker(){
    yield delay(1000);
    const newTodoList = [{id: _.uniqueId(), name: "Wake up"}, {id: _.uniqueId(), name: "Wake up"}];
    yield put(setTodoListLocal(newTodoList))
}


function* watchSetTodoList() {
    yield takeLatest(actionTypes.WATCH_SET_TODO_LIST, setTodoListWorker)
}

function* rootSaga() {
    yield all([
        watchSetTodoList()
    ])
}

export {rootSaga}