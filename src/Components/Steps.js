import React from 'react';


function Steps(props) {
  
  //if clicked, go back to that step
  //function to handleMove
  //history back to there
  //back to 2
  //history.slice(0, 2+1)
  //setState




  const steps = props.history.map((step, i) => {
  	return(
  		<button 
  		  key={i}
  		  //event trigger to pass a pre-set value!
  		  onClick={() => props.onJump(i)}
  		>
  		  Go to move#{i}
  		</button>
  	)
  })
  return (
    <div className='move'>
      {steps}
    </div>
  );
}

export default Steps;
