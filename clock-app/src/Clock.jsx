import React, {useState, useEffect} from "react";
import { useCallback } from "react";

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);


        return () => {  
            clearInterval(intervalId)
        }
    }, []);
    
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconeds = time.getSeconds();

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconeds)}`
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(<>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    </>);
}
export default Clock