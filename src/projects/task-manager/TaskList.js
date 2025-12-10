import React from "react";
import Task from "./Task";

function TaskList() {
    const tasks = [
        "Learn about State and Props",
        "Create the Task component",
        "Integrate the Task List",
        "Celebrate! 🎉"
    ];

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        }}>
            {tasks.map((taskItem, index) => (
                <Task key={index} taskName={taskItem} />
            ))}
        </div>
    );
};

export default TaskList;