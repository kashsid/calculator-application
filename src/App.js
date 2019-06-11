import React from 'react';
import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator-wrapper">
        <div className='calc-row'>
          <input></input>
        </div>
        <div className='calc-row'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
        </div>
        <div className='calc-row'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
        </div>
        <div className='calc-row'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className='calc-row'>
          <button>.</button>
          <button>0</button>
          <button>=</button>
          <button>-</button>
        </div>
        <div className='calc-row'>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
}

export default App;
