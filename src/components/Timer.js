import { useState, useEffect } from 'react'

const Timer = ({time, timePer, timeUp}) => {

    const [counter, setCounter] = useState(time * timePer);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    const formatTime = sec => {
        if(sec > 59){
            const minutes = Math.floor(sec/60);
            const seconds = sec - minutes * 60;
            return (seconds > 9) ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`;
        }
        else if (sec > 0 && sec < 59){
            return (sec > 9) ? `0:${sec}` : `0:0${sec}`;
        }
        else {
            timeUp();
            return '0:00'
        }
    }

    return (
        <div>
            <h1><span style={{fontSize:'22px'}}>Time left:</span> {formatTime(counter)}</h1>
        </div>
    )
}

export default Timer
