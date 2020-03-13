import React from 'react';
import './digitalclock.css';

export const DigitalClock = ({ time }) => {
  return (
    <div className="digital-clock-wrapper">
      <div className="digital-clock">
        <div className="number-container" id="digital-hour">
          {padZero(time.hours, 2)}
        </div>
        {/* <div className="spacer-container">:</div> */}
        <div className="number-container" id="digital-minute">
          {padZero(time.minutes, 2)}
        </div>
        {/* <div className="spacer-container">:</div> */}
        <div className="number-container" id="digital-second">
          {padZero(time.seconds, 2)}
        </div>
      </div>
    </div>
  );
};

function padZero(digit) {
  if (digit.toString().length < 2) digit = '0' + digit;
  return digit;
}
