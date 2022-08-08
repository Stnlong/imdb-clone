import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ value, onChange, onClick }) => {
  return (
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
        onChange={(e) => {
          e.stopPropagation();
          onChange(e.target.value)}
        }
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={e => {
        e.stopPropagation();
        onClick(value);
      }}>
        <SearchIcon />
      </IconButton>
  </Paper>
  )
}

export default SearchInput