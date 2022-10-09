import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../features/user/userSlice'

const Stacks = () => {
  
  const user = useSelector(store => store.user.user)
  const dispatch = useDispatch();
  const handleRemove = (itemId) =>{
        
       dispatch(removeItem(itemId));
  }
  return (
    <>

    <div>Stacks</div>
    <div>Balance: {user.amount}</div>
    <div>Points: {user.points}</div>
    {
        user.items.map((item)=><li key={item.id}>
        {item.name} {item.cost} {item.points} 
        <Button onClick={()=>handleRemove(item)}>Remove</Button>
        </li>)
    }
    </>
    
  )
}

export default Stacks