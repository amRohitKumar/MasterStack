import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitItems } from '../../features/user/userSlice';
import { Button, Chip, useMediaQuery, Divider } from '@mui/material';
import { Container } from '@mui/system';
import DashboardItems from './table.page';
import TwoButtons from './twoButtons.page';
import LabTabs from './labtabs.page';
import HeadTypography from '../landingPage/components/headTypography';
import MyModal from './modal.page';
import { useState } from 'react';

const Dashboard = () => {
  var match = useMediaQuery('(min-width:600px)');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.user);
  //console.log(user);

  const handleResume = (e) => {
    e.preventDefault();
    navigate('/items');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItems());
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: '90%' }}>
        {user != null && (
          <>
            <div>
              <HeadTypography
                size={match}
                styles={{
                  color: '#5457fa',
                  fontSize: match ? '3.5rem' : '2.5rem',
                }}
              >
                DASHBOARD
              </HeadTypography>
              <Divider variant="middle" />
            </div>

            <h3>
              <a
                href="https://t.me/MasterStack"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>{' '}
              to join the telegram group for updates/queries.
            </h3>

            <MyModal isModalOpen={isModalOpen} handleClose={handleModalClose} />

            {user.status === 0 ? (
              <>
                <h3>Let's begin by purchasing some ingredients!</h3>
                <Button variant="contained" onClick={handleModalOpen}>
                  Start
                </Button>
              </>
            ) : (
              <>
                {user.status === 1 ? (
                  <>
                    {Date.now() > Date.parse(user.endsAt) ? (
                      <>
                        <h3>Your purchase time is over. Kindly Submit</h3>
                        <Button variant="contained" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </>
                    ) : (
                      <>
                        <h3>Uh oh! You left in the middle. Kindly Resume</h3>
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
                    <h3>You have purchased the ingredients</h3>
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
            <div style={{ marginTop: '2rem' }}>
              <HeadTypography
                size={match}
                styles={{
                  color: '#5457fa',
                  fontSize: match ? '3.5rem' : '2.5rem',
                }}
              >
                TEAM DETAILS
              </HeadTypography>
              <Divider variant="middle" style={{ marginBottom: '1.5rem' }} />
              <TwoButtons first="Team Name" second={user.name} />
              <TwoButtons first="Team Leader" second={user.members[0].name} />
              <TwoButtons first="College" second={user.clgName} />
              <LabTabs members={user.members} />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
