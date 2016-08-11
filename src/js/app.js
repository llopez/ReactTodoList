import React from 'react';
import { render } from 'react-dom';

import TodoList from './components/TodoList';
import InputBox from './components/InputBox';

render(
  <div>
    <InputBox />
    <TodoList />
  </div>,
  document.getElementById('app')
);
 
