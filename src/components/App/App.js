import React, { useState, useEffect } from 'react';
import AnalogClock from '../AnalogClock/AnalogClock';
import './app.css';

export default function App() {
  const [time, updateTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  useEffect(() => {
    const ticker = setTimeout(() => {
      updateTime(getTime());
    }, 1000);
    return () => clearTimeout(ticker);
  });

  return (
    <div className="app">
      <AnalogClock time={time}></AnalogClock>
    </div>
  );
}

function getTime() {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds()
  };
}
