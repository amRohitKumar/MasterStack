import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Appetizer from './appetizer.page';
import Dessert from './dessert.page';
import Maincourse from './maincourse.page';
import Menu from './menu.page';
import Salad from './salad.page';
import { Timer } from './timer.page';
import { toast } from 'react-toastify';
import CurrentItems from './currentItems.page';
import Balance from './balance.page';
import Points from './points.page';
import { Container } from "@mui/system";
import { useMediaQuery } from '@mui/material';


const Items = () => {
  const navigate = useNavigate();
  //const amount = useSelector(store => store.user.user.points);
  //console.log(1);
  const [option, setOption] = useState(0);
  const handleOption = (val) => {
    setOption(val);
  };
  const status = useSelector((store) => store.user.user.status);
  var match = useMediaQuery('(min-width:800px)');

  useEffect(() => {
    

    if (status === 0) {
      navigate('/dashboard');
      toast.error('You cannot start now');
    } else if (status === 2) {
      navigate('/dashboard');
      toast.error('You have already purchased once');
    }
  }, []);
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ maxWidth: '90%', marginBottom: '3rem' }}
      >
        <Grid
          style={
            match
              ? {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: '0.75rem',
                }
              : {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'space-between',
                  flexDirection: 'column',
                  marginBottom: '0.75rem',
                }
          }
        >
          <Balance />
          <Timer />
          <Points />
        </Grid>
        <Box sx={{ flexGrow: 1, marginBottom: '1.5rem' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={7}>
              {option === 0 && <Menu handleOption={handleOption} />}
              {option === 1 && <Appetizer handleOption={handleOption} />}
              {option === 2 && <Salad handleOption={handleOption} />}
              {option === 3 && <Maincourse handleOption={handleOption} />}
              {option === 4 && <Dessert handleOption={handleOption} />}
            </Grid>
            <Grid item xs={12} md={5}>
              <CurrentItems />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Items;
