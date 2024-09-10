import React, { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import CardsLayer from "./pages/CardsLayer";
import QuestionsLayer from "./pages/QuestionsLayer";
import './App.css';

function App() {
    const [page, setPage] = useState("main-page")

    const [storyName, setStoryName] = useState("");
    const [mainCharacter, setMainCharacter] = useState("");
    const [moral, setMoral] = useState("");

    const [layerOneData, setLayerOneData] = useState({});
    const [selectedCardsLayerOne, setSelectedCardsLayerOne] = useState({});
    const [layerOneAnswers, setLayerOneAnswers] = useState({});

    const [layerTwoData, setLayerTwoData] = useState({});
    const [selectedCardsLayerTwo, setSelectedCardsLayerTwo] = useState({});
    const [layerTwoAnswers, setLayerTwoAnswers] = useState({});

    const [layerThreeData, setLayerThreeData] = useState({});
    const [selectedCardsLayerThree, setSelectedCardsLayerThree] = useState({});
    const [layerThreeAnswers, setLayerThreeAnswers] = useState({});

    const [layerFourData, setLayerFourData] = useState({});
    const [selectedCardsLayerFour, setSelectedCardsLayerFour] = useState({});
    const [layerFourAnswers, setLayerFourAnswers] = useState({});

    const [layerFiveData, setLayerFiveData] = useState({});
    const [selectedCardsLayerFive, setSelectedCardsLayerFive] = useState({});
    const [layerFiveAnswers, setLayerFiveAnswers] = useState({});

    useEffect(() => {
        fetch("/layerOne.json")
                .then(response => response.json())
                .then(data => setLayerOneData(data))
                .catch(error => console.error("Error loading JSON:", error));
        fetch("/layerTwo.json")
                .then(response => response.json())
                .then(data => setLayerTwoData(data))
                .catch(error => console.error("Error loading JSON:", error));
        fetch("/layerThree.json")
                .then(response => response.json())
                .then(data => setLayerThreeData(data))
                .catch(error => console.error("Error loading JSON:", error));
        fetch("/layerFour.json")
                .then(response => response.json())
                .then(data => setLayerFourData(data))
                .catch(error => console.error("Error loading JSON:", error));
        fetch("/layerFive.json")
                .then(response => response.json())
                .then(data => setLayerFiveData(data))
                .catch(error => console.error("Error loading JSON:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (page == "main-page") {
            setPage("layer-one");
        }
        else if (page == "layer-one") {
            setPage("layer-two");
        }
        else if (page == "layer-two") {
            setPage("layer-three");
        }
        else if (page == "layer-three") {
            setPage("layer-four");
        }
        else if (page == "layer-four") {
            setPage("layer-five");
        }
        else if (page == "layer-five") {
            setPage("layer-six");
        }
        else if (page == "layer-six") {
            setPage("layer-seven");
        }
        else if (page == "layer-seven") {
            setPage("layer-eight");
        }
        else if (page == "layer-eight") {
            setPage("layer-nine");
        }
        else if (page == "layer-nine") {
            setPage("layer-ten");
        }
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        if (page == "layer-one") {
            setPage("main-page");
        }
        else if (page == "layer-two") {
            setPage("layer-one");
        }
        else if (page == "layer-three") {
            setPage("layer-two");
        }
        else if (page == "layer-four") {
            setPage("layer-three");
        }
        else if (page == "layer-five") {
            setPage("layer-four");
        }
        else if (page == "layer-six") {
            setPage("layer-five");
        }
        else if (page == "layer-seven") {
            setPage("layer-six");
        }
        else if (page == "layer-eight") {
            setPage("layer-seven");
        }
        else if (page == "layer-nine") {
            setPage("layer-eight");
        }
        else if (page == "layer-ten") {
            setPage("layer-nine");
        }
    }

    return (
        <div className="App">
            <div className="back-button-container">
                <button className="back-button" onClick={handleBackClick}>
                    ← Back
                </button>
            </div>
            {page == "main-page" && <MainPage
                storyName={storyName}
                setStoryName={setStoryName}
                mainCharacter={mainCharacter}
                setMainCharacter={setMainCharacter}
                moral={moral}
                setMoral={setMoral}
                handleSubmit={handleSubmit}
            />}
            {page == "layer-one" && <CardsLayer 
                heading={"PART I: Explosion"}
                phrase={"Pick the parts of the story that show who the main characters are and where they are, so we can get ready for the adventure!"}
                layerOneFunctions={layerOneData}
                selectedCards={selectedCardsLayerOne}
                setSelectedCards={setSelectedCardsLayerOne}
                handleSubmit={handleSubmit}
            />}
            {page === "layer-two" && <QuestionsLayer 
                  selectedCards={selectedCardsLayerOne} 
                  layerData={layerOneData}
                  layerAnswers={layerOneAnswers}
                  setLayerAnswers={setLayerOneAnswers}
                  handleSubmit={handleSubmit}
            />}
            {page == "layer-three" && <CardsLayer 
                heading={"PART II: Rising Action"}
                phrase={"Choose the exciting moments that build up the tension and lead the characters toward their biggest challenge."}
                layerOneFunctions={layerTwoData}
                selectedCards={selectedCardsLayerTwo}
                setSelectedCards={setSelectedCardsLayerTwo}
                handleSubmit={handleSubmit}
            />}
            {page === "layer-four" && <QuestionsLayer 
                  selectedCards={selectedCardsLayerTwo} 
                  layerData={layerTwoData}
                  layerAnswers={layerTwoAnswers}
                  setLayerAnswers={setLayerTwoAnswers}
                  handleSubmit={handleSubmit}
            />}
            {page == "layer-five" && <CardsLayer 
                heading={"PART III: Climax"}
                phrase={"Select the moment in the story when the main character faces their greatest challenge."}
                layerOneFunctions={layerThreeData}
                selectedCards={selectedCardsLayerThree}
                setSelectedCards={setSelectedCardsLayerThree}
                handleSubmit={handleSubmit}
            />}
            {page === "layer-six" && <QuestionsLayer 
                  selectedCards={selectedCardsLayerThree} 
                  layerData={layerThreeData}
                  layerAnswers={layerThreeAnswers}
                  setLayerAnswers={setLayerThreeAnswers}
                  handleSubmit={handleSubmit}
            />}
            {page == "layer-seven" && <CardsLayer 
                heading={"PART IV: Falling Action"}
                phrase={"Pick the scenes where the characters deal with the consequences of the climax."}
                layerOneFunctions={layerFourData}
                selectedCards={selectedCardsLayerFour}
                setSelectedCards={setSelectedCardsLayerFour}
                handleSubmit={handleSubmit}
            />}
            {page === "layer-eight" && <QuestionsLayer 
                  selectedCards={selectedCardsLayerFour} 
                  layerData={layerFourData}
                  layerAnswers={layerFourAnswers}
                  setLayerAnswers={setLayerFourAnswers}
                  handleSubmit={handleSubmit}
            />}
            {page == "layer-nine" && <CardsLayer 
                heading={"PART V: Resolution"}
                phrase={"Choose how the story wraps up. Here, all the loose ends are tied, and the characters find closure."}
                layerOneFunctions={layerFiveData}
                selectedCards={selectedCardsLayerFive}
                setSelectedCards={setSelectedCardsLayerFive}
                handleSubmit={handleSubmit}
            />}
            {page === "layer-ten" && <QuestionsLayer 
                  selectedCards={selectedCardsLayerFive} 
                  layerData={layerFiveData}
                  layerAnswers={layerFiveAnswers}
                  setLayerAnswers={setLayerFiveAnswers}
                  handleSubmit={handleSubmit}
            />}
        </div>
    );
}

export default App;
