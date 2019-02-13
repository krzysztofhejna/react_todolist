import React from 'react';
import style from './TodoForm.css';

const TodoForm = (props) => {
  return (
    <form className={style.TodoForm} onSubmit={props.onSubmit}>
      <input
        className={style.TodoForm__input}
        onChange={props.onChange}
        value={props.value}
      />
      <button
        className={style.TodoForm__button}
      >
        Add a task
      </button>
    </form>
  )
}

export default TodoForm;
