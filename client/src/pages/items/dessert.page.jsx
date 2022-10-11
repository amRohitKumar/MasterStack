import React from 'react';
import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const Dessert = ({ handleOption }) => {
  const items = useSelector((store) => store.item.dessert);
  return <ListOfItems list={items} name="Dessert" click={handleOption} />;
};

export default Dessert;
