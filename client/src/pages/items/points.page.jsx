import React from 'react';
import { useSelector } from 'react-redux';

const Points = () => {
  const user = useSelector((store) => store.user.user);

  return (
    <div style={{ fontSize: '1.5rem', fontFamily:'consolas' }}>
      <b>Points:</b> {user.points}
    </div>
  );
};

export default Points;
