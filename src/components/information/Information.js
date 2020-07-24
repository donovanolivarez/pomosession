import React from 'react';
import './Information.css';

function Information () {
    return (
        <div className="info-main">
            <h1>Information about the Pomodoro Technique:</h1>
            <ul>
                <li>
                    Studies show that using it helps improve focus by x percent.
                </li>
                <li>
                    You get to take more breaks!
                </li>
            </ul>
        </div>
    );
}
export default Information;