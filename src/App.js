import React, { Component } from 'react'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      button: 'START'
    }
    this.timer = null
    this.start = this.start.bind(this)
    this.reset = this.reset.bind(this)
  }

  start() {
    let state = this.state

    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      state.button = 'START'
    } else {
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      }, 100)
      state.button = 'PAUSE'
    }
    this.setState(state)
  }

  reset() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.numero = 0
    state.button = 'START'
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/aro-cronometro.png')} className="img" />
        <p className="timer">{this.state.numero.toFixed(1)}</p>
        <div className="areaBtn">
          <button className="btn btn-outline-primary" onClick={this.start}>
            {this.state.button}
          </button>
          <button className="btn btn-outline-primary" onClick={this.reset}>
            RESET
          </button>
        </div>
      </div>
    )
  }
}

export default App
