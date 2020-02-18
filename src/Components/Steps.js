import React from 'react';


function Steps(props) {
  const steps = props.history.map((step, i) => {
  	return(
      <button 
  		  key={i}
  		  onClick={() => props.onJump(i)}
  		>
  		  Go to move#{i}
  		</button>
  	)
  });

  
  return (
    <div className='move'>
      {steps}
    </div>
  );
}

export default Steps;
