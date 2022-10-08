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
                        <span>{`${Math.floor((time/MINUTE)%60)}`.padStart(2, "0")}
                        {" Mins : "}</span>
                        <span>{`${Math.floor((time/SECOND)%60)}`.padStart(2, "0")}
                        {" Sec"}</span>

                   
        </div>
    );
};