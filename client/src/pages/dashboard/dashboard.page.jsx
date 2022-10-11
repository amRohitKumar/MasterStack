import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startGame, submitItems } from '../../features/user/userSlice';
import { Button, Chip, useMediaQuery, Divider } from '@mui/material';
import { Container } from '@mui/system';
import DashboardItems from './table.page';
import TwoButtons from './twoButtons.page';
import LabTabs from './labtabs.page';
import HeadTypography from '../landingPage/components/headTypography';

const Dashboard = () => {
  var match = useMediaQuery('(min-width:600px)');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.user);
  console.log(user);

  const handleStart = (e) => {
    e.preventDefault();
    dispatch(startGame()).then(() => {
      navigate('/items');
    });
  };

  const handleResume = (e) => {
    e.preventDefault();
    navigate('/items');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItems());
  };

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: '90%' }}>
        {user != null && (
          <>
            <div>
              <HeadTypography
                size={match}
                styles={{ color: '#5457fa', fontSize: '3.5rem' }}
              >
                DASHBOARD
              </HeadTypography>
              <Divider variant="middle" />
            </div>

            {user.status === 0 ? (
              <>
                <p>Let's begin by purchasing some ingredients!</p>
                <Button variant="contained" onClick={handleStart}>
                  Start
                </Button>
              </>
            ) : (
              <>
                {user.status === 1 ? (
                  <>
                    {Date.now() > Date.parse(user.endsAt) ? (
                      <>
                        <p>Your purchase time is over. Kindly Submit</p>
                        <Button variant="contained" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </>
                    ) : (
                      <>
                        <p>Uh oh! You left in the middle. Kindly Resume</p>
                        <Button variant="contained" onClick={handleResume}>
                          Resume
                        </Button>
                      </>
                    )}
                    <div>
                      <Chip
                        label="Ingredients in Cart"
                        color="primary"
                        sx={{ margin: '15px 0px', fontSize: '20px' }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <p>You have purchased the ingredients</p>
                    <div>
                      <Chip
                        label="Purchased Ingredients"
                        color="primary"
                        sx={{ margin: '15px 0px', fontSize: '20px' }}
                      />
                    </div>
                  </>
                )}
                <DashboardItems list={user.items} />
              </>
            )}
            <div style={{marginTop: '2rem'}}>
              <HeadTypography
                size={match}
                styles={{ color: '#5457fa', fontSize: '3.5rem' }}
              >
                TEAM DETAILS
              </HeadTypography>
              <Divider variant="middle" />
              <div style={{ margin: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>
                  <b> Team Name: </b>
                  {user.name}
                </div>
                <div style={{ fontSize: '2rem' }}>
                  <b> College: </b>
                  {user.clgName}
                </div>
              </div>
              <LabTabs members={user.members} />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
