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
  create('m1','Pytorch',25000,25,3),
  create('m2','Tensorflow/Keras',25000,20,3),
  create('m3','React JS',15000,10,3),
  create('m4','Angular JS',12500,25,3),
  create('m5','Next JS',12500,20,3),
  create('m6','NodeJS+Express',25000,10,3),
  create('m7','Flutter',15000,20,3),
  create('m8','React Native',15000,15,3),
  create('m9','Android(Kotlin+XML)',15000,15,3),
  create('m10','Android(Java+XML)',15000,10,3),
];

const Maincourse = ({ handleOption }) => {
 // const items = useSelector((store) => store.item.maincourse);
  return <ListOfItems list={items} name="Main Course" click={handleOption} />;
};

export default Maincourse;
