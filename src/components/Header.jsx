import React from 'react';
import { Typography } from '@material-ui/core';

const Header = () => {
  return (
    <header>
      <Typography variant='h3'>
        Bike Safe 🚲🔒
        </Typography>
      <Typography variant='subtitle1'>
        A global database of cycle related incidents to be searched by location.
        </Typography>
    </header>
  );
};

export default Header;