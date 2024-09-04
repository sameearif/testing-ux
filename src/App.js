import React, { useState } from "react";
import './App.css';
import 'animate.css';

function App() {
  const [storyName, setStoryName] = useState('');
  const [mainCharacter, setMainCharacter] = useState('');
  const [setting, setSetting] = useState('');
  const [currentPage, setCurrentPage] = useState('form'); // Manage the current page ('form', 'cards', 'nextPage')
  const [selectedCards, setSelectedCards] = useState([]); // Track which cards are selected

  const storyElements = [
    "Absentation: Someone goes missing",
    "Interdiction: Hero is warned",
    "Violation of interdiction",
    "Reconnaissance: Villain seeks something",
    "Delivery: The villain gains information",
    "Trickery: Villain attempts to deceive victim",
    "Complicity: Unwitting helping of the enemy"
  ];

  const handleNextClick = () => {
    setCurrentPage('cards'); // Show all cards after form
  };

  const handleCardClick = (index) => {
    // Toggle the card selection
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(cardIndex => cardIndex !== index); // Deselect card
      } else {
        return [...prevSelected, index]; // Select card
      }
    });
  };

  const handleBackClick = () => {
    setCurrentPage('form'); // Back to the form page
  };

  const handleNextPageClick = () => {
    setCurrentPage('nextPage'); // Navigate to the next page after the cards
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center p-4 relative">
      {/* Back Button for Character Name Page */}
      {currentPage !== 'form' && (
        <button
          className="absolute top-4 left-4 bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out"
          onClick={handleBackClick}
        >
          Back
        </button>
      )}

      {currentPage === 'form' && (
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full animate__animated animate__fadeIn">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Create Your Story</h1>
          
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Story Name</label>
              <input 
                type="text"
                value={storyName}
                onChange={(e) => setStoryName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter story name..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Character</label>
              <input 
                type="text"
                value={mainCharacter}
                onChange={(e) => setMainCharacter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                placeholder="Enter main character..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Setting of the Story</label>
              <textarea 
                value={setting}
                onChange={(e) => setSetting(e.target.value)}
                className="w-full h-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none"
                placeholder="Enter setting..."
              />
            </div>

            <div className="text-center">
              <button 
                type="button"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {currentPage === 'cards' && (
        <>
          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Select the story elements to introduce the situation and most of the main characters, setting the scene for subsequent adventure.
          </h1>
          
          {/* Cards */}
          <div className="flex flex-wrap items-center justify-center animate__animated animate__fadeInUp">
            {storyElements.map((element, index) => (
              <div 
                key={index} 
                className={`relative bg-white shadow-lg rounded-lg w-48 h-64 m-4 p-6 cursor-pointer transition-transform duration-300 transform hover:scale-105 ${selectedCards.includes(index) ? 'bg-gray-100' : ''}`}
                onClick={() => handleCardClick(index)} // Toggle card selection
              >
                {selectedCards.includes(index) ? (
                  <div className="flex flex-col justify-start items-center w-full h-full">
                    <h2 className="text-lg font-bold text-gray-800 text-center mb-2">{element}</h2>
                    <textarea 
                      className="w-full h-3/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                      placeholder="Write your notes here..."
                    />
                  </div>
                ) : (
                  <h2 className="text-xl font-bold text-gray-800 text-center">{element}</h2>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Next Button in the Bottom Center */}
      {currentPage === 'cards' && (
        <button
          className="absolute bottom-8 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          onClick={handleNextPageClick}
        >
          Next
        </button>
      )}

      {currentPage === 'nextPage' && (
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full text-center animate__animated animate__fadeIn">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">You are on the Next Page!</h1>
          <p>This is the next section where further actions or details can be added.</p>
        </div>
      )}
    </div>
  );
}

export default App;
