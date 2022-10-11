import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGame, submitItems } from "../../features/user/userSlice";
import { Button, Chip } from "@mui/material";
import { Container } from "@mui/system";
import DashboardItems from "./table.page";
import TwoButtons from "./twoButtons.page";
import LabTabs from "./labtabs.page";




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
    dispatch(submitItems());
  }

  return (
    <>
    <Container maxWidth={false} sx={{maxWidth:"90%"}}>
      {user != null && (
        <>
        <div>
        <Chip label="Dashboard" color="primary" sx={{marginBottom: '5px', fontSize:"20px"}}/>
        <hr></hr>
        </div>
          

          {user.status === 0 ? (
            <>
             <p>Let's begin by purchasing some ingredients!</p>
            <Button variant="contained" onClick={handleStart}>Start</Button>
            </>
          
          ) : (
            <>
              {user.status === 1 ? (
                <>
                  {Date.now() > Date.parse(user.endsAt) ? (
                    <>
                    <p>Your purchase time is over. Kindly Submit</p>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </>
                  ) : (
                    <>
                    <p>Uh oh! You left in the middle. Kindly Resume</p>
                    <Button  variant="contained" onClick={handleResume}>Resume</Button>
                    </>
                   
                  )}
                  <div>
                  <Chip label="Ingredients in Cart" color="primary" sx={{margin: '15px 0px', fontSize:"20px"}}/>
                  </div>
                  
                </>
              ) : (
                <>
                 <p>You have purchased the ingredients</p>
                 <div>
                 <Chip label="Purchased Ingredients" color="primary" sx={{margin: '15px 0px', fontSize:"20px"}}/>
                 </div>
               
                </>
              
              )}
              <DashboardItems list={user.items} />
            </>
          )}
          <div>
            

          <Chip label="Team Details" color="primary" sx={{margin: '15px 0px', fontSize:"20px"}}/>
          <TwoButtons first="Team Name" second={user.name}/>
          <TwoButtons first="College" second={user.clgName}/>
          <LabTabs members={user.members}/>
          </div>
         
        </>
      )}
      </Container>
    </>
  );
};

export default Dashboard;
