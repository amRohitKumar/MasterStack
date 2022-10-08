import React from 'react'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Dessert = ({handleOption}) => {
    const items = useSelector(store => store.item.dessert);
  return (
    <>
    <Button variant="contained" onClick={()=>handleOption(0)}>Back</Button>
    <div>Dessert</div>
    <ListOfItems list={items}/>
    </>
   
  )
}

export default Dessert