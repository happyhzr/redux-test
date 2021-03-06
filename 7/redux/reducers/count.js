import { INCREMENT, DECREMENT } from "../constant"

const initState = 0

export default function countReducer(prevState = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return prevState + action.data
        case DECREMENT:
            return prevState - action.data
        default:
            return prevState
    }
}