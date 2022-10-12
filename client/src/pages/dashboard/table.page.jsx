import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
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
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const DashboardItems = ({ list }) => {
  return (
    <>
      {list.length === 0 ? (
        <Chip
          label="No Ingredients"
          color="warning"
          style={{ fontSize: '20px' }}
        />
      ) : (
        <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableHeadRow>
                <StyledTableCell style={{ fontSize: '1.2rem' }}>
                  <b>Ingredient</b>
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: '1.2rem' }}>
                  <b>Cost</b>
                </StyledTableCell>
                <StyledTableCell align="right" style={{ fontSize: '1.2rem' }}>
                  <b>Points</b>
                </StyledTableCell>
              </StyledTableHeadRow>
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
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default DashboardItems;
