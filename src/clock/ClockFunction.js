import React from 'react';

const ClockFunction = (props) => {
  return (
    <div>
      <h1>Jay Chou</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default ClockFunction;