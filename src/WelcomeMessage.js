import React from "react";

function WelcomeMessage(props) {
    const { name } = props;

    return (
        <div className="welcome-card">
            <h2>Hello, {name}!</h2>
            <p>Welcome to your first functional React component.</p>
        </div>
    );
};

export default WelcomeMessage;