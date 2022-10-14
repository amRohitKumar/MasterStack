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
  create('a1','Scikitlearn',10000,5,1),
  create('a2','Pandas',7500,5,1),
  create('a3','Django',20000,20,1),
  create('a4','Flask',20000,15,1),
  create('a5','GraphQL',5000,5,1),
  create('a6','Firebase',10000,10,1),
  create('a7','Jetpack Compose',10000,25,1),
  create('a8','Room Database',7500,5,1),
  create('a9','SQFlite',7500,5,1),
];

const Appetizer = ({ handleOption }) => {
  //const itemss = useSelector((store) => store.item.appetizer);
  return <ListOfItems list={items} name="Appetizer" click={handleOption} />;
};

export default Appetizer;
