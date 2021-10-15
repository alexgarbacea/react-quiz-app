import Questions from "./components/Questions"

import { useState } from "react"

const App = () => {
    const [started, setStarted] = useState(false)

    const startQuiz = () => {
        setStarted(true)
    }

    return (
        <div className="wrapper">
            <h1>QUIZ TIME!</h1>
            <div className="box">
                {started ?
                <Questions />
                :
                <>
                    <h2>Ready?</h2>
                    <div>Good luck!</div>
                    <br />
                    <div className="btn" onClick={() => startQuiz()}>START</div>
                </>
                }
            </div>
        </div>
    )
}

export default App
