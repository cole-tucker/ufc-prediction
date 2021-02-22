import { useState } from 'react';
import './component.letter.css';

const Letter = ({ onSelect }) => {
  const letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [currentLetter, setCurrentLetter] = useState('A');
  return (
    <div className="row">
      <div className="letterBody">
        {letterArray.map((item, index) => (
          <div
            key={index}
            className={`letter ${currentLetter === item ? 'select' : ''}`}
            onClick={() => {
              setCurrentLetter(item);
              onSelect && onSelect(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Letter;
