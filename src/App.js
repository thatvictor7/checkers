import React from 'react'
import Board from './components/board.jsx'
import './styling/App.css';

// function App() {
//   return (
//     <div className="App flex-centered">
//       <Board />
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: 1
    }
  }
  
  render() {
    return(
          <div className="App flex-centered">
      <Board />
    </div>
    )
  }
}

export default App
