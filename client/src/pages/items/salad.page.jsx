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
  create('s1','Autowiz',7500,5,2),
  create('s2','Matplotlib',7500,5,2),
  create('s3','PHP+Laravel',20000,20,2),
  create('s4','MongoDB',10000,15,2),
  create('s5','MySQL',10000,20,2),
  create('s6','PostgreSQL',10000,25,2),
  create('s7','Retrofit',5000,5,2),
  create('s8','Volley',5000,10,2),
];

const Salad = ({ handleOption }) => {
  //const items = useSelector((store) => store.item.salad);
  return <ListOfItems list={items} name="Salad" click={handleOption} />;
};

export default Salad;
