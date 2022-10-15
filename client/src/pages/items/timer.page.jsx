
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
//const DAY = HOUR * 24;

export const Timer = () => {
  const parsedDeadline = Date.parse(
    useSelector((store) => store.user.user.endsAt)
  );
  const [time, setTime] = useState(parsedDeadline - Date.now());
  const navigate = useNavigate();
  useEffect(() => {
  
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

  return (
    <div className="timer" style={{fontSize:"2.5rem", fontFamily:'consolas', backgroundColor: 'black', color: 'white', padding: '0.25rem 1.2rem', borderRadius: '1rem'}}>
      <b>
      <span>
        {`${Math.floor((time / MINUTE) % 60)}`.padStart(2, "0")}
        {":"}
      </span>
      <span>
        {`${Math.floor((time / SECOND) % 60)}`.padStart(2, "0")}
      </span>
      </b>
      

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
