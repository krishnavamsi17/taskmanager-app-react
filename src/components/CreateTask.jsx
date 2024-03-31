import React, {useState} from "react";
import "..//styles.css";


function CreateTask(props){
    const [task,setTask]=useState({
        content:""
    });

    function handleChange(event){
        const {name,value}=event.target;
        setTask(prevTask =>{
            return {
                ...prevTask,
                [name]:value
            };
        });
        console.log(value)
    }
    function submitTask(event){
        props.onAdd(task);
        setTask({
            content:""
        });
        event.preventDefault();
    }

return (
    <div>
        <form className="container">
            <textarea name="content"
            onChange={handleChange}
            key={task.id}
            value={task.content}
            placeholder="Add a Task..." rows="2"/>
            <button className="button" onClick={submitTask} >
                Add
            </button>
        </form>
    </div>
);
}



export default CreateTask;