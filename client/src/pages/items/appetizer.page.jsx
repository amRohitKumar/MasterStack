import React from 'react';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Appetizer = ({ handleOption }) => {
  const items = useSelector((store) => store.item.appetizer);
  return <ListOfItems list={items} name="Appetizer" click={handleOption} />;
};

export default Appetizer;
