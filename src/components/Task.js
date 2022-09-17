import "./Task.css"

function Task({data, makeCheck, deleteItem}) {
    return (
        <div className={data.isDone ? "containerDone" : "container"}>
            <input type="checkbox" checked={data.isDone} onChange={() => makeCheck(data.id)}/>
            <p>{data.text}</p>
            <button onClick={() => deleteItem(data.id)}>
                <img className="trash-icon" src={require('../assets/icons/trash.png')} alt="trash"/>
            </button>
        </div>
    );
  }
  
  export default Task;