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
  create('d1','Seaborn',5000,5,4),
  create('d2','Hugging Face',12500,20,4),
  create('d3','Cloudinary',7500,5,4),
  create('d4','EJS',5000,5,4),
  create('d5','PUG',5000,10,4),
  create('d6','Handle Bars',5000,7,4),
  create('d7','Glide',5000,5,4),
  create('d8','Picasso',5000,5,4),
  create('d9','MapBox',7500,5,4),
  create('d10','Exoplayer',7500,5,4),
];

const Dessert = ({ handleOption }) => {
  //const items = useSelector((store) => store.item.dessert);
  return <ListOfItems list={items} name="Dessert" click={handleOption} />;
};

export default Dessert;
