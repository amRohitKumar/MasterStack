import React from 'react'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Salad = ({handleOption}) => {
    const items = useSelector(store => store.item.salad);
  return (
    <>
    <Button variant="contained" onClick={()=>handleOption(0)}>Back</Button>
    <div>Salad</div>
    <ListOfItems list={items}/>
    </>
    
  )
}

export default Salad