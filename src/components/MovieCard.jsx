import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ minWidth: 200, mt: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {movie.Year}
        </Typography>
        <Typography variant="h5" component="div">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : ''} alt={movie.Title} />
        </Typography>
        <Typography variant="body2">
          {movie.Title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard
