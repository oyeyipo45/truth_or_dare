import React from 'react'
import { Link } from "react-router-dom";



export const Home = () => {
    return (
        <div className="container">

           <Link to="/Players">Add Players</Link>

        </div>
    )
}
