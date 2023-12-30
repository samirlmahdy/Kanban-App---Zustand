import React, { useState } from "react";
import "./column.css";
import Task from "./Task";
import { useStore } from "../store/store";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task
          title={task.title}
          key={task.title}
        />
      ))}
      {open && (
        <div className="modal">
          <div className="modalContent">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              autoFocus
            />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
              onChange={(e) => {
                setText(e.target.value);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
