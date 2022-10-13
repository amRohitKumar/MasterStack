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
  create('d1','MapBox API',10000,5,4),
  create('d2','MapmyIndia API',10000,15,4),
];

const Dessert = ({ handleOption }) => {
  //const items = useSelector((store) => store.item.dessert);
  return <ListOfItems list={items} name="Dessert" click={handleOption} />;
};

export default Dessert;
