import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock/ClockFunction';

function App() {
  return (
    <Clock  date={new Date()}/>
  );
}

export default App;
