import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it("renders correctly", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
