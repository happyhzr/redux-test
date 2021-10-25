import React, { Component } from 'react'

import store from "../../redux/store"
import { createIncrementAction, createDecrementAction } from "../../redux/count-action"

export default class Count extends Component {
    constructor(props) {
        super(props)
        this.selectNumber = React.createRef()
        this.state = {}
    }


    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment = () => {
        // store.dispatch({ type: "increment", data: parseInt(this.selectNumber.current.value) })
        store.dispatch(createIncrementAction(parseInt(this.selectNumber.current.value)))
    }

    decrement = () => {
        store.dispatch(createDecrementAction(parseInt(this.selectNumber.current.value)))
    }

    incrementIfOdd = () => {
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(parseInt(this.selectNumber.current.value)))
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(parseInt(this.selectNumber.current.value)))
        }, 500)
    }

    render() {
        return (
            <div>
                <h1>current sum: {store.getState()}</h1>
                <select ref={this.selectNumber}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        )
    }
}
