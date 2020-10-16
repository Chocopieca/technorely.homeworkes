import { combineReducers } from 'redux'
import cardsReducer from './cards'

export const rootReducer = combineReducers({
    cards: cardsReducer,
})