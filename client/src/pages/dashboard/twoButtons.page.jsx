import React from 'react'
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
const Color = 'red'
const ColorButton = styled(Button)(() => ({
  textTransform:'none',
  backgroundColor: Color,
  '&:hover': {
    backgroundColor: Color,
  },
}));
const TwoButtons = ({first, second}) => {
  return (
    <div style={{marginBottom:'10px'}}>
    <ColorButton variant="contained" sx={{margin:"0px 5px"}}>{first}</ColorButton>
    <Button variant="contained" sx={{textTransform:'none'}}>{second}</Button>
    </div>
  )
}

export default TwoButtons