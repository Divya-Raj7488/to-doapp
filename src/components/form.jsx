import React, { useState } from "react";
import "../styles/form.css";
const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleNewTask = () => {
    let taskData = localStorage.getItem("tasks");
    let tasks = [];
    if (taskData !== null) {
      tasks = JSON.parse(taskData);
    }

    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      status: status,
    };
    tasks.push(newTask);
    console.log(tasks, "here is data to be inserted");
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTitle("");
    setDescription("");
    setStatus("");
    console.log("Task inserted successfully");
    
  };
  return (
    <div className="formContainer">
      <h2 className="title">Create New Task</h2>
      <div className="taskForm">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        
        <div className="selectContainer">
          <select
            className="selectStatus"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="" >status</option>
            <option value="pending">pending</option>
            <option value="In progress">In progress</option>
            <option value="complete">complete</option>
          </select>
          </div>
        <button onClick={handleNewTask}>Create new task</button>
      </div>
    </div>
  );
};

export default NewTaskForm;
