import React, { Component }   from 'react';
import Square from './Components/Square';
import Steps from './Components/Steps';
import CalcWinner from './Components/CalcWinner';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //you always update an object for state  
      //history: [ {squares:[]}, ...] you need a object, with array as value
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
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleJump = this.handleJump.bind(this);
  }

  handleClick(e) {
    const index = e.target.value; 
    const history = this.state.history
    const current = history[history.length-1]; 
    const squares = current.squares.slice(); 
    if(CalcWinner(squares)) { return null };
    squares[index] = this.state.isNextX ? 'X': 'O'; 
    this.setState({
      //what is this?
      history: history.concat([{ squares: squares }]),
      isNextX: !this.state.isNextX
    });    
  }

  //how you pass the index back!
  handleJump(i) {
    const history = this.state.history.splice(0, i+1);
    this.setState({
      history: history,
      isNextX: i % 2 === 0 ? true: false,      
    })
  }

  handleStart() {
    this.setState({
      //reset the state
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
    
    const { history, isNextX } = this.state;
    const current = history[history.length-1].squares;
    const win = CalcWinner(current);
    let status;
    if(win) {
      status = <h5>The winner is {win}</h5>
    } else {
      status = <h5>The next move is {isNextX ? 'X': 'O'}</h5>
    }
    
    return (
       <div>
        {status}
        <ul className='board'>
          <Square 
            onClick={this.handleClick} 
            value='0'
            mark={current[0]}
          />
          <Square 
            onClick={this.handleClick} 
            value='1'
            mark={current[1]}
          />
          <Square 
            onClick={this.handleClick} 
            value='2'
            mark={current[2]}
          />
          <Square 
            onClick={this.handleClick} 
            value='3'
            mark={current[3]}
          />
          <Square 
            onClick={this.handleClick} 
            value='4'
            mark={current[4]}
          />
          <Square 
            onClick={this.handleClick} 
            value='5'
            mark={current[5]}
          />
          <Square 
            onClick={this.handleClick} 
            value='6'
            mark={current[6]}
          />
          <Square 
            onClick={this.handleClick} 
            value='7'
            mark={current[7]}
          />
          <Square 
            onClick={this.handleClick} 
            value='8'
            mark={current[8]}
          />        
        </ul>
        <button onClick={this.handleStart} >Start Again</button>
        <Steps 
          history={history}
          onJump={this.handleJump} 
        />
      </div>  
    );  
  }
  
}

export default App;
