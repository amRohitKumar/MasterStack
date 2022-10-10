import { Typography, useMediaQuery, Divider } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import HeadTypography from './headTypography';
const About = React.forwardRef((props, ref) => {
  const match = useMediaQuery('(min-width:600px)');
  return (
    <Box
      ref={ref}
      sx={{
        // backgroundColor: '#F8FBFB',
        width: '100%',
        height: 'auto',
      }}
    >
      <Container
        sx={
          match
            ? {
                padding: '4rem',
              }
            : {
                padding: '3rem',
              }
        }
      >
        <HeadTypography
          size={match}
          styles={{ color: '#5457fa', fontSize: '3.5rem' }}
        >
          ABOUT
        </HeadTypography>
        <Divider variant="middle" />
        <Typography
          sx={
            match
              ? {
                  fontWeight: '50',
                  fontSize: '1.22rem',
                  margin: '2rem',
                  textAlign: 'justify',
                }
              : { margin: '2rem', textAlign: 'justify' }
          }
        >
          MasterStack is an event where teams of size 3 will be formed and
          compete against each other to get the best tech stacks within a
          limited amount of virtual currency and a limited time of 5 minutes.
          Teams will require themselves to register on the website created for
          this specific event with their details and then they will be allowed
          to purchase a set of tech stacks using which they have to develop a
          proposal of what they are going to build using only those tech stacks.
          Good proposals qualify for the next round where teams will be required
          to come up with a prototype of what they intend to build.
        </Typography>
      </Container>
    </Box>
  );
});

export default About;
