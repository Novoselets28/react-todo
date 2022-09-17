import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Task from './components/Task';

function App() {

  const [text, setText] = useState('');
  const [tasks, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const createTask = () => {
    const task = {
      id: Date.now(),
      text: text,
      isDone: false,
    }
    if(task.text !== "") {
      setTask(tasks => [...tasks, task]);
      setText('');
    }
  }

  const changeIsDone = (id) => {
    tasks.map(task => {
        if (task.id === id ) {
            return task.isDone = !task.isDone;
        } else {
          return task;
        }
    })
    setTask([...tasks])
}

const deleteTask = (id) => {
  setTask(tasks.filter(task => task.id !== id))
}


return (
  <div className="wrapper">
    <h1>To-Do list</h1>
    <div className="createForm">
      <Input onChange={(event) => setText(event.target.value)} value={text}/>
      <Button onClick={createTask} text="Press"/>
    </div>
      {
          tasks.map((task) => <Task key={task.id} data={task} makeCheck={(id) => changeIsDone(id)} deleteItem={(id) => deleteTask(id)}/>)
      }
  </div>
);
}

export default App;
