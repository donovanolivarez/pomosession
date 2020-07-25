import React, { useState } from 'react';
import './App.css';
import Header from '../header/Header';
import Timer from '../timer/Timer';
import Information from '../information/Information';
import sound from '../../Bugle_Tune.mp3'

var isStarted = false;
var isPaused = false;
var timeRemaining = 3;
var resetClicked = false;
var timerID = 0;
var audio = new Audio(sound);

function App() {

  const [timer, setTimer] = useState(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  const [startText, setStartText] = useState("Start");
  function updateTimer() {

    if (isPaused) { return; }
    if (timeRemaining === 0) { return handleComplete() };

    timeRemaining--;
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }

  function startTimer() {
    // audio.play();
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

  function handleComplete() {
    audio.play();
    handleResetClick();
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
    timeRemaining = (timeRemaining < 1500) && 1500;
    clearInterval(timerID);
    isStarted = false;
    isPaused = false;
    setStartText("Start");
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
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
