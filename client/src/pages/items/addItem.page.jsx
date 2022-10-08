import React , {useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { addItem } from '../../features/item/itemSlice';
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
const AddItem = () => {
  const [name,setName]=useState("");
  const [cost,setCost]=useState(0);
  const [points,setPoints]=useState(0);
  const [parent,setParent]=useState(1);
  const dispatch=useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    const newStack={
      name:name,
      cost:cost,
      points:points,
      parent:parent
    }
    // addNewStack(newStack);
    dispatch(addItem(newStack));
    console.log(newStack);
    setName("");
    setCost(0);
    setPoints(0);
    setParent(1);
  };
  return (
    <>
      <Container component='main' maxWidth='lg' style={{margin:"5rem"}}>
      <CssBaseline />
    <div>AddItem</div>
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { mt: 1, mr: 1 },
      }}
      autoComplete='off'
      onSubmit={(e) => onSubmit(e)}
    >
      <div>

  
        <TextField
          required
          id='outlined-text'
          label='Name'
          type='string'
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          id='outlined-number'
          label='Points'
          type='number'
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          id='outlined-number'
          label='Cost'
          type='number'
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Parent</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={parent}
          label="parent"
          onChange={(e) => setParent(e.target.value)}
        >
            <MenuItem value={1}>Appetizer</MenuItem>
            <MenuItem value={2}>Salad</MenuItem>
            <MenuItem value={3}>Main Course</MenuItem>
            <MenuItem value={4}>Dessert</MenuItem>
        </Select>
      </FormControl>
        <Button
          type='submit'
          variant='contained'
          sx={{ height: "50px", mt: 1 }}
        >
          Add Stack
        </Button>
      </div>
  </Box>
    </Container>
  </>
  )
}

export default AddItem