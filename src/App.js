import Questions from "./components/Questions"
import Timer from "./components/Timer"

import { useState } from "react"

import { questionsLength } from "./question_options"

const App = () => {
    const [started, setStarted] = useState(false);
    const [timeDone, setTimeDone] = useState(false);
    const [showTime, setShowTime] = useState(false);

    const startQuiz = (state) => {
        setStarted(state);
        timerState(true)
    }

    const timeUp = () => {
        setTimeDone(true);
    }

    const timerState = (state) => {
        setShowTime(state);
    }

    return (
        <div className="wrapper">
            {(!started || !showTime) ? 
            <h1>QUIZ TIME!</h1> : 
            <Timer time = {questionsLength} timePer = {10} timeUp = {timeUp} />}
            <div className="box">
                {started ?
                    !timeDone && <Questions end={timerState}/>
                :
                <>
                    <h2>Ready?</h2>
                    <div>Good luck!</div>
                    <br />
                    <div className="btn" onClick={() => startQuiz(true)}>START</div>
                </>
                }
                {timeDone && 
                    <>
                        <h2 style={{color:'red'}}>Time's up!</h2>
                        <div className="btn" onClick={() => window.location.reload()}>Retake</div>
                    </>
                }
            </div>
        </div>
    )
}

export default App
