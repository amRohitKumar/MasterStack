import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/user/userSlice';

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
          <TableRow>
            <TableCell align="left" colSpan={2} style={{ fontSize: '1.5rem' }}>
              {name}
            </TableCell>
            <TableCell align="right" colSpan={2} style={{ fontSize: '1.5rem' }}>
              <Button variant="contained" onClick={() => click(0)}>
                Back
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleAdd(row)}
                  disabled={
                    items.filter((item) => item.id === row.id).length > 0
                  }
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListOfItems;
