import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Category.sass';

function Category(props) {
  const { id, hdThumbnailUrl, name } = props;

  return (
    <div className='category' id={id}>
      <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardMedia
            className='category__img'
            component='img'
            height='450'
            image={hdThumbnailUrl}
            alt='green iguana'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              className='category__name'
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <button className='category__btn'>Показать товары категории</button>
      </Card>
    </div>
  );
}

export default Category;
