import React, { Component } from 'react'
import { nanoid } from "nanoid"
import { connect } from 'react-redux'

import { addPerson } from '../../redux/actions/person'

class Person extends Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef()
        this.ageRef = React.createRef()
        this.addPerson = this.addPerson.bind(this)
    }

    addPerson() {
        const name = this.nameRef.current.value
        const age = parseInt(this.ageRef.current.value)
        const person = { id: nanoid(), name, age }
        this.props.addPerson(person)
        this.nameRef.current.value = ""
        this.ageRef.current.value = ""
    }

    render() {
        return (
            <div>
                <h2>Person Component, count: {this.props.count}</h2>
                <input type="text" placeholder="input name" ref={this.nameRef} />
                <input type="text" placeholder="input age" ref={this.ageRef} />
                <button onClick={this.addPerson}>add</button>
                <ul>
                    {
                        this.props.persons.map((person) => {
                            return <li key={person.id}>{person.name} {person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        persons: state.persons,
        count: state.count,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPerson,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Person)
