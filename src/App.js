import React, { Component }   from 'react';
import Squares from './Components/Squares';
import Steps from './Components/Steps';
import CalcWinner from './Components/CalcWinner';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        history: [  
        {         
          squares: [
            null, null, null,
            null, null, null,
            null, null, null
          ]
        }
      ],
      isNextX: true,
      lastMove: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleJump = this.handleJump.bind(this);
  }

  handleClick(i) {
    const index = i;
    const history = this.state.history
    const current = history[history.length-1]; 
    const squares = current.squares.slice(); 
    if(CalcWinner(squares)) { return null };
    if(squares[index]) { return null };
    squares[index] = this.state.isNextX ? 'X': 'O';
    const lastMove = this.state.lastMove.slice(); 
    this.setState({
      history: history.concat([{ squares: squares }]),
      isNextX: !this.state.isNextX,
      lastMove: lastMove.concat(index)
    });    
  }

  handleJump(i) {
    const index = i;
    const history = this.state.history.splice(0, index+1);
    const lastMove = this.state.lastMove.splice(0, index);
    this.setState({
      history: history,
      isNextX: index % 2 === 0 ? true: false,
      lastMove: lastMove
    })
  }

  handleStart() {
    this.setState({
      history: [
        {
          squares: [
            null, null, null,
            null, null, null,
            null, null, null
          ]
        }
      ],
      isNextX: true
    })
  }

  render() {
    
    const { history, isNextX, lastMove } = this.state;
    const current = history[history.length-1].squares;
    const win = CalcWinner(current);
    const draw = current.indexOf(null);
    let status;
    if(win) {
      status = <h5>The winner is {win}</h5>
    } else if(draw === -1) {
      status = <h5>It is a draw. Try again!</h5>
    } else {
      status = <h5>The next move is {isNextX ? 'X': 'O'}</h5>
    }
    
    return (
       <div>
         <h1>Play tic-tac-toe</h1>
         <div className='container'>
              {status}
              <Squares
                mark={current} 
                onClick={this.handleClick}
                lastMove={lastMove} 
              />
              <button className='start' onClick={this.handleStart} >Start Again</button>
              <Steps 
                history={history}
                onJump={this.handleJump} 
              />
          </div>
      </div>  
    );  
  }
  
}

export default App;
