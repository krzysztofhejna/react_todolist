import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
  const tasks = props.data.map((task) =>
    <li key={task.id}>
      {task.text}
      <button onClick={() => props.taskRemove(task.id)}>Remove this task</button>
    </li>
  );

  return (
    <ul className={style.TodoList}>
      {tasks}
    </ul>
  );
}

export default TodoList;
