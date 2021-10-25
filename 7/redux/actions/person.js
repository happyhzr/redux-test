import {ADD_PERSON} from "../constant"

export function createAddPersonAction(person) {
    return { type: ADD_PERSON, data: person }
}