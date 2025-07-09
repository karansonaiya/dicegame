import React, { useEffect, useState } from 'react'
import Head from './Head'
import Timing from './Timing'
import Dies from './Dies'
import RollBtn from './RollBtn'
import ReactConfetti from 'react-confetti'

const Index = () => {
    const [time, setTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [win, setwin] = useState(false);
    const [bestTime, setBestTime] = useState(() => {
        return localStorage.getItem('bestTime') || null;
    });

    const [rolls, setRolls] = useState(0);
    const [dice, setDice] = useState(
        Array.from({ length: 10 }, () => ({
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
        }))
    );

useEffect(() => {
        let timer;
        if (timerRunning && !win) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timerRunning, win]);
    useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld);
        console.log(`allHeld: ${allHeld}`);

        const firstValue = dice[0].value;
        const allSame = dice.every((die) => die.value === firstValue);

        if (allHeld && allSame) {
            setwin(true);
            setTimerRunning(false);

            if (!bestTime || time < bestTime) {
                localStorage.setItem('bestTime', time);
                setBestTime(time);
            }
        }
    }, [dice]);
    const handleRoll = () => {
        if (!timerRunning && rolls === 0) {
            setTimerRunning(true);
        }

        setDice((prevDice) =>
            prevDice.map((die) =>
                die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
            )
        );
        setRolls((prevRolls) => prevRolls + 1);
        if (win) {
            resetGame();
        }

    };
    const formatTime = (t) => {
        console.log(`t: ${t}`);
        const mins = String(Math.floor(t / 60)).padStart(2, '0');
        const secs = String(t % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    };
    const resetGame = () => {
        setDice(
            Array.from({ length: 10 }, () => ({
                value: Math.floor(Math.random() * 6) + 1,
                isHeld: false,
            }))
        );
        setRolls(0);
        setTimerRunning(false);
        setwin(false);
        setTime(0);
    };
     const toggleHold = (index) => {
        setDice((prevDice) =>
            prevDice.map((die, i) =>
                i === index ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    };
  return (
    <>
     <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="border bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
      <Head />
      <Timing time={time} timerRunning={timerRunning} bestTime={bestTime} rolls={rolls} formatTime={formatTime}/>
      <Dies dice={dice} toggleHold={toggleHold} win={win}/>
      <RollBtn handleRoll={handleRoll} win={win}/>
      </div>
      {win && <ReactConfetti />}
    </div>
    </>
  )
}

export default Index
