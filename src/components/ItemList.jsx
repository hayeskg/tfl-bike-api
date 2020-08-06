import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ incidents, location }) => {
  return (
    <div className="ItemList">
      {incidents.map(incident => {
        return (
          <ItemCard incident={incident} key={incident.id} />
        )
      })}
    </div>
  );
};

export default ItemList;