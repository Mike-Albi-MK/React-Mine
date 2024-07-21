import React from 'react'

const Counter = ({count}) => {
  return (
    <div className="counter">
        <h3>Count with me</h3>
            <p>Look! You clicked the button {count} times by now</p>
    </div>
  );
};

export default Counter;