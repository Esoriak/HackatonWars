import React from 'react';
import './GenerateCharacter.css'
const GenerateCharacter = ({ selectCharacter }) => {
    return (
        <div className="GenerateCharacter">
            <button onClick={selectCharacter}>Push that !!!</button>
        </div>
    );
};

export default GenerateCharacter;
