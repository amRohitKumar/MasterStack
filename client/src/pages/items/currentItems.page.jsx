import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/user/userSlice';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { submitItems } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CurrentItems = () => {
  const items = useSelector((store) => store.user.user.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click,handleClick] = useState(false);
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(true);
    dispatch(submitItems()).then(() => {
      navigate('/dashboard');
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table style={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell
              align="left"
              colSpan={2}
              style={{ fontSize: '1.5rem' }}
            >
              <b>Cart Items</b>
            </StyledTableCell>
            <StyledTableCell
              align="right"
              colSpan={2}
              style={{ fontSize: '1.5rem' }}
            >
              <Button variant="contained" disabled={click} onClick={(e) => handleSubmit(e)}>
                Submit
              </Button>
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell style={{fontSize:'1.2rem'}}><b>Ingredient</b></StyledTableCell>
            <StyledTableCell style={{fontSize:'1.2rem'}} align="right"><b>Cost</b></StyledTableCell>
            <StyledTableCell style={{fontSize:'1.2rem'}} align="right"><b>Points</b></StyledTableCell>
            <StyledTableCell style={{fontSize:'1.2rem'}} align="right"><b>Action</b></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <StyledTableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.cost}</StyledTableCell>
              <StyledTableCell align="right">{item.points}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => handleRemove(item)}>Remove</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrentItems;
