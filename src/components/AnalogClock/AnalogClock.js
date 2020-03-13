import React, { useState } from 'react';
import './analogclock.css';
import Pointer from '../Pointer/Pointer';
import Toggle from '../Toggle/Toggle';

const AnalogClock = ({ time }) => {
  const [tick, setTick] = useState(true);
  const [colorIndices, setColorIndices] = useState({
    second: 0,
    minute: 0,
    hour: 0
  });

  const colors = ['#ffffff', '#ff00dd', '#0099ff', '#0bd470', '#f5be1b'];

  return (
    <div className="analog-clock-wrapper">
      <div className="analog-clock">
        <div className="dot"></div>
        <Toggle onClick={() => setTick(!tick)}></Toggle>
        <Pointer
          background={colors[colorIndices.minute]}
          type="minute"
          angle={getAngle(time, 'minute')}
          onClick={() =>
            setColorIndices({
              hour: colorIndices.hour,
              minute: (colorIndices.minute + 1) % colors.length,
              second: colorIndices.second
            })
          }
        ></Pointer>
        <Pointer
          background={colors[colorIndices.hour]}
          type="hour"
          angle={getAngle(time, 'hour')}
          tick={tick}
          onClick={() =>
            setColorIndices({
              hour: (colorIndices.hour + 1) % colors.length,
              minute: colorIndices.minute,
              second: colorIndices.second
            })
          }
        ></Pointer>
        <Pointer
          background={colors[colorIndices.second]}
          tick={tick}
          type="second"
          angle={getAngle(time, 'second')}
          onClick={() =>
            setColorIndices({
              hour: colorIndices.hour,
              minute: colorIndices.minute,
              second: (colorIndices.second + 1) % colors.length
            })
          }
        ></Pointer>
      </div>
    </div>
  );
};

function getAngle(time, type) {
  //   return 0;
  let angle = 0;
  if (type === 'second')
    angle =
      360 * (time.seconds / 60) + 90 + 360 * time.minutes + 360 * time.hours;
  else if (type === 'minute')
    angle = 360 * (time.minutes / 60) + 90 + 360 * time.hours;
  else if (type === 'hour') angle = 360 * (time.hours / 12) + 90;
  return angle;
}

export default AnalogClock;
