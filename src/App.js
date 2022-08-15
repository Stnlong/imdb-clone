import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/ducks/user";
import { getMovies } from "./redux/ducks/movies";

import SearchInput from "./common/SearchInput";
import MovieCard from './components/MovieCard';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleGetMovies = (event) => {
        event.preventDefault();
        dispatch(getMovies(searchTerm));
    }

    // empty array because is the dependency array, any vars passed in will trigger the useEffect
    // since it's empty it will only run once
    // will run every time the component is loaded
    useEffect(() => {
        dispatch(getUser());
        dispatch(getMovies('Heat')); // no way to get a recommended list so we'll just search for Heat
    }, []);

    const user = useSelector((state) => state.user.user);
    const movies = useSelector((state) => state.movies.movies);
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    {user && (
                        <>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hello {user.firstName}
                        </Typography>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Totally Not IMDB
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <SearchInput 
                                value={searchTerm}
                                onChange={handleChange}
                                onSubmit={handleGetMovies}
                            />
                        </Stack>
                    </Container>
                </Box>
                <Container maxWidth="md">
                {/* End hero unit */}
                    <Grid container spacing={4}>
                        {movies?.length > 0
                            ? (
                                movies.map((movie) => (
                                    <MovieCard movie={movie}/>
                                ))
                            ) : (
                            <div>
                                <h2>No movies found</h2>
                            </div>
                        )}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Copyright blah blah blah
                </Typography>
            </Box>
        </>
    );
}

export default App;