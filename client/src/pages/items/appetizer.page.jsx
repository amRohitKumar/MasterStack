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
  create('a1','mongodb',70000,5,1),
  create('a2','mariadb',40000,15,1),
];

const Appetizer = ({ handleOption }) => {
  //const itemss = useSelector((store) => store.item.appetizer);
  return <ListOfItems list={items} name="Appetizer" click={handleOption} />;
};

export default Appetizer;
