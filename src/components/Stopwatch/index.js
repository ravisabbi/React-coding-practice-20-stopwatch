// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  getTimer = () => {
    const {minutes, seconds} = this.state

    const totalTimeInSeconds = minutes * 60 + seconds

    const newMinutes = Math.floor(totalTimeInSeconds / 60)
    const newSeconds = Math.floor(totalTimeInSeconds % 60)

    const stringifiedMinutes = newMinutes > 9 ? newMinutes : `0${newMinutes}`
    const stringifiedSeconds = newSeconds > 9 ? newSeconds : `0${newSeconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  increaseSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  clearTimerInterval = () => {
    clearInterval(this.timerId)
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.increaseSeconds, 1000)
  }

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-title">Timer</p>
            </div>
            <h1 className="timer">{this.getTimer()}</h1>
            <div className="timer-control-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
