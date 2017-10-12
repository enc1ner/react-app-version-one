import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('', () => {
  const div = document.createElement('h1');
  ReactDOM.render(<ProductTable />, div); 
});
