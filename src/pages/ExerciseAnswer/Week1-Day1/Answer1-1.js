import React, { Component } from 'react'

// Statefull component
export default class CounterClass extends Component {
  constructor() {
    super()
    this.state = {
      countNum: 0
    }
  }

  increment = () => {
    this.setState({
      countNum: this.state.countNum + 1
    })
  }

  decreament = () => {
      if(this.state.countNum <= 0){
        this.setState({
            countNum: this.state.countNum
          })
      }
        else{
            this.setState({
                countNum: this.state.countNum - 1
              })
        }
  }

  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Counter Class</h1>
        <button onClick={this.decreament}>-</button>
        <h3 style={{display: "inline"}}>{this.state.countNum}</h3>
        <button onClick={this.increment}>+</button>
        <hr/>
      </div>
    )
  }
}