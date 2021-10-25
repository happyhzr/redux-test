import { connect } from "react-redux"
import React, { Component } from 'react'

import { increment, incrementAsync, decrement } from "../../redux/actions/count"

class Count extends Component {
    constructor(props) {
        super(props)
        this.selectNumber = React.createRef()
        this.state = {}
    }

    increment = () => {
        this.props.increment(parseInt(this.selectNumber.current.value))
    }

    decrement = () => {
        this.props.decrement(parseInt(this.selectNumber.current.value))
    }

    incrementIfOdd = () => {
        if (this.props.count % 2 !== 0) {
            this.props.increment(parseInt(this.selectNumber.current.value))
        }
    }

    incrementAsync = () => {
        this.props.incrementAsync(parseInt(this.selectNumber.current.value), 2000)
    }

    render() {
        return (
            <div>
                <h2>Count Component, persons.length: {this.props.personsLength}</h2>
                <h4>current sum: {this.props.count}</h4>
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


function mapStateToProps(state) {
    return {
        count: state.count,
        personsLength: state.persons.length,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment,
        decrement,
        incrementAsync,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Count)