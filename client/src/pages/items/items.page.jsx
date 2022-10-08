import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Appetizer from "./appetizer.page";
import Dessert from "./dessert.page";
import Maincourse from "./maincourse.page";
import Menu from "./menu.page";
import Salad from "./salad.page";
import Stacks from "./stacks.page";
import { Timer } from "./timer.page";
const Items = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const amount = useSelector(store => store.user.user.points);
  console.log(1);
  const [option, setOption] = useState(0);
  const handleOption = (val) => {
    setOption(val);
  };
  return (
    <>
      <Timer />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {option === 0 && <Menu handleOption={handleOption} />}
            {option === 1 && <Appetizer handleOption={handleOption} />}
            {option === 2 && <Salad handleOption={handleOption} />}
            {option === 3 && <Maincourse handleOption={handleOption} />}
            {option === 4 && <Dessert handleOption={handleOption} />}
          </Grid>
          <Grid item xs={4}>
            <Stacks/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Items;
