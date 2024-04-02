import { useEffect, useState } from "react";
import "./styles/App.css";
import NewTaskForm from "./components/form";
import TaskCard from "./components/taskCard";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (!tasks || !Array.isArray(JSON.parse(tasks))) {
      localStorage.setItem("tasks", JSON.stringify([]));
      setAllTasks([]);
    } else {
      setAllTasks(JSON.parse(tasks));
    }
  }, [showForm]);

  const changeShowFormStatus = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="taskContainer">
      <button onClick={changeShowFormStatus} className="showFormBtn">
        {showForm === true ? <span>Remove Form</span> : <span>Add Task</span>}
      </button>
      {showForm === false && (
        <div className="taskCardContainer">
          {allTasks.length > 0 ? (
            allTasks.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })
          ) : (
            <h3 className="noTask">No task to display...</h3>
          )}
        </div>
      )}

      {showForm === true && <NewTaskForm />}
    </div>
  );
}

export default App;
