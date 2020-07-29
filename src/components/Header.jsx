import React from 'react';
import { Typography } from '@material-ui/core';

const Header = () => {
  return (
    <header>
      <Typography variant='h3'>
        TFL Bike Points
        </Typography>
      <Typography variant='subtitle1'>
        A database of TFL Bike Points around London with status information.
        </Typography>
    </header>
  );
};

export default Header;