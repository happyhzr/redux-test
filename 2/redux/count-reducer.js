const initState = 0

export default function countReducer(prevState = initState, action) {
    switch (action.type) {
        case "increment":
            return prevState + action.data
        case "decrement":
            return prevState - action.data
        default:
            return prevState
    }
}