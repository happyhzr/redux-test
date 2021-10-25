import { combineReducers } from "redux";


import count from "./count"
import persons from "./person"

const reducer = combineReducers({
    count,
    persons,
})

export default reducer