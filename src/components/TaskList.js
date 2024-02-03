import React from "react";
import Task from "./Task";

function TaskList({tasks,handleDelete}) {

  return (
 <div className="tasks">
  {/* display a list of tasks using Task component */}
  {tasks.map((task) => (
    <Task text={task.text} category={task.category} key={task.text} onRemove = {handleDelete}/>
  ))}</div>
  );
}

export default TaskList;

