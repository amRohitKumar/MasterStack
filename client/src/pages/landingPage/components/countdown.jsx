import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import backgroundImage from '../../../assets/background.jpg';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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
  return (
    <StyledBox>
      <Typography
        variant="h6"
        sx={{
          fontSize: '2rem',
          color: 'white',
          fontWeight: '700',
          marginY: '1.5rem',
        }}
      >
        Pre-Event begins in
      </Typography>
      <FlipClockCountdown
        to={Date.parse('2022-10-16T00:00:00')}
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
      />
      <Box
        sx={{
          padding: '1rem',
          marginTop: '1rem',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            marginRight: '0.5rem',
            '&:hover': {
              backgroundColor: '#FE7163',
            },
          }}
          onClick={() => navigate('register')}
        >
          Register
        </Button>
        <Button
          sx={{
            backgroundColor: '#8D9EF4',
            '&:hover': {
              backgroundColor: '#FE7163',
            },
          }}
          variant="contained"
          onClick={() => navigate('login')}
        >
          Login
        </Button>
      </Box>
    </StyledBox>
  );
};

export default CountDown;
