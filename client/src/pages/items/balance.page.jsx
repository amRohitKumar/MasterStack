import React from 'react'
import { useSelector } from 'react-redux';


const Balance = () => {
  const user = useSelector((store) => store.user.user);

  return (
    <div style={{ fontSize: '1.5rem' }}>
      <b>Balance:</b> {user.amount}
    </div>
  );
}

export default Balance