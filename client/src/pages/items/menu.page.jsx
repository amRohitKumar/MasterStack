import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const list = [
    {
        name:  "Appetizer",
        description: "Yummy",
        image: "https://m.economictimes.com/thumb/msid-89885004,width-1200,height-900,resizemode-4,imgsize-137412/healthy-food_think.jpg",
    },
    {
        name:  "Salad",
        description: "Yummy",
        image: "https://m.economictimes.com/thumb/msid-89885004,width-1200,height-900,resizemode-4,imgsize-137412/healthy-food_think.jpg",
    },
    {
        name:  "Main Course",
        description: "Yummy",
        image: "https://m.economictimes.com/thumb/msid-89885004,width-1200,height-900,resizemode-4,imgsize-137412/healthy-food_think.jpg",
    },
    {
        name:  "Dessert",
        description: "Yummy",
        image: "https://m.economictimes.com/thumb/msid-89885004,width-1200,height-900,resizemode-4,imgsize-137412/healthy-food_think.jpg",
    },
];

const Menu = ({handleOption}) => {
  return (
    <>  
    <div>Menu</div>
    <Box sx={{ flexGrow: 1 }}>
    <Grid contianer spacing={2}>

  
    {list.map((item,index)=><Grid item xs={4}>

        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>handleOption(index+1)}>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>)}
    </Grid>
    </Box>
    </>
  
  )
}

export default Menu