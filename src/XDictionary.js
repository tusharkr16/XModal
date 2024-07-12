import React, { useState } from 'react';

const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

function XDictionary() {
    const [dictionary, setDictionary] = useState(initialDictionary);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');

    // Function to handle search
    const handleSearch = () => {
        const lowercaseTerm = searchTerm.toLowerCase();
        const found = dictionary.find(entry => entry.word.toLowerCase() === lowercaseTerm);
        if (found) {
            setSearchResult(found.meaning);
        } else {
            setSearchResult('Word not found in the dictionary.');
        }
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <input
                type="text"
                placeholder="Enter a word"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                <h4>Definition:</h4>
                <p>{searchResult}</p>
            </div>
        </div>
    );
}

export default XDictionary;
