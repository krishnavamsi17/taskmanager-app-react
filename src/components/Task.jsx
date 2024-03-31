import React from 'react'
import "..//styles.css"


function Task(props) {
    function handleClick(){
        props.onDelete(props.id);
    }
  return (
    <div className='task'>
      <h1>{props.content}</h1>
      <button
    style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }}
    onClick={handleClick}
    onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
    onMouseLeave={(e) => e.target.style.backgroundColor = 'red'}
>DELETE</button>
    </div>
  )
}

export default Task
