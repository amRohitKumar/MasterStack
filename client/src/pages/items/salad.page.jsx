import React from 'react';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Salad = ({ handleOption }) => {
  const items = useSelector((store) => store.item.salad);
  return <ListOfItems list={items} name="Salad" click={handleOption} />;
};

export default Salad;
