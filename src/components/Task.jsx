import React from "react";
import "./task.css";
import classNames from "classnames";
import { useStore } from "../store/store";
import Trash from "../assets/trash-2.svg";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <div
      className="task"
      draggable="true"
    >
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div>
          <img
            src={Trash}
            alt="delete task"
            onClick={() => deleteTask(title)}
          />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
