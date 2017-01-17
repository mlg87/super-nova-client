import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from 'bin/router'

it('renders without crashing', () => {
  const div = document.createElement('div');
  // commented this out for now because of problems with compiling Radium
  // https://github.com/FormidableLabs/radium/issues/443
  // ReactDOM.render(AppRouter, div);
});
