import React, { useState } from 'react';
import './App.css';
import Header from '../header/Header';
import Timer from '../timer/Timer';
import Information from '../information/Information';

var isStarted = false;
var isPaused = false;
var timeElapsed = 1500, timeRemaining = 1500;
var resetClicked = false;
var timerID = 0;

function App() {

  const [timer, setTimer] = useState(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  const [startText, setStartText] = useState("Start");
  function updateTimer() {
    if (isPaused) {
      return;
    }
    timeRemaining--;
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }

  function startTimer() {
    isStarted = true;
    timerID = setInterval(updateTimer, 1000);
    setStartText("Pause");
  }

  function resumeTimer() {
    isPaused = false;
    setStartText("Pause");
  }

  function pauseTimer() {
    setStartText("Resume");
    isPaused = true;
  }

  function handleClick(event) {
    if (!isStarted) {
      startTimer();
    } else if (isStarted && isPaused) {
      resumeTimer();
    } else {
      pauseTimer();
    }
  }

  function handleResetClick() {
    if (timeRemaining < 1500) {
      timeRemaining = 1500;
    }
    isStarted = false;
    setStartText("Start");
    clearInterval(timerID);
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11,8));
  }


  return (
    <div className="App">
      <Header />
      <Timer time={timer} labelText={startText} handleClick={handleClick} handleReset={handleResetClick} />
      <Information />
    </div>
  );
}

export default App;
