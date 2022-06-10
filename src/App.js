import React from 'react'
import Board from './components/board.jsx'
import './styling/App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      emptySpaces: ["25","27","29","31","34","36","38","40"],
      lightCheckersPositions: {
        al: "02", bl: "04", cl: "06", dl: "08",
        el: "09", fl: "11", gl: "13", hl: "15",
        il: "18", jl: "20", kl: "22", ll: "24"
      },
      darkCheckersPositions: {
        ad: "02", bd: "04", cd: "06", dd: "08",
        ed: "09", fd: "11", gd: "13", hd: "15",
        id: "18", jd: "20", kd: "22", ld: "24"
      }
    }
  }

  render() {
    return(
          <div className="App flex-centered">
      <Board state={this.state} />
    </div>
    )
  }
}

export default App
