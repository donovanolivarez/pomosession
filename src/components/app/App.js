import React, { useState } from 'react';
import './App.css';
import Header from '../header/Header';
import Timer from '../timer/Timer';
import Information from '../information/Information';
import sound from '../../Bugle_Tune.mp3'

var isStarted = false;
var isPaused = false;
var onBreak = false;
var timeRemaining = 1500;
var timerID = 0;
var audio = new Audio(sound);

function App() {

  const [timer, setTimer] = useState(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  const [startText, setStartText] = useState("Start");
  const [clicked, setClicked] = useState(false);

  //TODO: object to reduce the props being passed to timer 

  const f = {
    increase: increaseTime,
    decrease: decreaseTime,
  }

  function updateTimer() {

    if (isPaused) { return; }
    if (timeRemaining === 0) { return handleComplete() };

    timeRemaining--;
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }

  function startTimer() {
    setClicked(true);
    isStarted = true;
    timerID = setInterval(updateTimer, 1000);
    setStartText("Pause");
  }

  function resumeTimer() {
    setClicked(true);
    isPaused = false;
    setStartText("Pause");
  }

  function pauseTimer() {
    setClicked(false);
    setStartText("Resume");
    isPaused = true;
  }

  function handleComplete() {
    timeRemaining = onBreak ? 1500 : 300
    if (timeRemaining === 1500 ){
      onBreak = false;
    } else {
      onBreak = true;
    }
    isStarted = false;
    isPaused = false;
    setStartText("Start");
    setClicked(false);
    clearInterval(timerID);
    // TODO:  handleAudio() here!
    audio.play();
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }

  function handleClick() {
    if (!isStarted) {
      startTimer();
    } else if (isStarted && isPaused) {
      resumeTimer();
    } else {
      pauseTimer();
    }
  }

  function handleResetClick() {
    timeRemaining = 1500;
    isStarted = false;
    isPaused = false;
    onBreak = false;
    clearInterval(timerID);
    setStartText("Start");
    setClicked(false);
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }

  function increaseTime() {
    timeRemaining += 300;
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }

  function decreaseTime(){
    timeRemaining = (timeRemaining - 300 <= 0) ? 0 : timeRemaining - 300;
    setTimer(new Date(1000 * timeRemaining).toISOString().substr(11, 8));
  }


  return (
    <div className="App">
      <Header />
      <Timer time={timer} labelText={startText} handleClick={handleClick} handleReset={handleResetClick} func={f} clicked={clicked}/>
      <Information />
    </div>
  );
}

export default App;
