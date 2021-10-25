import { INCREMENT, DECREMENT } from "./constant"

export function createIncrementAction(data) {
    return { type: INCREMENT, data }
}

export function createIncrementAsyncAction(data, time) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}

export function createDecrementAction(data) {
    return { type: DECREMENT, data }
}