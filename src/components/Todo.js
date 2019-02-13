import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
  return (
    <li className={style.Todo}>
      {props.text} 
      <button className={style.Todo__button} onClick={props.onClick}>Remove this task</button>   
    </li>
  );
}

export default Todo;
