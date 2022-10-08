import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGame, submitItems } from "../../features/user/userSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.user);
  console.log(user);

  const handleStart = (e) => {
    e.preventDefault();
    dispatch(startGame()).then(() => {
      navigate("/items");
    });
  };

  const handleResume = (e) => {
    e.preventDefault();
    navigate("/items");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItems(user));
  }

  return (
    <>
      {user != null && (
        <>
          <div>DASHBOARD PAGE TO BUY STACKS</div>

          {user.status === 0 ? (
            <button onClick={handleStart}>start</button>
          ) : (
            <>
              {user.status === 1 ? (
                <>
                  {Date.now() > Date.parse(user.endsAt) ? (
                    <>
                    <p>Your purchase time is over. Kindly Submit</p>
                    <button onClick={handleSubmit}>Submit</button>
                    </>
                  ) : (
                    <button onClick={handleResume}>resume</button>
                  )}
                </>
              ) : (
                <p>You have purchased the items</p>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
