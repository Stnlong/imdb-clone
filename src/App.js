import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/ducks/user";
import { getMovies } from "./redux/ducks/movies";

import SearchInput from "./common/SearchInput";
import MovieCard from './MovieCard';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
    const dispatch = useDispatch();

    // Local state 
    const [searchTerm, setSearchTerm] = useState("");
    
    // const [movies, setMovies] = useState([]);
    // get movies without redux & saga
    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     console.log(data);
    //     setMovies(data.Search);
    // }

    // NYI. use with login/logout button
    // const handleGetUser = () => {
    //     dispatch(getUser());
    // }

    const handleGetMovies = (title) => {
        dispatch(getMovies(title));
    }

    // empty array because is the dependency array, any vars passed in will trigger the useEffect
    // since it's empty it will only run once
    // will run every time the component is loaded
    useEffect(() => {
        dispatch(getUser());
    }, []);

    const user = useSelector((state) => state.user.user);
    const movies = useSelector((state) => state.movies.movies);
    return (
        <>
            <Box sx={{
                bgcolor: 'black',
                pt: 8,
                pb: 6,
            }}>
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="white"
                        gutterBottom
                    >
                        Totally Not IMDB
                    </Typography>
                    <SearchInput 
                        value={searchTerm}
                        onChange={setSearchTerm}
                        onClick={handleGetMovies}
                    />
                </Container>
                <Box sx={{ flexGrow: 1, mx: 1 }}>
                    {movies?.length > 0
                        ? (
                            <Grid container spacing={1} >
                            {movies.map((movie, index) => (
                                <Grid item key={index}>
                                    <MovieCard movie={movie}/>
                                </Grid>
                            ))

                            }
                            </Grid>
                        ) : (
                        <div>
                            <h2>No movies found</h2>
                        </div>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default App;