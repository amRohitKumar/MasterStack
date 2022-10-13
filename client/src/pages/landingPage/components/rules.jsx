import React from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Grid,
  List,
  ListItem,
  useMediaQuery,
  Divider,
} from '@mui/material';
import { Container } from '@mui/system';
import ScrollAnimation from 'react-animate-on-scroll';
import rules from '../../../assets/rules.png';
import HeadTypography from './headTypography';
import workflow from '../../../assets/workflow.jpeg';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'list-item',
  fontSize: '1.22rem',
  fontWeight: '100',
  textAlign: 'justify',
}));

const Rules = React.forwardRef((props, ref) => {
  var match = useMediaQuery('(min-width:600px)');
  return (
    <Container
      ref={ref}
      sx={
        match
          ? {
              paddingX: '4rem',
            }
          : {
              // padding: '3rem',
              paddingX: '1rem',
            }
      }
    >
      <HeadTypography
        size={match}
        styles={{ color: '#5457fa', fontSize: '3.5rem' }}
      >
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
          RULES
        </ScrollAnimation>
      </HeadTypography>
      <Divider variant="middle" />
      <Grid container spacing={2} sx={{ margin: '2rem', textAlign: 'justify' }}>
        <Grid item md={6} xs={12}>
          <ScrollAnimation animateIn="bounceInLeft">
            <List sx={{ listStyleType: 'disc', pr: 4, mr: 3 }}>
              <StyledListItem>
                To be eligible for prizes, make sure you use the correct email
                address of the team leader and carry proper identification.
              </StyledListItem>
              <StyledListItem>
                In case of any query/issues, write it on the telegram group.
              </StyledListItem>
              <StyledListItem>
                Blatantly copying any existing repository/project for prototype
                submission will lead to disqualification.
              </StyledListItem>
              <StyledListItem>
                Violation of any rule(s) may lead to disqualification.
              </StyledListItem>
            </List>
          </ScrollAnimation>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <ScrollAnimation animateIn="bounceInRight">
            <Box
              component="img"
              sx={{ width: '100%' }}
              alt="Rules"
              src={rules}
            />
          </ScrollAnimation>
        </Grid>
      </Grid>
      <HeadTypography
        size={match}
        styles={{ color: '#5457fa', fontSize: '3.5rem' }}
      >
        <ScrollAnimation animateIn="fadeIn" duration={0.5}>
          WORKFLOW
        </ScrollAnimation>
      </HeadTypography>
      <Divider variant="middle" />
      <Grid container spacing={2} sx={{ margin: '2rem' }}>
        <Grid
          item
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Grid container justifyContent={'center'} alignItems={'center'}>
            <ScrollAnimation animateIn="bounceInLeft">
              <img
                src={workflow}
                width="100%"
                alt="Workflow"
                maxHeight="37rem"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <ScrollAnimation animateIn="bounceInRight">
            <List sx={{ listStyleType: 'disc', pr: 4, mr: 3 }}>
              <StyledListItem>
                All registrations need to be done on the website itself.
              </StyledListItem>
              <StyledListItem>
                Teams with a size of exactly 3 are to be formed.
              </StyledListItem>
              <StyledListItem>
                No person should belong to multiple teams.
              </StyledListItem>
              <StyledListItem>
                <b>
                  While registering, a team name and password needs to be set
                  which will be used for login and participating in further
                  rounds.
                </b>
              </StyledListItem>
              <StyledListItem>
                You will be allowed 5 minutes and a limited virtual amount to
                buy ingredients (tech stacks) to build your application.
              </StyledListItem>
              <StyledListItem>
                You will be served starters, main course, and dessert each
                containing some tech stacks.
              </StyledListItem>
              <StyledListItem>
                Each tech stack has some associated points. The total points of
                the bought item will add to your final scores. So choose wisely.
              </StyledListItem>
              <StyledListItem>
                Failing to use any bought ingredient ( tech stack ) will reduce
                your points associated with that ingredient. So make sure you
                use all the bought ingredients.
              </StyledListItem>
              <StyledListItem>
                You are supposed to use only the bought ingredients ( tech
                stacks ) to prepare your dish ( the final application ). Using
                any item not bought by you will bring down your score/lead to
                disqualification.
              </StyledListItem>
              <StyledListItem>
                Each team has to make a private GitHub repository for uploading
                their code with all the commit history.
              </StyledListItem>
              <StyledListItem>
                The mode of submission of the proposal, prototype, and GitHub
                link will be communicated later.
              </StyledListItem>
            </List>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </Container>
  );
});
export default Rules;
