import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { TODOLIST } from "../constants/todolist";

const Row = ({ text }) => {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

const List = ({ taskList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(taskList);
  }, [taskList]);

  return (
    <div className="todo__list">
      {taskList.map((e, i) => (
        <Row text={e.text} key={i} />
      ))}
    </div>
  );
};

const Input = ({ newTask, setNewTask, taskList, setTaskList }) => {
  const clearInput = () => {
    setNewTask("");
  };

  const addToList = (task) => {
    let newTaskList = [...taskList];
    newTaskList.push({ text: task, done: false });
    setTaskList(newTaskList);
    clearInput();
    // setNewTask("nouvelle !");
  };

  const addToLocalStorage = (task) => {
    let newTaskList = [...taskList];
    newTaskList.push({ text: task, done: false });
    setTaskList(newTaskList);
    localStorage["taskList"] = JSON.stringify(newTaskList);
    clearInput();
  };

  var storedNames = JSON.parse(localStorage.getItem("taskList"));

  useEffect(() => {
    console.log(storedNames);
  }, [storedNames]);

  // Retrieve
  useEffect(() => {
    // var stored_datas = JSON.parse(localStorage["datas"]);
    console.log(JSON.parse(localStorage["taskList"]));
  }, [localStorage]);

  return (
    <div className="todo__input">
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
      <button
        onClick={(e) => {
          // newTask ? addToList(newTask) : console.log("false");
          newTask ? addToLocalStorage(newTask) : console.log("false");
        }}>
        Add
      </button>
    </div>
  );
};

const Todo = () => {
  const [newTask, setNewTask] = useState("tache de départ");

  const [taskList, setTaskList] = useState(TODOLIST);

  useEffect(() => {
    // setTaskList(TODOLIST);
  }, [TODOLIST]);

  return (
    <div className="todo">
      {/* lignes de todo déjà rentrées */}
      <List taskList={taskList} />
      <Input newTask={newTask} setNewTask={setNewTask} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default Todo;
