import React, { useState } from 'react';
import './progressbars.css';
import Toggle from '../Toggle/Toggle';

const ProgressBars = ({ time }) => {
  const [full, setFull] = useState(false);
  const fullStyleBar = { height: '100%' };
  const fullStyleContainer = { gap: '0', gridTemplateRows: '1fr 1fr 1fr' };
  return (
    <div className="progress-bars-wrapper">
      <div className="progress-bars" style={full ? fullStyleContainer : {}}>
        <div
          style={{ width: `calc(${(100 * time.seconds) / 59}% - 20px)` }}
          className="progress-bar"
        >
          S
        </div>
        <div
          style={{ width: `calc(${(100 * time.minutes) / 59}% - 20px)` }}
          className="progress-bar"
        >
          M
        </div>
        <div
          style={{ width: `calc(${(100 * time.hours) / 23}% - 20px)` }}
          className="progress-bar"
        >
          H
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
