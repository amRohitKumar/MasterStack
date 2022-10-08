import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = () => {
    
    const parsedDeadline= Date.parse(useSelector(store => store.user.user.endsAt));
    //console.log(1);
    const [time, setTime] = useState(parsedDeadline - Date.now());
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );
        
        if(time<=0){
             navigate("/dashboard");
             toast.success("Time is Up!");
        }
        return () => clearInterval(interval);
    }, [parsedDeadline,time]);

    return (
        <div className="timer">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <div key={label} className="col-4">
                    <div className="box">
                        <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                        <span className="text">{label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};