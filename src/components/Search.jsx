import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

const Search = () => {
  return (
    <div className="search">
      <Typography variant="h5">
        Find a bike near:
      </Typography>
      <TextField label="Search" variant="outlined" />
      <Button variant='contained'>
        Go
      </Button>
    </div>
  );
};

export default Search;