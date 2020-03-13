import React from 'react';
import './pointer.css';

const Pointer = ({ type, angle, tick, background, onClick }) => {
  const style = {
    transform: `rotate(${angle}deg)`,
    transitionDuration: tick ? '500ms' : '1000ms',
    transitionTimingFunction: tick ? 'ease' : 'linear',
    background: background
  };
  return (
    <div
      onClick={() => onClick()}
      style={style}
      className={`pointer ${type}`}
    ></div>
  );
};

export default Pointer;
