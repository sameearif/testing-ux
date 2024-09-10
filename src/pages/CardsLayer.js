import React from "react";
import ProppCard from "../components/ProppCard";
import './CardsLayer.css'

function CardsLayer({ heading, phrase, layerOneFunctions, selectedCards, setSelectedCards, handleSubmit }) {

    const handleCardClick = (functionName) => {
        setSelectedCards(prevState => ({
            ...prevState,
            [functionName]: !prevState[functionName]
        }));
    };

    const selectedCount = Object.values(selectedCards).filter(selected => selected).length;

    return (
        <div className="card-layer-container">
            <h1 className="card-layer-heading">
                {heading}
                <br />
                <h2>{phrase}</h2>
                <small>*Select at least 2</small>
            </h1>
            <div className="card-layer">
                {Object.keys(layerOneFunctions).map((functionName, index) => {
                    const { description, example } = layerOneFunctions[functionName];
                    return (
                        <ProppCard
                            key={index}
                            description={description}
                            example={example}
                            selected={!!selectedCards[functionName]}
                            onClick={() => handleCardClick(functionName)}
                        />
                    );
                })}
            </div>
            <div className="next-button-container">
                <button
                    className={`next-button ${selectedCount < 2 ? "disabled" : ""}`}
                    onClick={handleSubmit}
                    disabled={selectedCount < 2}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CardsLayer;
