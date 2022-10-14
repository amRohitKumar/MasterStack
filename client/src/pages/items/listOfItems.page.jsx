import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/user/userSlice';
import { styled } from '@mui/material/styles';

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
const ListOfItems = ({ list, name, click }) => {
  const dispatch = useDispatch();
  const handleAdd = (row) => {
    dispatch(addItem(row));
  };
  const items = useSelector((store) => store.user.user.items);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="left" colSpan={2} style={{ fontSize: '1.5rem' }}>
              <b>{name}</b>
            </StyledTableCell>
            <StyledTableCell align="right" colSpan={2} style={{ fontSize: '1.5rem' }}>
              <Button variant="contained" onClick={() => click(0)}>
                Back
              </Button>
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow >
            <StyledTableCell style={{fontSize:'1.2rem'}}><b>Ingredient</b></StyledTableCell>
            <StyledTableCell style={{fontSize:'1.2rem'}} align="right"><b>Cost</b></StyledTableCell>
            <StyledTableCell style={{fontSize:'1.2rem'}} align="right"><b>Points</b></StyledTableCell>
            <StyledTableCell style={{fontSize:'1.2rem'}} align="right"><b>Action</b></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cost}</StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => handleAdd(row)}
                  disabled={
                    items.filter((item) => item.id === row.id).length > 0
                  }
                >
                  Add
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListOfItems;
