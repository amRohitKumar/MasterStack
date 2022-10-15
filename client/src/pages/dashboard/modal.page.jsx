import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, Divider } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startGame } from '../../features/user/userSlice';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  px: 5,
  height: 500,
  overflow: 'auto',
  textAlign: 'justify',
};

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'list-item',
  fontSize: '1.22rem',
  fontWeight: '100',
  textAlign: 'justify',
}));

export default function MyModal({ isModalOpen, handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click,handleClick] = useState(false);
  const handleStart = (e) => {
    e.preventDefault();
    handleClick(true);
    dispatch(startGame()).then(() => {
      navigate('/items');
    });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h3"
              component="h2"
              style={{ textAlign: 'center' }}
            >
              Instructions
            </Typography>
            <Divider variant="middle" />

            <List sx={{ listStyleType: 'disc' }}>
              <StyledListItem>
                A total of 5 minutes will be given for purchasing the tech
                stacks starting from the moment you enter the buy arena.
              </StyledListItem>
              <StyledListItem>
                A timer is present inside for convenience.
              </StyledListItem>
              <StyledListItem>
                The timer will not pause/stop on exiting the web app or by going
                back.
              </StyledListItem>
              <StyledListItem>
                If by mistake the purchase section is exited without submitting,
                one can resume purchasing until the 5 minute deadline is over.
              </StyledListItem>
              <StyledListItem>
                There are 4 categories to choose from -
                <b> Appetizer, Salad, Main Course, Dessert.</b>
              </StyledListItem>
              <StyledListItem>
                The tech stacks present belong to the fields of Machine
                Learning, Web Development and App Development.
              </StyledListItem>
              <StyledListItem>
                There is a certain cost and points associated with each stack.
              </StyledListItem>
              <StyledListItem>
                A total amount of 100000 will be given for the purchase.
              </StyledListItem>
              <StyledListItem>
                The tech stacks will not be counted until the submit button is
                pressed. After the 5 minute slot, one will be redirected to the
                dashboard where the submit button needs to be pressed or else
                the stacks won't be recorded.
              </StyledListItem>
              <StyledListItem>
                <b>
                  Any number of members can open the purchase arena at the same
                  time but the actions performed by one will not be reflected in
                  the other. The final submission of the selected tech stacks
                  should be done only by one of the members.
                </b>
              </StyledListItem>
              <StyledListItem>
                The Start Purchase Button will be active from 7:00 PM to 9:00
                PM on 16th October only. Make sure to purchase in the given time
                slot.
              </StyledListItem>
              <StyledListItem>
                The proposal and prototype should be based on the tech stacks
                purchased so remember to choose them wisely.
              </StyledListItem>
              <StyledListItem>
                It is recommended to use the desktop mode as some features may
                not be consistent with the mobile view.
              </StyledListItem>
            </List>
            <div style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                onClick={handleStart}
                style={{ fontSize: '1rem', padding: '0.7rem 1.5rem' }}
                disabled={
                  Date.now() < Date.parse('2022-10-16T19:00:00') ||
                  Date.now() > Date.parse('2022-10-16T21:00:00') ||
                  click
                }
              >
                Start Purchase
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
