import { Typography, useMediaQuery, Divider } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
      <Container sx={{ padding: match ? '4rem' : '3rem' }}>
        <HeadTypography
          size={match}
          styles={{ color: '#5457fa', fontSize: '3.5rem' }}
        >
          <ScrollAnimation animateIn="fadeIn" duration={0.5}>
            ABOUT
          </ScrollAnimation>
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
          MasterStack is an event, similar to <b>MasterChef</b> ( the
          competitive cooking show ) where teams of size 3 will compete against
          each other to get the best tech stacks ( belonging to fields like
          Machine Learning, Web Development and App Development ) within a
          limited amount of virtual currency and a limited time, each stack
          containing a specified set of points. After the purchase, an idea
          needs to be proposed using only those tech stacks. Good proposals
          qualify for the next round where teams will be required to come up
          with a prototype of what they intend to build. The final stage
          consists of an offline presentation where the teams will be
          interviewed on the built prototype.
        </Typography>
      </Container>
    </Box>
  );
});

export default About;
