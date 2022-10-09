import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { submitItems } from "../../features/user/userSlice";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = () => {
  const parsedDeadline = Date.parse(
    useSelector((store) => store.user.user.endsAt)
  );
  
  const [time, setTime] = useState(parsedDeadline - Date.now());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    if (time <= 0) {
      navigate("/dashboard");
      toast.success("Time is Up!");
    }
    return () => clearInterval(interval);
  }, [parsedDeadline, time]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItems()).then(() => {
        navigate("/dashboard");
    })
  }
  return (
    <div className='timer'>
      <span>
        {`${Math.floor((time / MINUTE) % 60)}`.padStart(2, "0")}
        {" Mins : "}
      </span>
      <span>
        {`${Math.floor((time / SECOND) % 60)}`.padStart(2, "0")}
        {" Sec"}
      </span>

      <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
    </div>
  );
};
