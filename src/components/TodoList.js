import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
  const tasks = props.data.map((task) =>
    <Todo 
      key={task.id}
      text={task.text}
      onClick={() => props.taskRemove(task.id)}
    />
  );

  return (
    <ul className={style.TodoList}>
      {tasks}
    </ul>
  )
}

export default TodoList;
