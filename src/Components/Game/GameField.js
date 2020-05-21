import React from 'react'
import { Link } from "react-router-dom";



 const GameField = () => {
    return (
        <div className="container">
            
            <Link to="/">Home</Link>
            <button className="btn btn-danger">TURN</button>
        </div>
    )
}


export default GameField;