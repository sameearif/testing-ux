import React from "react";
import ProppCard from "../components/ProppCard";
import './CardsLayer.css';

function CardsLayer({ heading, phrase, layerFunction, selectedCards, setSelectedCards, layerAnswer, setLayerAnswer, handleSubmit }) {

    const handleCardClick = (functionName) => {
        setSelectedCards(prevState => ({
            ...prevState,
            [functionName]: !prevState[functionName]
        }));
    };

    const handleAnswerChange = (functionName, answer) => {
        setLayerAnswer(prevState => ({
            ...prevState,
            [functionName]: answer
        }));
    };

    const selectedAndAnsweredCount = Object.keys(selectedCards)
        .filter(functionName => selectedCards[functionName] && layerAnswer[functionName] && layerAnswer[functionName].trim() !== "")
        .length;

    const selectedCount = Object.values(selectedCards).filter(selected => selected).length;

    return (
        <div className="card-layer-container">
            <div className="card-layer">
                <h1 className="card-layer-heading">
                    {heading}
                    <br />
                    <h2>{phrase}</h2>
                    <small>*Select at least 2 and answer them</small>
                </h1>
                <div className="propp-cards">
                    {Object.keys(layerFunction).map((functionName, index) => {
                        const { description, example, question } = layerFunction[functionName];
                        return (
                            <ProppCard
                                key={index}
                                description={description}
                                example={example}
                                question={question}
                                selected={!!selectedCards[functionName]}
                                answer={layerAnswer[functionName]} // Pass the stored answer
                                setAnswer={(answer) => handleAnswerChange(functionName, answer)} // Store the answer
                                onClick={() => handleCardClick(functionName)}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="next-button-container">
                <button
                    className={`next-button ${selectedAndAnsweredCount < 2 ? "disabled" : ""}`}
                    onClick={handleSubmit}
                    disabled={selectedAndAnsweredCount < 2}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CardsLayer;
