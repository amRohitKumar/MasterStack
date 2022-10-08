import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Timer } from "./timer.page";
const Items = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
   //const amount = useSelector(store => store.user.user.points);
   console.log(1);
    return (
    <>
    <Timer/>
    {
   <><div>ITEMS PAGE TO BUY STACKS</div>
    </>}
    </>)
};

export default Items;