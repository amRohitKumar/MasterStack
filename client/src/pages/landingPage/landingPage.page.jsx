import { useRef } from 'react';
import Header from './components/Header';
import CountDown from './components/countdown';
import Rules from './components/rules';
import About from './components/about';
import MyTimeLine from './components/timeline';
import Box from '@mui/material/Box'

const LandingPage = () => {
  const about = useRef(null);
  const rules = useRef(null);
  const timeline = useRef(null);

  return (
    <Box sx={{overflow: 'hidden'}}>
      <Header about={about} rules={rules} timeline={timeline} />
      <CountDown />
      <About ref={about} />
      <Rules ref={rules} />
      <MyTimeLine ref={timeline} />
    </Box>
  );
};

export default LandingPage;
