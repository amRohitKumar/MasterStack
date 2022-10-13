import React from 'react';
//import { useSelector } from 'react-redux';
import ListOfItems from './listOfItems.page';
const create= (id, name, cost, points, parent) => {
  return {
    id,
    name,
    cost,
    points,
    parent
  }
};

const items = [
  create('s1','HTML',20000,5,2),
  create('s2','CSS',20000,5,2),
];

const Salad = ({ handleOption }) => {
  //const items = useSelector((store) => store.item.salad);
  return <ListOfItems list={items} name="Salad" click={handleOption} />;
};

export default Salad;
