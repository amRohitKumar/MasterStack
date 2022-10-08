import React from 'react'
import { useSelector } from 'react-redux'

const Stacks = () => {
  
  const user = useSelector(store => store.user.user)
  return (
    <>

    <div>Stacks</div>
    <div>Balance: {user.amount}</div>
    <div>Points: {user.points}</div>
    {
        user.items.map((item)=><>
        
        </>)
    }
    </>
    
  )
}

export default Stacks