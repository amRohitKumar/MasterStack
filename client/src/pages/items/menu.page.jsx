import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import appetizer from '../../assets/appetizer.jpg';
import salad from '../../assets/fresh-salad.svg';
import maincourse from '../../assets/main-course.jpg';
import dessert from '../../assets/cartoon-dessert.svg';
const list = [
  {
    id: 1,
    name: 'Appetizer',
    description: 'Start the perfect recipe with the perfect ingredient.',
    image:appetizer,
  },
  {
    id: 2,
    name: 'Salad',
    description: 'I lost some weight once, but I found it again in the fridge.',
    image: salad,
  },
  {
    id: 3,
    name: 'Main Course',
    description: 'Good food choices are good investments',
    image:maincourse,
  },
  {
    id: 4,
    name: 'Dessert',
    description: 'Stressed? Desserts will reverse it for you',
    image: dessert,
  },
];

const Menu = ({ handleOption }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {list.map((item, index) => (
            <Grid item xs={6} key={item.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={() => handleOption(item.id)}>
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
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Menu;
