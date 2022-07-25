import React, { Component } from "react"

interface Props {
    value: number,
    step: number
}

interface State {
    count: number
}

class Counter extends Component <Props, State> {
    static defaultProps = {
        value: 0,
        step: 5
    }

    state = {
        count: this.props.value,
    }
    
    handleIncrement = () => {
        this.setState({count: this.state.count + this.props.step})
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - this.props.step })
    }
    
    render() {
        const { count } = this.state
        const { step } = this.props

        return (
        <div>
            <p>Count: {count}</p>
                <button onClick={this.handleIncrement}>Increment + {step}</button>
                <button onClick={this.handleDecrement}>Decrement - {step}</button>
        </div>
        )
    }
}

export default Counter