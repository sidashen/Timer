import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Clock from './clock/ClockFunction';
import ClockFunction from './clock/ClockClass';
import ClockClass from './clock/ClockClass';

//This is for "ClockClass"
function App() {
  return (
    <ClockClass />
  );
}

//This is for "ClockFunction"
// function App() {
//   return (
//     <ClockFunction date={new Date()}/>
//   );
// }

export default App;
