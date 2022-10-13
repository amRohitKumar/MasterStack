import { Box, useMediaQuery, Divider } from '@mui/material';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EventIcon from '@mui/icons-material/Event';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import HeadTypography from './headTypography';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ScrollAnimation from 'react-animate-on-scroll';

const MyTimeLine = React.forwardRef((props, ref) => {
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
                paddingBottom: '0rem',
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
            TIMELINE
          </ScrollAnimation>
        </HeadTypography>
        <Divider variant="middle" />
        <Timeline
          position="alternate"
          sx={{ marginY: '2rem', padding: '0rem' }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body1"
              color="text.secondary"
            >
              14 October 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <HowToRegIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Registration Begins!
              </Typography>
              {/* <Typography>Register now</Typography> */}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body1"
              color="text.secondary"
            >
              16 October 2022
              <Typography>7:00 PM</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <EventIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Pre Event
              </Typography>
              <Typography>Buying of tech stacks</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body1"
              color="text.secondary"
            >
              Till 17 October 2022
              <Typography>11:59 PM</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <ArticleIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Proposal Submission
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body1"
              color="text.secondary"
            >
              Till 20 October 2022
              <Typography>11:59 PM</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Prototype Submission
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body1"
              color="text.secondary"
            >
              21 October 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <GroupIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '18px', px: 2 }}>
              <Typography variant="h5" component="span">
                Offline Interview
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <CelebrationIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h5" component="span">
                Results
              </Typography>
              <Typography>To be declared after interviews</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
});

export default MyTimeLine;
