import React from 'react';


function Squares(props) {
  let squares = [];
  const lastMove = props.lastMove[props.lastMove.length-1]
  console.log(props.lastMove);
  for(let i=0; i<9; i++) {
    squares.push(
      <li 
        className='square'
        key={i}
        onClick={() => props.onClick(i)}
        style ={lastMove === i ? {color: 'blue'} : {color: 'black'}}
      >{props.mark[i]}
      </li>) 
  }
  
  return (
    <ul className='board'>
      {squares}
    </ul>
  );
}

export default Squares;


