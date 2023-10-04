import { applyMiddleware,combineReducers,createStore } 
from "redux";
import thunk from "redux-thunk";
import {hotelReducer} from "./reducers/hotelReducer"

const reducers = combineReducers({
    hotel:hotelReducer
})

const initailState = {};

export const store = createStore(reducers,initailState,applyMiddleware(thunk));