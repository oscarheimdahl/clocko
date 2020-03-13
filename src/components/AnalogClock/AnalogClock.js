import React from 'react';
import './analogclock.css';

const AnalogClock = ({ time }) => {
  return (
    <div className="analog-clock">
      {/* <div className="dot"></div> */}
      <Pointer type="hour" angle={getAngle(time.hours, 12)}></Pointer>
      <Pointer type="minute" angle={getAngle(time.minutes, 60)}></Pointer>
      <Pointer type="second" angle={getAngle(time.seconds, 60)}></Pointer>
    </div>
  );
};

const Pointer = ({ type, angle }) => {
  const rotation = { transform: `rotate(${angle}deg)` };
  return <div style={rotation} className={`pointer ${type}`}></div>;
};

function getAngle(current, max) {
  //   return Math.random() > 0.5 ? 0 : 180;
  //   return 0;
  const angle = 360 * ((current % max) / max) + 90;
  console.log(current);
  return angle;
}

export default AnalogClock;
