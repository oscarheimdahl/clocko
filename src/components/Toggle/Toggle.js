import React, { useState } from 'react';
import './toggle.css';

const Toggle = ({ onClick, background }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      style={{
        transform: clicked ? 'scale(0.9)' : '',
        borderColor: background
      }}
      className="toggle"
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setTimeout(() => setClicked(false), 300)}
      onClick={() => onClick()}
    ></div>
  );
};

export default Toggle;
