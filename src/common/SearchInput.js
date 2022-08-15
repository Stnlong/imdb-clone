import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

const SearchInput = ({ value, onChange, onSubmit}) => {
  return (
    <FormControl fullWidth onSubmit={onSubmit}>
      <Paper
        component="form"
        elevation={0} 
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%', ml: '25%' }}
      >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Movies"
            inputProps={{ 'aria-label': 'search movies' }} // attributes applied to the input
            value={value}
            onChange={onChange}
        />
        <IconButton sx={{ p: '10px' }} aria-label="search" type="submit">
            <SearchIcon />
        </IconButton>
      </Paper>
    </FormControl>
  )
}

export default SearchInput