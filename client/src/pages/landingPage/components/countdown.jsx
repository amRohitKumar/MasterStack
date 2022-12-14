import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import backgroundImage from '../../../assets/background.jpg';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '35rem',
  // maxHeight: "24rem",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  position: 'relative',
  isolation: 'isolate',
  '&::after': {
    content: '""',
    position: 'absolute',
    background: 'black',
    zIndex: '-1',
    inset: '0',
    opacity: '0.5',
  },
}));

const CountDown = () => {
  const match = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const loggedIn = useSelector((store) => store.user.loggedIn);
  return (
    <StyledBox>
      <Typography
        variant="h6"
        sx={{
          fontSize: match ? '3rem' : '1.75rem',
          color: '#fff',
          fontWeight: '700',
          marginY: '1.5rem',
          m: 2,
          // textShadow: '0 0 20px white'
        }}
      >
        All future updates will be posted on our Telegram Group.
      </Typography>
      <Typography
        variant="caption"
        display="block"
        sx={{
          fontSize: match ? '2em' : '1.25rem',
          color: '#fff',
          fontWeight: '700',
          marginY: '1.5rem',
          m: 2,
        }}
      >
        (LINK IN DASHBOARD)
      </Typography>
      
      {/* <FlipClockCountdown
        to={
          Date.now() < new Date('2022-10-16T19:00:00')
            ? Date.parse('2022-10-16T19:00:00')
            : Date.now() > new Date('2022-10-16T21:00:00')
            ? Date.parse('2022-10-17T23:59:59')
            : Date.parse('2022-10-14T19:00:00')
        }
        labelStyle={{
          fontSize: 15,
          fontWeight: 750,
          textTransform: 'uppercase',
          color: '#FFF',
        }}
        digitBlockStyle={
          !match
            ? {
                fontSize: '3rem',
                height: '4rem',
                width: '2rem',
                color: '#FFF',
              }
            : ''
        }
      /> */}
      <Box
        sx={{
          padding: '1rem',
          marginTop: '1rem',
        }}
      >
        {!loggedIn ? (
          <>
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: '#000',
                marginRight: '0.5rem',
                fontSize: '1rem',
                padding: '0.7rem 1.5rem',
                '&:hover': {
                  backgroundColor: '#FE7163',
                },
              }}
              onClick={() => navigate('register')}
            >
              Register
            </Button> */}
            <Button
              sx={{
                backgroundColor: '#8D9EF4',
                fontSize: '1rem',
                padding: '0.7rem 1.5rem',
                '&:hover': {
                  backgroundColor: '#FE7163',
                },
              }}
              variant="contained"
              onClick={() => navigate('login')}
            >
              Login
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FE7163',
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              '&:hover': {
                backgroundColor: '#ef2c19',
              },
            }}
            onClick={() => navigate('dashboard')}
          >
            Dashboard
          </Button>
        )}
      </Box>
    </StyledBox>
  );
};

export default CountDown;
