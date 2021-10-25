import {ADD_PERSON} from "../constant"

export function addPerson(person) {
    return { type: ADD_PERSON, data: person }
}