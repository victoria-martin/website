import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { TODOLIST } from "../constants/todolist";
import { Switch } from "../components/Switch";

const Row = ({ text }) => {
  return (
    <div>
      {/* <div> */}
      <span>☐</span>
      <span>{text}</span>
      {/* </div> */}
      <span className="cross">X</span>
    </div>
  );
};

const List = ({ taskList }) => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // setData(taskList);
  //   console.log(taskList);
  // }, [taskList]);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="todo__list">
      {taskList.map((e, i) => (
        <Row text={e.text} key={i} />
      ))}
    </div>
  );
};

const Input = ({ newTask, setNewTask, taskList, setTaskList, saveLocal }) => {
  const clearInput = () => {
    setNewTask("");
  };

  const addToList = (task) => {
    if (saveLocal) {
      let newTaskList = [...taskList];
      newTaskList.push({ id: taskList.length + 1, text: task, done: false });

      setTaskList(newTaskList);
      localStorage["taskList"] = JSON.stringify(newTaskList);
    } else {
      let newTaskList = [...taskList];
      newTaskList.push({ text: task, done: false });
      setTaskList(newTaskList);
    }
    clearInput();
  };

  return (
    <div className="todo__input">
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
      <button className="disabled" onClick={(e) => (newTask ? addToList(newTask) : null)}>
        Add
      </button>
    </div>
  );
};

const Todo = () => {
  const [newTask, setNewTask] = useState("tache de départ");
  const [taskList, setTaskList] = useState([]);
  const [saveLocal, setSaveLocal] = useState(true);
  const LOCALTODOLIST = JSON.parse(localStorage.getItem("taskList"));

  useEffect(() => {
    saveLocal ? setTaskList(LOCALTODOLIST) : setTaskList(TODOLIST);
  }, [saveLocal]);

  return (
    <div className="todo">
      {/* <Switch checked={saveLocal} inputProps={{ role: "switch" }} onChange={() => setSaveLocal(!saveLocal)} /> */}
      <Input
        newTask={newTask}
        setNewTask={setNewTask}
        taskList={taskList}
        setTaskList={setTaskList}
        saveLocal={saveLocal}
        setSaveLocal={setSaveLocal}
      />
      {/* lignes de todo déjà rentrées */}

      <List taskList={taskList} saveLocal={saveLocal} setSaveLocal={setSaveLocal} />
    </div>
  );
};

export default Todo;
