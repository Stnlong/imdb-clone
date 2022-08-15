import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const MovieCard = ({ movie }) => {
  return (
    <Grid item key={movie} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
              component="img"
              image={movie.Poster !== 'N/A' ? movie.Poster : ''}
              alt={movie.Title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.Title}
              </Typography>
              <Typography>
                {movie.Type}
              </Typography>
          </CardContent>
          <CardActions>
              <Button size="small">View</Button>
          </CardActions>
        </Card>
    </Grid>
  )
}

export default MovieCard