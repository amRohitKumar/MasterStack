import React from 'react'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Appetizer = ({handleOption}) => {
    const items = useSelector(store => store.item.appetizer);
  return (
    <>
    <Button variant="contained" onClick={()=>handleOption(0)}>Back</Button>
     <div>Appetizer</div>
     <ListOfItems list={items}/>
    </>
   
  )
}

export default Appetizer