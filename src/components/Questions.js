import { shuffleAnswers as opt,  questions } from "../question_options"

import { useState } from "react"

const Questions = () => {

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);
    const [answears, setAnswears] = useState([]);
    const [showAnswears, setShowAnswears] = useState(false);

    const selectAnswer = (isCorrect, text) => {
        setAnswears([...answears, {text: text, isCorrect: isCorrect}]);
        if(isCorrect) setScore(score + (100/questions.length));//right answear

        if(currentQuestion < questions.length) setCurrentQuestion(currentQuestion + 1)//next question
        else setFinish(true)//finish quiz
    }

    return (
        <div>
            {!finish ?
            <h2>Question {currentQuestion}/{questions.length} </h2>
            :
            <h2>Quiz completed</h2>
            }
            <hr />
            {!finish ?
            <h3 className="question-title">{questions[currentQuestion-1].title}</h3>
            :
            <>
                <h3>YOUR SCORE IS:</h3>
                <h1>{score}/<span style={{fontSize: '22px'}}>100</span></h1>
                <div className="btn" onClick={() => window.location.reload()}>Retake</div>
                <hr />
                {!showAnswears ? 
                    <span className="show-btn" onClick={() => setShowAnswears(true)}>show my answears</span>
                :
                    <div>
                        <span className="show-btn" onClick={() => setShowAnswears(false)}>hide my answears</span>
                        {answears.map((ans, i) => (
                            <div key={i} className="show-answears" style={{color: ans.isCorrect ? 'green' : 'red'}}>
                                {i+1}. {ans.text}
                            </div>
                        ))}
                    </div>
                }
            </>
            }
            {!finish && opt(currentQuestion-1).map(
                (option, i) => (
                    <div className="question" key={i} onClick={() => selectAnswer(option.isCorrect, option.text)}>
                        {option.text}
                    </div>
                )
            )}
        </div>
    )
}

export default Questions
