import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core'

const ItemCard = ({ incident }) => {
  const { title, description, address } = incident;
  return (
    <Card className="ItemCard">
      <CardContent>
        <Typography variant='h6'>{title}</Typography>
        -
        <Typography variant='subtitle2'>{address}</Typography>
        -
        <Typography variant='subtitle2'>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;