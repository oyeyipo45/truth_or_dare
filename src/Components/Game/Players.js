import React, { useState } from 'react';
import { Link } from "react-router-dom";



export const Players = () => {
    const [playerName, addPlayerName] = useState('');
    return (
        <div>
            <input
            type="Text"
            placeholder="Add Player"
            value = {playerName}
            onChange={(e) => addPlayerName(e.target.value)}
            />
            <Link to="/">Home</Link>
            <Link to="/GameField">Begin Game</Link>
        </div>
    )
}
