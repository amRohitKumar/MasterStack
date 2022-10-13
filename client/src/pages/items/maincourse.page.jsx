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
  create('m1','Node JS',30000,5,3),
  create('m2','React JS',30000,5,3),
];

const Maincourse = ({ handleOption }) => {
 // const items = useSelector((store) => store.item.maincourse);
  return <ListOfItems list={items} name="Main Course" click={handleOption} />;
};

export default Maincourse;
