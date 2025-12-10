import React, { useState } from "react";

function Task({ taskName }) {
    const [isComplete, setIsComplete] = useState(false);

    const toggleComplete = () => {
        setIsComplete(!isComplete);
    };

    const taskStyle = {
        textDecoration: isComplete ? 'line-through' : 'none',
        cursor: 'pointer',  // Indicate that the task is clickable
        color: isComplete ? '#aaa' : '#000',
        marginBottom: '10px'
    };

    return (
        <div style={taskStyle} onClick={toggleComplete}>
            <span style={{ marginRight: '10px' }}>
                {isComplete ? '✅' : '⏳'}
            </span>
            {taskName}
        </div>
    );
};

export default Task;