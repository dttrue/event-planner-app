import React, { useState } from "react";
import "../styles/TaskTracker.css";

const TaskTracker = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      const task = {
        id: Date.now(),
        text: newTask,
        isCompleted: false,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const editTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: newTask };
      }
      return task;
    });
    setTasks(updatedTasks);
    setNewTask("");
  };

  return (
    <div className="task-tracker-container">
      <h1>Task Tracker</h1>
      <input
        className="new-task-input"
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button className="add-task-button" onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              className="task-checkbox"
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => completeTask(task.id)}
            />
            {task.text}
            <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
            <button className="edit-button" onClick={() => editTask(task.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
