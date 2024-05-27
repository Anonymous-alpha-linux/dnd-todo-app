import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './reducers';
import {rootSaga} from './sagas';
import { useSelector,UseSelector } from "react-redux";


const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

export type AppState = ReturnType<typeof rootReducer>

export const useAppSelect: UseSelector<AppState> = useSelector;