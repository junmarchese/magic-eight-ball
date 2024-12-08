import React, { useState } from "react";
import "./MagicEightBall.css";

function MagicEightBall({ answers }) {
    // Initial states
    const initialMessage = "Think of a Question";
    const initialColor = "black";

    // State for message and color
    const [message, setMessage] = useState(initialMessage);
    const [color, setColor] = useState(initialColor);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        setMessage(randomAnswer.msg);
        setColor(randomAnswer.color);
    };

    const handleReset = () => {
        setMessage(initialMessage);
        setColor(initialColor);
    };

    const ballStyle = {
        backgroundColor: color,
        color: "white",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        margin: "20px auto",
    };

    return (
        <div style={{ textAlign: "center" }}>
            {/* Magic Eight Ball */}
            <div style={ballStyle} onClick={handleClick}>
                {message}
            </div>

            {/* Reset Button */}
            <button onClick={handleReset} style={{ marginTop: "10px", padding: "10px 20px" }}>
                Reset
            </button>
        </div>
    );
}

export default MagicEightBall;