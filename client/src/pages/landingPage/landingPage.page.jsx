import { useRef } from 'react';
import Box from '@mui/material/Box'
import Header from "./components/Header";
import CountDown from "./components/countdown";
import Rules from "./components/rules";
import About from "./components/about";
import MyTimeLine from "./components/timeline";
import Prizes from "./components/prizes";

const LandingPage = () => {
  const about = useRef(null);
  const rules = useRef(null);
  const timeline = useRef(null);
  const prizes = useRef(null);
  return (
    <Box sx={{overflow: 'hidden'}}>
      <Header about={about} rules={rules} timeline={timeline} prizes={prizes} />
      <CountDown />
      <About ref={about} />
      <Rules ref={rules} />
      <MyTimeLine ref={timeline} />
      <Prizes ref={prizes} />
    </Box>
  );
};

export default LandingPage;
