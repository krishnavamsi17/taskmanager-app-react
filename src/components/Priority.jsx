import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles.css"



const Priority = () => {
    const location = useLocation();
    const tasks = location.state ? location.state.tasks : null;
    const [taskPairs, setTaskPairs] = useState([]);
    const [pairIndex, setPairIndex] = useState(0);
    const [taskPriorities, setTaskPriorities] = useState({});
    const navigate = useNavigate();
    var initialhashmap={}
    for (let i = 0; i < tasks.length; i++) {
        initialhashmap[tasks[i].content] = 0;
    }
    const [hashmap]=useState(initialhashmap)

    useEffect(() => {
        const generateTaskPairs = () => {
            const pairs = [];
            for (let i = 0; i < tasks.length - 1; i++) {
                for (let j = i + 1; j < tasks.length; j++) {
                    pairs.push([tasks[i], tasks[j]]);
                }
            }
            return pairs;
        };
        setTaskPairs(generateTaskPairs());
        setPairIndex(0);
    }, [tasks]);

    const handleSelectTask = (selectedTask) => {
        const updatedPriorities = { ...taskPriorities };
        updatedPriorities[selectedTask] = updatedPriorities[selectedTask] ? updatedPriorities[selectedTask] + 1 : 1;
        setTaskPriorities(updatedPriorities);
        setPairIndex(pairIndex + 1);
        console.log("Hi")
        console.log(`The selected task content is : ${selectedTask.content}`)
        hashmap[selectedTask.content]+=1
        console.log(`The hashmap of selected task content is : ${hashmap[selectedTask.content]}`)
        console.log(hashmap)
    };

    const handleFinishPrioritization = () => {
        if (!taskPriorities || Object.keys(taskPriorities).length === 0) {
            console.log("No tasks to prioritize.");
            return;
        }
        navigate('/Final', { state: { hashmap: hashmap } });
    };

    const renderTaskPair = () => {
        if (!taskPairs || taskPairs.length === 0 || pairIndex >= taskPairs.length || !taskPairs[pairIndex]) {
            return null;
        }

        const taskPair = taskPairs[pairIndex];
        const taskA = taskPair[0]?.content;
        const taskB = taskPair[1]?.content;

        if (!taskA || !taskB) {
            return null;
        }

        return (
            <div style={{textAlign: 'center'}}>
                <h3>Task A: {taskA}</h3>
                <h3>vs</h3>
                <h3>Task B: {taskB}</h3>
                <button className='button' onClick={() => handleSelectTask(taskPair[0])}>Select Task A</button>
                <button className='button' onClick={() => handleSelectTask(taskPair[1])}>Select Task B</button>
            </div>
        );
    };

    return (
        <div className='priority-container'>
            <h1 className='header2'>Well, These are your tasks! Let's Prioritize them..!</h1>
            <h2>
                {tasks.map(task => <div key={task.id}>{task.content}</div>)}
            </h2>
            <div className='task-pair-container'>
            {renderTaskPair()}
            </div>
            {pairIndex >= taskPairs.length && (
                <div>
                    <h2 style={{color:'Green'}}>All tasks have been prioritized!</h2>
                    <button className='button' onClick={handleFinishPrioritization}>Finish</button>
                </div>
            )}
        </div>
        
    );
};

export default Priority