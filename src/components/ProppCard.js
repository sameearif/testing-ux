import React from "react";
import './ProppCard.css';

function ProppCard({ description, example, selected, onClick }) {
    return (
        <div 
            className={`propp-card ${selected ? "selected" : ""}`} 
            onClick={onClick}
        >
            <h2 className="propp-card-description">{description}</h2>
            {example && <p className="propp-card-example">{example}</p>}
        </div>
    );
}

export default ProppCard;
