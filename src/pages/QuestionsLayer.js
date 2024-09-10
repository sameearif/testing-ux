import React from "react";
import './QuestionsLayer.css';

function QuestionsLayer({ selectedCards, layerData, layerAnswers, setLayerAnswers, handleSubmit }) {

    const handleAnswerChange = (functionName, value) => {
        setLayerAnswers(prevAnswers => ({
            ...prevAnswers,
            [functionName]: value
        }));
    };

    const allQuestionsAnswered = Object.keys(selectedCards)
        .filter(functionName => selectedCards[functionName])
        .every(functionName => layerAnswers[functionName] && layerAnswers[functionName].trim() !== "");

    return (
        <div className="questions-layer-container">
            <h1 className="questions-layer-heading">
                Answer the following questions to continue your adventure!
            </h1>
            <div className="questions-list">
                {Object.keys(selectedCards).map((functionName) => {
                    if (selectedCards[functionName]) {
                        const { question, example } = layerData[functionName];
                        return (
                            <div key={functionName} className="question-item">
                                <h3>{question}</h3>
                                {example && <p className="question-example">Example: {example}</p>}
                                <textarea
                                    placeholder="Type your answer here"
                                    value={layerAnswers[functionName] || ""}
                                    onChange={(e) => handleAnswerChange(functionName, e.target.value)}
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="next-button-container">
                <button
                    className={`next-button ${!allQuestionsAnswered ? "disabled" : ""}`}
                    onClick={handleSubmit}
                    disabled={!allQuestionsAnswered}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default QuestionsLayer;
