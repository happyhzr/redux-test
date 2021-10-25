import { ADD_PERSON } from "../constant"

const initState = [{ id: "001", name: "happy", age: 18 }]

export default function personReducer(prevState = initState, action) {
    switch (action.type) {
        case ADD_PERSON:
            return [action.data, ...prevState]
        default:
            return prevState
    }
}