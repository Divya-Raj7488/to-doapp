import React from "react";
import "../styles/card.css";
const TaskCard = (props) => {
 const {task} = props;

  return (
    <div className="cardContainer">
      <h3>{task.id}: {task.title}</h3>
      <div className="description">{task.description}</div>
      <div>{task.status}</div>
    </div>
  );
};

export default TaskCard;
