import React from 'react';


function Square(props) {
  return (
    <li 
      className='square' 
      onClick={props.onClick} 
      value={props.value}
    >{props.mark}
    </li>
  );
}

export default Square;
