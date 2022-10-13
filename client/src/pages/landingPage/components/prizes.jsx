import { Box, useMediaQuery, Divider, Grid, styled } from '@mui/material';
import * as React from 'react';
import HeadTypography from './headTypography';
import ScrollAnimation from 'react-animate-on-scroll';
import Prize from './prize';
import Firstposition from '../../../assets/prizes/firstposition.png';
import Secondposition from '../../../assets/prizes/secondposition.png';
import Thirdpostion from '../../../assets/prizes/thirdposition.png';

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1rem',
  marginTop: '1rem',
}));

const Prizes = React.forwardRef((props, ref) => {
  const match = useMediaQuery('(min-width:600px)');
  return (
    <Box
      ref={ref}
      sx={{
        // backgroundColor: "#ECEDE9",
        width: '100%',
        height: 'auto',
      }}
    >
      <Box
        sx={
          match
            ? {
                padding: '4rem',
              }
            : {
                paddingTop: '2rem',
                paddingBottom: '2rem',
              }
        }
      >
        <HeadTypography
          size={match}
          styles={{ color: '#5457fa', fontSize: '3.5rem' }}
        >
          <ScrollAnimation animateIn="fadeIn" duration={0.5}>
            PRIZES
          </ScrollAnimation>
        </HeadTypography>
        <Divider variant="middle" />
        <Grid container spacing={0} sx={{ marginTop: '2rem', width: '100%' }}>
          <StyledGrid sm={4} xs={12} sx={{ my: 2 }}>
            <Prize
              position={'1st Place'}
              image={Firstposition}
              amount={'12000'}
            />
          </StyledGrid>
          <StyledGrid sm={4} xs={12} sx={{ my: 2 }}>
            <Prize
              position={'2nd Place'}
              image={Secondposition}
              amount={'8000'}
            />
          </StyledGrid>
          <StyledGrid sm={4} xs={12} sx={{ my: 2 }}>
            <Prize
              position={'3rd Place'}
              image={Thirdpostion}
              amount={'5000'}
            />
          </StyledGrid>
        </Grid>
      </Box>
    </Box>
  );
});

export default Prizes;
