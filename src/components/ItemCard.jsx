import React from 'react';
import { Typography } from '@material-ui/core'

const ItemCard = ({ incident }) => {
  const { title, description, address } = incident;
  console.log(incident)
  return (
    <>
      <Typography variant='h5'>hello {title}</Typography>
      <Typography variant='subtitle-1'> hello {description}</Typography>
      <Typography variant='h5'>hello {address}</Typography>
    </>
  );
};

export default ItemCard;