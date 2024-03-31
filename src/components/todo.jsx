import React, {useState} from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";
import {useNavigate} from "react-router-dom";

const Todo=()=>{
    const [tasks, setTasks]= useState([]);
   


    const addTask=(newTask)=>{
        setTasks(prevTasks=>{
            return [...prevTasks,newTask];
        });
    }
    const deleteTask=(id)=>{
        setTasks(prevTasks=>{
            return prevTasks.filter((taskItem,index)=>{
                return index !==id;
            });
        });
    }
    const navigate = useNavigate();

    const Continue =(e)=>{
        e.preventDefault();
        if(tasks.length <2){
            return (alert("Enter atleast 2 tasks!"))
        }
        return (
            navigate("/prior", {state:{tasks : tasks}})
        );
    };

    return(
        <div>
            <CreateTask onAdd={addTask} />
            {tasks.map((taskItem,index)=>{
                return ( <Task 
                key={index}
                id={index}
                content={taskItem.content}
                onDelete={deleteTask}/>);
            })}
            <button
    className="button"
    onClick={Continue}
    style={{
        display: "block", /* Ensures the button takes up the full width */
        margin: "0 auto", /* Centers the button horizontally */
        textAlign: "center" /* Centers the text inside the button */
    }}
>
    Continue to the next
</button>

        </div>
    )}

export default Todo;