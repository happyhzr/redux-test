import { INCREMENT, DECREMENT } from "../constant"

export function increment(data) {
    return { type: INCREMENT, data }
}

export function incrementAsync(data, time) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}

export function decrement(data) {
    return { type: DECREMENT, data }
}