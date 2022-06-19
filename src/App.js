import React, { Component } from 'react'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0
    }
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/aro-cronometro.png')} class="img" />
        <p className="timer">{this.state.numero.toFixed(1)}</p>
        <div className="areaBtn">
          <button class="btn btn-outline-primary" onClick={this.start}>
            START
          </button>
          <button class="btn btn-outline-primary" onClick={this.reset}>
            RESET
          </button>
        </div>
      </div>
    )
  }
}

export default App
