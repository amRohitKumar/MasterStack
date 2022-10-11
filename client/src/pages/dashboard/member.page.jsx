import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const Member = ({ member }) => {
  return (
    <TableContainer component={Paper}>
      <Table style={{ width: '100%' }} stickyHeader aria-label="sticky table">
        <TableBody>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ fontSize: '1rem' }}>
              <b>Name</b>
            </TableCell>
            <TableCell align="left">{member.name}</TableCell>
          </StyledTableRow>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ fontSize: '1rem' }}>
              <b>E-mail</b>
            </TableCell>
            <TableCell align="left">{member.email}</TableCell>
          </StyledTableRow>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ fontSize: '1rem' }}>
              <b>Mobile</b>
            </TableCell>
            <TableCell align="left">{member.number}</TableCell>
          </StyledTableRow>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ fontSize: '1rem' }}>
              <b>Year</b>
            </TableCell>
            <TableCell align="left">{member.year}</TableCell>
          </StyledTableRow>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" style={{ fontSize: '1rem' }}>
              <b>Branch</b>
            </TableCell>
            <TableCell align="left">{member.branch}</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Member;
