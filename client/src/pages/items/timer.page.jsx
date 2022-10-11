import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { submitItems } from '../../features/user/userSlice';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = () => {
  const parsedDeadline = Date.parse(
    useSelector((store) => store.user.user.endsAt)
  );
  // const [counter, setCounter] = useState(25);
  // const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(parsedDeadline - Date.now());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // if (isActive) {
    //   const timer =
    //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    //   return () => clearInterval(timer);
    // } else if (!isActive && counter !== 0) {
    //   clearInterval(counter);
    // }
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    if (time <= 0) {
      navigate('/dashboard');
      toast.success('Time is Up!');
    }
    return () => clearInterval(interval);
  }, [parsedDeadline, time]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItems()).then(() => {
      navigate('/dashboard');
    });
  };
  // const renderTime = ({ remainingTime }) => {
  //   if ({ remainingTime } === 0) {
  //     return <div className="timer">Time's Up!...</div>;
  //   }

  //   return (
  //     <div className="timer">
  //       <div className="text">Time</div>
  //       <div className="value">{counter}</div>
  //       <div className="text">seconds</div>
  //     </div>
  //   );
  // };
  return (
    <div className="timer">
      {/* <span>
        {`${Math.floor((time / MINUTE) % 60)}`.padStart(2, "0")}
        {" Mins : "}
      </span>
      <span>
        {`${Math.floor((time / SECOND) % 60)}`.padStart(2, "0")}
        {" Sec"}
      </span> */}

      <FlipClockCountdown
        to={parsedDeadline}
        labelStyle={{
          fontSize: 15,
          fontWeight: 750,
          textTransform: 'uppercase',
          color: '#000000',
        }}
        digitBlockStyle={{
          fontSize: '2rem',
          height: '3rem',
          width: '2rem',
          color: '#FFF',
        }}
        separatorStyle={{ color: 'black', size: '4px' }}
      />

      {/* <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}
      >
        <CountdownCircleTimer
          // onComplete={() => {
          //   return [true]; // repeat animation in 1.5 seconds
          // }}
          isPlaying
          duration={counter}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div> */}

      {/* <Button onClick={(e) => handleSubmit(e)}>Submit</Button> */}
    </div>
  );
};
