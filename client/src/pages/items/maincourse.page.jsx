import React from 'react'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Maincourse = ({handleOption}) => {
    const items = useSelector(store => store.item.maincourse);
  return (
    <>
    <Button variant="contained" onClick={()=>handleOption(0)}>Back</Button>
    <div>Maincourse</div>
    <ListOfItems list={items}/>
    </>
    
  )
}

export default Maincourse