import React from "react";
import Todo from "./todo";
import '..//styles.css';
import { Link } from "react-router-dom";

const Homepage= ()=>{
    return(
        <div className="header-container">
            <div> <h1 className="header">Anxious with your tasks? Let me help!</h1>
        <Todo/>
        <p style={{textAlign: 'center'}}> <Link to="/About" style={{ color: 'blue', textDecoration: 'underline'}}>About Task Paralysis</Link> </p>
        </div>
        </div>
        
    )
}

export default Homepage;