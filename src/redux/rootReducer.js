import {combineReducers, createStore} from 'redux';
import {gameKeoBuaBaoReducer} from './reducers/gameKeoBuaBaoReducer'

const rootReducer = combineReducers({
    gameKeoBuaBaoReducer
})

export const root = createStore(rootReducer);