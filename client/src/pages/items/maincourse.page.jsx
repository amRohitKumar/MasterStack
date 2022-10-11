import React from 'react';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Maincourse = ({ handleOption }) => {
  const items = useSelector((store) => store.item.maincourse);
  return <ListOfItems list={items} name="Main Course" click={handleOption} />;
};

export default Maincourse;
