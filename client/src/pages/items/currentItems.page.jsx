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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
  return (
    <TableContainer component={Paper}>
      <Table style={{ width: '100%' }} stickyHeader aria-label="sticky table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell
              align="left"
              colSpan={2}
              style={{ fontSize: '1.5rem' }}
            >
              Cart Items
            </StyledTableCell>
            <StyledTableCell
              align="right"
              colSpan={2}
              style={{ fontSize: '1.5rem' }}
            >
              <Button variant="contained" onClick={() => {}}>
                Submit
              </Button>
            </StyledTableCell>
          </StyledTableRow>
          {/* <StyledTableRow>
            <StyledTableCell
              align="center"
              colSpan={2}
              style={{ fontSize: '1.5rem' }}
            >
              Balance: {user.amount}
            </StyledTableCell>
            <StyledTableCell
              align="center"
              colSpan={2}
              style={{ fontSize: '1.5rem' }}
            >
              Points: {user.points}
            </StyledTableCell>
          </StyledTableRow> */}
          <StyledTableRow>
            <StyledTableCell>Ingredient</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {user.items.map((item) => (
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
